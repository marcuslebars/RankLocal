import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { Search, BarChart3, Globe, Megaphone, ArrowRight, CheckCircle2 } from "lucide-react";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

const servicesData = [
  {
    icon: Search,
    title: "Local SEO",
    tagline: "Be the first result your customers see.",
    desc: "We optimize your Google Business Profile, build local citations, and create content that ranks — so when someone searches for what you offer, they find you first.",
    includes: ["Google Business Profile optimization", "Local keyword strategy", "Citation building & cleanup", "Review generation strategy", "Monthly ranking reports"],
    bestFor: "Service businesses, retail, restaurants, clinics — anyone who serves a local market.",
    outcome: "Higher search visibility, more calls, more foot traffic."
  },
  {
    icon: Megaphone,
    title: "Digital Advertising",
    tagline: "Turn ad spend into actual leads.",
    desc: "We run targeted campaigns on Google and Meta platforms that put your business in front of the right people at the right time — with clear ROI tracking on every dollar.",
    includes: ["Google Ads (Search + Local)", "Meta Ads (Facebook + Instagram)", "Landing page creation", "Conversion tracking setup", "Weekly performance optimization"],
    bestFor: "Businesses ready to scale with paid traffic and want measurable, lead-generating campaigns.",
    outcome: "More qualified leads, lower cost per acquisition, clear ROI."
  },
  {
    icon: Globe,
    title: "Web Design",
    tagline: "A website that works as hard as you do.",
    desc: "We design fast, modern, mobile-first websites built to convert visitors into customers. No bloated templates — just clean, strategic design that builds trust instantly.",
    includes: ["Custom responsive design", "Conversion-optimized layouts", "SEO-ready architecture", "Speed optimization", "Contact forms & CTAs"],
    bestFor: "Businesses without a website, or with an outdated site that doesn't represent their quality.",
    outcome: "A credible online presence that generates leads 24/7."
  },
  {
    icon: BarChart3,
    title: "Social Media",
    tagline: "Stay visible. Stay relevant. Stay top of mind.",
    desc: "We develop and manage your social media strategy with consistent, on-brand content that grows your audience and drives engagement — without you having to think about it.",
    includes: ["Content strategy & calendar", "Post creation & scheduling", "Community management", "Monthly analytics & reporting", "Platform-specific optimization"],
    bestFor: "Brands that know they need to be on social but don't have the time or expertise to do it well.",
    outcome: "Stronger brand presence, engaged audience, inbound inquiries."
  },
];

const Services = () => (
  <main>
    {/* Hero */}
    <section className="bg-dark-section pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Our Services</p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4">Everything your local<br />business needs to grow.</h1>
          <p className="text-dark-foreground/60 max-w-lg text-lg">From getting found on Google to building a brand that converts — we handle the full growth stack.</p>
        </motion.div>
      </div>
    </section>

    {/* Services */}
    {servicesData.map((service, i) => (
      <SectionWrapper key={service.title} dark={i % 2 !== 0}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <service.icon size={28} className="text-primary" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display font-extrabold text-3xl mb-2">{service.title}</motion.h2>
            <motion.p variants={fadeUp} className="text-primary font-medium mb-4">{service.tagline}</motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-6">{service.desc}</motion.p>
            <motion.div variants={fadeUp} className="mb-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">Best for</p>
              <p className="text-sm">{service.bestFor}</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">Outcome</p>
              <p className="text-sm font-medium text-primary">{service.outcome}</p>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="bg-card rounded-xl p-8 border border-border" style={i % 2 !== 0 ? { borderColor: "hsl(0 0% 20%)" } : {}}>
              <p className="font-display font-semibold text-sm mb-5 uppercase tracking-wider text-muted-foreground">What's Included</p>
              <ul className="space-y-4">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>
    ))}

    {/* CTA */}
    <SectionWrapper dark className="text-center">
      <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-5">
        Not sure which service you need?
      </h2>
      <p className="text-dark-foreground/60 max-w-lg mx-auto mb-8">
        Book a free strategy call. We'll audit your presence and recommend exactly what will move the needle for your business.
      </p>
      <Button variant="hero" size="lg" asChild>
        <Link to="/contact">Book a Strategy Call <ArrowRight size={16} /></Link>
      </Button>
    </SectionWrapper>
  </main>
);

export default Services;
