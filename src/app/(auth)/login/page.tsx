import type { Metadata } from "next";
import { AuthShell } from "../AuthShell";
import { pageMeta } from "@/content/seo";

export const metadata: Metadata = pageMeta({
  title: "Log In to OPIX",
  description: "Log in to your OPIX developer dashboard.",
  path: "/login",
});

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Log in to your OPIX dashboard to manage verifications, consent, and integrations."
      cta={{ label: "Continue to log in", href: "/contact" }}
      alt={{ text: "New to OPIX?", label: "Create an account", href: "/signup" }}
    />
  );
}
