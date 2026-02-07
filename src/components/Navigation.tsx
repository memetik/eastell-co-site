"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "BUY", href: "#featured" },
  { label: "SELL", href: "#appraisal" },
  { label: "SOLD", href: "#metrics" },
  { label: "LEASE", href: "#services" },
  { label: "TEAM", href: "#team" },
  { label: "INSIGHTS", href: "#insights" },
  { label: "CONTACT", href: "#appraisal" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between bg-transparent">
        <a href="#" className="font-display text-white text-sm tracking-[0.08em] uppercase font-bold z-50">
          EASTELL & CO.
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="mono-label text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <span className="font-mono text-xs text-white/50 tracking-wide">
            07 5302 9888
          </span>
          <a
            href="#appraisal"
            className="font-mono text-xs uppercase tracking-[0.12em] bg-accent text-black px-5 py-2.5 hover:bg-accent/90 transition-colors"
          >
            REQUEST APPRAISAL
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-4 z-50">
          <a href="tel:0753029888" className="text-white/70" aria-label="Call us">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[1px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <span className={`w-6 h-[1px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-[1px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-white text-2xl tracking-[0.08em] uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-3 text-white/50 font-mono text-xs tracking-wide">
          <a href="tel:0753029888">07 5302 9888</a>
          <a href="mailto:info@eastellandco.com">info@eastellandco.com</a>
        </div>
        <a
          href="#appraisal"
          onClick={() => setMenuOpen(false)}
          className="mt-8 w-72 text-center font-mono text-xs uppercase tracking-[0.12em] bg-accent text-black px-5 py-4"
        >
          REQUEST APPRAISAL
        </a>
      </div>
    </>
  );
}
