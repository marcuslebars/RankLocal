import { PACKAGES, DEFAULT_PACKAGE_KEY } from "./packages";

export const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/6oU14ndCX8gh6yK0xU2B200";

export const PACKAGE_PAYMENT_LINKS: Record<string, string> = {
  local_launch_basic: "https://buy.stripe.com/placeholder_basic",
  local_launch_pro: STRIPE_PAYMENT_LINK,
  website_starter: "https://buy.stripe.com/placeholder_website_starter",
  website_growth: "https://buy.stripe.com/placeholder_website_growth",
  website_pro: "https://buy.stripe.com/placeholder_website_pro",
  automation_starter: "https://buy.stripe.com/placeholder_automation_starter",
  automation_growth: "https://buy.stripe.com/placeholder_automation_growth",
  automation_scale: "https://buy.stripe.com/placeholder_automation_scale",
};

export const SELECTED_PACKAGE_KEY = "ranklocal_selected_package";

export function getSelectedPackageKey(): string {
  return localStorage.getItem(SELECTED_PACKAGE_KEY) || DEFAULT_PACKAGE_KEY;
}

export function setSelectedPackageKey(key: string): void {
  localStorage.setItem(SELECTED_PACKAGE_KEY, key);
}

export function clearSelectedPackage(): void {
  localStorage.removeItem(SELECTED_PACKAGE_KEY);
}

export function getPaymentLinkForPackage(packageKey: string): string {
  return PACKAGE_PAYMENT_LINKS[packageKey] || STRIPE_PAYMENT_LINK;
}

export function redirectToCheckout(packageKey?: string): void {
  const key = packageKey || getSelectedPackageKey();
  const paymentLink = getPaymentLinkForPackage(key);
  window.location.href = paymentLink;
}

export function selectPackageAndRedirect(packageKey: string): void {
  setSelectedPackageKey(packageKey);
  redirectToCheckout(packageKey);
}
