import type { Metadata } from "next";
import { AuthShell } from "../AuthShell";
import { pageMeta } from "@/content/seo";

export const metadata: Metadata = pageMeta({
  title: "Create Your OPIX Account",
  description: "Sign up for OPIX and get instant sandbox access — no credit card, no approval required.",
  path: "/signup",
});

export default function SignupPage() {
  return (
    <AuthShell
      title="Create your account"
      subtitle="Free sandbox access. No credit card. No approval required. Start building in minutes."
      cta={{ label: "Continue to sign up", href: "/contact" }}
      alt={{ text: "Already have an account?", label: "Log in", href: "/login" }}
    />
  );
}
