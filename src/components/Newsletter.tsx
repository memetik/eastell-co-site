"use client";

const SUBSCRIPTIONS = [
  {
    title: "Weekly Market Wrap",
    description:
      "Saturday results round-up with buyer activity insights and key sales data.",
  },
  {
    title: "Prestige Property Alerts",
    description:
      "Instant notifications when properties matching your criteria hit the market — including pre-release opportunities.",
  },
  {
    title: "Coastal Living",
    description:
      "Monthly lifestyle content, local business spotlights, and curated coastal living insights.",
  },
];

export default function Newsletter() {
  return (
    <section className="bg-bg py-[clamp(5rem,12vh,10rem)] px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="mono-label text-accent mb-3">INTEL FEED</p>
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-3">
          Stay Ahead of the Market.
        </h2>
        <p className="text-white/50 mb-10 max-w-xl">
          Subscribe to receive the latest property listings, market intelligence, and
          coastal lifestyle content.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {SUBSCRIPTIONS.map((sub) => (
            <div key={sub.title} className="bg-bg-card border border-border p-6">
              <h3 className="text-white font-bold text-base mb-3">{sub.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {sub.description}
              </p>
              <button className="font-mono text-xs uppercase tracking-[0.12em] text-white border border-white/40 px-5 py-2.5 hover:border-accent hover:text-accent transition-colors">
                SUBSCRIBE →
              </button>
            </div>
          ))}
        </div>

        {/* Inline form */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
          <div className="flex-1 flex flex-col">
            <label className="mono-sm text-white/30 mb-1.5">NAME</label>
            <input
              type="text"
              placeholder="Your name"
              className="bg-bg-input border-b border-white/[0.08] text-white text-sm py-2.5 font-mono focus:border-accent focus:outline-none transition-colors"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label className="mono-sm text-white/30 mb-1.5">EMAIL</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-bg-input border-b border-white/[0.08] text-white text-sm py-2.5 font-mono focus:border-accent focus:outline-none transition-colors"
            />
          </div>
          <button className="self-end bg-accent text-black font-mono text-xs uppercase tracking-[0.12em] px-6 py-3 hover:bg-accent/90 transition-colors mt-4 sm:mt-0">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
}
