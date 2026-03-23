"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-brand-surfaceAlt/90 backdrop-blur-md border-b border-brand-border shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 text-xl font-bold">
          <span className="text-brand-text">simple</span>
          <span className="text-brand-accent">core</span>
          <span
            className="w-1.5 h-1.5 rounded-full bg-brand-accent ml-0.5 mb-0.5 inline-block"
            aria-hidden
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-brand-muted hover:text-brand-text text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-brand-accent hover:bg-brand-glow text-white text-sm font-semibold transition-all duration-200 hover:glow-accent-sm"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-brand-muted hover:text-brand-text transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-brand-surfaceAlt border-b border-brand-border px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-brand-muted hover:text-brand-text text-sm font-medium transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="px-4 py-2.5 rounded-lg bg-brand-accent hover:bg-brand-glow text-white text-sm font-semibold transition-all text-center"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
