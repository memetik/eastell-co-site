"use client";

import { useState } from "react";

const TABS = ["LATEST", "MARKET UPDATES", "LIFESTYLE", "COMMUNITY"];

const FEATURED_ARTICLE = {
  category: "MARKET UPDATE",
  title: "Sunshine Coast Q4 Market Wrap: What The Data Says",
  date: "02 FEB 2026",
  image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
};

const ARTICLES = [
  {
    category: "LIFESTYLE",
    title: "Inside The Renovation: A Peregian Beach Masterclass",
    date: "28 JAN 2026",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80",
  },
  {
    category: "COMMUNITY",
    title: "Why Coolum Beach Is The Coast's Best-Kept Secret",
    date: "21 JAN 2026",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
  },
  {
    category: "MARKET UPDATE",
    title: "Interest Rate Outlook: What Buyers Need To Know In 2026",
    date: "15 JAN 2026",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
  },
];

export default function InsightsHub() {
  const [activeTab, setActiveTab] = useState("LATEST");

  return (
    <section id="insights" className="bg-bg py-[clamp(5rem,12vh,10rem)] px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="mono-label text-accent mb-3">INSIGHTS</p>
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-3">
          Market Intelligence. Coastal Living.
        </h2>

        <div className="flex gap-6 mb-10 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`mono-label pb-1 whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? "text-white border-b border-accent"
                  : "text-white/50 hover:text-white/70"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          {/* Featured article */}
          <a href="#" className="group relative lg:w-[55%] aspect-[4/3] lg:aspect-auto overflow-hidden">
            <img
              src={FEATURED_ARTICLE.image}
              alt={FEATURED_ARTICLE.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">
              <span className="mono-sm text-accent">{FEATURED_ARTICLE.category}</span>
              <h3 className="text-white font-bold text-xl md:text-2xl mt-2 mb-2 leading-snug max-w-md">
                {FEATURED_ARTICLE.title}
              </h3>
              <span className="mono-sm text-white/35">{FEATURED_ARTICLE.date}</span>
            </div>
          </a>

          {/* Secondary articles */}
          <div className="lg:w-[45%] flex flex-col gap-4">
            {ARTICLES.map((article) => (
              <a
                key={article.title}
                href="#"
                className="group flex gap-4 bg-bg-elevated p-3 hover:bg-bg-card transition-colors"
              >
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="mono-sm text-accent mb-1">{article.category}</span>
                  <h4 className="text-white text-sm font-semibold leading-snug mb-1 group-hover:text-white/90">
                    {article.title}
                  </h4>
                  <span className="mono-sm text-white/35">{article.date}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="#" className="mono-label text-white/70 hover:text-accent transition-colors">
            VIEW ALL INSIGHTS →
          </a>
        </div>
      </div>
    </section>
  );
}
