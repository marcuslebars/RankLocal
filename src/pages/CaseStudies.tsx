import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const caseStudies = [
  {
    title: "A1 Marine Care",
    industry: "Marine Services",
    services: ["Local SEO", "Google Business Profile"],
    metrics: [
      { label: "#1 Rankings", value: "100km+" },
      { label: "Local Visibility", value: "Dominant" },
      { label: "Inbound Leads", value: "Consistent" },
    ],
    summary: "Our founder-built proof case. Before working with clients, we built and ranked our own marine services business. This is the system that became RankLocal — proven in a real, competitive market across Georgian Bay, Lake Simcoe, and Muskoka.",
    before: "Zero online visibility, limited leads, no local search presence",
    after: "#1 rankings across 100km radius, consistent inbound leads, dominant local presence",
    featured: true,
    link: "/case-study-a1-marine-care",
  },
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
    <section className="bg-dark-section relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.4'/%3E%3C/svg%3E\")" }} />
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary tracking-wide">Case Studies</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6">Real results for<br />real businesses.</h1>
          <p className="text-dark-foreground/55 text-lg leading-relaxed max-w-xl">
            We measure success by outcomes that matter — more leads, better rankings, higher revenue. Here's what that looks like in practice.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Case Studies */}
    {caseStudies.map((cs, i) => {
      const isDark = i % 2 !== 0;
      return (
        <SectionWrapper key={cs.title} dark={isDark}>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {/* Header */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-10">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl">{cs.title}</h2>
              <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">{cs.industry}</span>
              {cs.services.map((s) => (
                <span key={s} className={`text-xs px-3 py-1.5 rounded-full font-medium ${isDark ? 'border border-border/20 text-dark-foreground/50' : 'border border-border text-muted-foreground'}`}>{s}</span>
              ))}
            </motion.div>

            {/* Metrics */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 md:gap-6 mb-12">
              {cs.metrics.map((m) => (
                <div key={m.label} className={`rounded-2xl p-6 md:p-8 text-center ${isDark ? 'glass-card' : 'bg-card border border-border'}`}>
                  <p className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-primary mb-2">{m.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{m.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeUp} className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <p className="text-muted-foreground leading-relaxed text-base">{cs.summary}</p>
                {cs.link && (
                  <div className="mt-6">
                    <Button variant="hero-dark" size="lg" asChild>
                      <Link to={cs.link}>View Full Case Study <ArrowRight size={16} /></Link>
                    </Button>
                  </div>
                )}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className={`rounded-2xl p-6 ${isDark ? 'glass-card' : 'bg-card border border-border'}`}>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-3">Before</p>
                  <p className="text-sm leading-relaxed">{cs.before}</p>
                </div>
                <div className="rounded-2xl p-6 border-2 border-primary/25 bg-primary/[0.03]">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-3">After</p>
                  <p className="text-sm leading-relaxed font-medium">{cs.after}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </SectionWrapper>
      );
    })}

    {/* CTA */}
    <section className={`${caseStudies.length % 2 === 0 ? 'bg-light-section' : 'bg-light-section'} py-24 lg:py-32`}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-dark rounded-3xl p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.06] rounded-full blur-[120px]" />
          <div className="relative z-10">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-5 text-dark-foreground">Want results like these?</h2>
            <p className="text-dark-foreground/50 max-w-lg mx-auto mb-10 text-base leading-relaxed">
              Every business is different, but the process is proven. Let's talk about what growth looks like for yours.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Book a Strategy Call <ArrowRight size={16} /></Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </main>
);

export default CaseStudies;
