import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { Search, BarChart3, Globe, Megaphone, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const servicesData = [
  {
    icon: Search,
    title: "Local SEO",
    tagline: "Be the first result your customers see.",
    desc: "We optimize your Google Business Profile, build local citations, and create content that ranks — so when someone searches for what you offer, they find you first.",
    includes: ["Google Business Profile optimization", "Local keyword strategy & content", "Citation building & cleanup", "Review generation strategy", "Monthly ranking reports & insights"],
    bestFor: "Service businesses, retail, restaurants, clinics — anyone who serves a local market.",
    outcome: "Higher search visibility, more calls, more foot traffic.",
  },
  {
    icon: Megaphone,
    title: "Digital Advertising",
    tagline: "Turn ad spend into actual leads.",
    desc: "We run targeted campaigns on Google and Meta platforms that put your business in front of the right people at the right time — with clear ROI tracking on every dollar.",
    includes: ["Google Ads (Search + Local)", "Meta Ads (Facebook + Instagram)", "Landing page creation", "Conversion tracking setup", "Weekly performance optimization"],
    bestFor: "Businesses ready to scale with paid traffic and want measurable, lead-generating campaigns.",
    outcome: "More qualified leads, lower cost per acquisition, clear ROI.",
  },
  {
    icon: Globe,
    title: "Web Design",
    tagline: "A website that works as hard as you do.",
    desc: "We design fast, modern, mobile-first websites built to convert visitors into customers. No bloated templates — just clean, strategic design that builds trust instantly.",
    includes: ["Custom responsive design", "Conversion-optimized layouts", "SEO-ready architecture", "Speed & performance optimization", "Contact forms & strategic CTAs"],
    bestFor: "Businesses without a website, or with an outdated site that doesn't represent their quality.",
    outcome: "A credible online presence that generates leads 24/7.",
  },
  {
    icon: BarChart3,
    title: "Social Media",
    tagline: "Stay visible. Stay relevant. Stay top of mind.",
    desc: "We develop and manage your social media strategy with consistent, on-brand content that grows your audience and drives engagement — without you having to think about it.",
    includes: ["Content strategy & calendar", "Post creation & scheduling", "Community management", "Monthly analytics & reporting", "Platform-specific optimization"],
    bestFor: "Brands that know they need to be on social but don't have the time or expertise to do it well.",
    outcome: "Stronger brand presence, engaged audience, inbound inquiries.",
  },
];

const Services = () => (
  <main>
    {/* Hero */}
    <section className="bg-dark-section relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.4'/%3E%3C/svg%3E\")" }} />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary tracking-wide">Our Services</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6">Everything your local<br />business needs to grow.</h1>
          <p className="text-dark-foreground/55 max-w-lg text-lg leading-relaxed">From getting found on Google to building a brand that converts — we handle the full growth stack so you can focus on running your business.</p>
        </motion.div>
      </div>
    </section>

    {/* Services */}
    {servicesData.map((service, i) => {
      const isDark = i % 2 !== 0;
      return (
        <SectionWrapper key={service.title} dark={isDark}>
          <div className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-start ${i % 2 !== 0 ? '' : ''}`}>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className={i % 2 !== 0 ? 'lg:order-2' : ''}>
              <motion.div variants={fadeUp} className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <service.icon size={30} className="text-primary" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display font-extrabold text-3xl md:text-4xl mb-3">{service.title}</motion.h2>
              <motion.p variants={fadeUp} className="text-primary font-semibold text-lg mb-5">{service.tagline}</motion.p>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-8 text-base">{service.desc}</motion.p>
              <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className={`rounded-2xl p-5 ${isDark ? 'glass-card' : 'bg-secondary/50 border border-border/50'}`}>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-2">Best For</p>
                  <p className="text-sm leading-relaxed">{service.bestFor}</p>
                </div>
                <div className={`rounded-2xl p-5 border-2 border-primary/20 bg-primary/[0.03]`}>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-2">Outcome</p>
                  <p className="text-sm font-medium leading-relaxed">{service.outcome}</p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className={i % 2 !== 0 ? 'lg:order-1' : ''}>
              <motion.div variants={fadeUp} className={`rounded-2xl p-8 ${isDark ? 'glass-card' : 'bg-card border border-border'}`}>
                <p className="font-display font-semibold text-sm mb-6 uppercase tracking-[0.15em] text-muted-foreground">What's Included</p>
                <ul className="space-y-5">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} className={`mt-6 rounded-2xl p-6 border-2 border-primary/20 bg-primary/[0.03]`}>
                <p className="font-display font-semibold text-sm mb-2">Start with the Local Launch Kit</p>
                <p className="text-xs text-muted-foreground mb-4">The fastest way to get your local presence built right. One-time investment, proven system.</p>
                <Button variant="hero" size="sm" asChild>
                  <Link to="/local-launch-kit">Get Started <ArrowRight size={14} /></Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </SectionWrapper>
      );
    })}

    {/* CTA */}
    <section className="bg-light-section py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-dark rounded-3xl p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.06] rounded-full blur-[120px]" />
          <div className="relative z-10">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-5 text-dark-foreground">Ready to Get Started?</h2>
            <p className="text-dark-foreground/50 max-w-lg mx-auto mb-10 text-base leading-relaxed">
              Start with the Local Launch Kit — our proven system for building local search visibility and generating consistent leads.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/local-launch-kit">Get Started <ArrowRight size={16} /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/contact">Book a Strategy Call</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </main>
);

export default Services;
