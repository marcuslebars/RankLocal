import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, ExternalLink } from "lucide-react";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

const caseStudies = [
  {
    title: "Bloom Florist",
    industry: "Retail / Floral",
    services: ["Local SEO", "Web Design"],
    metrics: [
      { label: "Organic Traffic", value: "+312%" },
      { label: "Google Maps Rank", value: "#1" },
      { label: "Monthly Leads", value: "3x" },
    ],
    summary: "Bloom Florist was invisible online despite being a neighbourhood favourite for 15 years. We rebuilt their website, optimized their Google Business Profile, and implemented a local SEO strategy that took them from page 4 to the #1 position in Google Maps within 90 days.",
    before: "No website, GBP unclaimed, zero online leads",
    after: "Top-ranking website, 40+ monthly leads from organic search",
  },
  {
    title: "FixRight Plumbing",
    industry: "Home Services",
    services: ["Local SEO", "Digital Advertising"],
    metrics: [
      { label: "Lead Volume", value: "+140%" },
      { label: "Cost Per Lead", value: "-52%" },
      { label: "Revenue Growth", value: "+85%" },
    ],
    summary: "FixRight was spending $3,000/month on ads with poor targeting and no conversion tracking. We rebuilt their campaigns from scratch, launched a local SEO program, and cut their cost per lead in half while more than doubling their lead volume.",
    before: "$67 cost per lead, no tracking, wasted ad spend",
    after: "$32 cost per lead, 45+ quality leads/month, clear ROI",
  },
  {
    title: "Peak Fitness Studio",
    industry: "Health & Fitness",
    services: ["Social Media", "Web Design"],
    metrics: [
      { label: "Social Engagement", value: "+280%" },
      { label: "New Members", value: "+60%" },
      { label: "Website Conversions", value: "4.2%" },
    ],
    summary: "Peak Fitness had a strong in-person brand but no digital presence. We designed a conversion-focused website and built a social media strategy that tripled their engagement and drove 60% more new member sign-ups in 6 months.",
    before: "Outdated website, inconsistent social posting, low online visibility",
    after: "Modern site with 4.2% conversion rate, thriving social community",
  },
];

const CaseStudies = () => (
  <main>
    {/* Hero */}
    <section className="bg-dark-section pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Case Studies</p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-6">Real results for<br />real businesses.</h1>
          <p className="text-dark-foreground/60 text-lg leading-relaxed">
            We measure success by outcomes that matter — more leads, better rankings, higher revenue. Here's what that looks like in practice.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Case Studies */}
    {caseStudies.map((cs, i) => (
      <SectionWrapper key={cs.title} dark={i % 2 !== 0}>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {/* Header */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-8">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl">{cs.title}</h2>
            <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{cs.industry}</span>
            {cs.services.map((s) => (
              <span key={s} className="text-xs px-3 py-1 rounded-full border border-border/30 text-muted-foreground">{s}</span>
            ))}
          </motion.div>

          {/* Metrics */}
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6 mb-10">
            {cs.metrics.map((m) => (
              <div key={m.label} className="bg-card rounded-xl p-6 border border-border text-center" style={i % 2 !== 0 ? { borderColor: "hsl(0 0% 20%)" } : {}}>
                <p className="font-display font-extrabold text-3xl md:text-4xl text-primary mb-1">{m.value}</p>
                <p className="text-xs text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeUp} className="grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-muted-foreground leading-relaxed">{cs.summary}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-5 border border-border" style={i % 2 !== 0 ? { borderColor: "hsl(0 0% 20%)" } : {}}>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">Before</p>
                <p className="text-sm">{cs.before}</p>
              </div>
              <div className="bg-card rounded-xl p-5 border-2 border-primary/30">
                <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">After</p>
                <p className="text-sm">{cs.after}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    ))}

    {/* CTA */}
    <SectionWrapper dark className="text-center">
      <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-5">
        Want results like these?
      </h2>
      <p className="text-dark-foreground/60 max-w-lg mx-auto mb-8">
        Every business is different, but the process is proven. Let's talk about what growth looks like for yours.
      </p>
      <Button variant="hero" size="lg" asChild>
        <Link to="/contact">Book a Strategy Call <ArrowRight size={16} /></Link>
      </Button>
    </SectionWrapper>
  </main>
);

export default CaseStudies;
