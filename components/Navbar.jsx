"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-900/95 backdrop-blur shadow-card" : "bg-navy-900"
      }`}
    >
      <nav className="max-w-content mx-auto container-px flex items-center justify-between h-16 lg:h-20">
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-white text-lg tracking-tight">
          <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-sm">AC</span>
          Accredian
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-accent hover:bg-accent-light text-white text-sm font-semibold px-5 py-2.5 transition-colors"
          >
            Talk to us
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden bg-navy-900 border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-3 text-white/85 text-base font-medium border-b border-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="block text-center rounded-full bg-accent text-white font-semibold px-5 py-3"
              >
                Talk to us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
