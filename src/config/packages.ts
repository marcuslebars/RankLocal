export type OnboardingType = "local_launch" | "website" | "automation" | "growth" | "addon";

export interface PackageField {
  name: string;
  label: string;
  required: boolean;
  type: "text" | "url" | "select" | "textarea";
  placeholder?: string;
  options?: { value: string; label: string }[];
}

export interface PackageConfig {
  key: string;
  label: string;
  category: "local_launch" | "website" | "automation" | "growth" | "addon";
  price: number;
  priceDisplay: string;
  stripePriceId?: string;
  onboardingType: OnboardingType;
  headline: string;
  subheadline: string;
  successHeadline: string;
  successMessage: string;
  requiredFields: PackageField[];
  optionalFields: PackageField[];
  internalOrderType: string;
}

export const PACKAGES: Record<string, PackageConfig> = {
  local_launch_basic: {
    key: "local_launch_basic",
    label: "Local Launch Kit — Basic",
    category: "local_launch",
    price: 49700,
    priceDisplay: "$497",
    stripePriceId: "price_basic_placeholder",
    onboardingType: "local_launch",
    headline: "Let's Get Your Local Presence Set Up",
    subheadline: "Complete this quick form so we can begin optimizing your Google Business Profile and local citations.",
    successHeadline: "You're all set.",
    successMessage: "We'll begin shortly.",
    requiredFields: [
      { name: "businessName", label: "Business Name", required: true, type: "text", placeholder: "Your business name" },
      { name: "industry", label: "Industry", required: true, type: "select", options: [
        { value: "plumbing", label: "Plumbing" },
        { value: "hvac", label: "HVAC" },
        { value: "electrical", label: "Electrical" },
        { value: "landscaping", label: "Landscaping" },
        { value: "cleaning", label: "Cleaning" },
        { value: "roofing", label: "Roofing" },
        { value: "construction", label: "Construction" },
        { value: "marine", label: "Marine / Boat Services" },
        { value: "automotive", label: "Automotive" },
        { value: "restaurant", label: "Restaurant / Food" },
        { value: "health", label: "Health & Wellness" },
        { value: "retail", label: "Retail" },
        { value: "other", label: "Other" },
      ]},
      { name: "primaryLocation", label: "Primary Location / Service Area", required: true, type: "text", placeholder: "e.g., Toronto, ON" },
      { name: "contactName", label: "Contact Name", required: true, type: "text", placeholder: "Your full name" },
      { name: "email", label: "Email Address", required: true, type: "text", placeholder: "name@email.com" },
      { name: "phone", label: "Phone Number", required: true, type: "text", placeholder: "(555) 000-0000" },
    ],
    optionalFields: [
      { name: "websiteUrl", label: "Website URL", required: false, type: "url", placeholder: "https://yourwebsite.com" },
      { name: "googleBusinessProfile", label: "Google Business Profile Link", required: false, type: "url", placeholder: "https://maps.google.com/..." },
      { name: "targetServices", label: "Target Services", required: false, type: "text", placeholder: "e.g., Emergency plumbing, water heater installation" },
      { name: "notes", label: "Additional Notes", required: false, type: "textarea", placeholder: "Anything else we should know?" },
    ],
    internalOrderType: "launch_kit_basic",
  },

  local_launch_pro: {
    key: "local_launch_pro",
    label: "Local Launch Kit — Pro",
    category: "local_launch",
    price: 99700,
    priceDisplay: "$997",
    stripePriceId: "price_pro_placeholder",
    onboardingType: "local_launch",
    headline: "Let's Get Your Local Presence Set Up",
    subheadline: "Complete this quick form so we can begin optimizing your Google Business Profile, building citations, and creating your growth strategy.",
    successHeadline: "You're all set.",
    successMessage: "We'll begin shortly.",
    requiredFields: [
      { name: "businessName", label: "Business Name", required: true, type: "text", placeholder: "Your business name" },
      { name: "industry", label: "Industry", required: true, type: "select", options: [
        { value: "plumbing", label: "Plumbing" },
        { value: "hvac", label: "HVAC" },
        { value: "electrical", label: "Electrical" },
        { value: "landscaping", label: "Landscaping" },
        { value: "cleaning", label: "Cleaning" },
        { value: "roofing", label: "Roofing" },
        { value: "construction", label: "Construction" },
        { value: "marine", label: "Marine / Boat Services" },
        { value: "automotive", label: "Automotive" },
        { value: "restaurant", label: "Restaurant / Food" },
        { value: "health", label: "Health & Wellness" },
        { value: "retail", label: "Retail" },
        { value: "other", label: "Other" },
      ]},
      { name: "primaryLocation", label: "Primary Location / Service Area", required: true, type: "text", placeholder: "e.g., Toronto, ON or Georgian Bay area" },
      { name: "contactName", label: "Contact Name", required: true, type: "text", placeholder: "Your full name" },
      { name: "email", label: "Email Address", required: true, type: "text", placeholder: "name@email.com" },
      { name: "phone", label: "Phone Number", required: true, type: "text", placeholder: "(555) 000-0000" },
    ],
    optionalFields: [
      { name: "websiteUrl", label: "Website URL", required: false, type: "url", placeholder: "https://yourwebsite.com" },
      { name: "googleBusinessProfile", label: "Google Business Profile Link", required: false, type: "url", placeholder: "https://maps.google.com/..." },
      { name: "targetServices", label: "Target Services / Keywords", required: false, type: "textarea", placeholder: "e.g., Emergency plumbing, water heater installation, drain cleaning" },
      { name: "competitors", label: "Main Competitors", required: false, type: "textarea", placeholder: "Who do you compete with locally?" },
      { name: "notes", label: "Additional Notes", required: false, type: "textarea", placeholder: "Anything else we should know?" },
    ],
    internalOrderType: "launch_kit_pro",
  },

  website_starter: {
    key: "website_starter",
    label: "Website Package — Starter",
    category: "website",
    price: 149700,
    priceDisplay: "$1,497",
    onboardingType: "website",
    headline: "Let's Build Your Website",
    subheadline: "Tell us about your business so we can create a website that converts visitors into customers.",
    successHeadline: "You're all set.",
    successMessage: "We'll be in touch shortly to start building your website.",
    requiredFields: [
      { name: "businessName", label: "Business Name", required: true, type: "text", placeholder: "Your business name" },
      { name: "industry", label: "Industry", required: true, type: "select", options: [
        { value: "plumbing", label: "Plumbing" },
        { value: "hvac", label: "HVAC" },
        { value: "electrical", label: "Electrical" },
        { value: "landscaping", label: "Landscaping" },
        { value: "cleaning", label: "Cleaning" },
        { value: "roofing", label: "Roofing" },
        { value: "construction", label: "Construction" },
        { value: "marine", label: "Marine / Boat Services" },
        { value: "automotive", label: "Automotive" },
        { value: "restaurant", label: "Restaurant / Food" },
        { value: "health", label: "Health & Wellness" },
        { value: "retail", label: "Retail" },
        { value: "other", label: "Other" },
      ]},
      { name: "contactName", label: "Contact Name", required: true, type: "text", placeholder: "Your full name" },
      { name: "email", label: "Email Address", required: true, type: "text", placeholder: "name@email.com" },
      { name: "phone", label: "Phone Number", required: true, type: "text", placeholder: "(555) 000-0000" },
    ],
    optionalFields: [
      { name: "currentWebsite", label: "Current Website (if any)", required: false, type: "url", placeholder: "https://currentwebsite.com" },
      { name: "primaryLocation", label: "Primary Location", required: false, type: "text", placeholder: "City, Province/State" },
      { name: "targetPages", label: "Pages You Need", required: false, type: "textarea", placeholder: "e.g., Home, About, Services, Contact (up to 5 pages)" },
      { name: "designPreferences", label: "Design Preferences", required: false, type: "textarea", placeholder: "Any design preferences or examples you like?" },
      { name: "notes", label: "Additional Notes", required: false, type: "textarea", placeholder: "Anything else we should know?" },
    ],
    internalOrderType: "website_starter",
  },

  website_growth: {
    key: "website_growth",
    label: "Website Package — Growth",
    category: "website",
    price: 249700,
    priceDisplay: "$2,497",
    onboardingType: "website",
    headline: "Let's Build Your High-Converting Website",
    subheadline: "Tell us about your business so we can create a conversion-optimized website that drives real results.",
    successHeadline: "You're all set.",
    successMessage: "We'll be in touch shortly to start building your website.",
    requiredFields: [
      { name: "businessName", label: "Business Name", required: true, type: "text", placeholder: "Your business name" },
      { name: "industry", label: "Industry", required: true, type: "select", options: [
        { value: "plumbing", label: "Plumbing" },
        { value: "hvac", label: "HVAC" },
        { value: "electrical", label: "Electrical" },
        { value: "landscaping", label: "Landscaping" },
        { value: "cleaning", label: "Cleaning" },
        { value: "roofing", label: "Roofing" },
        { value: "construction", label: "Construction" },
        { value: "marine", label: "Marine / Boat Services" },
        { value: "automotive", label: "Automotive" },
        { value: "restaurant", label: "Restaurant / Food" },
        { value: "health", label: "Health & Wellness" },
        { value: "retail", label: "Retail" },
        { value: "other", label: "Other" },
      ]},
      { name: "primaryLocation", label: "Primary Location", required: true, type: "text", placeholder: "City, Province/State" },
      { name: "contactName", label: "Contact Name", required: true, type: "text", placeholder: "Your full name" },
      { name: "email", label: "Email Address", required: true, type: "text", placeholder: "name@email.com" },
      { name: "phone", label: "Phone Number", required: true, type: "text", placeholder: "(555) 000-0000" },
    ],
    optionalFields: [
      { name: "currentWebsite", label: "Current Website (if any)", required: false, type: "url", placeholder: "https://currentwebsite.com" },
      { name: "targetPages", label: "Pages You Need", required: false, type: "textarea", placeholder: "e.g., Home, About, Services, Contact, Blog (up to 10 pages)" },
      { name: "mainGoal", label: "Primary Goal for Website", required: false, type: "select", options: [
        { value: "leads", label: "Generate more leads" },
        { value: "bookings", label: "Online bookings/reservations" },
        { value: "calls", label: "Phone calls" },
        { value: "info", label: "Provide information" },
        { value: "sales", label: "Sell products/services" },
      ]},
      { name: "designPreferences", label: "Design Preferences", required: false, type: "textarea", placeholder: "Any design preferences or examples you like?" },
      { name: "integrations", label: "Required Integrations", required: false, type: "textarea", placeholder: "e.g., CRM, booking system, email marketing" },
      { name: "notes", label: "Additional Notes", required: false, type: "textarea", placeholder: "Anything else we should know?" },
    ],
    internalOrderType: "website_growth",
  },

  website_pro: {
    key: "website_pro",
    label: "Website Package — Pro",
    category: "website",
    price: 399700,
    priceDisplay: "$3,997",
    onboardingType: "website",
    headline: "Let's Build Your Premium Website",
    subheadline: "Tell us about your business so we can create a stunning, high-performance website that dominates your market.",
    successHeadline: "You're all set.",
    successMessage: "We'll be in touch shortly to start building your website.",
    requiredFields: [
      { name: "businessName", label: "Business Name", required: true, type: "text", placeholder: "Your business name" },
      { name: "industry", label: "Industry", required: true, type: "select", options: [
        { value: "plumbing", label: "Plumbing" },
        { value: "hvac", label: "HVAC" },
        { value: "electrical", label: "Electrical" },
        { value: "landscaping", label: "Landscaping" },
        { value: "cleaning", label: "Cleaning" },
        { value: "roofing", label: "Roofing" },
        { value: "construction", label: "Construction" },
        { value: "marine", label: "Marine / Boat Services" },
        { value: "automotive", label: "Automotive" },
        { value: "restaurant", label: "Restaurant / Food" },
        { value: "health", label: "Health & Wellness" },
        { value: "retail", label: "Retail" },
        { value: "other", label: "Other" },
      ]},
      { name: "primaryLocation", label: "Primary Location", required: true, type: "text", placeholder: "City, Province/State" },
      { name: "contactName", label: "Contact Name", required: true, type: "text", placeholder: "Your full name" },
      { name: "email", label: "Email Address", required: true, type: "text", placeholder: "name@email.com" },
      { name: "phone", label: "Phone Number", required: true, type: "text", placeholder: "(555) 000-0000" },
    ],
    optionalFields: [
      { name: "currentWebsite", label: "Current Website (if any)", required: false, type: "url", placeholder: "https://currentwebsite.com" },
      { name: "targetPages", label: "Pages You Need", required: false, type: "textarea", placeholder: "List all pages you need (unlimited)" },
      { name: "mainGoal", label: "Primary Goal for Website", required: false, type: "select", options: [
        { value: "leads", label: "Generate more leads" },
        { value: "bookings", label: "Online bookings/reservations" },
        { value: "calls", label: "Phone calls" },
        { value: "info", label: "Provide information" },
        { value: "sales", label: "Sell products/services" },
      ]},
      { name: "designPreferences", label: "Design Preferences", required: false, type: "textarea", placeholder: "Any design preferences or examples you like?" },
      { name: "integrations", label: "Required Integrations", required: false, type: "textarea", placeholder: "e.g., CRM, booking system, payment processor, email marketing" },
      { name: "competitors", label: "Main Competitors", required: false, type: "textarea", placeholder: "Who do you compete with online?" },
      { name: "notes", label: "Additional Notes", required: false, type: "textarea", placeholder: "Anything else we should know?" },
    ],
    internalOrderType: "website_pro",
  },

  automation_starter: {
    key: "automation_starter",
    label: "Automation Setup — Starter",
    category: "automation",
    price: 49700,
    priceDisplay: "$497",
    onboardingType: "automation",
    headline: "Let's Set Up Your First Automation",
    subheadline: "Tell us about your business and the process you want to automate.",
    successHeadline: "You're all set.",
    successMessage: "We'll be in touch shortly to start building your automation.",
    requiredFields: [
      { name: "businessName", label: "Business Name", required: true, type: "text", placeholder: "Your business name" },
      { name: "contactName", label: "Contact Name", required: true, type: "text", placeholder: "Your full name" },
      { name: "email", label: "Email Address", required: true, type: "text", placeholder: "name@email.com" },
      { name: "phone", label: "Phone Number", required: true, type: "text", placeholder: "(555) 000-0000" },
    ],
    optionalFields: [
      { name: "websiteUrl", label: "Website URL", required: false, type: "url", placeholder: "https://yourwebsite.com" },
      { name: "automationGoal", label: "What do you want to automate?", required: false, type: "textarea", placeholder: "e.g., Send automated responses to new leads, follow up with customers" },
      { name: "currentTools", label: "Tools You Currently Use", required: false, type: "textarea", placeholder: "e.g., Gmail, Slack, HubSpot, Calendly" },
      { name: "notes", label: "Additional Notes", required: false, type: "textarea", placeholder: "Anything else we should know?" },
    ],
    internalOrderType: "automation_starter",
  },

  automation_growth: {
    key: "automation_growth",
    label: "Automation Setup — Growth",
    category: "automation",
    price: 99700,
    priceDisplay: "$997",
    onboardingType: "automation",
    headline: "Let's Build Your Automation System",
    subheadline: "Tell us about your business and the workflows you need.",
    successHeadline: "You're all set.",
    successMessage: "We'll be in touch shortly to start building your automation system.",
    requiredFields: [
      { name: "businessName", label: "Business Name", required: true, type: "text", placeholder: "Your business name" },
      { name: "contactName", label: "Contact Name", required: true, type: "text", placeholder: "Your full name" },
      { name: "email", label: "Email Address", required: true, type: "text", placeholder: "name@email.com" },
      { name: "phone", label: "Phone Number", required: true, type: "text", placeholder: "(555) 000-0000" },
    ],
    optionalFields: [
      { name: "websiteUrl", label: "Website URL", required: false, type: "url", placeholder: "https://yourwebsite.com" },
      { name: "automationGoal", label: "What workflows do you want to automate?", required: false, type: "textarea", placeholder: "e.g., Lead capture, follow-up sequences, appointment reminders, CRM updates" },
      { name: "currentTools", label: "Tools You Currently Use", required: false, type: "textarea", placeholder: "e.g., Gmail, Slack, HubSpot, Calendly, QuickBooks" },
      { name: "leadVolume", label: "Estimated Monthly Lead Volume", required: false, type: "text", placeholder: "e.g., 50 leads/month" },
      { name: "notes", label: "Additional Notes", required: false, type: "textarea", placeholder: "Anything else we should know?" },
    ],
    internalOrderType: "automation_growth",
  },

  automation_scale: {
    key: "automation_scale",
    label: "Automation Setup — Scale",
    category: "automation",
    price: 199700,
    priceDisplay: "$1,997",
    onboardingType: "automation",
    headline: "Let's Build Your Full Automation System",
    subheadline: "Tell us about your business and complex automation needs.",
    successHeadline: "You're all set.",
    successMessage: "We'll be in touch shortly to start building your automation system.",
    requiredFields: [
      { name: "businessName", label: "Business Name", required: true, type: "text", placeholder: "Your business name" },
      { name: "contactName", label: "Contact Name", required: true, type: "text", placeholder: "Your full name" },
      { name: "email", label: "Email Address", required: true, type: "text", placeholder: "name@email.com" },
      { name: "phone", label: "Phone Number", required: true, type: "text", placeholder: "(555) 000-0000" },
    ],
    optionalFields: [
      { name: "websiteUrl", label: "Website URL", required: false, type: "url", placeholder: "https://yourwebsite.com" },
      { name: "automationGoal", label: "Describe your automation needs in detail", required: false, type: "textarea", placeholder: "e.g., Full funnel automation, lead scoring, multi-step follow-up sequences, CRM integrations" },
      { name: "currentTools", label: "Tools You Currently Use", required: false, type: "textarea", placeholder: "e.g., Gmail, Slack, HubSpot, Calendly, QuickBooks, Stripe" },
      { name: "leadVolume", label: "Estimated Monthly Lead Volume", required: false, type: "text", placeholder: "e.g., 200+ leads/month" },
      { name: "teamSize", label: "Team Size", required: false, type: "text", placeholder: "How many people on your team?" },
      { name: "notes", label: "Additional Notes", required: false, type: "textarea", placeholder: "Anything else we should know?" },
    ],
    internalOrderType: "automation_scale",
  },
};

export const DEFAULT_PACKAGE_KEY = "local_launch_pro";

export function getPackage(key: string | null): PackageConfig | null {
  if (!key) return null;
  return PACKAGES[key] || null;
}

export function getPackageOrDefault(key: string | null): PackageConfig {
  return getPackage(key) || PACKAGES[DEFAULT_PACKAGE_KEY];
}

export const PACKAGE_SELECTOR_OPTIONS = Object.values(PACKAGES).map((pkg) => ({
  value: pkg.key,
  label: `${pkg.label} — ${pkg.priceDisplay}`,
  category: pkg.category,
}));
