const NAV_LINKS = ["Buy", "Sell", "Sold", "Lease", "Team", "Insights", "Contact"];
const SUBURBS = [
  "Coolum Beach",
  "Peregian Beach",
  "Sunshine Beach",
  "Noosa Heads",
  "Mount Coolum",
  "Marcoola",
];

export default function Footer() {
  return (
    <footer className="bg-bg pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display text-white text-sm tracking-[0.08em] uppercase font-bold mb-3">
              EASTELL & CO.
            </p>
            <p className="font-mono text-xs text-white/30 tracking-wide mb-5">
              Redefining Coastal Real Estate.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-white/30 hover:text-white transition-colors"
                  aria-label={social}
                >
                  {social === "Instagram" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  )}
                  {social === "Facebook" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  )}
                  {social === "LinkedIn" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="mono-sm text-accent mb-4">NAVIGATE</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-mono text-xs text-white/50 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Suburbs */}
          <div>
            <p className="mono-sm text-accent mb-4">SUBURBS</p>
            <ul className="space-y-2">
              {SUBURBS.map((suburb) => (
                <li key={suburb}>
                  <a
                    href="#"
                    className="font-mono text-xs text-white/50 hover:text-white transition-colors"
                  >
                    {suburb}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mono-sm text-accent mb-4">CONTACT</p>
            <ul className="space-y-2 font-mono text-xs text-white/50">
              <li>
                <a href="tel:0753029888" className="hover:text-white transition-colors">
                  07 5302 9888
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@eastellandco.com"
                  className="hover:text-white transition-colors"
                >
                  info@eastellandco.com
                </a>
              </li>
              <li>Sunshine Coast, QLD</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/30">
          <span className="mono-sm">Licence No. 12345678</span>
          <span className="mono-sm">&copy; 2026 Eastell &amp; Co. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="mono-sm hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="mono-sm hover:text-white/60 transition-colors">
              Terms
            </a>
            <span className="mono-sm">Powered by UrbanX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
