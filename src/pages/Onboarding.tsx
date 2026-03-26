import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles, AlertCircle, ShieldCheck } from "lucide-react";
import { getPackageOrDefault, PACKAGES, type PackageField } from "@/config/packages";
import { getSelectedPackageKey, clearSelectedPackage } from "@/config/stripe";

const WEBHOOK_URL = import.meta.env.VITE_ONBOARDING_WEBHOOK_URL || "";

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors";

const Onboarding = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const sessionId = searchParams.get("session_id");
  const packageKeyFromUrl = searchParams.get("package");
  
  const [selectedPackage, setSelectedPackage] = useState(() => {
    return getPackageOrDefault(packageKeyFromUrl);
  });
  
  const [formData, setFormData] = useState(() => {
    const initial: Record<string, string> = {};
    selectedPackage.requiredFields.forEach((field) => {
      initial[field.name] = "";
    });
    selectedPackage.optionalFields.forEach((field) => {
      initial[field.name] = "";
    });
    return initial;
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(!!sessionId);

  useEffect(() => {
    if (!packageKeyFromUrl) {
      const storedPackageKey = getSelectedPackageKey();
      if (storedPackageKey && PACKAGES[storedPackageKey]) {
        setSelectedPackage(PACKAGES[storedPackageKey]);
        setSearchParams({ package: storedPackageKey }, { replace: true });
      }
    }
  }, [packageKeyFromUrl, setSearchParams]);

  useEffect(() => {
    const newInitial: Record<string, string> = {};
    selectedPackage.requiredFields.forEach((field) => {
      newInitial[field.name] = "";
    });
    selectedPackage.optionalFields.forEach((field) => {
      newInitial[field.name] = "";
    });
    setFormData((prev) => {
      const updated = { ...newInitial };
      Object.keys(prev).forEach((key) => {
        if (key in newInitial) {
          updated[key] = prev[key];
        }
      });
      return updated;
    });
  }, [selectedPackage]);

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
            package_key: selectedPackage.key,
            package_label: selectedPackage.label,
            _subject: `New Onboarding: ${selectedPackage.label} — ${formData.businessName || formData.contactName || "New Customer"}`,
            _timestamp: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error(`Submission failed (${response.status})`);
        }
      }
      
      clearSelectedPackage();
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

  const renderField = (field: PackageField) => {
    const commonProps = {
      name: field.name,
      value: formData[field.name] || "",
      onChange: handleChange,
      className: inputClass,
      placeholder: field.placeholder,
    };

    if (field.type === "select") {
      return (
        <select
          {...commonProps}
          required={field.required}
        >
          <option value="">Select {field.label.toLowerCase()}</option>
          {field.options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      );
    }

    if (field.type === "textarea") {
      return (
        <textarea
          {...commonProps}
          required={field.required}
          rows={4}
        />
      );
    }

    return (
      <input
        {...commonProps}
        type={field.type}
        required={field.required}
      />
    );
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
            {selectedPackage.successHeadline}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            {selectedPackage.successMessage}
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
                <h2 className="font-display font-extrabold text-2xl mb-2">Payment Received — Let's Get Started</h2>
                <p className="text-muted-foreground text-sm">Your {selectedPackage.label} is confirmed. Complete onboarding so we can begin.</p>
              </div>
            </motion.div>
          )}

          <div className="mb-12 text-center">
            {!showPaymentSuccess && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles size={14} className="text-primary" />
                <span className="text-xs font-medium text-primary tracking-wide uppercase">
                  {selectedPackage.label} — Onboarding
                </span>
              </div>
            )}
            <h1 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
              {showPaymentSuccess ? "Onboarding Form" : selectedPackage.headline}
            </h1>
            <p className="text-muted-foreground text-lg">
              {selectedPackage.subheadline}
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
            {selectedPackage.requiredFields.length > 0 && (
              <div className="rounded-2xl bg-card border border-border p-6 space-y-5">
                <p className="font-display font-semibold text-sm uppercase tracking-[0.12em] text-muted-foreground">
                  Required Information
                </p>

                {selectedPackage.requiredFields.map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-semibold mb-2">
                      {field.label} <span className="text-primary">*</span>
                    </label>
                    {renderField(field)}
                  </div>
                ))}
              </div>
            )}

            {selectedPackage.optionalFields.length > 0 && (
              <div className="rounded-2xl bg-card border border-border p-6 space-y-5">
                <p className="font-display font-semibold text-sm uppercase tracking-[0.12em] text-muted-foreground">
                  Optional Information
                </p>

                {selectedPackage.optionalFields.map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-semibold mb-2">
                      {field.label}
                    </label>
                    {renderField(field)}
                  </div>
                ))}
              </div>
            )}

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
