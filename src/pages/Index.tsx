import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import {
  Search, BarChart3, Globe, Megaphone, ArrowRight, TrendingUp,
  MapPin, Users, Star, ChevronRight, Target, Zap, Eye, Award,
  CheckCircle2, ArrowUpRight, Layers, LineChart, MousePointerClick
} from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ─── Hero ─── */
const Hero = () => (
  <section className="bg-dark-section relative overflow-hidden pt-28 pb-24 lg:pt-40 lg:pb-32">
    {/* Background effects */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.4'/%3E%3C/svg%3E\")" }} />
    <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/[0.04] rounded-full blur-[150px]" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px]" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left */}
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <MapPin size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary tracking-wide">Local Growth Agency — Toronto, Canada</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.08] mb-7">
            Get Found.<br />
            Get Leads.<br />
            <span className="text-gradient-orange">Grow Local.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-dark-foreground/55 max-w-lg mb-10 leading-relaxed">
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

          {/* Mini trust indicators */}
          <motion.div variants={fadeUp} className="flex items-center gap-6 mt-12 pt-8 border-t border-border/10">
            {[
              { value: "50+", label: "Clients Served" },
              { value: "3x", label: "Avg. Lead Increase" },
              { value: "96%", label: "Retention Rate" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display font-bold text-lg text-primary">{s.value}</p>
                <p className="text-[11px] text-dark-foreground/40">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Growth Stack */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative h-[480px]">
            {/* GBP card */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 left-0 bg-card rounded-2xl p-6 shadow-2xl border border-border/20 w-[300px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Google Business Profile</p>
                  <p className="text-[11px] text-muted-foreground">Your Local Listing</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-primary fill-primary" />)}
                <span className="text-xs text-muted-foreground ml-1.5">4.9 (127 reviews)</span>
              </div>
              <div className="flex gap-3 mt-3">
                {["Directions", "Call", "Website"].map((a) => (
                  <span key={a} className="text-[10px] px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">{a}</span>
                ))}
              </div>
            </motion.div>

            {/* Rank badge */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-2 right-0 bg-primary text-primary-foreground rounded-2xl p-5 shadow-2xl glow-orange">
              <p className="text-xs font-medium opacity-80 mb-1">Local Rank</p>
              <p className="font-display font-extrabold text-4xl leading-none">#1</p>
              <p className="text-[11px] opacity-60 mt-1">Google Maps</p>
            </motion.div>

            {/* Chart card */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-0 left-0 bg-card rounded-2xl p-6 shadow-2xl border border-border/20 w-[320px]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Leads This Month</p>
                  <p className="text-[11px] text-muted-foreground">vs. last month</p>
                </div>
                <span className="text-sm font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-lg">+42%</span>
              </div>
              <div className="flex items-end gap-[3px] h-20">
                {[30, 38, 35, 48, 42, 55, 50, 62, 58, 70, 65, 80, 75, 90, 85, 95].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm transition-all" style={{ height: `${h}%`, background: i >= 12 ? `hsl(24 100% 45%)` : `hsl(24 100% 45% / 0.2)` }} />
                ))}
              </div>
            </motion.div>

            {/* Traffic badge */}
            <motion.div animate={{ y: [0, -9, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} className="absolute bottom-12 right-0 bg-card rounded-2xl p-5 shadow-2xl border border-border/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground">Website Traffic</p>
                  <p className="font-display font-bold text-xl text-foreground">+140%</p>
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
  <section className="bg-dark-section border-t border-b border-border/5 py-10">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Trusted by local businesses across Canada</p>
        <div className="flex items-center gap-10 flex-wrap justify-center">
          {[
            { icon: Eye, label: "More Visibility", value: "3x" },
            { icon: TrendingUp, label: "Higher Rankings", value: "Top 3" },
            { icon: Users, label: "Quality Leads", value: "+140%" },
            { icon: Award, label: "Client Retention", value: "96%" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon size={16} className="text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-base">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
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
  { icon: Search, title: "Local SEO", desc: "Rank where it matters. We optimize your presence so local customers find you first on Google Search and Maps.", accent: "from-primary/10 to-primary/5" },
  { icon: Megaphone, title: "Digital Advertising", desc: "Targeted campaigns on Google and social platforms that drive real leads — not vanity clicks.", accent: "from-primary/10 to-primary/5" },
  { icon: Globe, title: "Web Design", desc: "Fast, modern, conversion-ready websites that build credibility and turn visitors into customers.", accent: "from-primary/10 to-primary/5" },
  { icon: BarChart3, title: "Social Media", desc: "Strategic content and management that grows your audience and keeps your brand top of mind.", accent: "from-primary/10 to-primary/5" },
];

const ServicesSection = () => (
  <SectionWrapper id="services">
    <div className="text-center mb-16">
      <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">What We Do</p>
      <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-[2.75rem] mb-5">Growth Services Built for<br className="hidden md:block" /> Local Businesses</h2>
      <p className="text-muted-foreground max-w-lg mx-auto text-base">Every service is designed to increase your visibility, generate leads, and help you build a digital presence that works.</p>
    </div>
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((s) => (
        <motion.div key={s.title} variants={fadeUp} className="group relative bg-card rounded-2xl p-7 border border-border overflow-hidden card-lift">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="w-13 h-13 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
              <s.icon size={24} className="text-primary" />
            </div>
            <h3 className="font-display font-bold text-lg mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all">
              Learn more <ArrowUpRight size={14} />
            </Link>
          </div>
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
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Why RankLocal</p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-[2.75rem] leading-tight mb-6">We're the growth partner local businesses actually need.</h2>
        <p className="text-dark-foreground/55 mb-10 leading-relaxed text-base">Most agencies sell packages. We build systems — designed around your market, your customers, and your goals. No fluff, no bloated retainers, just traction.</p>
        <Button variant="hero" asChild>
          <Link to="/about">Learn More About Us <ChevronRight size={16} /></Link>
        </Button>
      </div>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-5">
        {whyPoints.map((p) => (
          <motion.div key={p.title} variants={fadeUp} className="glass-card rounded-2xl p-6 hover:border-primary/20 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <p.icon size={20} className="text-primary" />
            </div>
            <h3 className="font-display font-bold text-sm mb-2">{p.title}</h3>
            <p className="text-xs text-dark-foreground/45 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </SectionWrapper>
);

/* ─── Results ─── */
const results = [
  { metric: "+312%", label: "Increase in organic local traffic for a Toronto-based dental clinic.", icon: TrendingUp },
  { metric: "47→3", label: "Google Maps ranking improved from page 5 to position 3 in 90 days.", icon: MapPin },
  { metric: "+140%", label: "Lead volume increase for a home renovation contractor in 6 months.", icon: Users },
];

const ResultsSection = () => (
  <SectionWrapper>
    <div className="text-center mb-16">
      <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Results That Matter</p>
      <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-[2.75rem] mb-5">Outcomes, Not Outputs</h2>
      <p className="text-muted-foreground max-w-lg mx-auto">Every project is measured by real-world impact — more calls, more customers, more growth.</p>
    </div>
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
      {results.map((r, i) => (
        <motion.div key={i} variants={fadeUp} className="text-center bg-card rounded-2xl p-10 border border-border card-lift">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <r.icon size={24} className="text-primary" />
          </div>
          <p className="font-display font-extrabold text-5xl lg:text-6xl text-primary mb-4">{r.metric}</p>
          <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">{r.label}</p>
        </motion.div>
      ))}
    </motion.div>
  </SectionWrapper>
);

/* ─── Process ─── */
const processSteps = [
  { step: "01", title: "Discover", desc: "We audit your current presence, study your market, and uncover the biggest growth opportunities.", icon: Search },
  { step: "02", title: "Build", desc: "We create a tailored strategy and build the assets — website, SEO, ads, content — your business needs.", icon: Layers },
  { step: "03", title: "Launch", desc: "Everything goes live. Campaigns activate. Your digital presence starts working for you immediately.", icon: Zap },
  { step: "04", title: "Grow", desc: "We optimize continuously. Monthly reporting, performance tuning, and strategy calls keep momentum strong.", icon: LineChart },
];

const ProcessSection = () => (
  <SectionWrapper dark>
    <div className="text-center mb-16">
      <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Our Process</p>
      <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-[2.75rem] mb-5">Simple, Strategic, Repeatable</h2>
      <p className="text-dark-foreground/55 max-w-lg mx-auto">A proven framework that takes you from unknown to unstoppable in your local market.</p>
    </div>
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-4 gap-6">
      {processSteps.map((s, i) => (
        <motion.div key={s.step} variants={fadeUp} className="relative glass-card rounded-2xl p-7 hover:border-primary/20 transition-colors group">
          <div className="flex items-center justify-between mb-6">
            <span className="font-display font-extrabold text-5xl text-primary/10 group-hover:text-primary/20 transition-colors">{s.step}</span>
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <s.icon size={18} className="text-primary" />
            </div>
          </div>
          <h3 className="font-display font-bold text-xl mb-3">{s.title}</h3>
          <p className="text-sm text-dark-foreground/45 leading-relaxed">{s.desc}</p>
          {i < 3 && (
            <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-primary/20">
              <ChevronRight size={20} />
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  </SectionWrapper>
);

/* ─── Featured Work ─── */
const featuredWork = [
  {
    title: "Bloom Florist",
    category: "Local SEO + Web Design",
    metric: "+312% organic traffic",
    desc: "Rebuilt their online presence from scratch — new website, optimized GBP, and a local SEO strategy that took them to #1 in Google Maps.",
  },
  {
    title: "FixRight Plumbing",
    category: "SEO + Advertising",
    metric: "-52% cost per lead",
    desc: "Restructured their ad campaigns and launched a local SEO program that doubled lead volume while cutting cost per lead in half.",
  },
  {
    title: "Peak Fitness Studio",
    category: "Social Media + Web",
    metric: "+280% engagement",
    desc: "Designed a conversion-focused website and built a social strategy that tripled engagement and drove 60% more new member sign-ups.",
  },
];

const FeaturedWorkSection = () => (
  <SectionWrapper>
    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-4">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Featured Work</p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-[2.75rem]">Real Wins for Real Businesses</h2>
      </div>
      <Button variant="hero-dark" asChild>
        <Link to="/case-studies">View All Case Studies <ArrowRight size={14} /></Link>
      </Button>
    </div>
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
      {featuredWork.map((w) => (
        <motion.div key={w.title} variants={fadeUp} className="group bg-card rounded-2xl border border-border overflow-hidden card-lift">
          {/* Colored header bar */}
          <div className="h-48 bg-gradient-to-br from-dark to-dark/90 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/[0.06]" />
            <p className="font-display font-extrabold text-3xl text-primary/20 group-hover:text-primary/30 transition-colors">{w.title}</p>
          </div>
          <div className="p-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{w.category}</span>
              <span className="text-[11px] font-bold text-primary">{w.metric}</span>
            </div>
            <h3 className="font-display font-bold text-lg mb-2">{w.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
          </div>
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
  <SectionWrapper dark>
    <div className="text-center mb-16">
      <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">What Clients Say</p>
      <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-[2.75rem] mb-5">Real Words From Real Businesses</h2>
    </div>
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <motion.div key={i} variants={fadeUp} className="glass-card rounded-2xl p-8 hover:border-primary/20 transition-colors">
          <div className="flex gap-1 mb-5">
            {[...Array(5)].map((_, j) => <Star key={j} size={15} className="text-primary fill-primary" />)}
          </div>
          <p className="text-sm text-dark-foreground/60 leading-relaxed mb-8">"{t.text}"</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="font-display font-bold text-sm text-primary">{t.name[0]}</span>
            </div>
            <div>
              <p className="font-display font-semibold text-sm">{t.name}</p>
              <p className="text-xs text-dark-foreground/40">{t.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </SectionWrapper>
);

/* ─── Final CTA ─── */
const FinalCTA = () => (
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
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-6 text-dark-foreground">
            Ready to grow your<br /><span className="text-gradient-orange">local business?</span>
          </h2>
          <p className="text-dark-foreground/50 max-w-lg mx-auto mb-10 text-base leading-relaxed">
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
        </div>
      </motion.div>
    </div>
  </section>
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
    <FeaturedWorkSection />
    <TestimonialSection />
    <FinalCTA />
  </main>
);

export default Index;
