"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-50/95 backdrop-blur-sm border-b border-stone-200/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleNav(e, "#hero")}
          className="font-serif text-lg font-semibold text-stone-900 tracking-tight hover:text-accent transition-colors"
        >
          EB
        </a>

        {/* Desktop links */}
        <ul className="hidden sm:flex gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNav(e, href)}
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors tracking-wide"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 text-stone-500 hover:text-stone-900"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-stone-50/95 backdrop-blur-sm border-t border-stone-200/60 px-6 pb-4">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className="block py-3 text-sm text-stone-600 hover:text-stone-900 border-b border-stone-100 last:border-0"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
