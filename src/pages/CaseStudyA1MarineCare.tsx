import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, TrendingUp, CheckCircle2, Sparkles } from "lucide-react";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const strategyItems = [
  {
    title: "Google Business Profile Optimization",
    description: "Claimed, verified, and fully optimized GBP with complete business information, high-quality photos, and consistent NAP data.",
  },
  {
    title: "Local SEO Structure",
    description: "Built location-specific pages, targeted regional keywords, and established clear site architecture for local search dominance.",
  },
  {
    title: "Service Area Expansion",
    description: "Multi-location targeting across Georgian Bay region, with dedicated content for each service area to capture local intent.",
  },
  {
    title: "Review Generation Strategy",
    description: "Systematic approach to gathering authentic customer reviews and managing reputation across Google, Facebook, and industry platforms.",
  },
  {
    title: "Website Conversion Improvements",
    description: "Redesigned website with clear CTAs, mobile optimization, and conversion-focused design to turn local traffic into leads.",
  },
];

const executionItems = [
  "Location-based pages for each service area",
  "Keyword targeting across regions",
  "Consistent GBP optimization",
  "Internal linking structure",
  "Service-focused content",
];

const resultMetrics = [
  { label: "#1 Rankings", value: "100km+ Radius", icon: "🎯" },
  { label: "Local Visibility", value: "Dominant Presence", icon: "📍" },
  { label: "Inbound Leads", value: "Consistent Pipeline", icon: "📞" },
  { label: "Google Maps", value: "Top Position", icon: "🗺️" },
];

const CaseStudyA1MarineCare = () => (
  <main>
    {/* SECTION 1 — HERO */}
    <section className="bg-dark-section relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.4'/%3E%3C/svg%3E\")" }} />
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary tracking-wide">Founder-Built Proof</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6">How We Ranked #1 Across Georgian Bay</h1>
          <p className="text-dark-foreground/60 text-lg leading-relaxed max-w-2xl mb-10">
            We didn't start with clients. We built and ranked our own business first — then turned that system into RankLocal.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/pricing">View Pricing <ArrowRight size={16} /></Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* SECTION 2 — THE PROBLEM */}
    <SectionWrapper>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-8">Starting From Zero Visibility</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-muted-foreground leading-relaxed text-base mb-6">
              Like many service businesses, A1 Marine Care faced a common challenge: strong local reputation but zero online visibility. Despite years of satisfied customers and quality work, the business wasn't showing up where potential customers were looking.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              The result was a steady but limited flow of leads, mostly from word-of-mouth. Growth was capped by the lack of a digital presence in local search.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-primary text-xl">✕</span>
              <span className="text-muted-foreground">New or under-optimized online presence</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary text-xl">✕</span>
              <span className="text-muted-foreground">Low local visibility in Google search</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary text-xl">✕</span>
              <span className="text-muted-foreground">Not ranking for local service keywords</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary text-xl">✕</span>
              <span className="text-muted-foreground">Limited inbound leads from search</span>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>

    {/* SECTION 3 — THE STRATEGY */}
    <SectionWrapper dark>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4">The System We Built</h2>
          <p className="text-dark-foreground/60 text-lg max-w-2xl">
            This wasn't a collection of random tactics. We built a repeatable system designed to dominate local search and generate consistent leads.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategyItems.map((item, i) => (
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

    {/* SECTION 4 — THE EXECUTION */}
    <SectionWrapper>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-8">Built for Local Domination</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground leading-relaxed text-base mb-8">
              We implemented the system with precision and consistency. Every element was designed to work together, creating a unified approach to local search dominance.
            </p>
            <div className="space-y-3">
              {executionItems.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-primary">{i + 1}</span>
                  </div>
                  <span className="text-muted-foreground text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl bg-card border border-border p-8 lg:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="relative z-10">
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="font-display font-semibold text-xl mb-3">Systematic Approach</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every tactic was implemented with a clear purpose: to establish authority, build trust, and capture local search intent at every stage of the customer journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>

    {/* SECTION 5 — RESULTS */}
    <SectionWrapper dark>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4">Real Results</h2>
          <p className="text-dark-foreground/60 text-lg max-w-2xl">
            The system worked. Here's what happened when we applied it to a real business in a competitive local market.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resultMetrics.map((metric, i) => (
            <motion.div key={i} variants={fadeUp} className="glass-card rounded-2xl p-8 text-center border border-border/10">
              <div className="text-4xl mb-3">{metric.icon}</div>
              <p className="font-display font-extrabold text-2xl text-primary mb-2">{metric.value}</p>
              <p className="text-xs text-dark-foreground/60 uppercase tracking-wider">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>

    {/* SECTION 6 — MAP / VISUAL PROOF */}
    <SectionWrapper>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-12 text-center">Dominating Local Search</h2>
        <div className="relative rounded-2xl bg-gradient-to-br from-primary/5 to-primary/[0.02] border border-primary/10 p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60V0h60' fill='none' stroke='currentColor' stroke-width='0.4'/%3E%3C/svg%3E\")" }} />
          <div className="relative z-10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl mb-4">🏖️</div>
                <h3 className="font-display font-semibold text-xl mb-2">Georgian Bay</h3>
                <p className="text-muted-foreground text-sm">Primary service area with #1 rankings</p>
              </div>
              <div>
                <div className="text-5xl mb-4">💧</div>
                <h3 className="font-display font-semibold text-xl mb-2">Lake Simcoe</h3>
                <p className="text-muted-foreground text-sm">Expanded coverage with strong presence</p>
              </div>
              <div>
                <div className="text-5xl mb-4">🏔️</div>
                <h3 className="font-display font-semibold text-xl mb-2">Muskoka</h3>
                <p className="text-muted-foreground text-sm">Seasonal market penetration</p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground mb-2">Coverage Area</p>
              <p className="font-display font-semibold text-2xl">~100km Radius</p>
              <p className="text-muted-foreground text-sm mt-2">Consistent #1 rankings across all service areas</p>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>

    {/* SECTION 7 — KEY TAKEAWAY */}
    <SectionWrapper dark>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-8">This Is Not Theory</h2>
        <div className="space-y-6">
          <p className="text-dark-foreground/70 text-lg leading-relaxed">
            This system was built and tested on a real business, in a competitive local market. We didn't rely on best practices or industry trends. We built what worked, measured the results, and refined the approach based on real data.
          </p>
          <p className="text-dark-foreground/70 text-lg leading-relaxed">
            Everything RankLocal offers is based on what actually worked for A1 Marine Care. We've proven it works. Now we help other businesses apply the same system to their markets.
          </p>
        </div>
      </motion.div>
    </SectionWrapper>

    {/* SECTION 8 — APPLY THE SAME SYSTEM */}
    <SectionWrapper>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-8">Apply This To Your Business</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          We use the same system to help other businesses get found, generate leads, and grow locally. Whether you're in marine services, home services, professional services, or any other local market, the fundamentals are the same.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-display font-semibold text-lg mb-2">Audit & Strategy</h3>
            <p className="text-muted-foreground text-sm">We analyze your current position and build a custom strategy for your market.</p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="text-3xl mb-3">🛠️</div>
            <h3 className="font-display font-semibold text-lg mb-2">Implementation</h3>
            <p className="text-muted-foreground text-sm">We execute the system with precision, handling all technical and content work.</p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-display font-semibold text-lg mb-2">Results & Growth</h3>
            <p className="text-muted-foreground text-sm">You get consistent leads, higher rankings, and measurable business growth.</p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>

    {/* SECTION 9 — CTA (HIGH CONVERSION) */}
    <section className="bg-light-section py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-dark rounded-3xl p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.06] rounded-full blur-[120px]" />
          <div className="relative z-10">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-5 text-dark-foreground">Ready to Get Found Locally?</h2>
            <p className="text-dark-foreground/50 max-w-lg mx-auto mb-10 text-base leading-relaxed">
              The system works. We've proven it. Let's apply it to your business and start generating consistent, qualified leads.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/pricing">View Pricing <ArrowRight size={16} /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/contact">Book Strategy Call</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </main>
);

export default CaseStudyA1MarineCare;
