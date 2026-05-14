/**
 * FULI Bearing Navbar
 * Design: Always-dark navbar (deep navy/charcoal) — provides strong brand anchor
 * against the new light content areas below.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "Products", href: "/products" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "box-shadow 0.3s ease",
        background: "oklch(0.14 0.018 255)",
        borderBottom: "1px solid oklch(0.22 0.015 255)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 2px 20px oklch(0 0 0 / 0.25)" : "none",
      }}
    >
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "4rem" }}>

          {/* Logo */}
          <Link href="/">
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", cursor: "pointer" }}>
              <div style={{
                width: "2rem",
                height: "2rem",
                background: "oklch(0.65 0.22 45)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "oklch(0.10 0.008 260)",
                  letterSpacing: "0.04em",
                }}>FL</span>
              </div>
              <div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  color: "oklch(0.97 0.002 260)",
                  lineHeight: 1,
                }}>FULI</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.50rem",
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  color: "oklch(0.65 0.22 45)",
                  textTransform: "uppercase",
                  lineHeight: 1,
                  marginTop: "2px",
                }}>BEARING</div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            className="hidden lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: location === link.href ? "oklch(0.65 0.22 45)" : "oklch(0.72 0.008 260)",
                  cursor: "pointer",
                  transition: "color 0.2s",
                  paddingBottom: "2px",
                  borderBottom: location === link.href ? "2px solid oklch(0.65 0.22 45)" : "2px solid transparent",
                }}
                  onMouseEnter={(e) => { if (location !== link.href) (e.currentTarget as HTMLElement).style.color = "oklch(0.92 0.003 260)"; }}
                  onMouseLeave={(e) => { if (location !== link.href) (e.currentTarget as HTMLElement).style.color = "oklch(0.72 0.008 260)"; }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+8615263521305"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "oklch(0.65 0.008 260)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(0.88 0.003 260)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(0.65 0.008 260)"; }}
            >
              <Phone size={13} />
              +86 152 6352 1305
            </a>
            <Link href="/contact">
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.55rem 1.25rem",
                background: "oklch(0.65 0.22 45)",
                color: "oklch(0.10 0.008 260)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              >
                Get Quote
              </span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "none",
              border: "none",
              color: "oklch(0.85 0.003 260)",
              padding: "0.5rem",
              cursor: "pointer",
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          background: "oklch(0.11 0.012 255)",
          borderTop: "1px solid oklch(0.22 0.015 255)",
        }}>
          <div className="container" style={{ paddingTop: "1rem", paddingBottom: "1.5rem" }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div style={{
                  padding: "0.9rem 0",
                  borderBottom: "1px solid oklch(0.20 0.012 255)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: location === link.href ? "oklch(0.65 0.22 45)" : "oklch(0.68 0.008 260)",
                  cursor: "pointer",
                }}>
                  {link.label}
                </div>
              </Link>
            ))}
            <div style={{ paddingTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a href="tel:+8615263521305" style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "oklch(0.60 0.008 260)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.78rem",
                textDecoration: "none",
              }}>
                <Phone size={14} />
                +86 152 6352 1305
              </a>
              <Link href="/contact">
                <span style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.75rem",
                  background: "oklch(0.65 0.22 45)",
                  color: "oklch(0.10 0.008 260)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}>
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
