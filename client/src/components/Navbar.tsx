/**
 * FULI Machinery Navbar
 * Design: Modern B2B Professional - Deep Blue + Orange accent
 * Font: Barlow Condensed for nav items
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-sm flex items-center justify-center"
                style={{ background: "oklch(0.33 0.12 255)" }}>
                <span className="text-white font-bold text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}>FL</span>
              </div>
              <div>
                <div className={`font-bold text-lg leading-none transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}>
                  FULI
                </div>
                <div className={`text-xs leading-none transition-colors ${scrolled ? "text-gray-500" : "text-white/70"}`}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.15em" }}>
                  MACHINERY
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`fuli-nav-link text-sm ${
                    scrolled ? "" : "!text-white/90 hover:!text-white"
                  } ${location === link.href ? "active" : ""}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+8663553128885"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled ? "text-gray-600 hover:text-blue-700" : "text-white/80 hover:text-white"
              }`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              <Phone size={14} />
              <span>+86 635 5312 885</span>
            </a>
            <Link href="/contact">
              <span className="fuli-btn-primary text-sm py-2 px-5">
                Get Quote
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`block py-3 px-2 text-base font-semibold border-b border-gray-50 transition-colors hover:text-orange-500 ${
                    location === link.href ? "text-blue-800" : "text-gray-700"
                  }`}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="pt-3 pb-1">
              <Link href="/contact">
                <span className="fuli-btn-primary w-full justify-center text-sm">
                  Get a Quote
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
