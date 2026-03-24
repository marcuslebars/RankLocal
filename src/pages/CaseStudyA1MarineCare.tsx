import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, TrendingUp, CheckCircle2, Sparkles, AlertCircle } from "lucide-react";

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
  { label: "First 7 Months", value: "~$300,000 Revenue", icon: "💰" },
];

const timelineItems = [
  { period: "Week 1–2", milestone: "Setup & Optimization", description: "Foundation built, GBP optimized, site structure established" },
  { period: "Week 3–6", milestone: "Improved Visibility", description: "Initial rankings appearing, local search presence growing" },
  { period: "Month 2–3", milestone: "Consistent Rankings", description: "#1 positions established, lead flow becoming predictable" },
  { period: "Ongoing", milestone: "Dominance & Growth", description: "Sustained rankings, increasing revenue, market leadership" },
];

const whyMostFail = [
  { issue: "No Structured SEO System", detail: "Random tactics instead of a proven process" },
  { issue: "Weak GBP Optimization", detail: "Missing out on Google Maps visibility" },
  { issue: "No Location Targeting", detail: "Not capturing local search intent" },
  { issue: "Poor Conversion Setup", detail: "Traffic doesn't convert to leads or sales" },
  { issue: "Inconsistent Execution", detail: "Starting and stopping instead of sustained effort" },
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
            We didn't start with clients. We built and ranked our own business first. In its first year (2025), A1 Marine Care grew from zero to approximately <strong>$300,000 in revenue in just 7 months</strong> — driven by dominant local search rankings.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Apply the System <ArrowRight size={16} /></Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* PROOF CALLOUT — Built in Year One */}
    <section className="bg-light-section py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-4 gap-6"
        >
          <div className="rounded-2xl bg-card border-2 border-primary/20 p-6 lg:p-8 text-center">
            <div className="text-4xl mb-3">🚀</div>
            <p className="font-display font-semibold text-lg mb-2">Built From Scratch</p>
            <p className="text-muted-foreground text-sm">First year in business (2025)</p>
          </div>
          <div className="rounded-2xl bg-card border-2 border-primary/20 p-6 lg:p-8 text-center">
            <div className="text-4xl mb-3">⏱️</div>
            <p className="font-display font-semibold text-lg mb-2">7 Months</p>
            <p className="text-muted-foreground text-sm">Time to ~$300,000 revenue</p>
          </div>
          <div className="rounded-2xl bg-card border-2 border-primary/20 p-6 lg:p-8 text-center">
            <div className="text-4xl mb-3">📊</div>
            <p className="font-display font-semibold text-lg mb-2">~$300,000</p>
            <p className="text-muted-foreground text-sm">Revenue generated in first 7 months</p>
          </div>
          <div className="rounded-2xl bg-card border-2 border-primary/20 p-6 lg:p-8 text-center">
            <div className="text-4xl mb-3">🎯</div>
            <p className="font-display font-semibold text-lg mb-2">Driven by Rankings</p>
            <p className="text-muted-foreground text-sm">Local search visibility</p>
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
              A1 Marine Care was a brand new business with zero online presence. Despite offering quality services, the business wasn't showing up where potential customers were searching.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Without local search visibility, growth was limited to word-of-mouth. Every day without ranking meant losing customers to competitors who were already visible.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-primary text-xl">✕</span>
              <span className="text-muted-foreground">Brand new business with no online presence</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary text-xl">✕</span>
              <span className="text-muted-foreground">Not ranking in local Google search</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary text-xl">✕</span>
              <span className="text-muted-foreground">Invisible on Google Maps</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary text-xl">✕</span>
              <span className="text-muted-foreground">Limited inbound leads from search</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary text-xl">✕</span>
              <span className="text-muted-foreground">Competitors capturing potential customers</span>
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
            This wasn't a collection of random tactics. We built a repeatable system designed to dominate local search and generate consistent leads — the exact system we now apply to other local businesses.
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

    {/* SECTION 5 — REAL RESULTS */}
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

    {/* SECTION 6 — What This Means for Your Business */}
    <SectionWrapper>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-8">What This Means for Your Business</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="space-y-6">
            <div className="flex gap-4">
              <AlertCircle className="text-primary flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">If you're not ranking locally, you're invisible</h3>
                <p className="text-muted-foreground text-sm">Potential customers are searching for your services right now. If you're not showing up, they're finding your competitors.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertCircle className="text-primary flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">Competitors are capturing your potential customers</h3>
                <p className="text-muted-foreground text-sm">Every day without visibility is revenue lost to businesses that are already ranking.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertCircle className="text-primary flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">Strong local rankings directly impact revenue</h3>
                <p className="text-muted-foreground text-sm">As A1 Marine Care proved, dominant local search visibility creates a predictable flow of inbound leads and sales.</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl bg-gradient-to-br from-primary/5 to-primary/[0.02] border border-primary/10 p-8 lg:p-10 flex flex-col justify-center">
            <div className="text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="font-display font-semibold text-xl mb-4">The Connection</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Rankings → Visibility → Leads → Revenue
              </p>
              <p className="text-muted-foreground text-xs">This isn't theory. It's what we built and proved with A1 Marine Care.</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Apply This System <ArrowRight size={16} /></Link>
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>

    {/* SECTION 7 — Timeline */}
    <SectionWrapper dark>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4">How Fast This Happened</h2>
          <p className="text-dark-foreground/60 text-lg max-w-2xl">
            Meaningful growth doesn't take years. Here's the realistic progression we followed.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timelineItems.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="glass-card rounded-2xl p-6 lg:p-8 border border-border/10">
              <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-2">{item.period}</p>
              <h3 className="font-display font-semibold text-lg text-dark-foreground mb-3">{item.milestone}</h3>
              <p className="text-dark-foreground/60 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>

    {/* SECTION 8 — Why Most Local Businesses Never Rank */}
    <SectionWrapper>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-8">Why Most Local Businesses Never Rank</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {whyMostFail.map((item, i) => (
            <div key={i} className="rounded-2xl bg-card border border-border p-6 lg:p-8">
              <h3 className="font-display font-semibold text-lg mb-2">{item.issue}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="relative rounded-2xl bg-gradient-to-r from-primary/5 to-primary/[0.02] border border-primary/10 p-8 lg:p-12 text-center">
          <h3 className="font-display font-semibold text-2xl mb-3">This system was built to solve all of that.</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A1 Marine Care succeeded because we applied a structured, repeatable system — not random tactics. The same system is now available to other local businesses.
          </p>
        </div>
      </motion.div>
    </SectionWrapper>

    {/* SECTION 9 — Key Takeaway */}
    <SectionWrapper dark>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-8">This Is Not Theory</h2>
        <div className="space-y-6">
          <p className="text-dark-foreground/70 text-lg leading-relaxed">
            This system was built and tested on a real business, in a competitive local market. We didn't rely on best practices or industry trends. We built what worked, measured the results, and refined the approach based on real data.
          </p>
          <p className="text-dark-foreground/70 text-lg leading-relaxed">
            A1 Marine Care went from zero to approximately $300,000 in revenue in its first 7 months, driven by dominant local search rankings. Everything RankLocal offers is based on what actually worked.
          </p>
          <p className="text-dark-foreground/70 text-lg leading-relaxed">
            Now we help other businesses apply the same system to their markets. The results speak for themselves.
          </p>
        </div>
      </motion.div>
    </SectionWrapper>

    {/* SECTION 10 — Final CTA */}
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
            <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-5 text-dark-foreground">Stop Losing Local Customers to Competitors</h2>
            <p className="text-dark-foreground/50 max-w-lg mx-auto mb-10 text-base leading-relaxed">
              If your business isn't ranking locally, you're losing visibility, leads, and revenue every day. Apply the same system that drove real growth in a real business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Apply the System <ArrowRight size={16} /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/pricing">View Pricing</Link>
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
