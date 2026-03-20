"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const navLinks = [
  { href: "/",          label: "Home" },
  { href: "/about",     label: "About" },
  { href: "/services",  label: "Services" },
  { href: "/projects",  label: "Projects" },
  { href: "/equipment", label: "Equipment" },
  { href: "/contact",   label: "Contact" },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-stone-950/96 backdrop-blur-md shadow-2xl shadow-black/30" : "bg-stone-950"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group flex-shrink-0"
            aria-label="Ephravilla Construction — home"
          >
            <div className="w-10 h-10 bg-amber-500 group-hover:bg-amber-400 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
              <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" aria-hidden="true">
                <path d="M8 32L20 8l12 24H8z" fill="currentColor" className="text-stone-950" />
                <path d="M14 32v-8h12v8" fill="currentColor" className="text-stone-950/60" />
              </svg>
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="text-white font-bold text-base tracking-wide">Ephravilla</p>
              <p className="text-amber-400 text-xs tracking-widest uppercase font-medium">Construction Ltd</p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active ? "text-amber-400" : "text-stone-300 hover:text-white hover:bg-stone-800"
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <WhatsAppButton label="WhatsApp" variant="inline" className="text-sm py-2 px-4" />
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-screen pb-4" : "max-h-0"}`}
        >
          <div className="border-t border-stone-800 pt-3 space-y-0.5">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    active
                      ? "bg-stone-800 text-amber-400"
                      : "text-stone-300 hover:bg-stone-800 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="flex gap-2 pt-3 px-1">
              <WhatsAppButton label="WhatsApp" variant="inline" className="flex-1 justify-center text-sm py-2.5" />
              <Link
                href="/contact"
                className="flex-1 text-center bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm py-2.5 rounded-xl transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
