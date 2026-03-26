import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';
import { JSONFilePreset } from 'lowdb/node';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, "dist");
const port = process.env.PORT || 3000;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

const PACKAGE_LABELS = {
  local_launch_basic: 'Local Launch Kit — Basic',
  local_launch_pro: 'Local Launch Kit — Pro',
  website_starter: 'Website Package — Starter',
  website_growth: 'Website Package — Growth',
  website_pro: 'Website Package — Pro',
  automation_starter: 'Automation Setup — Starter',
  automation_growth: 'Automation Setup — Growth',
  automation_scale: 'Automation Setup — Scale',
};

const PACKAGE_INTERNAL_NAMES = {
  local_launch_basic: 'Local Launch Kit (Basic)',
  local_launch_pro: 'Local Launch Kit (Pro)',
  website_starter: 'Website Package (Starter)',
  website_growth: 'Website Package (Growth)',
  website_pro: 'Website Package (Pro)',
  automation_starter: 'Automation Setup (Starter)',
  automation_growth: 'Automation Setup (Growth)',
  automation_scale: 'Automation Setup (Scale)',
};

function getPackageLabel(productKey) {
  return PACKAGE_LABELS[productKey] || PACKAGE_LABELS.local_launch_pro;
}

function getPackageInternalName(productKey) {
  return PACKAGE_INTERNAL_NAMES[productKey] || 'Unknown Package';
}

function getSuccessUrl(productKey) {
  return `${SITE_URL}/onboarding?session_id={CHECKOUT_SESSION_ID}&package=${productKey}`;
}

// Database setup
const defaultData = { orders: [], processedEvents: [], tasks: [] };
const db = await JSONFilePreset('db.json', defaultData);

// Middleware
app.use(cors());

// Webhook endpoint needs raw body for signature verification
app.post('/api/webhook', bodyParser.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Idempotency check
  const alreadyProcessed = db.data.processedEvents.find(e => e.stripe_event_id === event.id);
  if (alreadyProcessed) {
    return res.json({ received: true, already_processed: true });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    await handleSuccessfulCheckout(session);
  }

  // Record event as processed
  db.data.processedEvents.push({
    stripe_event_id: event.id,
    processed_at: new Date().toISOString()
  });
  await db.write();

  res.json({ received: true });
});

// Regular JSON parsing for other routes
app.use(express.json());

// Create Checkout Session
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { packageKey = 'local_launch_pro' } = req.body;
    const packageLabel = getPackageLabel(packageKey);
    const successUrl = getSuccessUrl(packageKey);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: packageLabel,
              description: `RankLocal ${packageLabel} service package`,
            },
            unit_amount: 99700, // This should be dynamic based on package
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: `${SITE_URL}/local-launch-kit`,
      metadata: {
        product_key: packageKey,
        source: 'ranklocal_site',
        funnel: 'self_serve',
        internal_order_type: packageKey,
      },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

async function handleSuccessfulCheckout(session) {
  console.log('Processing successful checkout for session:', session.id);

  const productKey = session.metadata.product_key || 'local_launch_pro';
  const packageLabel = getPackageLabel(productKey);
  const packageInternalName = getPackageInternalName(productKey);

  const order = {
    id: `ord_${Date.now()}`,
    product_key: productKey,
    product_label: packageLabel,
    stripe_session_id: session.id,
    stripe_payment_intent_id: session.payment_intent,
    customer_email: session.customer_details.email,
    customer_name: session.customer_details.name,
    amount: session.amount_total / 100,
    currency: session.currency,
    payment_status: 'paid',
    onboarding_status: 'pending',
    source: session.metadata.source,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  // 1. Record Order
  db.data.orders.push(order);

  // 2. Create Internal Task
  const task = {
    id: `task_${Date.now()}`,
    title: `Fulfill ${packageInternalName} — ${order.customer_email}`,
    type: 'fulfillment',
    status: 'pending',
    priority: 'high',
    linked_order_id: order.id,
    notes: `Product: ${packageLabel}\nSource: self-serve website\nCustomer: ${order.customer_name}\nEmail: ${order.customer_email}\nStripe Session: ${order.stripe_session_id}\nNext Action: Wait for onboarding form`,
    created_at: new Date().toISOString(),
  };
  db.data.tasks.push(task);
  await db.write();

  // 3. Send Confirmation Email
  try {
    await sendConfirmationEmail(order, packageLabel);
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    // Non-blocking error
  }
}

async function sendConfirmationEmail(order, packageLabel) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const onboardingUrl = `${SITE_URL}/onboarding?package=${order.product_key}`;

  const mailOptions = {
    from: process.env.EMAIL_FROM_ADDRESS || 'RankLocal <growth@ranklocal.ca>',
    to: order.customer_email,
    subject: `You're In — Let's Launch Your ${packageLabel}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Welcome to RankLocal!</h2>
        <p>Thank you for purchasing the <strong>${packageLabel}</strong>. We've received your payment of $${order.amount}.</p>
        <p>The next step is to complete your onboarding so we can begin building your growth system.</p>
        <div style="margin: 30px 0;">
          <a href="${onboardingUrl}" 
             style="background-color: #00FFFF; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">
            Complete Your Onboarding
          </a>
        </div>
        <p>Once you submit the onboarding form, our team will begin the fulfillment process immediately.</p>
        <p>Let's grow,</p>
        <p>The RankLocal Team</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
  console.log('Confirmation email sent to:', order.customer_email);
}

// Serve static files from the Vite build
app.use(express.static(distDir));

// Handle SPA routing - serve index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`RankLocal server listening on port ${port}`);
});
