import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Shield, Zap } from "lucide-react";
import { selectPackageAndRedirect } from "@/config/stripe";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const deliverables = [
  { title: "Google Business Profile Optimization", description: "Fully optimized GBP with verified information, photos, and local authority signals" },
  { title: "Citation Setup", description: "Established across top local directories to build trust and consistency" },
  { title: "Keyword Targeting", description: "Strategic local keyword research and targeting for your service areas" },
  { title: "Local SEO Structure", description: "Website architecture optimized for local search visibility" },
  { title: "Visibility Improvements", description: "Implemented best practices to improve rankings and local presence" },
  { title: "Action Plan", description: "Clear roadmap for ongoing optimization and lead generation" },
];

const outcomes = [
  { title: "Show Up in Local Search", description: "Get found by customers actively searching for your services" },
  { title: "Attract More Customers", description: "Consistent inbound leads from qualified local search traffic" },
  { title: "Build Trust Instantly", description: "Strong local presence signals authority and reliability" },
  { title: "Create Inbound Demand", description: "Stop chasing leads—let them come to you" },
];

const whoItIsFor = [
  "Local service businesses",
  "Businesses not currently ranking",
  "Businesses relying on referrals",
  "Businesses wanting predictable leads",
];

const processSteps = [
  { number: "1", title: "Submit Details", description: "Tell us about your business and service areas" },
  { number: "2", title: "We Optimize & Build", description: "Our team implements the full Local Launch Kit system" },
  { number: "3", title: "You Start Gaining Visibility", description: "Monitor improvements and attract inbound leads" },
];

const LocalLaunchKit = () => (
  <main>
    {/* HERO SECTION */}
    <section className="bg-dark-section relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.4'/%3E%3C/svg%3E\")" }} />
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary tracking-wide uppercase">Local Launch Kit (Pro)</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6">Get Found Locally. Start Generating Leads.</h1>
          <p className="text-dark-foreground/60 text-lg leading-relaxed max-w-2xl mb-10">
            We used this exact system to grow A1 Marine Care to <span className="text-primary font-bold">~$300,000 in its first 7 months</span>. Now we apply it to your business.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" onClick={() => selectPackageAndRedirect("local_launch_pro")}>
              Get Started <ArrowRight size={16} />
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/case-study-a1-marine-care">View Case Study</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* PROOF SECTION */}
    <section className="bg-light-section py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-card border-2 border-primary/20 p-8 lg:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-6">This System Works</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm mb-1">Built in 2025</p>
                    <p className="text-muted-foreground text-sm">First year in business</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm mb-1">~$300,000 in 7 Months</p>
                    <p className="text-muted-foreground text-sm">Revenue generated in first 7 months</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm mb-1">Driven by Local Search</p>
                    <p className="text-muted-foreground text-sm">Dominant rankings created the lead flow</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
              <Button variant="outline" size="lg" onClick={() => selectPackageAndRedirect("local_launch_pro")}>
                Get Started <ArrowRight size={16} />
              </Button>
              </div>
            </div>
            <div className="relative rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 p-8 text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-dark-foreground/70 text-sm leading-relaxed">
                This isn't theory. This is a real business, real results, real revenue. And we can apply the same system to yours.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* WHAT YOU GET */}
    <SectionWrapper dark>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4">What You Get</h2>
          <p className="text-dark-foreground/60 text-lg max-w-2xl">
            The Local Launch Kit (Pro) includes everything needed to establish local dominance and start generating inbound leads.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="glass-card rounded-2xl p-6 lg:p-8 border border-border/10">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
                <h3 className="font-display font-semibold text-lg text-dark-foreground">{item.title}</h3>
              </div>
              <p className="text-dark-foreground/60 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>

    {/* WHAT THIS DOES FOR YOU */}
    <SectionWrapper>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4">What This Does for You</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Beyond the deliverables, here's what you actually get.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {outcomes.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="rounded-2xl bg-card border border-border p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Zap size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>

    {/* WHO THIS IS FOR */}
    <SectionWrapper dark>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-8">Who This Is For</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
          {whoItIsFor.map((item, i) => (
            <div key={i} className="flex gap-3">
              <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <p className="text-dark-foreground/80 text-base">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>

    {/* PROCESS */}
    <SectionWrapper>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Simple steps to get your business ranking and generating leads.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step, i) => (
            <motion.div key={i} variants={fadeUp} className="relative">
              <div className="rounded-2xl bg-card border border-border p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-4">
                  <span className="font-display font-bold text-lg text-primary">{step.number}</span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
              {i < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight size={24} className="text-border" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>

    {/* PRICING */}
    <section className="bg-light-section py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-8">Simple Pricing</h2>
          <div className="rounded-3xl bg-card border-2 border-primary/20 p-12">
            <h3 className="font-display font-bold text-2xl mb-4">Local Launch Kit (Pro)</h3>
            <div className="mb-8">
              <span className="font-display font-extrabold text-5xl text-primary">$997</span>
              <p className="text-muted-foreground text-sm mt-2">One-time investment</p>
            </div>
            <div className="space-y-3 mb-8 text-left">
              <div className="flex gap-3">
                <Shield size={16} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground text-sm">No long-term contracts</p>
              </div>
              <div className="flex gap-3">
                <Shield size={16} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground text-sm">Clear deliverables</p>
              </div>
              <div className="flex gap-3">
                <Shield size={16} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground text-sm">Built on proven system</p>
              </div>
            </div>
            <Button variant="hero" size="lg" className="w-full" onClick={() => selectPackageAndRedirect("local_launch_pro")}>
              Get Started <ArrowRight size={16} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* FINAL CTA */}
    <section className="bg-dark-section py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-primary/5 to-transparent rounded-3xl p-12 md:p-20 text-center overflow-hidden border border-border/10"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.06] rounded-full blur-[120px]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-6 text-dark-foreground">Start Getting Found Today</h2>
            <p className="text-dark-foreground/60 mb-10 text-base leading-relaxed">
              Stop waiting for referrals. Stop losing leads to competitors. Apply the same system that generated ~$300,000 for A1 Marine Care in its first 7 months.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" onClick={() => selectPackageAndRedirect("local_launch_pro")}>
                Get Started <ArrowRight size={16} />
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/case-study-a1-marine-care">View Case Study</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </main>
);

export default LocalLaunchKit;
