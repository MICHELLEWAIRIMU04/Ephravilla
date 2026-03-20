"use client";

import { useState } from "react";
import { services } from "@/lib/data/services";
import type { ContactFormData } from "@/types";

type Status = "idle" | "submitting" | "success" | "error";

const projectTypes = [
  { value: "residential", label: "Residential" },
  { value: "commercial",  label: "Commercial" },
  { value: "renovation",  label: "Renovation" },
  { value: "survey",      label: "Survey" },
];

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-red-500 text-xs mt-1.5" role="alert">{msg}</p>;
}

const inputBase =
  "w-full px-4 py-3 rounded-xl bg-stone-50 border text-stone-900 text-sm placeholder-stone-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent focus:bg-white hover:border-stone-300";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: "", email: "", phone: "", message: "",
    service: undefined, projectType: undefined,
  });
  const [errors,  setErrors]  = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status,  setStatus]  = useState<Status>("idle");

  function validate(): boolean {
    const e: typeof errors = {};
    if (!form.name.trim())       e.name    = "Full name is required";
    if (!form.email.trim())      e.email   = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                 e.email   = "Please enter a valid email address";
    if (!form.message.trim())    e.message = "Message is required";
    else if (form.message.trim().length < 20)
                                 e.message = "Please provide more detail (at least 20 characters)";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) {
        setForm({ name: "", email: "", phone: "", message: "", service: undefined, projectType: undefined });
        setErrors({});
      }
    } catch {
      setStatus("error");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value || undefined }));
    if (errors[name as keyof ContactFormData])
      setErrors((p) => ({ ...p, [name]: undefined }));
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-5">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-stone-900 font-black text-xl mb-2">Message sent!</h3>
        <p className="text-stone-500 text-sm mb-6 max-w-sm">
          Thank you for reaching out. We&apos;ll get back to you within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-amber-600 hover:text-amber-700 text-sm font-semibold transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">

      {/* Name + Phone */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className="block text-stone-700 text-xs font-bold uppercase tracking-widest mb-2">
            Full name <span className="text-red-500 font-normal normal-case">*</span>
          </label>
          <input
            id="cf-name" name="name" type="text" autoComplete="name"
            placeholder="John Kamau" value={form.name} onChange={handleChange}
            aria-required="true" aria-invalid={!!errors.name}
            className={`${inputBase} ${errors.name ? "border-red-300 bg-red-50" : "border-stone-200"}`}
          />
          <FieldError msg={errors.name} />
        </div>
        <div>
          <label htmlFor="cf-phone" className="block text-stone-700 text-xs font-bold uppercase tracking-widest mb-2">
            Phone / WhatsApp
          </label>
          <input
            id="cf-phone" name="phone" type="tel" autoComplete="tel"
            placeholder="0712 345 678" value={form.phone ?? ""} onChange={handleChange}
            className={`${inputBase} border-stone-200`}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="cf-email" className="block text-stone-700 text-xs font-bold uppercase tracking-widest mb-2">
          Email address <span className="text-red-500 font-normal normal-case">*</span>
        </label>
        <input
          id="cf-email" name="email" type="email" autoComplete="email"
          placeholder="you@example.com" value={form.email} onChange={handleChange}
          aria-required="true" aria-invalid={!!errors.email}
          className={`${inputBase} ${errors.email ? "border-red-300 bg-red-50" : "border-stone-200"}`}
        />
        <FieldError msg={errors.email} />
      </div>

      {/* Service + Project type */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-service" className="block text-stone-700 text-xs font-bold uppercase tracking-widest mb-2">
            Service of interest
          </label>
          <select
            id="cf-service" name="service"
            value={form.service ?? ""} onChange={handleChange}
            className={`${inputBase} border-stone-200 cursor-pointer`}
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.id} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-projectType" className="block text-stone-700 text-xs font-bold uppercase tracking-widest mb-2">
            Project type
          </label>
          <select
            id="cf-projectType" name="projectType"
            value={form.projectType ?? ""} onChange={handleChange}
            className={`${inputBase} border-stone-200 cursor-pointer`}
          >
            <option value="">Select type…</option>
            {projectTypes.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className="block text-stone-700 text-xs font-bold uppercase tracking-widest mb-2">
          Your message <span className="text-red-500 font-normal normal-case">*</span>
        </label>
        <textarea
          id="cf-message" name="message" rows={5}
          placeholder="Tell us about your project — location, size, timeline, budget…"
          value={form.message} onChange={handleChange}
          aria-required="true" aria-invalid={!!errors.message}
          className={`${inputBase} ${errors.message ? "border-red-300 bg-red-50" : "border-stone-200"} resize-none`}
        />
        <div className="flex items-center justify-between mt-1">
          <FieldError msg={errors.message} />
          <span className="text-stone-400 text-xs ml-auto">{form.message.length} chars</span>
        </div>
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl" role="alert">
          Something went wrong. Please try again or contact us directly on WhatsApp.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        aria-busy={status === "submitting"}
        className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-stone-300 disabled:cursor-not-allowed text-stone-950 font-bold py-4 rounded-xl text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
      >
        {status === "submitting" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send Message
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-stone-400 text-xs text-center">
        We respond within one business day · Mon–Sat 8 AM–5 PM
      </p>
    </form>
  );
}
