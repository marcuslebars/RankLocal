import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

const Checkout = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Redirect to Stripe checkout link
    // Replace with your actual Stripe checkout link
    const stripeCheckoutUrl = process.env.REACT_APP_STRIPE_CHECKOUT_URL || "https://buy.stripe.com/test_placeholder";
    window.location.href = stripeCheckoutUrl;
  }, []);

  return (
    <main className="min-h-screen bg-dark-section flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="mb-6">
          <div className="w-16 h-16 rounded-full bg-[#00FFFF]/10 flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 border-4 border-[#00FFFF] border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
        <h1 className="font-display font-extrabold text-2xl md:text-3xl mb-3 text-dark-foreground">
          Redirecting to Checkout
        </h1>
        <p className="text-dark-foreground/60 text-base leading-relaxed">
          You're being redirected to complete your purchase. If you're not redirected automatically, please{" "}
          <a
            href={process.env.REACT_APP_STRIPE_CHECKOUT_URL || "#"}
            className="text-[#00FFFF] font-semibold hover:underline"
          >
            click here
          </a>
          .
        </p>
      </motion.div>
    </main>
  );
};

export default Checkout;
