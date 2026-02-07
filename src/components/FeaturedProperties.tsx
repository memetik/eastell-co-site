"use client";

import { useState, useRef, useEffect } from "react";

const CATEGORIES = ["FEATURED", "HOUSES", "APARTMENTS", "LAND"];

const PROPERTIES = [
  {
    id: "001",
    address: "57 Cormorant Crescent, Peregian Beach",
    price: "$2,850,000",
    specs: "4 BED · 3 BATH · 2 CAR · 680m²",
    status: "FOR SALE",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: "002",
    address: "12 Seaside Place, Sunshine Beach",
    price: "$3,450,000",
    specs: "5 BED · 4 BATH · 3 CAR · 820m²",
    status: "FOR SALE",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: "003",
    address: "8/24 Noosa Parade, Noosa Heads",
    price: "$1,950,000",
    specs: "3 BED · 2 BATH · 2 CAR · 210m²",
    status: "SOLD",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    id: "004",
    address: "31 Coolum Terrace, Coolum Beach",
    price: "$2,200,000",
    specs: "4 BED · 3 BATH · 2 CAR · 750m²",
    status: "FOR SALE",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
];

const CTA_CARDS = [
  {
    title: "OUR TEAM",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
    href: "#team",
  },
  {
    title: "MARKET INTELLIGENCE",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    href: "#suburbs",
  },
  {
    title: "THE ARSENAL",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
    href: "#services",
  },
];

export default function FeaturedProperties() {
  const [activeCategory, setActiveCategory] = useState("FEATURED");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
    setTimeout(checkScroll, 500);
  };

  return (
    <section id="featured" className="bg-bg py-[clamp(5rem,12vh,10rem)] px-6 md:px-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <p className="mono-label text-accent">FEATURED LISTINGS</p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => scroll("left")}
            className={`text-white transition-opacity ${canScrollLeft ? "opacity-70 hover:opacity-100" : "opacity-20"}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className={`text-white transition-opacity ${canScrollRight ? "opacity-70 hover:opacity-100" : "opacity-20"}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          <a href="#" className="mono-label text-white/70 hover:text-white transition-colors ml-2">
            VIEW ALL →
          </a>
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex gap-6 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`mono-label pb-1 transition-colors ${
              activeCategory === cat
                ? "text-white border-b border-accent"
                : "text-white/50 hover:text-white/70"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Property carousel */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {PROPERTIES.map((prop, i) => (
          <div
            key={prop.id}
            className={`group relative flex-shrink-0 bg-bg-card overflow-hidden cursor-pointer transition-all duration-300 hover:ring-1 hover:ring-accent/30 ${
              i === 0 ? "w-[55vw] md:w-[55%] h-[500px]" : "w-[300px] md:w-[320px] h-[500px]"
            }`}
          >
            <div className="absolute top-4 left-4 z-10 font-mono text-accent text-sm">
              {prop.id}
            </div>
            <div className="relative h-[60%] overflow-hidden">
              <img
                src={prop.image}
                alt={prop.address}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent" />
            </div>
            <div className="p-5 flex flex-col justify-between h-[40%]">
              <div>
                <h3 className="text-white font-bold text-sm md:text-base leading-snug mb-2">
                  {prop.address}
                </h3>
                <p className="font-mono text-accent text-sm">{prop.price}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="mono-sm text-white/50">{prop.specs}</span>
                <span
                  className={`mono-sm px-2 py-0.5 ${
                    prop.status === "SOLD"
                      ? "bg-white/10 text-white/70"
                      : "bg-accent text-black"
                  }`}
                >
                  {prop.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        {CTA_CARDS.map((card) => (
          <a
            key={card.title}
            href={card.href}
            className="group bg-bg-card border border-border p-0 overflow-hidden hover:border-accent/30 transition-all duration-300"
          >
            <div className="h-32 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="text-white font-bold text-sm mb-2">{card.title}</h3>
              <span className="mono-label text-white/50 group-hover:text-accent transition-colors">
                VIEW MORE →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
