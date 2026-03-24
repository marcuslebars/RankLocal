import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// Vite exposes env vars via import.meta.env (VITE_ prefix required)
// Set VITE_STRIPE_CHECKOUT_URL in your .env file or Railway environment variables
const STRIPE_CHECKOUT_URL =
  import.meta.env.VITE_STRIPE_CHECKOUT_URL || "";

const Checkout = () => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (!STRIPE_CHECKOUT_URL) return; // No URL configured — stay on page

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = STRIPE_CHECKOUT_URL;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // If no Stripe URL is configured, show a placeholder checkout page
  if (!STRIPE_CHECKOUT_URL) {
    return (
      <main className="min-h-screen bg-dark-section flex items-center justify-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg w-full text-center"
        >
          <div className="rounded-3xl bg-card border-2 border-primary/20 p-10 md:p-14">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} className="text-primary" />
            </div>
            <h1 className="font-display font-extrabold text-2xl md:text-3xl mb-3 text-foreground">
              Local Launch Kit
            </h1>
            <div className="mb-6">
              <span className="font-display font-extrabold text-5xl text-primary">$997</span>
              <p className="text-muted-foreground text-sm mt-1">One-time payment · No contracts</p>
            </div>
            <ul className="text-left space-y-3 mb-8">
              {[
                "Full Google Business Profile optimization",
                "30–50 local citation submissions",
                "Keyword targeting & research",
                "Full local SEO audit",
                "Custom growth strategy",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <ShieldCheck size={16} className="text-primary mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="rounded-xl bg-primary/5 border border-primary/20 p-4 mb-8 text-sm text-muted-foreground">
              <strong className="text-foreground">Stripe checkout coming soon.</strong> To purchase now, contact us directly at{" "}
              <a href="mailto:hello@ranklocal.ca" className="text-primary font-semibold hover:underline">
                hello@ranklocal.ca
              </a>{" "}
              or book a call below.
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="lg" className="flex-1" asChild>
                <Link to="/contact">Contact Us <ArrowRight size={16} /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="flex-1" asChild>
                <Link to="/local-launch-kit">Learn More</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </main>
    );
  }

  // Stripe URL is configured — redirect with countdown
  return (
    <main className="min-h-screen bg-dark-section flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        </div>

        <h1 className="font-display font-extrabold text-2xl md:text-3xl mb-3 text-dark-foreground">
          Redirecting to Checkout
        </h1>
        <p className="text-dark-foreground/60 text-base leading-relaxed mb-6">
          You're being securely redirected to complete your purchase of the{" "}
          <strong className="text-dark-foreground">Local Launch Kit ($997)</strong>.
        </p>

        <p className="text-primary font-semibold mb-8">
          Redirecting in {countdown}...
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-dark-foreground/50 mb-8">
          <span className="flex items-center gap-2 justify-center"><ShieldCheck size={14} className="text-primary" /> Secure payment</span>
          <span className="flex items-center gap-2 justify-center"><Zap size={14} className="text-primary" /> Instant access</span>
          <span className="flex items-center gap-2 justify-center"><Clock size={14} className="text-primary" /> Starts within 24h</span>
        </div>

        <p className="text-dark-foreground/50 text-sm">
          Not redirected?{" "}
          <a
            href={STRIPE_CHECKOUT_URL}
            className="text-primary font-semibold hover:underline"
          >
            Click here to proceed
          </a>
        </p>
      </motion.div>
    </main>
  );
};

export default Checkout;
