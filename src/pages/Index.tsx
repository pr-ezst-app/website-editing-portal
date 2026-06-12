import { useState, useMemo } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.ezst.app/projects/9a311ff7-f911-4ab9-9fe9-08ca557e710a/files/8b4299af-eec1-4cb5-b408-9def6a5ce8be.jpg";

const PRODUCTS = [
  {
    id: 1,
    name: "Oversized Black Tee",
    category: "tops",
    price: 49,
    tag: "BESTSELLER",
    img: "https://cdn.ezst.app/projects/9a311ff7-f911-4ab9-9fe9-08ca557e710a/files/567e5003-6af5-44fa-b972-9b354c2ebebe.jpg",
  },
  {
    id: 2,
    name: "Cream Cargo Pants",
    category: "bottoms",
    price: 89,
    tag: "NEW",
    img: "https://cdn.ezst.app/projects/9a311ff7-f911-4ab9-9fe9-08ca557e710a/files/471e5976-5e8c-4dad-9877-132796139b9d.jpg",
  },
  {
    id: 3,
    name: "Leather Bomber Jacket",
    category: "outerwear",
    price: 179,
    tag: "LIMITED",
    img: "https://cdn.ezst.app/projects/9a311ff7-f911-4ab9-9fe9-08ca557e710a/files/6829679e-0d8b-48e9-b009-6207e0425536.jpg",
  },
  {
    id: 4,
    name: "Wide Leg Trousers",
    category: "bottoms",
    price: 95,
    tag: "",
    img: "https://cdn.ezst.app/projects/9a311ff7-f911-4ab9-9fe9-08ca557e710a/files/471e5976-5e8c-4dad-9877-132796139b9d.jpg",
  },
  {
    id: 5,
    name: "Relaxed Hoodie",
    category: "tops",
    price: 69,
    tag: "NEW",
    img: "https://cdn.ezst.app/projects/9a311ff7-f911-4ab9-9fe9-08ca557e710a/files/567e5003-6af5-44fa-b972-9b354c2ebebe.jpg",
  },
  {
    id: 6,
    name: "Street Puffer Coat",
    category: "outerwear",
    price: 149,
    tag: "",
    img: "https://cdn.ezst.app/projects/9a311ff7-f911-4ab9-9fe9-08ca557e710a/files/6829679e-0d8b-48e9-b009-6207e0425536.jpg",
  },
];

const FILTERS = ["All", "Tops", "Bottoms", "Outerwear"];

export default function Index() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [cartCount, setCartCount] = useState(0);

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchFilter =
        activeFilter === "All" ||
        p.category === activeFilter.toLowerCase();
      return matchSearch && matchFilter;
    });
  }, [search, activeFilter]);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display text-3xl tracking-wider">DRIP</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#shop" className="hover:opacity-50 transition-opacity">SHOP</a>
            <a href="#" className="hover:opacity-50 transition-opacity">LOOKBOOK</a>
            <a href="#" className="hover:opacity-50 transition-opacity">ABOUT</a>
          </div>
          <button className="relative flex items-center gap-1.5 hover:opacity-60 transition-opacity">
            <Icon name="ShoppingBag" size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-16">
        <div className="relative h-[90vh] overflow-hidden">
          <img
            src={HERO_IMG}
            alt="Hero"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-10 md:p-16">
            <p className="text-white/70 text-sm tracking-[0.3em] uppercase mb-3">
              Summer 2026 Collection
            </p>
            <h1 className="font-display text-white text-7xl md:text-[9rem] leading-none tracking-wide">
              YOUR
              <br />
              STYLE.
            </h1>
            <a
              href="#shop"
              className="inline-flex items-center gap-2 mt-6 bg-white text-black px-8 py-3.5 text-sm font-semibold tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-300"
            >
              Shop Now
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-black text-white py-3 overflow-hidden whitespace-nowrap">
        <span className="inline-block text-xs tracking-[0.2em] font-medium px-8">
          FREE SHIPPING OVER $100 &nbsp;·&nbsp; NEW DROPS WEEKLY &nbsp;·&nbsp; SECURE CHECKOUT &nbsp;·&nbsp; EASY RETURNS &nbsp;·&nbsp; FREE SHIPPING OVER $100 &nbsp;·&nbsp; NEW DROPS WEEKLY &nbsp;·&nbsp; SECURE CHECKOUT &nbsp;·&nbsp; EASY RETURNS &nbsp;·&nbsp; FREE SHIPPING OVER $100 &nbsp;·&nbsp; NEW DROPS WEEKLY &nbsp;·&nbsp; SECURE CHECKOUT &nbsp;·&nbsp; EASY RETURNS
        </span>
      </div>

      {/* SHOP */}
      <section id="shop" className="max-w-7xl mx-auto px-6 py-20">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-1">Collection</p>
            <h2 className="font-display text-5xl tracking-wide">THE SHOP</h2>
          </div>

          {/* Search */}
          <div className="relative md:w-72">
            <Icon name="Search" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-black/15 bg-gray-50 text-sm placeholder:text-gray-400 focus:outline-none focus:border-black focus:bg-white transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
              >
                <Icon name="X" size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-10 flex-wrap items-center">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 text-xs tracking-[0.15em] uppercase font-semibold border transition-all duration-200 ${
                activeFilter === f
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black/20 hover:border-black"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-xs text-gray-400">
            {filtered.length} item{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="py-24 text-center text-gray-400">
            <Icon name="PackageSearch" size={40} className="mx-auto mb-4 opacity-30" />
            <p className="text-sm tracking-widest uppercase">No items found</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
            {filtered.map((p, i) => (
              <div
                key={p.id}
                className="product-card group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${i * 0.07}s`, opacity: 0, animationFillMode: "forwards" }}
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-50 aspect-[3/4] mb-4">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="product-img w-full h-full object-cover"
                  />
                  {p.tag && (
                    <span className="absolute top-3 left-3 bg-black text-white text-[10px] tracking-[0.15em] px-2 py-1 font-semibold">
                      {p.tag}
                    </span>
                  )}
                  <button
                    onClick={() => setCartCount((c) => c + 1)}
                    className="absolute bottom-0 left-0 right-0 bg-black text-white text-xs tracking-[0.2em] uppercase py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-semibold"
                  >
                    Add to Cart
                  </button>
                </div>

                {/* Info */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-sm leading-tight">{p.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5 capitalize">{p.category}</p>
                  </div>
                  <p className="font-semibold text-sm">${p.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <span className="font-display text-4xl tracking-wider">DRIP</span>
            <p className="text-xs text-gray-400 mt-2 max-w-xs leading-relaxed">
              Premium streetwear for the style-forward generation. Inspired by culture, made for the streets.
            </p>
          </div>
          <div className="flex gap-16 text-sm">
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-xs tracking-[0.2em] uppercase mb-1">Shop</p>
              <a href="#" className="text-gray-500 hover:text-black transition-colors text-xs">New Arrivals</a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors text-xs">Tops</a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors text-xs">Bottoms</a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors text-xs">Outerwear</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-xs tracking-[0.2em] uppercase mb-1">Info</p>
              <a href="#" className="text-gray-500 hover:text-black transition-colors text-xs">About</a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors text-xs">Contact</a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors text-xs">Shipping</a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors text-xs">Returns</a>
            </div>
          </div>
        </div>
        <div className="border-t border-black/8 px-6 py-4 max-w-7xl mx-auto">
          <p className="text-[11px] text-gray-400">© 2026 DRIP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
