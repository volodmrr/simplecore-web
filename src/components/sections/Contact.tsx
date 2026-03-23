"use client";

import { useState, FormEvent } from "react";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import clsx from "clsx";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@simplecore.io" },
  { icon: MapPin, label: "Location", value: "Kyiv, Ukraine" },
];

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      // Dev fallback: simulate success
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-text placeholder:text-brand-muted text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/60 focus:border-brand-accent transition-all";

  return (
    <section
      id="contact"
      className="py-24 bg-brand-bg relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(99,102,241,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-brand-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-text mb-4">
            Let&apos;s Talk About{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #6366F1 0%, #818CF8 100%)",
              }}
            >
              Your Team
            </span>
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Whether you need to fill a single role or build an entire
            department, we&apos;re ready to help. Reach out and let&apos;s get
            started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left: info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="p-6 rounded-2xl glass border border-brand-border">
              <h3 className="text-brand-text font-semibold text-lg mb-5">
                Contact Information
              </h3>
              <div className="flex flex-col gap-5">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-brand-accent/10 flex-shrink-0">
                      <Icon size={16} className="text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-brand-muted text-xs uppercase tracking-wide mb-0.5">
                        {label}
                      </p>
                      <p className="text-brand-text text-sm font-medium">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-accent/10 border border-brand-accent/20">
              <p className="text-brand-text font-semibold mb-2">
                Typical response time
              </p>
              <p className="text-brand-muted text-sm">
                We respond to all inquiries within{" "}
                <span className="text-brand-glow font-medium">24 hours</span> on
                business days.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl glass border border-brand-border">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-brand-accent/20 flex items-center justify-center">
                    <CheckCircle size={28} className="text-brand-accent" />
                  </div>
                  <h3 className="text-brand-text font-semibold text-xl">
                    Message Sent!
                  </h3>
                  <p className="text-brand-muted max-w-sm">
                    Thanks for reaching out. A member of our team will be in
                    touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-brand-accent hover:text-brand-glow text-sm font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-brand-text text-sm font-medium"
                      >
                        Full Name <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-brand-text text-sm font-medium"
                      >
                        Work Email <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="company"
                      className="text-brand-text text-sm font-medium"
                    >
                      Company <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      placeholder="Acme Inc."
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-brand-text text-sm font-medium"
                    >
                      Message <span className="text-brand-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your hiring needs..."
                      className={clsx(inputClass, "resize-none")}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm text-center">
                      Something went wrong. Please try again or email us
                      directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={clsx(
                      "flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-200",
                      status === "loading"
                        ? "bg-brand-accent/60 cursor-not-allowed"
                        : "bg-brand-accent hover:bg-brand-glow glow-accent hover:scale-[1.02]",
                    )}
                  >
                    {status === "loading" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
