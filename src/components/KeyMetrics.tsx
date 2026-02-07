"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: "$127M", label: "TOTAL VALUE SOLD" },
  { value: "94", label: "PROPERTIES SOLD 2024" },
  { value: "12", label: "AVG DAYS ON MARKET" },
  { value: "4.9★", label: "GOOGLE RATING" },
];

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

export default function KeyMetrics() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="metrics"
      className="bg-bg py-[clamp(6rem,15vh,14rem)] px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="font-mono text-white text-[clamp(2.5rem,8vw,5rem)] font-bold leading-none counter-animate">
                {stat.value}
              </div>
              <div className="h-[1px] bg-white/[0.06] my-4" />
              <p className="mono-sm text-white/35">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Accent line */}
        <div className="w-3/5 h-[1px] bg-accent/40 mx-auto mt-16 mb-12" />

        {/* Testimonial */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-white/45 italic text-lg leading-relaxed mb-4">
            &ldquo;Working with Eastell and Co was the best decision we made. They
            treated our home as if they were selling their own.&rdquo;
          </p>
          <p className="mono-sm text-white/35">— SELLER, PEREGIAN BEACH</p>
        </div>
      </div>
    </section>
  );
}
