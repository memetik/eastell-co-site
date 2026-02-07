const SUBURBS = [
  {
    name: "COOLUM BEACH",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
    median: "$1.35M",
    growth: "+8.7%",
    days: "14",
    stock: "Low",
  },
  {
    name: "PEREGIAN BEACH",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&q=80",
    median: "$1.62M",
    growth: "+12.3%",
    days: "11",
    stock: "Very Low",
  },
  {
    name: "SUNSHINE BEACH",
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&q=80",
    median: "$2.15M",
    growth: "+6.1%",
    days: "18",
    stock: "Moderate",
  },
  {
    name: "NOOSA HEADS",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",
    median: "$2.85M",
    growth: "+4.9%",
    days: "22",
    stock: "Low",
  },
];

export default function SuburbIntelligence() {
  return (
    <section id="suburbs" className="bg-bg py-[clamp(5rem,12vh,10rem)] px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="mono-label text-accent mb-3">MARKET INTELLIGENCE</p>
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-10">
          Know Your Market Before You Move.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SUBURBS.map((suburb) => (
            <div
              key={suburb.name}
              className="group bg-bg-card border border-border overflow-hidden hover:border-accent/30 transition-all duration-300 cursor-pointer"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={suburb.image}
                  alt={suburb.name}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-sm mb-4">{suburb.name}</h3>
                <div className="space-y-2">
                  {[
                    ["MEDIAN", suburb.median],
                    ["12MO GROWTH", suburb.growth],
                    ["AVG DAYS", suburb.days],
                    ["STOCK LEVEL", suburb.stock],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between">
                      <span className="mono-sm text-white/35">{label}</span>
                      <span className="font-mono text-xs text-white/60">{val}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="mono-label text-accent mt-5 block hover:text-accent/80 transition-colors"
                >
                  VIEW MARKET BRIEF →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
