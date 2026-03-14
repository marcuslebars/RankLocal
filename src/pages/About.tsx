import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { ArrowRight, Target, Heart, Lightbulb, Users, Zap, Shield } from "lucide-react";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

const values = [
  { icon: Target, title: "Traction Over Tactics", desc: "We don't chase trends. Every action is tied to a measurable growth outcome for your business." },
  { icon: Lightbulb, title: "Clarity Over Complexity", desc: "We explain everything in plain language. No jargon, no confusing dashboards, no smoke and mirrors." },
  { icon: Heart, title: "Partnership Over Transactions", desc: "We work with a small number of clients so we can go deep. You're not a ticket number here." },
  { icon: Shield, title: "Honesty Over Hype", desc: "If something won't work for your business, we'll tell you. We'd rather lose a deal than waste your money." },
  { icon: Zap, title: "Speed Over Perfection", desc: "We ship fast, learn fast, and optimize constantly. Momentum matters more than waiting for 'perfect.'" },
  { icon: Users, title: "Built for Founders", desc: "We understand the pressure of running a small business. Our systems are designed for lean, growing teams." },
];

const About = () => (
  <main>
    {/* Hero */}
    <section className="bg-dark-section pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">About RankLocal</p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-6">We help local businesses<br />build real traction.</h1>
          <p className="text-dark-foreground/60 text-lg leading-relaxed">
            RankLocal was founded on a simple observation: most local businesses are underserved by marketing agencies. They get cookie-cutter strategies, bloated retainers, and reports nobody reads. We're here to change that.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <SectionWrapper>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Our Story</p>
          <h2 className="font-display font-extrabold text-3xl mb-6">Born from frustration with the status quo.</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>After years of watching small businesses get burned by agencies that overpromised and underdelivered, we built RankLocal to be the agency we wished existed.</p>
            <p>We're a small, focused team based in Toronto. We work with local businesses across Canada — from plumbers and dentists to fitness studios and restaurants — helping them build the digital presence they need to compete and grow.</p>
            <p>We don't do everything for everyone. We do a few things exceptionally well: Local SEO, web design, digital advertising, and social media. And we do it with radical transparency, clear communication, and a genuine obsession with results.</p>
          </div>
        </div>
        <div className="bg-card rounded-xl p-8 border border-border">
          <h3 className="font-display font-bold text-xl mb-6">Our Approach</h3>
          <div className="space-y-6">
            {[
              { num: "01", text: "Understand your business, market, and goals deeply before recommending anything." },
              { num: "02", text: "Build a focused growth plan with clear priorities and timelines." },
              { num: "03", text: "Execute fast, communicate often, and optimize based on real data." },
              { num: "04", text: "Report on outcomes that matter — leads, calls, revenue — not vanity metrics." },
            ].map((item) => (
              <div key={item.num} className="flex gap-4">
                <span className="font-display font-extrabold text-2xl text-primary/20">{item.num}</span>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* Values */}
    <SectionWrapper dark>
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">What We Believe</p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">Principles That Guide Everything We Do</h2>
      </div>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((v) => (
          <motion.div key={v.title} variants={fadeUp} className="bg-muted/5 border border-border/10 rounded-xl p-6">
            <v.icon size={22} className="text-primary mb-4" />
            <h3 className="font-display font-bold mb-2">{v.title}</h3>
            <p className="text-sm text-dark-foreground/50 leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>

    {/* CTA */}
    <SectionWrapper className="text-center">
      <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-5">Want to work with us?</h2>
      <p className="text-muted-foreground max-w-lg mx-auto mb-8">
        We keep our client roster lean so we can deliver exceptional work. If you're serious about growing your local business, let's talk.
      </p>
      <Button variant="hero" size="lg" asChild>
        <Link to="/contact">Book a Strategy Call <ArrowRight size={16} /></Link>
      </Button>
    </SectionWrapper>
  </main>
);

export default About;
