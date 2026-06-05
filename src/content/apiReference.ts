// API Reference — Developer Hub Content Guide §6 & §9
export type Endpoint = { method: "GET" | "POST" | "PATCH" | "DELETE"; path: string; description: string };
export type EndpointGroup = { name: string; icon: string; endpoints: Endpoint[] };

export const apiReference = {
  meta: {
    title: "API Reference | OPIX REST APIs",
    description:
      "Clean REST APIs for identity, verification, consent, escrow, and financial data. Documented with OpenAPI 3.0 and testable in the OPIX sandbox.",
  },
  label: "API Reference",
  headline: "Clean REST APIs. Auto-generated docs. Interactive playground.",
  intro:
    "Our Java Spring Boot backend exposes a comprehensive REST API organized around resources: Identity, Verification, Consent, Escrow, and Financial Data. Every endpoint is documented with OpenAPI 3.0, typed with full request/response schemas, and testable in our interactive sandbox.",
  securityNote:
    "All endpoints require mTLS for institutional clients and OAuth2 / FAPI-compliant bearer tokens. Rate limits: 1,000 requests/minute for standard tier, 10,000/minute for enterprise.",
  baseUrl: "https://api.opix.africa",
  groups: [
    {
      name: "Identity & KYC",
      icon: "fingerprint",
      endpoints: [
        { method: "POST", path: "/v1/kyc/register", description: "Enroll new customer with biometric data" },
        { method: "POST", path: "/v1/kyc/search", description: "Search verified profile by biometric token" },
        { method: "GET", path: "/v1/kyc/{profileId}", description: "Retrieve full KYC record" },
        { method: "PATCH", path: "/v1/kyc/{profileId}/revoke", description: "Revoke or suspend KYC status" },
        { method: "GET", path: "/v1/kyc/{profileId}/status", description: "Check current KYC level and validity" },
      ],
    },
    {
      name: "Background Verification",
      icon: "clipboard",
      endpoints: [
        { method: "POST", path: "/v1/verify/background", description: "Request employment/credential verification" },
        { method: "GET", path: "/v1/verify/background/{requestId}", description: "Check verification status" },
        { method: "POST", path: "/v1/verify/background/{requestId}/consent", description: "Submit candidate consent" },
      ],
    },
    {
      name: "Consent & Audit",
      icon: "shield",
      endpoints: [
        { method: "POST", path: "/v1/consent/grant", description: "Grant scoped consent for data access" },
        { method: "POST", path: "/v1/consent/revoke", description: "Revoke previously granted consent" },
        { method: "GET", path: "/v1/consent/{profileId}/history", description: "View all consent events" },
        { method: "GET", path: "/v1/audit/{profileId}/logs", description: "Retrieve immutable audit trail" },
      ],
    },
    {
      name: "Escrow & Payments",
      icon: "lock",
      endpoints: [
        { method: "POST", path: "/v1/escrow/create", description: "Create escrow contract for project" },
        { method: "POST", path: "/v1/escrow/{escrowId}/fund", description: "Lock funds in escrow" },
        { method: "POST", path: "/v1/escrow/{escrowId}/release", description: "Release funds to freelancer" },
        { method: "POST", path: "/v1/escrow/{escrowId}/dispute", description: "File dispute with evidence" },
        { method: "GET", path: "/v1/escrow/{escrowId}/status", description: "Check escrow status and history" },
      ],
    },
    {
      name: "Financial Aggregation",
      icon: "chart",
      endpoints: [
        { method: "POST", path: "/v1/financial/link-account", description: "Link bank or mobile money account" },
        { method: "GET", path: "/v1/financial/{profileId}/summary", description: "Get aggregated financial snapshot" },
        { method: "GET", path: "/v1/financial/{profileId}/transactions", description: "Retrieve transaction history" },
        { method: "GET", path: "/v1/financial/{profileId}/credit-score", description: "Get alternative credit score" },
      ],
    },
  ] satisfies EndpointGroup[],
  cta: { primary: { label: "Browse Full API Reference", href: "/developers/api-reference" }, secondary: { label: "Download OpenAPI Spec", href: "/api/opix-openapi-3.0.yaml" } },
};

// Multi-language code examples — Developer Hub §9
export type CodeExample = {
  title: string;
  tabs: { lang: string; label: string; code: string }[];
};

export const codeExamples: CodeExample[] = [
  {
    title: "New Customer Onboarding",
    tabs: [
      {
        lang: "java",
        label: "Java",
        code: `// Enroll a new customer with biometric data
KycEnrollmentRequest enrollment = KycEnrollmentRequest.builder()
    .fullName("Aminata Jallow")
    .dateOfBirth(LocalDate.of(1990, 5, 15))
    .nationalId("GM-123456-7")
    .biometricCapture(BiometricCapture.builder()
        .faceImage(faceImageBytes)
        .fingerprintTemplate(fingerprintBytes)
        .build())
    .build();

KycEnrollmentResponse response = opix.kyc().enroll(enrollment);
String profileId = response.getProfileId();`,
      },
      {
        lang: "tsx",
        label: "Next.js",
        code: `'use client';
import { BiometricCapture, KycForm, ConsentFlow } from '@opix/next-sdk';

export default function OnboardingPage() {
  const handleSubmit = async (formData) => {
    const res = await fetch('/api/kyc/enroll', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    return res.json();
  };

  return (
    <ConsentFlow purpose="kyc_enrollment" institution="My Bank">
      <BiometricCapture mode="face" onCapture={handleSubmit} />
    </ConsentFlow>
  );
}`,
      },
      {
        lang: "bash",
        label: "cURL",
        code: `curl -X POST https://api.opix.africa/v1/kyc/register \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "full_name": "Aminata Jallow",
    "national_id": "GM-123456-7",
    "biometric_token": "bt_abc123..."
  }'`,
      },
    ],
  },
  {
    title: "Cross-Bank Customer Verification",
    tabs: [
      {
        lang: "java",
        label: "Java",
        code: `// Bank B verifies a returning customer using biometric search
KycSearchRequest search = KycSearchRequest.builder()
    .biometricToken("bt_abc123def456")
    .purpose("account_opening")
    .institutionId("bank_b_001")
    .requestedFields(List.of(
        KycField.FULL_NAME, KycField.KYC_LEVEL))
    .build();

KycSearchResponse result = opix.kyc().search(search);
if (result.isFound() && result.isConsentGranted()) {
    createAccount(result.getProfile().getProfileId());
}`,
      },
      {
        lang: "tsx",
        label: "Next.js",
        code: `'use client';
import { BiometricCapture, ConsentNotification } from '@opix/next-sdk';
import { useState } from 'react';

export default function ReturningCustomer() {
  const [status, setStatus] = useState('scanning');

  const onScan = async (token) => {
    const res = await fetch('/api/kyc/search', {
      method: 'POST',
      body: JSON.stringify({ biometricToken: token }),
    });
    const r = await res.json();
    setStatus(r.found && r.consentGranted ? 'verified' : 'consent');
  };

  return <BiometricCapture mode="face" onCapture={onScan} />;
}`,
      },
    ],
  },
  {
    title: "Real-Time Consent Webhook",
    tabs: [
      {
        lang: "java",
        label: "Java",
        code: `@PostMapping("/webhooks/consent")
public ResponseEntity<Void> handleConsent(
    @RequestHeader("X-Opix-Signature") String signature,
    @RequestBody String payload) {

  if (!webhookVerifier.verify(signature, payload)) {
    return ResponseEntity.status(401).build();
  }
  ConsentWebhookEvent event = webhookVerifier.parse(payload);
  switch (event.getEventType()) {
    case CONSENT_GRANTED -> handleConsentGranted(event);
    case CONSENT_REVOKED -> handleConsentRevoked(event);
  }
  return ResponseEntity.ok().build();
}`,
      },
      {
        lang: "ts",
        label: "Next.js",
        code: `// app/api/webhooks/consent/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { verifyOpixWebhook } from '@opix/next-sdk/server';

export async function POST(request: NextRequest) {
  const signature = request.headers.get('X-Opix-Signature');
  const payload = await request.text();

  if (!(await verifyOpixWebhook(signature, payload))) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }
  const event = JSON.parse(payload);
  // handle event.type: consent.granted | consent.revoked | escrow.funded ...
  return NextResponse.json({ received: true });
}`,
      },
    ],
  },
];
