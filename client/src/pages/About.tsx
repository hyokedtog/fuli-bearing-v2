/**
 * FULI Bearing — About Page
 * Design: SKF-inspired industrial dark
 * Real info: 20+ years export experience, 20+ countries, real export markets
 */
import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";

const milestones = [
  { year: "2000s", event: "Started bearing export business, first shipments to Middle East markets" },
  { year: "2010s", event: "Expanded into African markets — Kenya, Nigeria, Egypt, Tanzania" },
  { year: "2015", event: "Entered Latin American markets — Mexico and Colombia" },
  { year: "2018", event: "Established supply partnerships with verified Linqing factories" },
  { year: "2020", event: "Reached 20+ active export countries across 5 continents" },
  { year: "2024", event: "Serving distributors and OEMs with full export documentation support" },
];

const exportRegions = [
  { region: "Europe", countries: "Germany", flag: "🇩🇪", bearings: "Industrial & automotive" },
  { region: "Middle East", countries: "Iran · Egypt", flag: "🇮🇷", bearings: "Motor, pump & agricultural" },
  { region: "East Africa", countries: "Kenya · Tanzania", flag: "🇰🇪", bearings: "Motorcycle & boda-boda" },
  { region: "West Africa", countries: "Nigeria · Ghana", flag: "🇳🇬", bearings: "Motorcycle & light industrial" },
  { region: "North Africa", countries: "Egypt", flag: "🇪🇬", bearings: "Water pump & motor" },
  { region: "Latin America", countries: "Mexico · Colombia", flag: "🇲🇽", bearings: "Industrial & agricultural" },
];

const certs = [
  { name: "ISO 9001:2015", body: "Quality Management System", color: "oklch(0.65 0.22 45)" },
  { name: "CE Marking", body: "European Conformity", color: "oklch(0.55 0.18 145)" },
  { name: "RoHS", body: "Hazardous Substances", color: "oklch(0.55 0.18 200)" },
  { name: "CO / Packing List", body: "Full Export Documentation", color: "oklch(0.55 0.18 300)" },
];

const services = [
  "Bearing selection & spec confirmation",
  "Full export documentation (CO, packing list, inspection report)",
  "Multi-factory sourcing from Linqing",
  "Custom packaging & OEM labelling",
  "Price quote within 2 hours",
  "Shipment tracking support",
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
          <p style={{ color: "oklch(0.62 0.008 260)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: "52ch" }}>
            20+ years of bearing export experience. Serving distributors and OEMs in 20+ countries across Europe, Middle East, Africa and Latin America.
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
                20+ Years in <span style={{ color: "oklch(0.65 0.22 45)" }}>Export</span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  "FULI Bearing is a bearing trading company with over 20 years of export experience, based in China. We source from verified factories in Linqing, Shandong — China's largest bearing production base — and supply distributors and OEMs worldwide.",
                  "We have active export relationships in 20+ countries, including Germany, Iran, Egypt, Kenya, Tanzania, Nigeria, Mexico and Colombia. Our team understands the specific bearing requirements of each market and provides targeted product recommendations.",
                  "Every shipment comes with full export documentation: commercial invoice, packing list, certificate of origin, and inspection report. We handle the paperwork so your customs clearance is hassle-free.",
                ].map((text, i) => (
                  <p key={i} style={{ color: "oklch(0.62 0.008 260)", fontSize: "0.9rem", lineHeight: 1.8 }}>{text}</p>
                ))}
              </div>
            </div>

            {/* Right: export stats */}
            <div>
              <div style={{ position: "relative", marginBottom: "2rem" }}>
                <img
                  src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80"
                  alt="Bearing Export"
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
                    LINQING, SHANDONG
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "oklch(0.45 0.008 260)", marginTop: "2px" }}>
                    China's Largest Bearing Production Base
                  </div>
                </div>
              </div>

              {/* Key stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "oklch(1 0 0 / 0.06)" }}>
                {[
                  { value: "20+", label: "Years Export Experience" },
                  { value: "20+", label: "Countries Served" },
                  { value: "30", label: "Core SKU Models" },
                  { value: "2hr", label: "Quote Response Time" },
                ].map((s) => (
                  <div key={s.label} style={{ background: "oklch(0.10 0.006 260)", padding: "1.5rem" }}>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "2rem", fontWeight: 700, color: "oklch(0.65 0.22 45)", lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "oklch(0.50 0.008 260)", marginTop: "0.4rem" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Markets */}
      <section style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: "oklch(0.06 0.004 260)",
        borderTop: "1px solid oklch(1 0 0 / 0.06)",
      }}>
        <div className="container">
          <div className="fuli-label" style={{ marginBottom: "1rem" }}>Global Reach</div>
          <h2 className="fuli-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "oklch(0.95 0.002 260)", marginBottom: "3rem" }}>
            Export Markets
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "oklch(1 0 0 / 0.06)" }} className="lg:grid-cols-3">
            {exportRegions.map((r) => (
              <div key={r.countries} style={{ background: "oklch(0.10 0.006 260)", padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "1.8rem" }}>{r.flag}</span>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "oklch(0.65 0.22 45)", marginBottom: "0.15rem" }}>{r.region}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 600, color: "oklch(0.90 0.003 260)" }}>{r.countries}</div>
                  </div>
                </div>
                <p style={{ color: "oklch(0.62 0.008 260)", fontSize: "0.85rem", lineHeight: 1.6 }}>{r.bearings}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", alignItems: "center" }} className="lg:grid-cols-2">
            <div>
              <div className="fuli-label" style={{ marginBottom: "1rem" }}>What We Provide</div>
              <h2 className="fuli-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "oklch(0.95 0.002 260)", marginBottom: "1.5rem" }}>
                Our Services
              </h2>
              <p style={{ color: "oklch(0.62 0.008 260)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                From product selection to shipment, we handle the full export process so you can focus on your business.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {services.map((s) => (
                  <div key={s} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                    <span style={{ color: "oklch(0.65 0.22 45)", fontSize: "0.6rem", marginTop: "0.35rem", flexShrink: 0 }}>▸</span>
                    <span style={{ color: "oklch(0.65 0.008 260)", fontSize: "0.85rem", lineHeight: 1.5 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                alt="Bearing Quality"
                style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: "oklch(0.06 0.004 260)",
        borderTop: "1px solid oklch(1 0 0 / 0.06)",
      }}>
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
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  color: i === milestones.length - 1 ? "oklch(0.65 0.22 45)" : "oklch(0.35 0.006 260)",
                  lineHeight: 1,
                }}>
                  {m.year}
                </div>
                <div style={{ color: "oklch(0.62 0.008 260)", fontSize: "0.9rem", lineHeight: 1.6, paddingTop: "0.3rem" }}>
                  {m.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
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
                }}
              >
                <div style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  background: `${c.color}22`,
                  border: `1px solid ${c.color}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <div style={{ width: "0.75rem", height: "0.75rem", background: c.color }} />
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 700, color: "oklch(0.90 0.003 260)" }}>{c.name}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "oklch(0.55 0.008 260)", lineHeight: 1.5 }}>{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: "oklch(0.06 0.004 260)",
        borderTop: "1px solid oklch(1 0 0 / 0.06)",
        textAlign: "center",
      }}>
        <div className="container">
          <div className="fuli-label" style={{ justifyContent: "center", marginBottom: "1.5rem" }}>Work With Us</div>
          <h2 className="fuli-display" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", color: "oklch(0.95 0.002 260)", marginBottom: "1.25rem" }}>
            Partner With FULI
          </h2>
          <p style={{ color: "oklch(0.62 0.008 260)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: "44ch", margin: "0 auto 2.5rem" }}>
            Join our network of distributors and OEMs worldwide. Competitive pricing with full export documentation on every shipment.
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
