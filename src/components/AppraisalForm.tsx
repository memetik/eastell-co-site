"use client";

const FIELDS = [
  { label: "FULL NAME", type: "text", placeholder: "Your full name" },
  { label: "EMAIL", type: "email", placeholder: "your@email.com" },
  { label: "PHONE", type: "tel", placeholder: "04XX XXX XXX" },
  { label: "PROPERTY ADDRESS", type: "text", placeholder: "Street address, suburb" },
];

export default function AppraisalForm() {
  return (
    <section id="appraisal" className="bg-bg">
      <div className="flex flex-col md:flex-row min-h-[700px]">
        {/* Left — Image */}
        <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80"
            alt="Sunshine Coast aerial"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Right — Form */}
        <div className="w-full md:w-1/2 bg-bg-elevated flex items-center">
          <div className="px-8 md:px-14 lg:px-20 py-12 md:py-0 w-full max-w-lg">
            <p className="mono-label text-accent mb-4">NEXT MOVE</p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold leading-tight mb-3">
              What&apos;s Your Property Worth?
            </h2>
            <p className="text-white/50 mb-8">
              Request a no-obligation strategic appraisal. Complete market intelligence
              on your property.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {FIELDS.map((field) => (
                <div key={field.label} className="flex flex-col">
                  <label className="mono-sm text-white/30 mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="bg-bg-input border-b border-white/[0.08] text-white text-sm py-2.5 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              ))}
              <div className="flex flex-col">
                <label className="mono-sm text-white/30 mb-1.5">MESSAGE (OPTIONAL)</label>
                <textarea
                  placeholder="Any additional details..."
                  rows={3}
                  className="bg-bg-input border-b border-white/[0.08] text-white text-sm py-2.5 focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-black font-mono text-xs uppercase tracking-[0.12em] py-4 hover:bg-accent/90 transition-colors mt-2"
              >
                REQUEST APPRAISAL →
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white/50 text-sm">
                Or call directly:{" "}
                <a href="tel:0753029888" className="text-accent font-mono">
                  07 5302 9888
                </a>
              </p>
              <p className="mono-sm text-white/30 mt-2">
                Servicing Coolum Beach, Peregian Beach, Sunshine Beach, Noosa &amp;
                surrounds
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
