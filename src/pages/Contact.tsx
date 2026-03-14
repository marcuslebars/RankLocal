import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-dark-section pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Get In Touch</p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-6">Let's map out your<br />growth plan.</h1>
            <p className="text-dark-foreground/60 text-lg leading-relaxed">
              Fill out the form below and we'll get back to you within 24 hours with a free assessment of your current digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-card rounded-xl p-12 border border-border text-center">
                <CheckCircle2 size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-display font-bold text-2xl mb-2">Message Received</h3>
                <p className="text-muted-foreground">We'll review your info and get back to you within 24 hours. Talk soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">Your Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow" placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">Business Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow" placeholder="Smith Dental" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow" placeholder="jane@smithdental.com" />
                  </div>
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">Phone (Optional)</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow" placeholder="(416) 555-0123" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">What do you need help with?</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow">
                    <option>Local SEO</option>
                    <option>Digital Advertising</option>
                    <option>Web Design</option>
                    <option>Social Media</option>
                    <option>Full Growth Package</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">Tell us about your goals</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none" placeholder="What's your biggest growth challenge right now?" />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full sm:w-auto">
                  Send Message <ArrowRight size={16} />
                </Button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-display font-bold text-lg mb-4">What happens next?</h3>
              <ul className="space-y-4">
                {[
                  "We review your submission and research your business.",
                  "Within 24 hours, we send you a brief audit of your current online presence.",
                  "We schedule a free 30-minute strategy call to discuss your growth plan.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-display font-bold text-primary text-sm mt-0.5">{`0${i + 1}`}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span className="text-sm">hello@ranklocal.ca</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm">Toronto, Canada</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-primary" />
                <span className="text-sm">Response within 24 hours</span>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="text-sm font-medium mb-2">Best for</p>
              <ul className="space-y-2">
                {["Local businesses wanting more leads", "Startups needing digital presence", "Service businesses scaling operations", "Brands ready for a website refresh"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
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
