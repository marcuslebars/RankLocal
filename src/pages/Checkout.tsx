import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Checkout = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const createCheckoutSession = async () => {
      try {
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to create checkout session');
        }

        const { url } = await response.json();
        window.location.href = url;
      } catch (err) {
        console.error('Checkout error:', err);
        setError('Something went wrong. Please try again or contact support.');
        setLoading(false);
      }
    };

    createCheckoutSession();
  }, []);

  if (error) {
    return (
      <main className="min-h-screen bg-dark-section flex items-center justify-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg w-full text-center"
        >
          <div className="rounded-3xl bg-card border-2 border-destructive/20 p-10 md:p-14">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
              <AlertCircle size={32} className="text-destructive" />
            </div>
            <h1 className="font-display font-extrabold text-2xl md:text-3xl mb-3 text-foreground">
              Checkout Error
            </h1>
            <p className="text-muted-foreground text-base mb-8">{error}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="lg" className="flex-1" onClick={() => window.location.reload()}>
                Try Again
              </Button>
              <Button variant="hero-outline" size="lg" className="flex-1" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-dark-section flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        </div>

        <h1 className="font-display font-extrabold text-2xl md:text-3xl mb-3 text-dark-foreground">
          Redirecting to Checkout
        </h1>
        <p className="text-dark-foreground/60 text-base leading-relaxed mb-10">
          You're being securely redirected to complete your purchase of the{" "}
          <strong className="text-dark-foreground">Local Launch Kit ($997)</strong>.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-dark-foreground/50 mb-8">
          <span className="flex items-center gap-2 justify-center"><ShieldCheck size={14} className="text-primary" /> Secure payment</span>
          <span className="flex items-center gap-2 justify-center"><Zap size={14} className="text-primary" /> Instant access</span>
          <span className="flex items-center gap-2 justify-center"><Clock size={14} className="text-primary" /> Starts within 24h</span>
        </div>
      </motion.div>
    </main>
  );
};

export default Checkout;
