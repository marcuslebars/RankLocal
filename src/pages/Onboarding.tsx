import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles, AlertCircle, ShieldCheck } from "lucide-react";

const WEBHOOK_URL = import.meta.env.VITE_ONBOARDING_WEBHOOK_URL || "";

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors";

const Onboarding = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  
  const [formData, setFormData] = useState({
    businessName: "",
    websiteUrl: "",
    industry: "",
    primaryLocation: "",
    googleBusinessProfile: "",
    targetServices: "",
    contactName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(!!sessionId);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (WEBHOOK_URL) {
        const response = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            ...formData,
            stripe_session_id: sessionId,
            _subject: `New Onboarding: ${formData.businessName}`,
            _timestamp: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error(`Submission failed (${response.status})`);
        }
      }
      setSubmitted(true);
    } catch (err) {
      console.error("Onboarding submission error:", err);
      setError(
        "Something went wrong. Please try again or email us at hello@ranklocal.ca."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-light-section flex items-center justify-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg w-full text-center"
        >
          <div className="mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <CheckCircle2 size={40} className="text-primary" />
            </div>
          </div>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
            You're all set.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            We'll begin shortly.
          </p>
          <div className="rounded-2xl bg-card border border-border p-6 text-left space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground">
                Your details have been received and are in our queue.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground">
                Expect a confirmation email at <strong className="text-foreground">{formData.email}</strong> within a few minutes.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground">
                Work begins within <strong className="text-foreground">24 hours</strong>.
              </p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Questions? Email us at{" "}
            <a href="mailto:hello@ranklocal.ca" className="text-primary hover:underline">
              hello@ranklocal.ca
            </a>
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-light-section">
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          {showPaymentSuccess && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-12 rounded-3xl bg-primary/5 border-2 border-primary/20 p-8 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck size={24} className="text-primary" />
                </div>
                <h2 className="font-display font-extrabold text-2xl mb-2">Payment Received — Let’s Get You Set Up</h2>
                <p className="text-muted-foreground text-sm">Your Local Launch Kit is confirmed. Complete onboarding so we can begin.</p>
              </div>
            </motion.div>
          )}

          <div className="mb-12 text-center">
            {!showPaymentSuccess && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles size={14} className="text-primary" />
                <span className="text-xs font-medium text-primary tracking-wide uppercase">
                  Local Launch Kit — Onboarding
                </span>
              </div>
            )}
            <h1 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
              {showPaymentSuccess ? "Onboarding Form" : "Let's Get You Set Up"}
            </h1>
            <p className="text-muted-foreground text-lg">
              We just need a few details to get started.
            </p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-3 rounded-xl bg-destructive/10 border border-destructive/20 p-4 mb-6"
            >
              <AlertCircle size={18} className="text-destructive mt-0.5 shrink-0" />
              <p className="text-sm text-destructive">{error}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="rounded-2xl bg-card border border-border p-6 space-y-5">
              <p className="font-display font-semibold text-sm uppercase tracking-[0.12em] text-muted-foreground">
                Business Information
              </p>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Business Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Your business name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Website URL</label>
                <input
                  type="url"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Industry <span className="text-primary">*</span>
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">Select an industry</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="hvac">HVAC</option>
                  <option value="electrical">Electrical</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="roofing">Roofing</option>
                  <option value="construction">Construction</option>
                  <option value="marine">Marine / Boat Services</option>
                  <option value="automotive">Automotive</option>
                  <option value="restaurant">Restaurant / Food</option>
                  <option value="health">Health & Wellness</option>
                  <option value="retail">Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Primary Location / Service Area <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="primaryLocation"
                  value={formData.primaryLocation}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="e.g., Toronto, ON or Georgian Bay area"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Google Business Profile Link{" "}
                  <span className="text-muted-foreground font-normal">(if exists)</span>
                </label>
                <input
                  type="url"
                  name="googleBusinessProfile"
                  value={formData.googleBusinessProfile}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="https://maps.google.com/..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Target Services</label>
                <input
                  type="text"
                  name="targetServices"
                  value={formData.targetServices}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="e.g., Emergency plumbing, water heater installation"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-card border border-border p-6 space-y-5">
              <p className="font-display font-semibold text-sm uppercase tracking-[0.12em] text-muted-foreground">
                Your Contact Details
              </p>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Contact Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Your full name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="name@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className={inputClass}
                  placeholder="Anything else we should know?"
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={loading}
            >
              {loading ? (
                "Submitting..."
              ) : (
                <>
                  Submit Onboarding <ArrowRight size={18} />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </SectionWrapper>
    </main>
  );
};

export default Onboarding;
