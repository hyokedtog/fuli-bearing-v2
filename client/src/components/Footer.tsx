/**
 * FULI Machinery Footer
 * Design: SKF-inspired — near-black background, minimal grid, orange accents
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const products = [
  "Motorcycle Bearings",
  "Motor & Pump Bearings",
  "Agricultural Bearings",
  "Industrial Bearings",
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Factory", href: "/about" },
  { label: "Certifications", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Request Quote", href: "/contact" },
];

const contacts = [
  { Icon: MessageCircle, text: "+86 152 6352 1305", sub: "WhatsApp", href: "https://wa.me/8615263521305", color: "#25D366" },
  { Icon: Phone, text: "+86 152 6352 1305", sub: "Phone", href: "tel:+8615263521305", color: "oklch(0.65 0.22 45)" },
  { Icon: Mail, text: "sales@fulibearings.com", sub: "Email", href: "mailto:sales@fulibearings.com", color: "oklch(0.65 0.22 45)" },
  { Icon: MapPin, text: "Liaocheng, Shandong, China", sub: "Address", href: "#", color: "oklch(0.55 0.15 145)" },
];

const colHead: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.65rem",
  fontWeight: 700,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "oklch(0.55 0.010 260)",
  marginBottom: "1.25rem",
};

export default function Footer() {
  return (
    <footer style={{ background: "oklch(0.14 0.018 255)", borderTop: "1px solid oklch(0.22 0.015 255)" }}>
      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "3rem",
          }}
          className="md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
              <div style={{ width: "2rem", height: "2rem", background: "oklch(0.65 0.22 45)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "oklch(0.08 0.005 260)", letterSpacing: "0.05em" }}>FL</span>
              </div>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.3rem", letterSpacing: "0.12em", color: "oklch(0.97 0.002 260)", lineHeight: 1 }}>FULI</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.22em", color: "oklch(0.40 0.008 260)", textTransform: "uppercase", lineHeight: 1, marginTop: "1px" }}>BEARING</div>
              </div>
            </div>
            <p style={{ color: "oklch(0.55 0.008 260)", fontSize: "0.82rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              20+ years of export experience. ISO 9001 certified bearings sourced from Linqing, serving distributors in 20+ countries.
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["ISO 9001", "20+ COUNTRIES"].map((b) => (
                <span
                  key={b}
                  style={{
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    padding: "0.3rem 0.6rem",
                    border: "1px solid oklch(0.65 0.22 45 / 0.35)",
                    color: "oklch(0.65 0.22 45)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 style={colHead}>Products</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {products.map((item) => (
                <li key={item}>
                  <Link href="/products">
                    <span
                      style={{ color: "oklch(0.42 0.008 260)", fontSize: "0.82rem", cursor: "pointer", transition: "color 0.2s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "oklch(0.65 0.22 45)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "oklch(0.42 0.008 260)"; }}
                    >
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={colHead}>Company</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span
                      style={{ color: "oklch(0.42 0.008 260)", fontSize: "0.82rem", cursor: "pointer", transition: "color 0.2s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "oklch(0.65 0.22 45)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "oklch(0.42 0.008 260)"; }}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={colHead}>Contact</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {contacts.map((item) => (
                <li key={item.sub}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", textDecoration: "none" }}
                  >
                    <item.Icon size={13} style={{ color: item.color, marginTop: "3px", flexShrink: 0 }} />
                    <div>
                      <div style={{ color: "oklch(0.65 0.008 260)", fontSize: "0.8rem" }}>{item.text}</div>
                      <div style={{ color: "oklch(0.38 0.006 260)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>{item.sub}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid oklch(0.22 0.015 255)" }}>
        <div
          className="container"
          style={{
            paddingTop: "1.25rem",
            paddingBottom: "1.25rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.4rem",
          }}
        >
          <p style={{ color: "oklch(0.32 0.006 260)", fontSize: "0.72rem" }}>
            © 2026 FULI Machinery (Shandong) Limited Company. All rights reserved.
          </p>
          <p style={{ color: "oklch(0.28 0.005 260)", fontSize: "0.72rem" }}>
            Mon–Sat 8:00 AM – 6:00 PM GMT+8
          </p>
        </div>
      </div>
    </footer>
  );
}
