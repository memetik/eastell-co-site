"use client";

import { useState } from "react";

const SEARCH_TABS = ["BUY", "LEASE", "SOLD"];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("BUY");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Hero content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-40 md:pb-48">
        <p className="mono-label text-accent mb-4">SUNSHINE COAST PRESTIGE</p>
        <h1 className="font-display font-bold text-white text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-tight">
          REDEFINING
          <br />
          COASTAL REAL ESTATE.
        </h1>
        <p className="mt-5 text-white/50 text-base md:text-lg max-w-lg">
          337% growth. Unmatched results. A new standard.
        </p>
      </div>

      {/* Desktop search bar */}
      <div className="hidden md:block absolute bottom-16 left-0 right-0 z-20 px-6 md:px-10">
        <div className="bg-[#111111]/90 backdrop-blur-md p-5 w-full">
          <div className="flex items-end gap-6">
            {/* Tabs */}
            <div className="flex gap-4 pb-2">
              {SEARCH_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`mono-label pb-1 transition-colors ${
                    activeTab === tab
                      ? "text-accent border-b border-accent"
                      : "text-white/50 hover:text-white/70"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Fields */}
            <div className="flex-1 grid grid-cols-4 gap-4">
              {[
                { label: "LOCATION", placeholder: "All Suburbs" },
                { label: "PROPERTY TYPE", placeholder: "All Types" },
                { label: "BEDROOMS", placeholder: "Any" },
                { label: "PRICE RANGE", placeholder: "Any Price" },
              ].map((field) => (
                <div key={field.label} className="flex flex-col">
                  <span className="mono-sm text-white/30 mb-1.5">{field.label}</span>
                  <select className="bg-bg-input border-b border-white/[0.08] text-white text-sm py-2 font-mono appearance-none cursor-pointer focus:border-accent focus:outline-none transition-colors">
                    <option>{field.placeholder}</option>
                  </select>
                </div>
              ))}
            </div>

            {/* Search button */}
            <button className="bg-accent text-black font-mono text-xs uppercase tracking-[0.12em] px-6 py-3 hover:bg-accent/90 transition-colors whitespace-nowrap">
              SEARCH →
            </button>
          </div>
        </div>
      </div>

      {/* Mobile search button */}
      <div className="md:hidden absolute bottom-20 left-6 right-6 z-20">
        <button
          onClick={() => setMobileSearchOpen(true)}
          className="w-full bg-[#111111]/90 backdrop-blur-md font-mono text-xs uppercase tracking-[0.12em] text-white py-4"
        >
          SEARCH PROPERTIES
        </button>
      </div>

      {/* Mobile search overlay */}
      {mobileSearchOpen && (
        <div className="fixed inset-0 z-50 bg-bg p-6 flex flex-col md:hidden">
          <div className="flex justify-between items-center mb-8">
            <span className="mono-label text-accent">SEARCH PROPERTIES</span>
            <button onClick={() => setMobileSearchOpen(false)} className="text-white text-2xl">
              ×
            </button>
          </div>
          <div className="flex gap-4 mb-6">
            {SEARCH_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`mono-label pb-1 ${
                  activeTab === tab ? "text-accent border-b border-accent" : "text-white/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-5 flex-1">
            {["LOCATION", "PROPERTY TYPE", "BEDROOMS", "PRICE RANGE"].map((label) => (
              <div key={label}>
                <span className="mono-sm text-white/30 mb-1.5 block">{label}</span>
                <select className="w-full bg-bg-input border-b border-white/[0.08] text-white text-sm py-3 font-mono appearance-none focus:border-accent focus:outline-none">
                  <option>Any</option>
                </select>
              </div>
            ))}
          </div>
          <button
            onClick={() => setMobileSearchOpen(false)}
            className="bg-accent text-black font-mono text-xs uppercase tracking-[0.12em] py-4 mt-auto"
          >
            SEARCH →
          </button>
        </div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="w-[1px] h-10 bg-white/40 scroll-indicator" />
      </div>
    </section>
  );
}
