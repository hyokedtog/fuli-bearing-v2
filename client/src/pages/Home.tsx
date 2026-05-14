/**
 * FULI Machinery — Home Page
 * Design: SKF-inspired industrial dark
 * — Full-screen Mux video hero with overlay text
 * — Bebas Neue display headings, Barlow body
 * — Black/near-black background, orange accents, sharp corners
 * — Sections: Hero → Stats → Products → Why FULI → Industries → Testimonials → CTA
 */
import MuxPlayer from "@mux/mux-player-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────── */
const stats = [
  { value: 20, suffix: "+", label: "Years in Export" },
  { value: 20, suffix: "+", label: "Countries Served" },
  { value: 30, suffix: "", label: "Core SKU Models" },
  { value: 2, suffix: "hr", label: "Quote Response" },
];

const products = [
  {
    code: "MOTO",
    icon: "🏍️",
    name: "Motorcycle Bearings",
    desc: "6201 / 6202 / 6301 / 6302 and more — 10 core models covering 90% of East Africa boda-boda repair demand. High repeat purchase, fast reorder.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    accent: "#f97316",
  },
  {
    code: "MOTOR",
    icon: "⚡",
    name: "Motor & Pump Bearings",
    desc: "6205–6208 C3 clearance series. Critical for electric motors and water pumps running at high temperatures. Covers 80% of industrial motor needs.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    accent: "#3b82f6",
  },
  {
    code: "AGRI",
    icon: "🌾",
    name: "Agricultural Bearings",
    desc: "UCP/UCF pillow blocks + 30206/30208 tapered rollers. Built for tractors, conveyors, and farm equipment across East Africa and Latin America.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    accent: "#22c55e",
  },
  {
    code: "IND",
    icon: "🏭",
    name: "Industrial Bearings",
    desc: "Spherical roller bearings (22213–23022) for mining, cement, and heavy industry. South Africa, Chile, Peru — high unit value, stable repeat orders.",
    img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
    accent: "#a855f7",
  },
];

const advantages = [
  {
    num: "01",
    title: "ISO 9001 Certified",
    desc: "Strict quality control at every production stage. All bearings tested before shipment.",
  },
  {
    num: "02",
    title: "Sourced from Linqing",
    desc: "We work with verified factories in Linqing, China's bearing capital — giving you access to the right spec at a competitive price.",
  },
  {
    num: "03",
    title: "Ships 24–72 hrs",
    desc: "Large inventory ready for immediate dispatch. Custom orders fulfilled in 15–30 days.",
  },
  {
    num: "04",
    title: "OEM / ODM Ready",
    desc: "Special sizes, materials, and custom packaging accepted. Your brand, our precision.",
  },
];

const industries = [
  { name: "Automotive", icon: "🚗", items: ["Wheel hubs", "Transmissions", "Steering columns"] },
  { name: "Agriculture", icon: "🌾", items: ["Combine harvesters", "Grain augers", "Tractors"] },
  { name: "Mining", icon: "⛏️", items: ["Rock crushers", "Conveyor systems", "Drilling rigs"] },
  { name: "Machinery", icon: "⚙️", items: ["Pumps & compressors", "Gearboxes", "Machine tools"] },
  { name: "Electric Motors", icon: "⚡", items: ["Motor shafts", "Generators", "Industrial fans"] },
  { name: "Construction", icon: "🏗️", items: ["Excavators", "Tower cranes", "Concrete mixers"] },
];

const exportMarkets = [
  { region: "Europe", country: "Germany", flag: "🇩🇪", note: "Industrial & automotive bearings" },
  { region: "Middle East", country: "Iran & Egypt", flag: "🇮🇷", note: "Motor, pump & agricultural bearings" },
  { region: "East Africa", country: "Kenya & Tanzania", flag: "🇰🇪", note: "Motorcycle & boda-boda repair market" },
  { region: "Latin America", country: "Mexico & Colombia", flag: "🇲🇽", note: "Industrial & agricultural machinery" },
  { region: "North Africa", country: "Egypt", flag: "🇪🇬", note: "Water pump & motor bearings" },
  { region: "West Africa", country: "Nigeria & Ghana", flag: "🇳🇬", note: "Motorcycle & light industrial" },
];

/* ─── Animated counter hook ────────────────────────────────── */
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

/* ─── Stat item ─────────────────────────────────────────────── */
function StatItem({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCounter(value, 1600, start);
  return (
    <div style={{ textAlign: "center" }}>
      <div className="fuli-stat">
        {count}{suffix}
      </div>
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.85rem",
        fontWeight: 600,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "oklch(0.58 0.008 260)",
        marginTop: "0.4rem",
      }}>
        {label}
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────── */
export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "oklch(0.08 0.005 260)" }}>

      {/* ── HERO: Full-screen Mux video ── */}
      <section style={{ position: "relative", width: "100%", height: "100vh", minHeight: "600px", overflow: "hidden" }}>
        {/* Mux video background */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <MuxPlayer
            playbackId="TJx5LIjkM501J00OYq7YSOJWqMPgQIGJORoohjfpUL8vc"
            streamType="on-demand"
            autoPlay="muted"
            loop
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="[&_media-control-bar]:hidden"
          />
        </div>

        {/* Dark gradient overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: "linear-gradient(to top, oklch(0.06 0.004 260 / 0.95) 0%, oklch(0.06 0.004 260 / 0.55) 40%, oklch(0.06 0.004 260 / 0.25) 100%)",
        }} />

        {/* Subtle left-side vertical rule */}
        <div style={{
          position: "absolute",
          left: "3rem",
          top: "50%",
          transform: "translateY(-50%)",
          width: "1px",
          height: "30vh",
          background: "linear-gradient(to bottom, transparent, oklch(0.65 0.22 45 / 0.6), transparent)",
          zIndex: 2,
          display: "none",
        }} className="lg:block" />

        {/* Hero content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingBottom: "6rem",
          }}
          className="container"
        >
          {/* Label */}
          <div className="fuli-label" style={{ marginBottom: "1.5rem" }}>
            Shandong, China · Est. 2009
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(3rem, 8vw, 7.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              color: "oklch(0.97 0.002 260)",
              marginBottom: "1.5rem",
              maxWidth: "14ch",
            }}
          >
            Precision<br />
            Bearings<br />
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 500,
              color: "oklch(0.65 0.22 45)",
            }}>for Industry</span>
          </h1>

          {/* Product tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
            {["Motorcycle", "Motor & Pump", "Agricultural", "Industrial"].map((t, i) => (
              <span
                key={t}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: i === 0 ? "oklch(0.65 0.22 45)" : "oklch(0.70 0.006 260)",
                  padding: "0.4rem 1rem",
                  border: `1px solid ${i === 0 ? "oklch(0.65 0.22 45 / 0.5)" : "oklch(1 0 0 / 0.12)"}`,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Subtext */}
          <p style={{
            color: "oklch(0.78 0.006 260)",
            fontSize: "1rem",
            fontWeight: 400,
            maxWidth: "42ch",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}>
            ISO 9001 certified bearings. Full export documentation on every shipment. Trusted by distributors and OEMs in 20+ countries.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/products">
              <span className="fuli-cta">
                Explore Products
                <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/contact">
              <span className="fuli-cta-ghost">
                Get a Quote
              </span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute",
          bottom: "2rem",
          right: "3rem",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
        }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "oklch(0.50 0.006 260)",
            writingMode: "vertical-rl",
          }}>Scroll</span>
          <ChevronDown size={14} style={{ color: "oklch(0.40 0.006 260)" }} />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div
        ref={statsRef}
        style={{
          background: "oklch(0.06 0.004 260)",
          borderTop: "1px solid oklch(1 0 0 / 0.06)",
          borderBottom: "1px solid oklch(1 0 0 / 0.06)",
        }}
      >
        <div className="container" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}
            className="sm:grid-cols-4">
            {stats.map((s) => (
              <StatItem key={s.label} {...s} start={statsVisible} />
            ))}
          </div>
        </div>
      </div>

      {/* ── PRODUCTS ── */}
      <section style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div className="container">
          <div style={{ marginBottom: "3.5rem" }}>
            <div className="fuli-label" style={{ marginBottom: "1rem" }}>Product Catalog</div>
            <h2
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3.8rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "oklch(0.95 0.002 260)",
              }}
            >
              Our Bearing{" "}
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500 }}>Range</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px", background: "oklch(1 0 0 / 0.06)" }}>
            {products.map((p, i) => (
              <Link key={p.code} href="/products">
                <div
                  className="fuli-product-card"
                  style={{ cursor: "pointer", display: "grid", gridTemplateColumns: "260px 1fr", minHeight: "160px" }}
                >
                  {/* Image — fixed left column */}
                  <div style={{ position: "relative", overflow: "hidden", width: "260px", minHeight: "160px" }}>
                    <img
                      src={p.img}
                      alt={p.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease", position: "absolute", inset: 0 }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, oklch(0.12 0.008 260 / 0.6) 100%)" }} />
                    <div style={{
                      position: "absolute",
                      top: "0.75rem",
                      left: "0.75rem",
                      fontSize: "0.65rem",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: p.accent,
                      background: "oklch(0.08 0.005 260 / 0.88)",
                      padding: "0.2rem 0.6rem",
                      border: `1px solid ${p.accent}50`,
                    }}>
                      {String(i + 1).padStart(2, "0")} {p.icon}
                    </div>
                  </div>

                  {/* Content — right side */}
                  <div style={{ padding: "1.75rem 2.25rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h3 style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "oklch(0.96 0.003 260)",
                      marginBottom: "0.5rem",
                    }}>
                      {p.name}
                    </h3>
                    <p style={{ color: "oklch(0.62 0.008 260)", fontSize: "0.85rem", lineHeight: 1.65, maxWidth: "55ch" }}>
                      {p.desc}
                    </p>
                    <div style={{
                      marginTop: "1rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase" as const,
                      color: p.accent,
                    }}>
                      View Models <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href="/products">
              <span className="fuli-cta-ghost">
                View All Products <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY FULI ── */}
      <section style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: "oklch(0.06 0.004 260)",
        borderTop: "1px solid oklch(1 0 0 / 0.06)",
      }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", alignItems: "center" }}
            className="lg:grid-cols-2">
            {/* Left: heading */}
            <div>
              <div className="fuli-label" style={{ marginBottom: "1rem" }}>Manufacturer Advantage</div>
              <h2
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 4vw, 4rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  color: "oklch(0.95 0.002 260)",
                  marginBottom: "1.5rem",
                }}
              >
                Why Choose{" "}
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                  color: "oklch(0.65 0.22 45)",
                }}>FULI</span>
              </h2>
              <p style={{
                color: "oklch(0.72 0.008 260)",
                fontSize: "1rem",
                lineHeight: 1.8,
                maxWidth: "44ch",
                marginBottom: "2rem",
              }}>
                Factory-direct supply with full export documentation and dedicated international support. We manufacture every bearing to exacting standards.
              </p>
              <Link href="/contact">
                <span className="fuli-cta">
                  Request a Quote <ArrowRight size={14} />
                </span>
              </Link>
            </div>

            {/* Right: advantage grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "oklch(1 0 0 / 0.06)" }}>
              {advantages.map((a) => (
                <div
                  key={a.num}
                  style={{
                    background: "oklch(0.10 0.006 260)",
                    padding: "2rem",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "oklch(0.13 0.008 260)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "oklch(0.10 0.006 260)"; }}
                >
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "oklch(0.65 0.22 45 / 0.5)",
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                  }}>{a.num}</div>
                  <h3 style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    color: "oklch(0.90 0.003 260)",
                    marginBottom: "0.6rem",
                  }}>{a.title}</h3>
                  <p style={{ color: "oklch(0.72 0.008 260)", fontSize: "0.95rem", lineHeight: 1.65 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div className="container">
          <div style={{ marginBottom: "3.5rem" }}>
            <div className="fuli-label" style={{ marginBottom: "1rem" }}>Industries Served</div>
            <h2
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3.8rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "oklch(0.95 0.002 260)",
              }}
            >
              Appli<span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500 }}>cations</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "oklch(1 0 0 / 0.06)" }}
            className="sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((ind) => (
              <div
                key={ind.name}
                style={{
                  background: "oklch(0.10 0.006 260)",
                  padding: "1.75rem 1.25rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "oklch(0.14 0.008 260)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "oklch(0.10 0.006 260)"; }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{ind.icon}</div>
                <h3 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "oklch(0.85 0.003 260)",
                  marginBottom: "0.6rem",
                }}>{ind.name}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {ind.items.map((item) => (
                    <li key={item} style={{
                      color: "oklch(0.70 0.008 260)",
                      fontSize: "0.88rem",
                      lineHeight: 1.8,
                      paddingLeft: "0.8rem",
                      position: "relative",
                    }}>
                      <span style={{ position: "absolute", left: 0, color: "oklch(0.65 0.22 45)", fontSize: "0.65rem" }}>{"▸"}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPORT MARKETS ── */}
      <section style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: "oklch(0.06 0.004 260)",
        borderTop: "1px solid oklch(1 0 0 / 0.06)",
      }}>
        <div className="container">
          <div style={{ marginBottom: "3.5rem" }}>
            <div className="fuli-label" style={{ marginBottom: "1rem" }}>Global Reach</div>
            <h2
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3.8rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "oklch(0.95 0.002 260)",
              }}
            >
              Export{" "}
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500 }}>Markets</span>
            </h2>
            <p style={{ color: "oklch(0.62 0.008 260)", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "52ch", marginTop: "1rem" }}>
              20+ years of export experience. Active in 20+ countries across Europe, Middle East, Africa and Latin America.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1px", background: "oklch(1 0 0 / 0.06)" }}
            className="sm:grid-cols-2 lg:grid-cols-3">
            {exportMarkets.map((m) => (
              <div
                key={m.country}
                style={{
                  background: "oklch(0.10 0.006 260)",
                  padding: "2rem 2rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "oklch(0.13 0.008 260)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "oklch(0.10 0.006 260)"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "1.8rem" }}>{m.flag}</span>
                  <div>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase" as const,
                      color: "oklch(0.65 0.22 45)",
                      marginBottom: "0.15rem",
                    }}>{m.region}</div>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "oklch(0.90 0.003 260)",
                    }}>{m.country}</div>
                  </div>
                </div>
                <p style={{ color: "oklch(0.68 0.008 260)", fontSize: "0.88rem", lineHeight: 1.6 }}>{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        paddingTop: "7rem",
        paddingBottom: "7rem",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background accent */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, oklch(0.65 0.22 45 / 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="fuli-label" style={{ justifyContent: "center", marginBottom: "1.5rem" }}>
            Get in Touch
          </div>
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "oklch(0.95 0.002 260)",
              marginBottom: "1.25rem",
            }}
          >
            Ready to{" "}
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500 }}>Order?</span>
          </h2>
          <p style={{
            color: "oklch(0.72 0.008 260)",
            fontSize: "1rem",
            lineHeight: 1.8,
            maxWidth: "44ch",
            margin: "0 auto 2.5rem",
          }}>
            Send us your requirements and receive a competitive quote within 24 hours. Our team speaks English, Arabic, and Russian.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/contact">
              <span className="fuli-cta">
                Request a Quote <ArrowRight size={14} />
              </span>
            </Link>
            <a href="https://wa.me/8615263521305" target="_blank" rel="noopener noreferrer">
              <span className="fuli-cta-ghost">
                WhatsApp Us
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
