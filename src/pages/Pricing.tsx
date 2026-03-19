import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MapPin,
  Globe,
  Zap,
  TrendingUp,
  Star,
  PenTool,
  FileText,
  MessageSquare,
  Cog,
} from "lucide-react";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const localLaunchTiers = [
  {
    name: "Basic",
    price: "$497",
    period: "one-time",
    highlighted: false,
    features: [
      "Google Business Profile setup or cleanup",
      "NAP consistency check",
      "Basic citation submissions",
      "Google indexing request",
    ],
  },
  {
    name: "Pro",
    price: "$997",
    period: "one-time",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Full GBP optimization",
      "30–50 citation submissions",
      "Keyword targeting & research",
      "Full local SEO audit",
      "Custom growth strategy",
    ],
  },
];

const websiteTiers = [
  {
    name: "Starter",
    price: "$1,497",
    period: "one-time",
    highlighted: false,
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Basic on-page SEO",
      "Contact form integration",
      "1 round of revisions",
    ],
  },
  {
    name: "Growth",
    price: "$2,497",
    period: "one-time",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Up to 10 pages",
      "Conversion-optimized layout",
      "Full on-page SEO",
      "CRM & booking integrations",
      "Speed optimization",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Pro",
    price: "$3,997",
    period: "one-time",
    highlighted: false,
    features: [
      "Unlimited pages",
      "Custom UI/UX design",
      "Advanced SEO architecture",
      "Full integrations suite",
      "Conversion tracking setup",
      "Priority support & revisions",
    ],
  },
];

const automationTiers = [
  {
    name: "Starter",
    price: "$497",
    period: "one-time",
    highlighted: false,
    features: [
      "1 automation workflow",
      "CRM or form integration",
      "Email notification setup",
      "Basic documentation",
    ],
  },
  {
    name: "Growth",
    price: "$997",
    period: "one-time",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Up to 3 workflows",
      "Multi-tool integrations",
      "Lead routing automation",
      "Follow-up sequences",
      "Dashboard setup",
    ],
  },
  {
    name: "Scale",
    price: "$1,997",
    period: "one-time",
    highlighted: false,
    features: [
      "Unlimited workflows",
      "Custom API integrations",
      "Advanced lead scoring",
      "Full funnel automation",
      "Ongoing support & iteration",
    ],
  },
];

const growthPlans = [
  {
    name: "Starter Growth",
    price: "$697",
    period: "/month",
    highlighted: false,
    features: [
      "GBP management & optimization",
      "Monthly citation building",
      "Basic content updates",
      "Keyword tracking & reporting",
      "Email support",
    ],
  },
  {
    name: "Growth Engine",
    price: "$1,497",
    period: "/month",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter Growth",
      "On-page SEO & content strategy",
      "Google Ads management",
      "Conversion rate optimization",
      "Bi-weekly strategy calls",
      "Dedicated account manager",
    ],
  },
  {
    name: "Local Dominance",
    price: "$3,000",
    period: "/month",
    pricePrefix: "Starting at",
    highlighted: false,
    features: [
      "Everything in Growth Engine",
      "Multi-location management",
      "Full paid media (Google + Meta)",
      "Landing page creation & testing",
      "Advanced analytics & attribution",
      "Weekly strategy calls",
      "Priority support",
    ],
  },
];

const addOns = [
  {
    icon: MapPin,
    title: "Additional Location SEO",
    price: "$297/mo",
    desc: "Expand rankings to additional service areas or locations.",
  },
  {
    icon: PenTool,
    title: "Blog & Content",
    price: "$300–$800/mo",
    desc: "SEO-driven blog posts, guides, and local content.",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    price: "$197–$497",
    desc: "High-converting pages for campaigns or new offers.",
  },
  {
    icon: MessageSquare,
    title: "Review Management",
    price: "$147/mo",
    desc: "Automated review requests, monitoring, and response.",
  },
  {
    icon: Cog,
    title: "Automation Add-Ons",
    price: "$200–$800/mo",
    desc: "Custom workflows, integrations, and process automation.",
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENTS                                                         */
/* ------------------------------------------------------------------ */

interface TierCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
  pricePrefix?: string;
}

const TierCard = ({
  name,
  price,
  period,
  features,
  highlighted,
  badge,
  pricePrefix,
}: TierCardProps) => (
  <motion.div
    variants={fadeUp}
    className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300 ${
      highlighted
        ? "border-2 border-primary bg-primary/[0.04] shadow-lg shadow-primary/5 scale-[1.02]"
        : "border border-border bg-card hover:border-primary/30"
    } card-lift`}
  >
    {badge && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-white text-[11px] font-semibold tracking-wide shadow-md">
          <Star size={11} className="fill-white" />
          {badge}
        </span>
      </div>
    )}
    <div className="mb-5">
      <p className="font-display font-semibold text-sm uppercase tracking-[0.12em] text-muted-foreground mb-3">
        {name}
      </p>
      {pricePrefix && (
        <p className="text-xs text-muted-foreground mb-1">{pricePrefix}</p>
      )}
      <div className="flex items-baseline gap-1">
        <span className="font-display font-extrabold text-3xl">{price}</span>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
    </div>
    <ul className="space-y-3 mb-7 flex-1">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2.5">
          <CheckCircle2
            size={16}
            className={`mt-0.5 shrink-0 ${
              highlighted ? "text-primary" : "text-primary/70"
            }`}
          />
          <span className="text-sm leading-relaxed">{f}</span>
        </li>
      ))}
    </ul>
    <Button
      variant={highlighted ? "hero" : "hero-outline"}
      size="default"
      className="w-full"
      asChild
    >
      <Link to="/contact">
        Get Started <ArrowRight size={14} />
      </Link>
    </Button>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

const Pricing = () => (
  <main>
    {/* ── Hero ── */}
    <section className="bg-dark-section relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-24">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.4'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary tracking-wide">
              Pricing
            </span>
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6">
            Choose Your Growth System
          </h1>
          <p className="text-dark-foreground/55 max-w-lg mx-auto text-lg leading-relaxed mb-10">
            Simple, transparent plans designed to help local businesses get
            found, generate leads, and grow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Book Strategy Call <ArrowRight size={16} />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">Start a Project</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Quick Start: Local Launch Kit ── */}
    <section className="bg-light-section py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin size={20} className="text-primary" />
              </div>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl">
                Local Launch Kit
              </h2>
            </div>
            <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
              Get your local presence set up right from day one. Perfect for
              businesses just getting started with local SEO.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {localLaunchTiers.map((tier) => (
              <TierCard key={tier.name} {...tier} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Quick Start: Website Packages ── */}
    <section className="bg-dark-section py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Globe size={20} className="text-primary" />
              </div>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl">
                Website Packages
              </h2>
            </div>
            <p className="text-dark-foreground/55 max-w-lg mx-auto text-base leading-relaxed">
              Fast, modern websites built to convert visitors into customers.
              SEO-ready from launch.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {websiteTiers.map((tier) => (
              <TierCard key={tier.name} {...tier} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Quick Start: Automation Setup ── */}
    <section className="bg-light-section py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap size={20} className="text-primary" />
              </div>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl">
                Automation Setup
              </h2>
            </div>
            <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
              Eliminate manual busywork. Automate lead capture, follow-ups, and
              operations so nothing falls through the cracks.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {automationTiers.map((tier) => (
              <TierCard key={tier.name} {...tier} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Growth Plans (MRR) ── */}
    <section className="bg-dark-section py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <TrendingUp size={14} className="text-primary" />
              <span className="text-xs font-medium text-primary tracking-wide">
                Monthly Growth Plans
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
              Ongoing Growth, Handled for You
            </h2>
            <p className="text-dark-foreground/55 max-w-xl mx-auto text-base leading-relaxed">
              Consistent marketing execution every month. No guesswork, no
              gaps — just steady growth.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {growthPlans.map((plan) => (
              <TierCard key={plan.name} {...plan} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Add-Ons ── */}
    <section className="bg-light-section py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
              Add-Ons
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
              Bolt on exactly what you need. Mix and match with any plan.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addOns.map((addon) => (
              <motion.div
                key={addon.title}
                variants={fadeUp}
                className="rounded-2xl p-6 border border-border bg-card card-lift transition-all duration-300 hover:border-primary/30"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <addon.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-base mb-1">
                  {addon.title}
                </h3>
                <p className="text-primary font-semibold text-sm mb-2">
                  {addon.price}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {addon.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Final CTA ── */}
    <section className="bg-dark-section py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-card rounded-3xl p-12 md:p-20 text-center overflow-hidden border border-border/50"
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
            }}
          />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.06] rounded-full blur-[120px]" />
          <div className="relative z-10">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-5">
              Not sure what you need?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10 text-base leading-relaxed">
              Book a free strategy call. We'll review your business, identify
              the biggest opportunities, and recommend the right plan for you.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Book Strategy Call <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </main>
);

export default Pricing;
