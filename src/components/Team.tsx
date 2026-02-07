const TEAM_MEMBERS = [
  {
    name: "CLINTON EASTELL",
    role: "MANAGING DIRECTOR | CO-FOUNDER",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
    email: "clinton@eastellandco.com",
    phone: "0400 000 001",
  },
  {
    name: "SARAH EASTELL",
    role: "DIRECTOR | CO-FOUNDER",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80",
    email: "sarah@eastellandco.com",
    phone: "0400 000 002",
  },
  {
    name: "JAKE MORRISON",
    role: "SENIOR SALES AGENT",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80",
    email: "jake@eastellandco.com",
    phone: "0400 000 003",
  },
  {
    name: "EMMA RICHARDS",
    role: "PROPERTY MANAGER",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80",
    email: "emma@eastellandco.com",
    phone: "0400 000 004",
  },
  {
    name: "LIAM CHEN",
    role: "SALES ASSOCIATE",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80",
    email: "liam@eastellandco.com",
    phone: "0400 000 005",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-bg py-[clamp(5rem,12vh,10rem)] px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="mono-label text-accent mb-3">THE OPERATORS</p>
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-3">
          Meet Your Team.
        </h2>
        <p className="text-white/50 mb-10 max-w-lg">
          Close-knit. Highly skilled. Relentless in the pursuit of your best result.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="group bg-bg-elevated overflow-hidden cursor-pointer hover:ring-1 hover:ring-accent/20 transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-sm mb-1">{member.name}</h3>
                <p className="mono-sm text-accent mb-3">{member.role}</p>
                <div className="flex gap-3 mb-3">
                  <a href={`mailto:${member.email}`} className="text-white/30 hover:text-white/70 transition-colors" aria-label="Email">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </a>
                  <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="text-white/30 hover:text-white/70 transition-colors" aria-label="Call">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </a>
                </div>
                <a href="#" className="mono-label text-white/50 hover:text-white transition-colors">
                  VIEW PROFILE →
                </a>
              </div>
            </div>
          ))}

          {/* Join card */}
          <div className="bg-bg-elevated flex flex-col items-center justify-center p-10 text-center border border-border hover:border-accent/30 transition-all duration-300">
            <h3 className="text-white font-bold text-xl mb-3">JOIN THE TEAM</h3>
            <p className="text-white/50 text-sm mb-6">
              We&apos;re growing fast. Are you ready?
            </p>
            <a href="#" className="mono-label text-accent hover:text-accent/80 transition-colors">
              CAREERS →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
