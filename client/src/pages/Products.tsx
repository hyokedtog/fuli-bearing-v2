/**
 * FULI Machinery — Products Page
 * Design: SKF-inspired industrial dark
 */
import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";

const products = [
  {
    id: "dgb",
    code: "DGB",
    name: "Deep Groove Ball Bearings",
    category: "Ball",
    desc: "Versatile single-row bearings for high speeds and moderate radial and axial loads. Available in open, Z, ZZ, RS, 2RS configurations.",
    specs: ["Bore: 10–150mm", "Speed: up to 18,000 rpm", "Precision: P0, P6, P5", "Cage: Steel / Nylon"],
    series: ["6000", "6200", "6300", "6400", "16000", "61800"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "trb",
    code: "TRB",
    name: "Tapered Roller Bearings",
    category: "Roller",
    desc: "Handle combined radial and axial loads with high precision. Metric and inch series following DIN/ISO standards.",
    specs: ["Bore: 15–260mm", "Contact angle: 10°–30°", "Precision: P0, P6, P5", "Cage: Steel"],
    series: ["30200", "30300", "32000", "32200", "32300", "33000"],
    img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
  },
  {
    id: "srb",
    code: "SRB",
    name: "Spherical Roller Bearings",
    category: "Roller",
    desc: "Self-aligning design compensates for shaft deflection up to 1.5°. Ideal for heavy radial loads and misalignment conditions.",
    specs: ["Bore: 25–400mm", "Misalignment: ±1.5°", "Precision: P0, P6", "Cage: Steel / Brass"],
    series: ["21300", "22200", "22300", "23000", "24000"],
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  },
  {
    id: "pbu",
    code: "PBU",
    name: "Pillow Block Bearings",
    category: "Mounted",
    desc: "Mounted bearing units with cast iron housing for easy installation. Pre-lubricated and sealed for long maintenance intervals.",
    specs: ["Bore: 12–140mm", "Housing: Cast iron", "Sealing: Triple lip seal", "Grease: Pre-filled"],
    series: ["UCP", "UCF", "UCT", "UCFC", "UCFL", "UCPA"],
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
];

const categories = ["All", "Ball", "Roller", "Mounted"];

export default function Products() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div style={{ background: "oklch(0.08 0.005 260)", paddingTop: "4.5rem" }}>

      {/* Page Hero */}
      <section style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        background: "oklch(0.06 0.004 260)",
        borderBottom: "1px solid oklch(1 0 0 / 0.07)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(oklch(1 0 0 / 0.025) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "2rem" }}>
            <Link href="/">
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "oklch(0.40 0.006 260)", cursor: "pointer" }}>Home</span>
            </Link>
            <ChevronRight size={10} style={{ color: "oklch(0.30 0.005 260)" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "oklch(0.65 0.22 45)" }}>Products</span>
          </div>
          <div className="fuli-label" style={{ marginBottom: "1rem" }}>Product Catalog</div>
          <h1 className="fuli-display" style={{ fontSize: "clamp(3rem, 7vw, 7rem)", color: "oklch(0.95 0.002 260)", marginBottom: "1.25rem" }}>
            Bearing Range
          </h1>
          <p style={{ color: "oklch(0.48 0.008 260)", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: "52ch" }}>
            Comprehensive bearing solutions for every industrial application. ISO 9001 certified, factory-direct with full export documentation.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section style={{ paddingTop: "4rem", paddingBottom: "6rem" }}>
        <div className="container">
          {/* Filter tabs */}
          <div style={{ display: "flex", gap: 0, marginBottom: "3rem", borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  padding: "0.85rem 1.5rem",
                  background: "none",
                  border: "none",
                  borderBottom: active === cat ? "2px solid oklch(0.65 0.22 45)" : "2px solid transparent",
                  color: active === cat ? "oklch(0.65 0.22 45)" : "oklch(0.42 0.008 260)",
                  cursor: "pointer",
                  transition: "color 0.2s",
                  marginBottom: "-1px",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "oklch(1 0 0 / 0.06)" }}>
            {filtered.map((p) => (
              <div
                key={p.id}
                style={{
                  background: "oklch(0.10 0.006 260)",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  transition: "background 0.2s",
                }}
                className="lg:grid-cols-[340px_1fr]"
                onMouseEnter={(e) => { e.currentTarget.style.background = "oklch(0.12 0.007 260)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "oklch(0.10 0.006 260)"; }}
              >
                {/* Image */}
                <div style={{ position: "relative", overflow: "hidden", minHeight: "220px" }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "220px", transition: "transform 0.5s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, oklch(0.10 0.006 260))" }} className="hidden lg:block" />
                  <div style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9rem",
                    letterSpacing: "0.15em",
                    color: "oklch(0.65 0.22 45)",
                    background: "oklch(0.08 0.005 260 / 0.85)",
                    padding: "0.25rem 0.7rem",
                    border: "1px solid oklch(0.65 0.22 45 / 0.4)",
                  }}>
                    {p.code} SERIES
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h2
                    className="fuli-display"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", color: "oklch(0.93 0.003 260)", marginBottom: "0.75rem" }}
                  >
                    {p.name}
                  </h2>
                  <p style={{ color: "oklch(0.48 0.008 260)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: "52ch", marginBottom: "1.5rem" }}>
                    {p.desc}
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "1.75rem" }}>
                    {/* Specs */}
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "oklch(0.40 0.006 260)", marginBottom: "0.6rem" }}>
                        Specifications
                      </div>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {p.specs.map((s) => (
                          <li key={s} style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "oklch(0.55 0.008 260)", fontSize: "0.78rem", lineHeight: 1.8 }}>
                            <span style={{ color: "oklch(0.65 0.22 45)", fontSize: "0.55rem" }}>▸</span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Series */}
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "oklch(0.40 0.006 260)", marginBottom: "0.6rem" }}>
                        Series
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                        {p.series.map((s) => (
                          <span key={s} style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.65rem",
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            color: "oklch(0.55 0.008 260)",
                            background: "oklch(0.14 0.008 260)",
                            padding: "0.2rem 0.5rem",
                            border: "1px solid oklch(1 0 0 / 0.07)",
                          }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                    <Link href="/contact">
                      <span className="fuli-cta" style={{ fontSize: "0.72rem", padding: "0.65rem 1.5rem" }}>
                        Request Quote <ArrowRight size={12} />
                      </span>
                    </Link>
                    <a href="mailto:fulibearing@163.com">
                      <span className="fuli-cta-ghost" style={{ fontSize: "0.72rem", padding: "0.65rem 1.5rem" }}>
                        Send Inquiry
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom CTA */}
          <div style={{
            marginTop: "4rem",
            padding: "3rem",
            background: "oklch(0.10 0.006 260)",
            border: "1px solid oklch(1 0 0 / 0.08)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1.5rem",
          }}>
            <div className="fuli-label">Custom Orders</div>
            <h3 className="fuli-display" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "oklch(0.95 0.002 260)" }}>
              Need a Custom Size?
            </h3>
            <p style={{ color: "oklch(0.48 0.008 260)", fontSize: "0.85rem", maxWidth: "48ch", lineHeight: 1.7 }}>
              We manufacture non-standard bearings to your specifications. OEM/ODM accepted with custom packaging and branding.
            </p>
            <Link href="/contact">
              <span className="fuli-cta">
                Request Custom Quote <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
