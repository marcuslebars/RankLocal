import { PACKAGES, DEFAULT_PACKAGE_KEY } from "./packages";

const DEFAULT_STRIPE_PAYMENT_LINK = "https://buy.stripe.com/6oU14ndCX8gh6yK0xU2B200";

const RAW_PACKAGE_PAYMENT_LINKS: Record<string, string> = {
  local_launch_basic: "https://buy.stripe.com/bJe5kDfL5fIJ1eq1BY2B201",
  local_launch_pro: DEFAULT_STRIPE_PAYMENT_LINK,
  website_starter: "https://buy.stripe.com/28E14n9mH5453myfsO2B202",
  website_growth: "https://buy.stripe.com/dRm3cv1Uf0NP4qCa8u2B203",
  website_pro: "https://buy.stripe.com/3cI3cv2Yj0NPe1cfsO2B204",
  automation_starter: "https://buy.stripe.com/eVqcN51Ufaop9KWeoK2B205",
  automation_growth: "https://buy.stripe.com/3cI6oH56r7cd8GSbcy2B206",
  automation_scale: "https://buy.stripe.com/28E7sLgP9bst8GS94q2B208",
  growth_starter: "https://buy.stripe.com/3cI3cvbuP6895uG80m2B207",
  growth_growth: "https://buy.stripe.com/00waEXcyTcwx0am80m2B209",
  growth_dominance: "https://buy.stripe.com/3cI00j7ez8gh2iubcy2B20a",
};

function withPackageTracking(url: string, packageKey: string): string {
  const paymentUrl = new URL(url);
  paymentUrl.searchParams.set("utm_source", "ranklocal");
  paymentUrl.searchParams.set("utm_campaign", packageKey);
  return paymentUrl.toString();
}

export const STRIPE_PAYMENT_LINK = withPackageTracking(
  DEFAULT_STRIPE_PAYMENT_LINK,
  DEFAULT_PACKAGE_KEY
);

export const PACKAGE_PAYMENT_LINKS: Record<string, string> = Object.fromEntries(
  Object.entries(RAW_PACKAGE_PAYMENT_LINKS).map(([packageKey, url]) => [
    packageKey,
    withPackageTracking(url, packageKey),
  ])
);

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
