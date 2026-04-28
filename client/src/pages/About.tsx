/**
 * FULI Machinery — About Page
 * Design: SKF-inspired industrial dark
 */
import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";

const milestones = [
  { year: "2009", event: "FULI Machinery founded in Liaocheng, Shandong Province, China" },
  { year: "2012", event: "ISO 9001:2015 Quality Management System certification obtained" },
  { year: "2015", event: "Expanded production capacity to 500,000 units per month" },
  { year: "2018", event: "Entered Middle East, Southeast Asia and African markets" },
  { year: "2021", event: "Launched OEM/ODM custom bearing program for international brands" },
  { year: "2024", event: "Serving 50+ countries with 1,000+ global clients" },
];

const certs = [
  { name: "ISO 9001:2015", body: "Quality Management System", color: "oklch(0.65 0.22 45)" },
  { name: "CE Marking", body: "European Conformity", color: "oklch(0.55 0.18 145)" },
  { name: "RoHS", body: "Hazardous Substances Directive", color: "oklch(0.55 0.18 200)" },
  { name: "REACH", body: "Chemical Safety Regulation", color: "oklch(0.55 0.18 300)" },
];

const capabilities = [
  "CNC precision grinding machines",
  "Automatic assembly lines",
  "CMM coordinate measuring",
  "Noise & vibration testing",
  "Salt spray corrosion testing",
  "Hardness & load testing",
];

const team = [
  { name: "Quality Control", count: "28", unit: "Engineers" },
  { name: "R&D Team", count: "15", unit: "Specialists" },
  { name: "Production", count: "200+", unit: "Workers" },
  { name: "Export Sales", count: "12", unit: "Managers" },
];

export default function About() {
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
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "oklch(0.65 0.22 45)" }}>About</span>
          </div>
          <div className="fuli-label" style={{ marginBottom: "1rem" }}>Company Profile</div>
          <h1 className="fuli-display" style={{ fontSize: "clamp(3rem, 7vw, 7rem)", color: "oklch(0.95 0.002 260)", marginBottom: "1.25rem" }}>
            About FULI
          </h1>
          <p style={{ color: "oklch(0.48 0.008 260)", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: "52ch" }}>
            15+ years of precision bearing manufacturing. ISO 9001 certified, factory-direct, serving industrial clients in 50+ countries.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", alignItems: "start" }} className="lg:grid-cols-2">
            {/* Left: text */}
            <div>
              <div className="fuli-label" style={{ marginBottom: "1rem" }}>Our Story</div>
              <h2 className="fuli-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "oklch(0.95 0.002 260)", marginBottom: "1.5rem" }}>
                Precision Since <span style={{ color: "oklch(0.65 0.22 45)" }}>2009</span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  "FULI Machinery (Shandong) Limited Company was founded in 2009 in Liaocheng, Shandong Province — China's premier bearing manufacturing region. We specialize in the production and export of precision bearings for industrial applications worldwide.",
                  "Our 15,000 m² manufacturing facility houses state-of-the-art CNC grinding machines, automated assembly lines, and a dedicated quality control laboratory. Every bearing is tested for dimensional accuracy, noise level, and load capacity before shipment.",
                  "We supply OEM manufacturers, industrial distributors, and maintenance contractors across 50+ countries. Our export team provides full documentation including commercial invoices, packing lists, certificates of origin, and material test reports.",
                ].map((text, i) => (
                  <p key={i} style={{ color: "oklch(0.50 0.008 260)", fontSize: "0.88rem", lineHeight: 1.8 }}>{text}</p>
                ))}
              </div>
            </div>

            {/* Right: image + team stats */}
            <div>
              <div style={{ position: "relative", marginBottom: "2rem" }}>
                <img
                  src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80"
                  alt="FULI Factory"
                  style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  background: "oklch(0.08 0.005 260 / 0.9)",
                  padding: "0.75rem 1.25rem",
                  border: "1px solid oklch(1 0 0 / 0.12)",
                }}>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", letterSpacing: "0.12em", color: "oklch(0.65 0.22 45)" }}>
                    LIAOCHENG, SHANDONG
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "oklch(0.45 0.008 260)", marginTop: "2px" }}>
                    15,000 m² Manufacturing Facility
                  </div>
                </div>
              </div>

              {/* Team stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "oklch(1 0 0 / 0.06)" }}>
                {team.map((t) => (
                  <div key={t.name} style={{ background: "oklch(0.10 0.006 260)", padding: "1.5rem" }}>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "2rem", color: "oklch(0.65 0.22 45)", lineHeight: 1 }}>{t.count}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "oklch(0.42 0.008 260)", marginTop: "0.3rem" }}>{t.unit}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.55 0.008 260)", marginTop: "0.2rem" }}>{t.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: "oklch(0.06 0.004 260)",
        borderTop: "1px solid oklch(1 0 0 / 0.06)",
      }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", alignItems: "center" }} className="lg:grid-cols-2">
            <div>
              <div className="fuli-label" style={{ marginBottom: "1rem" }}>Production Facility</div>
              <h2 className="fuli-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "oklch(0.95 0.002 260)", marginBottom: "1.5rem" }}>
                Factory &amp; Equipment
              </h2>
              <p style={{ color: "oklch(0.50 0.008 260)", fontSize: "0.88rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Our modern manufacturing facility is equipped with state-of-the-art machinery and testing equipment to ensure every bearing meets the highest quality standards.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {capabilities.map((cap) => (
                  <div key={cap} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                    <span style={{ color: "oklch(0.65 0.22 45)", fontSize: "0.6rem", marginTop: "0.35rem", flexShrink: 0 }}>▸</span>
                    <span style={{ color: "oklch(0.52 0.008 260)", fontSize: "0.8rem", lineHeight: 1.5 }}>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                alt="FULI Factory Equipment"
                style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div className="container">
          <div className="fuli-label" style={{ marginBottom: "1rem" }}>Company History</div>
          <h2 className="fuli-display" style={{ fontSize: "clamp(2rem, 4vw, 4rem)", color: "oklch(0.95 0.002 260)", marginBottom: "3.5rem" }}>
            Our Journey
          </h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {milestones.map((m, i) => (
              <div
                key={m.year}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "0.5rem",
                  padding: "1.5rem 0",
                  borderBottom: i < milestones.length - 1 ? "1px solid oklch(1 0 0 / 0.06)" : "none",
                }}
                className="md:grid-cols-[10rem_1fr]"
              >
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1.8rem",
                  letterSpacing: "0.08em",
                  color: i === milestones.length - 1 ? "oklch(0.65 0.22 45)" : "oklch(0.35 0.006 260)",
                  lineHeight: 1,
                }}>
                  {m.year}
                </div>
                <div style={{ color: "oklch(0.55 0.008 260)", fontSize: "0.88rem", lineHeight: 1.6, paddingTop: "0.3rem" }}>
                  {m.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: "oklch(0.06 0.004 260)",
        borderTop: "1px solid oklch(1 0 0 / 0.06)",
      }}>
        <div className="container">
          <div className="fuli-label" style={{ marginBottom: "1rem" }}>Quality Assurance</div>
          <h2 className="fuli-display" style={{ fontSize: "clamp(2rem, 4vw, 4rem)", color: "oklch(0.95 0.002 260)", marginBottom: "3rem" }}>
            Certifications
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "oklch(1 0 0 / 0.06)" }} className="lg:grid-cols-4">
            {certs.map((c) => (
              <div
                key={c.name}
                style={{
                  background: "oklch(0.10 0.006 260)",
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "oklch(0.13 0.008 260)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "oklch(0.10 0.006 260)"; }}
              >
                <div style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  border: `1px solid ${c.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <div style={{ width: "0.6rem", height: "0.6rem", background: c.color }} />
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.4rem", letterSpacing: "0.1em", color: "oklch(0.90 0.003 260)" }}>
                  {c.name}
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.42 0.008 260)", letterSpacing: "0.06em" }}>
                  {c.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        textAlign: "center",
      }}>
        <div className="container">
          <div className="fuli-label" style={{ justifyContent: "center", marginBottom: "1.5rem" }}>Work With Us</div>
          <h2 className="fuli-display" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", color: "oklch(0.95 0.002 260)", marginBottom: "1.25rem" }}>
            Partner With FULI
          </h2>
          <p style={{ color: "oklch(0.48 0.008 260)", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: "44ch", margin: "0 auto 2.5rem" }}>
            Join 1,000+ industrial clients worldwide. Get factory-direct pricing with full export support.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact">
              <span className="fuli-cta">Contact Us <ArrowRight size={14} /></span>
            </Link>
            <Link href="/products">
              <span className="fuli-cta-ghost">View Products</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
