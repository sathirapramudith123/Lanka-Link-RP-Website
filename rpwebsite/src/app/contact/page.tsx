"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { contact, site } from "@/data/content";

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="card flex items-start gap-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          {label}
        </p>
        <p className="mt-1 text-sm text-slate-700">{value}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: contact.subjects[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `From: ${form.name} (${form.email})\n\n${form.message}`;
    const mailto = `mailto:${contact.generalEmail}?subject=${encodeURIComponent(
      `[${site.projectId}] ${form.subject}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle={`Have questions about ${site.projectId}? Interested in collaboration or feedback? We'd love to hear from you.`}
      />
      <div className="container-page py-14">

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="font-display text-lg font-bold text-slate-900">
            Reach Out to the Team
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Whether you&apos;re a researcher, a collaborator, or someone from{" "}
            {site.university} faculty, feel free to get in touch.
          </p>

          <div className="mt-6 space-y-4">
            <InfoCard
              label="General Email"
              value={contact.generalEmail}
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4-8 5-8-5V6l8 5 8-5z" />
                </svg>
              }
            />
            <InfoCard
              label="Supervisor"
              value={contact.supervisorEmail}
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0 2c-4 0-8 2-8 5v2h16v-2c0-3-4-5-8-5" />
                </svg>
              }
            />
            <InfoCard
              label="Institution"
              value={contact.institution}
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M3 10 12 3l9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
                </svg>
              }
            />
          </div>
        </div>

        <div className="card">
          <h3 className="font-display text-lg font-bold text-slate-900">
            Send a Message
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Fill in the form and we&apos;ll get back to you as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                Subject *
              </label>
              <select
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 focus:border-brand-500 focus:outline-none"
              >
                {contact.subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                Message *
              </label>
              <textarea
                required
                rows={5}
                placeholder="Write your message here..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-y rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="m2 21 21-9L2 3v7l15 2-15 2z" />
              </svg>
              Send Message
            </button>

            {sent ? (
              <p className="text-center text-sm text-brand-700">
                Your email app should now be open with this message ready to
                send.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
    </>
  );
}