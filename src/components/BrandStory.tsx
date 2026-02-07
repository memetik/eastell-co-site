"use client";

import { useState } from "react";

export default function BrandStory() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-bg py-[clamp(5rem,12vh,10rem)]">
      <div className="flex flex-col md:flex-row min-h-[600px]">
        {/* Left — Video/Image */}
        <div className="relative w-full md:w-1/2 min-h-[350px] md:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80"
            alt="Sunshine Coast coastline at dusk"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          {!playing && (
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Play video"
            >
              <div className="w-16 h-16 rounded-full border border-white/60 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white/60 group-hover:text-black ml-1 transition-colors"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </button>
          )}
        </div>

        {/* Right — Content */}
        <div className="w-full md:w-1/2 bg-bg-elevated flex items-center">
          <div className="px-8 md:px-14 lg:px-20 py-12 md:py-0 max-w-xl">
            <p className="mono-label text-accent mb-4">THE EASTELL STANDARD</p>
            <h2 className="font-display text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Built Different.
              <br />
              By Design.
            </h2>
            <p className="text-white/60 mb-4 leading-relaxed">
              Eastell & Co. isn&apos;t a traditional agency. We&apos;re a team obsessed with
              outcomes — built on innovation, precision marketing, and an approach that
              has delivered 337% year-on-year growth.
            </p>
            <p className="text-white/60 mb-8 leading-relaxed">
              From Coolum to Noosa, we&apos;ve redefined what prestige real estate looks
              like on the Sunshine Coast. Every campaign is engineered. Every result is
              earned.
            </p>
            <p className="font-mono text-xs text-white/50 tracking-[0.12em] uppercase mb-8">
              337% YoY GROWTH · SUNSHINE COAST LEADERS · EST. 2018
            </p>
            <a
              href="#"
              className="mono-label text-white/70 hover:text-accent transition-colors"
            >
              OUR STORY →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
