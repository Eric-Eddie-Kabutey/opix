// Pricing — Website Content Guide §12
export const pricing = {
  meta: {
    title: "Pricing | Pay for What You Use",
    description:
      "Transparent OPIX pricing for startups, growing fintechs, and enterprise banks. No hidden fees, no long-term contracts. Pay for what you use and scale as you grow.",
  },
  label: "Pricing",
  headline: "Pay for what you use. Scale as you grow.",
  intro:
    "No hidden fees. No long-term contracts. Transparent pricing that works for startups and enterprise banks alike.",
  tiers: [
    {
      name: "Starter",
      price: "Contact Us",
      audience: "Startups, SMEs, and pilot programs",
      features: [
        "Up to 1,000 verifications/month",
        "Standard REST API access",
        "Email support",
        "Basic analytics dashboard",
      ],
      cta: { label: "Get Started", href: "/signup" },
      featured: false,
    },
    {
      name: "Professional",
      price: "Contact Us",
      audience: "Growing fintechs, HR agencies, and mid-size banks",
      features: [
        "Up to 50,000 verifications/month",
        "Priority API access",
        "Dedicated support channel",
        "Advanced analytics & reporting",
        "Custom integration support",
      ],
      cta: { label: "Talk to Sales", href: "/contact" },
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      audience: "Large banks, insurers, and government bodies",
      features: [
        "Unlimited verifications",
        "SLA guarantees (99.9% uptime)",
        "Dedicated account manager",
        "On-premise deployment option",
        "Custom feature development",
        "Regulatory compliance consulting",
      ],
      cta: { label: "Contact Enterprise Team", href: "/contact" },
      featured: false,
    },
  ],
  footnote:
    "All tiers include biometric verification, consent management, audit logs, and standard security features. Volume discounts available for multi-year commitments.",
};
