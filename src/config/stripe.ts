/**
 * Stripe Configuration
 * Centralized payment link for the Local Launch Kit
 */

export const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/6oU14ndCX8gh6yK0xU2B200";

/**
 * Redirect to Stripe Payment Link
 * Called when user clicks "Get Started" or "Apply the System"
 */
export const redirectToCheckout = () => {
  window.location.href = STRIPE_PAYMENT_LINK;
};
