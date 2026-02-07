const SERVICES = [
  {
    title: "Property Management",
    description:
      "Boutique portfolio management with capped numbers. Every property receives dedicated attention — from tenant sourcing to routine inspections.",
    cta: "LEARN MORE →",
    ctaStyle: "text",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Sales Strategy",
    description:
      "Engineered campaigns. Precision marketing. Data-driven pricing. Every sale is a strategic operation designed for your maximum result.",
    cta: "LEARN MORE →",
    ctaStyle: "text",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Market Appraisals",
    description:
      "Comprehensive market intelligence on your property's position. Current comparable data, buyer demand analysis, and strategic pricing recommendations.",
    cta: "REQUEST APPRAISAL →",
    ctaStyle: "button",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-bg-elevated py-[clamp(5rem,12vh,10rem)] px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="mono-label text-accent mb-3">FULL SPECTRUM</p>
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-10">
          Beyond The Sale.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group bg-bg-card border border-border p-8 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              {service.ctaStyle === "button" ? (
                <a
                  href="#appraisal"
                  className="inline-block bg-accent text-black font-mono text-xs uppercase tracking-[0.12em] px-5 py-3 hover:bg-accent/90 transition-colors"
                >
                  {service.cta}
                </a>
              ) : (
                <a
                  href="#"
                  className="mono-label text-accent hover:text-accent/80 transition-colors"
                >
                  {service.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
