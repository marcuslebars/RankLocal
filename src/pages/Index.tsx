import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { Search, BarChart3, Globe, Megaphone, ArrowRight, TrendingUp, MapPin, Users, Star, ChevronRight, Target, Zap, Eye, Award } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

/* ─── Hero ─── */
const Hero = () => (
  <section className="bg-dark-section relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
    {/* Subtle grid */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />
    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MapPin size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary">Local Growth Agency — Toronto, Canada</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-6">
            Get Found.<br />
            Get Leads.<br />
            <span className="text-gradient-orange">Grow Local.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-dark-foreground/60 max-w-md mb-8 leading-relaxed">
            We help small businesses and startups build real traction through Local SEO, digital advertising, modern websites, and strategic social media.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Book a Strategy Call <ArrowRight size={16} /></Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right — Growth Stack */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          {/* Floating cards */}
          <div className="relative h-[420px]">
            {/* GBP card */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 left-4 bg-card rounded-xl p-5 shadow-2xl border border-border/20 w-[280px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Google Business Profile</p>
                  <p className="text-[10px] text-muted-foreground">Your Local Listing</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-primary fill-primary" />)}
                <span className="text-xs text-muted-foreground ml-1">4.9 (127)</span>
              </div>
              <p className="text-xs text-muted-foreground">Open · Directions · Call</p>
            </motion.div>

            {/* Rank badge */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-2xl glow-orange">
              <p className="text-xs font-medium opacity-80">Local Rank</p>
              <p className="font-display font-extrabold text-3xl">#1</p>
              <p className="text-[10px] opacity-70">Google Maps</p>
            </motion.div>

            {/* Chart card */}
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-0 left-0 bg-card rounded-xl p-5 shadow-2xl border border-border/20 w-[300px]">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-medium text-foreground">Leads This Month</p>
                <span className="text-xs font-semibold text-primary">+42%</span>
              </div>
              <div className="flex items-end gap-1 h-16">
                {[35, 42, 38, 55, 48, 62, 58, 72, 68, 85, 78, 95].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-primary/20" style={{ height: `${h}%` }}>
                    <div className="w-full rounded-sm bg-primary" style={{ height: `${Math.min(100, h + 10)}%` }} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Traffic badge */}
            <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} className="absolute bottom-8 right-0 bg-card rounded-xl p-4 shadow-2xl border border-border/20">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Website Traffic</p>
                  <p className="font-display font-bold text-lg text-foreground">+140%</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── Trust Strip ─── */
const TrustStrip = () => (
  <section className="bg-dark-section border-t border-b border-border/5 py-8">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Trusted by local businesses across Canada</p>
        <div className="flex items-center gap-8">
          {[
            { icon: Eye, label: "More Visibility", value: "3x" },
            { icon: TrendingUp, label: "Higher Rankings", value: "Top 3" },
            { icon: Users, label: "Quality Leads", value: "+140%" },
            { icon: Award, label: "Client Retention", value: "96%" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2">
              <stat.icon size={14} className="text-primary" />
              <div>
                <p className="font-display font-bold text-sm">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Services ─── */
const services = [
  { icon: Search, title: "Local SEO", desc: "Rank where it matters. We optimize your presence so local customers find you first on Google Search and Maps.", color: "bg-primary/10" },
  { icon: Megaphone, title: "Digital Advertising", desc: "Targeted campaigns on Google and social platforms that drive real leads — not vanity clicks.", color: "bg-primary/10" },
  { icon: Globe, title: "Web Design", desc: "Fast, modern, conversion-ready websites that build credibility and turn visitors into customers.", color: "bg-primary/10" },
  { icon: BarChart3, title: "Social Media", desc: "Strategic content and management that grows your audience and keeps your brand top of mind.", color: "bg-primary/10" },
];

const ServicesSection = () => (
  <SectionWrapper id="services">
    <div className="text-center mb-14">
      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">What We Do</p>
      <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">Growth Services Built for Local Businesses</h2>
      <p className="text-muted-foreground max-w-lg mx-auto">Every service is designed to increase your visibility, generate leads, and help you build a digital presence that works.</p>
    </div>
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((s) => (
        <motion.div key={s.title} variants={fadeUp} className="bg-card rounded-xl p-6 border border-border card-lift group" style={{ borderTopWidth: "2px", borderTopColor: "hsl(24 100% 45%)" }}>
          <div className={`w-12 h-12 rounded-lg ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
            <s.icon size={22} className="text-primary" />
          </div>
          <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </SectionWrapper>
);

/* ─── Why RankLocal ─── */
const whyPoints = [
  { icon: Target, title: "Strategy-First", desc: "We build a growth plan before we build anything. Every dollar and hour is mapped to an outcome." },
  { icon: Zap, title: "Built for Speed", desc: "Small businesses can't wait months. We prioritize quick wins while building long-term momentum." },
  { icon: Users, title: "Made for Small Biz", desc: "We're not a giant agency that treats you like a number. You get direct access and honest communication." },
  { icon: BarChart3, title: "Real Metrics", desc: "No vanity reports. We track leads, calls, rankings, and revenue — the things that actually matter." },
];

const WhySection = () => (
  <SectionWrapper dark>
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Why RankLocal</p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">We're the growth partner local businesses actually need.</h2>
        <p className="text-dark-foreground/60 mb-8 leading-relaxed">Most agencies sell packages. We build systems — designed around your market, your customers, and your goals. No fluff, no bloated retainers, just traction.</p>
        <Button variant="hero" asChild>
          <Link to="/about">Learn More About Us <ChevronRight size={16} /></Link>
        </Button>
      </div>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-5">
        {whyPoints.map((p) => (
          <motion.div key={p.title} variants={fadeUp} className="bg-muted/5 border border-border/10 rounded-xl p-5">
            <p.icon size={20} className="text-primary mb-3" />
            <h3 className="font-display font-bold text-sm mb-1">{p.title}</h3>
            <p className="text-xs text-dark-foreground/50 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </SectionWrapper>
);

/* ─── Results ─── */
const results = [
  { metric: "+312%", label: "Increase in organic local traffic for a Toronto-based dental clinic." },
  { metric: "47→3", label: "Google Maps ranking improved from page 5 to position 3 in 90 days." },
  { metric: "+140%", label: "Lead volume increase for a home renovation contractor in 6 months." },
];

const ResultsSection = () => (
  <SectionWrapper>
    <div className="text-center mb-14">
      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Results That Matter</p>
      <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">Outcomes, Not Outputs</h2>
      <p className="text-muted-foreground max-w-lg mx-auto">Every project is measured by real-world impact — more calls, more customers, more growth.</p>
    </div>
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
      {results.map((r, i) => (
        <motion.div key={i} variants={fadeUp} className="text-center">
          <p className="font-display font-extrabold text-5xl lg:text-6xl text-primary mb-3">{r.metric}</p>
          <p className="text-sm text-muted-foreground max-w-xs mx-auto">{r.label}</p>
        </motion.div>
      ))}
    </motion.div>
  </SectionWrapper>
);

/* ─── Process ─── */
const processSteps = [
  { step: "01", title: "Discover", desc: "We audit your current presence, study your market, and uncover the biggest growth opportunities." },
  { step: "02", title: "Build", desc: "We create a tailored strategy and build the assets — website, SEO, ads, content — your business needs." },
  { step: "03", title: "Launch", desc: "Everything goes live. Campaigns activate. Your digital presence starts working for you immediately." },
  { step: "04", title: "Grow", desc: "We optimize continuously. Monthly reporting, performance tuning, and strategy calls keep momentum strong." },
];

const ProcessSection = () => (
  <SectionWrapper dark>
    <div className="text-center mb-14">
      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Our Process</p>
      <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">Simple, Strategic, Repeatable</h2>
    </div>
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-4 gap-6">
      {processSteps.map((s) => (
        <motion.div key={s.step} variants={fadeUp} className="relative">
          <span className="font-display font-extrabold text-6xl text-primary/10">{s.step}</span>
          <h3 className="font-display font-bold text-xl mt-2 mb-2">{s.title}</h3>
          <p className="text-sm text-dark-foreground/50 leading-relaxed">{s.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </SectionWrapper>
);

/* ─── Testimonials ─── */
const testimonials = [
  { name: "Sarah K.", role: "Owner, Bloom Florist", text: "RankLocal completely transformed our online presence. We went from invisible to the top 3 in Google Maps within three months. The leads haven't stopped." },
  { name: "Marcus T.", role: "Founder, FixRight Plumbing", text: "They don't just build websites — they build growth systems. Our new site generates 3x the leads our old one did, and their SEO work has been game-changing." },
  { name: "Lisa R.", role: "Director, Peak Fitness Studio", text: "Finally, an agency that actually communicates and delivers. Our social media engagement tripled and we're getting calls from people who found us on Google." },
];

const TestimonialSection = () => (
  <SectionWrapper>
    <div className="text-center mb-14">
      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">What Clients Say</p>
      <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">Real Words From Real Businesses</h2>
    </div>
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <motion.div key={i} variants={fadeUp} className="bg-card rounded-xl p-6 border border-border card-lift">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-primary fill-primary" />)}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
          <div>
            <p className="font-display font-semibold text-sm">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.role}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </SectionWrapper>
);

/* ─── Final CTA ─── */
const FinalCTA = () => (
  <SectionWrapper dark className="text-center">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-5">
        Ready to grow your<br /><span className="text-gradient-orange">local business?</span>
      </h2>
      <p className="text-dark-foreground/60 max-w-lg mx-auto mb-8">
        Book a free strategy call. We'll audit your current presence and map out a plan to help you get more visibility, leads, and customers.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Book a Strategy Call <ArrowRight size={16} /></Link>
        </Button>
        <Button variant="hero-outline" size="lg" asChild>
          <Link to="/case-studies">See Our Work</Link>
        </Button>
      </div>
    </motion.div>
  </SectionWrapper>
);

/* ─── Page ─── */
const Index = () => (
  <main>
    <Hero />
    <TrustStrip />
    <ServicesSection />
    <WhySection />
    <ResultsSection />
    <ProcessSection />
    <TestimonialSection />
    <FinalCTA />
  </main>
);

export default Index;
