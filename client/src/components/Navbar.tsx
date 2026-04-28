/**
 * FULI Machinery Navbar
 * Design: SKF-inspired industrial dark — transparent over video, dark on scroll
 * Font: Barlow 600 uppercase for nav items
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

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
    const onScroll = () => setScrolled(window.scrollY > 60);
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
        transition: "background 0.4s ease, border-color 0.4s ease",
        background: scrolled
          ? "oklch(0.08 0.005 260 / 0.97)"
          : "transparent",
        borderBottom: scrolled
          ? "1px solid oklch(1 0 0 / 0.07)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "4.5rem" }}>

          {/* Logo */}
          <Link href="/">
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", cursor: "pointer" }}>
              {/* Orange square mark */}
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
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "0.85rem",
                  color: "oklch(0.08 0.005 260)",
                  letterSpacing: "0.05em",
                }}>FL</span>
              </div>
              <div>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.3rem",
                  letterSpacing: "0.12em",
                  color: "oklch(0.95 0.002 260)",
                  lineHeight: 1,
                }}>FULI</div>
                <div style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.55rem",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  color: "oklch(0.55 0.010 260)",
                  textTransform: "uppercase",
                  lineHeight: 1,
                  marginTop: "1px",
                }}>MACHINERY</div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}
            className="hidden lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={`fuli-nav ${location === link.href ? "active" : ""}`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+8663553128885"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "oklch(0.55 0.010 260)",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "oklch(0.93 0.003 260)")}
              onMouseLeave={e => (e.currentTarget.style.color = "oklch(0.55 0.010 260)")}
            >
              +86 635 5312 885
            </a>
            <Link href="/contact">
              <span className="fuli-cta" style={{ fontSize: "0.72rem", padding: "0.65rem 1.5rem" }}>
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
              color: "oklch(0.93 0.003 260)",
              padding: "0.5rem",
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
          background: "oklch(0.10 0.006 260)",
          borderTop: "1px solid oklch(1 0 0 / 0.08)",
        }}>
          <div className="container" style={{ paddingTop: "1rem", paddingBottom: "1.5rem" }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div style={{
                  padding: "0.9rem 0",
                  borderBottom: "1px solid oklch(1 0 0 / 0.06)",
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: location === link.href ? "oklch(0.65 0.22 45)" : "oklch(0.70 0.005 260)",
                  cursor: "pointer",
                }}>
                  {link.label}
                </div>
              </Link>
            ))}
            <div style={{ paddingTop: "1.25rem" }}>
              <Link href="/contact">
                <span className="fuli-cta" style={{ width: "100%", justifyContent: "center" }}>
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
