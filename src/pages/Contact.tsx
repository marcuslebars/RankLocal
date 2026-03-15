import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Clock, CheckCircle2, Sparkles } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-dark-section relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.4'/%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs font-medium text-primary tracking-wide">Get In Touch</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6">Let's map out your<br />growth plan.</h1>
            <p className="text-dark-foreground/55 text-lg leading-relaxed max-w-xl">
              Fill out the form below and we'll get back to you within 24 hours with a free assessment of your current digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-card rounded-2xl p-12 border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3">Message Received</h3>
                <p className="text-muted-foreground max-w-md mx-auto">We'll review your info and get back to you within 24 hours. Talk soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 md:p-10 border border-border space-y-7">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-2.5 block">Your Name</label>
                    <input required type="text" className="w-full px-4 py-3.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all" placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-2.5 block">Business Name</label>
                    <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all" placeholder="Smith Dental" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-2.5 block">Email</label>
                    <input required type="email" className="w-full px-4 py-3.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all" placeholder="jane@smithdental.com" />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-2.5 block">Phone (Optional)</label>
                    <input type="tel" className="w-full px-4 py-3.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all" placeholder="(416) 555-0123" />
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-2.5 block">What do you need help with?</label>
                  <select className="w-full px-4 py-3.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all">
                    <option>Local SEO</option>
                    <option>Digital Advertising</option>
                    <option>Web Design</option>
                    <option>Social Media</option>
                    <option>Full Growth Package</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-2.5 block">Tell us about your goals</label>
                  <textarea rows={4} className="w-full px-4 py-3.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all resize-none" placeholder="What's your biggest growth challenge right now?" />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full sm:w-auto">
                  Send Message <ArrowRight size={16} />
                </Button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-7 border border-border">
              <h3 className="font-display font-bold text-lg mb-6">What happens next?</h3>
              <ul className="space-y-5">
                {[
                  "We review your submission and research your business.",
                  "Within 24 hours, we send you a brief audit of your current online presence.",
                  "We schedule a free 30-minute strategy call to discuss your growth plan.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-display font-extrabold text-2xl text-primary/20">{`0${i + 1}`}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-7 border border-border space-y-5">
              {[
                { icon: Mail, text: "hello@ranklocal.ca" },
                { icon: MapPin, text: "Toronto, Canada" },
                { icon: Clock, text: "Response within 24 hours" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary/[0.04] border-2 border-primary/15 rounded-2xl p-7">
              <p className="text-sm font-display font-semibold mb-4">Best for</p>
              <ul className="space-y-3">
                {["Local businesses wanting more leads", "Startups needing digital presence", "Service businesses scaling operations", "Brands ready for a website refresh"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 size={15} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Contact;
