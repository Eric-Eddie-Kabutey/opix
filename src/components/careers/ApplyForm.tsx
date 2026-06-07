"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { inputBase } from "@/lib/theme";

// Application form — fields from Careers §10 General Application.
// NOTE: front-end only. Submission is simulated (no backend in scope); a real
// implementation would POST to a Server Action / API route.
export function ApplyForm({ roleTitle }: { roleTitle?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const about = (form.elements.namedItem("about") as HTMLTextAreaElement)?.value ?? "";
    if (about.trim().length < 200) {
      setError("Please tell us at least 200 characters about yourself and why OPIX.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-teal-500/30 bg-teal-500/5 p-10 text-center">
        <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/15 text-teal-600">
          <Icon name="check" className="h-6 w-6" strokeWidth={2.5} />
        </span>
        <h2 className="mt-5 font-display text-2xl text-navy-900">Thank you for your interest!</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
          We&apos;ll review your application and get back to you within 10 business days.
        </p>
      </div>
    );
  }

  // Field styles pull from the centralized input token (src/lib/theme.ts → inputBase).
  const field = inputBase;
  const label = "mb-1.5 block text-sm font-medium text-foreground";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {roleTitle && (
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
          Applying for <span className="font-semibold text-navy-900">{roleTitle}</span>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={label}>Full Name <span className="text-danger">*</span></label>
          <input id="fullName" name="fullName" required className={field} placeholder="Aminata Jallow" />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email Address <span className="text-danger">*</span></label>
          <input id="email" name="email" type="email" required className={field} placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone Number</label>
          <input id="phone" name="phone" type="tel" className={field} placeholder="+220 …" />
        </div>
        <div>
          <label htmlFor="linkedin" className={label}>LinkedIn Profile</label>
          <input id="linkedin" name="linkedin" type="url" className={field} placeholder="https://linkedin.com/in/…" />
        </div>
        <div>
          <label htmlFor="portfolio" className={label}>Portfolio / GitHub / Website</label>
          <input id="portfolio" name="portfolio" type="url" className={field} placeholder="https://…" />
        </div>
        <div>
          <label htmlFor="role" className={label}>Role you&apos;re interested in</label>
          <input id="role" name="role" defaultValue={roleTitle} className={field} placeholder="e.g. Senior Backend Engineer" />
        </div>
      </div>

      <div>
        <label htmlFor="about" className={label}>
          Tell us about yourself and why OPIX <span className="text-danger">*</span>
        </label>
        <textarea
          id="about"
          name="about"
          required
          rows={5}
          minLength={200}
          aria-describedby="about-hint"
          className={`${inputBase} h-auto py-2.5 leading-relaxed`}
          placeholder="What would you build? What problem would you solve? Why are you a great fit?"
        />
        <p id="about-hint" className="mt-1.5 text-xs text-slate-400">Minimum 200 characters.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cv" className={label}>Upload CV <span className="text-danger">*</span></label>
          <input
            id="cv"
            name="cv"
            type="file"
            required
            accept=".pdf,.doc,.docx"
            className="block w-full text-sm text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2.5 file:text-sm file:font-medium file:text-white hover:file:bg-primary"
          />
          <p className="mt-1.5 text-xs text-slate-400">PDF / DOC / DOCX, max 5MB.</p>
        </div>
        <div>
          <label htmlFor="source" className={label}>How did you hear about OPIX?</label>
          <select id="source" name="source" className={field}>
            <option>LinkedIn</option>
            <option>Twitter</option>
            <option>Referral</option>
            <option>Event</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      {error && (
        <p role="alert" className="rounded-lg bg-danger/10 px-4 py-2.5 text-sm text-danger">
          {error}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Submit Application
      </Button>
    </form>
  );
}
