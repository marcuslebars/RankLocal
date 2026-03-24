import { useEffect } from "react";
import { STRIPE_PAYMENT_LINK } from "@/config/stripe";

const Checkout = () => {
  useEffect(() => {
    // Redirect directly to Stripe Payment Link
    window.location.href = STRIPE_PAYMENT_LINK;
  }, []);

  return (
    <main className="min-h-screen bg-dark-section flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
        <h1 className="font-display font-extrabold text-2xl md:text-3xl mb-3 text-dark-foreground">
          Redirecting to Checkout
        </h1>
        <p className="text-dark-foreground/60 text-base">
          You're being redirected to complete your purchase...
        </p>
      </div>
    </main>
  );
};

export default Checkout;
