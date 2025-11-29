import { PageRoute } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// This check can be removed, it is just for tutorial purposes
export const hasEnvVars = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const PUBLIC_FOOTER_LINKS: PageRoute[] = [
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms & Conditions", href: "/tos" },
  { title: "Customer Support", href: "/customer-support" },
  { title: "Bug Reports", href: "/bug-reports" },
  { title: "Feature Requests", href: "/feature-requests" },
  { title: "Feedback", href: "/feedback" },
];

export const PUBLIC_HEADER_LINKS: PageRoute[] = [
  { title: "Pricing", href: "/pricing" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const PRIVATE_SIDEBAR_MAIN_LINKS: PageRoute[] = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Availability", href: "/availability" }, // track days off, shifts, vacations
  { title: "Teams & Roles", href: "/teams" },
  { title: "Time Off Requests", href: "/time-off-requests" }, // approve/reject leave
  { title: "Reports & Analytics", href: "/reports" },
];

export const PRIVATE_SIDEBAR_FOOTER_LINKS: PageRoute[] = [
  { title: "Settings", href: "/settings" },
  { title: "Billing", href: "/billing" },
  { title: "Support", href: "/support" },
];
