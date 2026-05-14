/*
 * FULI Bearing — Home Page
 * Design: Light industrial — SKF/NSK inspired
 * — Full-screen Mux video hero (dark overlay, light text)
 * — White/light-grey content sections, dark text, orange accents
 * — Sections: Hero → Stats → Products → Certifications → Shipping → Why FULI → Industries → Export Markets → CTA
 */
import MuxPlayer from "@mux/mux-player-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, Award, Globe, Package, Clock, ShieldCheck, Truck, Factory, Headphones } from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────── */
const stats = [
  { value: 17, suffix: "+", label: "Years in Export", icon: Clock, color: "oklch(0.65 0.22 45)" },
  { value: 20, suffix: "+", label: "Countries Served", icon: Globe, color: "oklch(0.45 0.18 220)" },
  { value: 30, suffix: "", label: "Core SKU Models", icon: Package, color: "oklch(0.50 0.18 145)" },
  { value: 2, suffix: "hr", label: "Quote Response", icon: Headphones, color: "oklch(0.50 0.20 300)" },
];

const products = [
  {
    code: "MOTO",
    icon: "🏍️",
    name: "Motorcycle Bearings",
    desc: "6201 / 6202 / 6301 / 6302 and more — 10 core models covering 90% of East Africa boda-boda repair demand. High repeat purchase, fast reorder.",
    img: "/manus-storage/bearing-motorcycle_dc63e804.png",
    accent: "oklch(0.65 0.22 45)",
    href: "/products/motorcycle",
  },
  {
    code: "MOTOR",
    icon: "⚡",
    name: "Motor & Pump Bearings",
    desc: "6205–6208 C3 clearance series. Critical for electric motors and water pumps running at high temperatures. Covers 80% of industrial motor needs.",
    img: "/manus-storage/bearing-motor-pump_fc2189a0.png",
    accent: "oklch(0.45 0.18 220)",
    href: "/products/motor",
  },
  {
    code: "AGRI",
    icon: "🌾",
    name: "Agricultural Bearings",
    desc: "UCP/UCF pillow blocks + 30206/30208 tapered rollers. Built for tractors, conveyors, and farm equipment across East Africa and Latin America.",
    img: "/manus-storage/bearing-agricultural_b095333d.png",
    accent: "oklch(0.50 0.18 145)",
    href: "/products/agricultural",
  },
  {
    code: "IND",
    icon: "🏭",
    name: "Industrial Bearings",
    desc: "Spherical roller bearings (22213–23022) for mining, cement, and heavy industry. South Africa, Chile, Peru — high unit value, stable repeat orders.",
    img: "/manus-storage/bearing-industrial_0a55d947.png",
    accent: "oklch(0.50 0.20 300)",
    href: "/products/industrial",
  },
];

const certifications = [
  {
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    desc: "Certified by China Quality Certification Centre. Covers bearing sourcing, inspection, packaging and export processes.",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663607109789/48YXxtoXbaoufcubufBDmH/cert-iso9001-8MvGQd7fQGXX4ZVaGqNKWL.webp",
    tag: "CERTIFIED",
    tagColor: "oklch(0.65 0.22 45)",
  },
  {
    title: "Quality Honor",
    subtitle: "China Quality Excellence Award",
    desc: "Recognized for outstanding quality management and contribution to China's export trade standards.",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663607109789/48YXxtoXbaoufcubufBDmH/cert-honor-Ucbrztk2jqEF5HFa2RVHjz.webp",
    tag: "AWARDED",
    tagColor: "oklch(0.55 0.18 50)",
  },
  {
    title: "Export License",
    subtitle: "Ministry of Commerce P.R.C.",
    desc: "Authorized exporter under the Ministry of Commerce of the People's Republic of China. Full customs documentation on every shipment.",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663607109789/48YXxtoXbaoufcubufBDmH/cert-export-AQfYjUooT7oGGPAahkCs98.webp",
    tag: "LICENSED",
    tagColor: "oklch(0.45 0.18 220)",
  },
];

const shippingPhotos = [
  {
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663607109789/48YXxtoXbaoufcubufBDmH/shipping-boxes-aekEzXQpQQu8EaPn99nE6A.webp",
    caption: "Warehouse Stock",
    desc: "Bulk inventory ready for immediate dispatch",
  },
  {
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663607109789/48YXxtoXbaoufcubufBDmH/shipping-pallet-f8nNAZzfSV7BKQnWjQygev.webp",
    caption: "Export Pallets",
    desc: "Stretch-wrapped pallets ready for container loading",
  },
];

const advantages = [
  {
    num: "01",
    icon: ShieldCheck,
    title: "ISO 9001 Certified",
    desc: "Strict quality control at every stage. All bearings inspected before shipment with full documentation.",
    color: "oklch(0.65 0.22 45)",
  },
  {
    num: "02",
    icon: Factory,
    title: "Sourced from Linqing",
    desc: "We work with verified factories in Linqing, China's bearing capital — right spec, competitive price.",
    color: "oklch(0.50 0.18 145)",
  },
  {
    num: "03",
    icon: Truck,
    title: "Ships 24–72 hrs",
    desc: "Large inventory ready for immediate dispatch. Custom orders fulfilled in 15–30 days.",
    color: "oklch(0.45 0.18 220)",
  },
  {
    num: "04",
    icon: Award,
    title: "OEM / ODM Ready",
    desc: "Special sizes, materials, and custom packaging accepted. Your brand, our precision.",
    color: "oklch(0.50 0.20 300)",
  },
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
function StatItem({ value, suffix, label, icon: Icon, color, start }: {
  value: number; suffix: string; label: string; icon: React.ElementType; color: string; start: boolean;
}) {
  const count = useCounter(value, 1600, start);
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2.25rem 1.5rem",
      background: "oklch(1 0 0)",
      border: "1px solid oklch(0.88 0.004 260)",
      borderTop: `3px solid ${color}`,
      transition: "box-shadow 0.2s, transform 0.2s",
      gap: "0.75rem",
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 4px 20px ${color}20`;
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Icon circle */}
      <div style={{
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
        background: `${color}15`,
        border: `1px solid ${color}35`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        <Icon size={18} style={{ color }} />
      </div>
      {/* Number */}
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
        fontWeight: 800,
        letterSpacing: "-0.04em",
        lineHeight: 1,
        color: "oklch(0.18 0.012 260)",
      }}>
        {count}{suffix}
      </div>
      {/* Label */}
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.78rem",
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "oklch(0.55 0.008 260)",
        textAlign: "center",
      }}>
        {label}
      </div>
    </div>
  );
}

/* ─── Certificate Card ───────────────────────────────────────── */
function CertCard({ cert }: { cert: typeof certifications[0] }) {
  return (
    <div style={{
      background: "oklch(1 0 0)",
      border: "1px solid oklch(0.88 0.004 260)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      flexShrink: 0,
      width: "220px",
      transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${cert.tagColor}60`;
        e.currentTarget.style.boxShadow = `0 4px 24px ${cert.tagColor}15`;
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "oklch(0.88 0.004 260)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Certificate image */}
      <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", background: "oklch(0.95 0.003 260)" }}>
        <img
          src={cert.img}
          alt={cert.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
        />
        {/* Tag badge */}
        <div style={{
          position: "absolute",
          top: "0.75rem",
          left: "0.75rem",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.6rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          color: "oklch(1 0 0)",
          background: cert.tagColor,
          padding: "0.25rem 0.65rem",
        }}>
          {cert.tag}
        </div>
      </div>
      {/* Text */}
      <div style={{ padding: "1.5rem", borderTop: `2px solid ${cert.tagColor}` }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: cert.tagColor,
          marginBottom: "0.4rem",
        }}>
          {cert.subtitle}
        </div>
        <h3 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "oklch(0.18 0.012 260)",
          marginBottom: "0.6rem",
          letterSpacing: "-0.01em",
        }}>
          {cert.title}
        </h3>
        <p style={{
          color: "oklch(0.50 0.008 260)",
          fontSize: "0.82rem",
          lineHeight: 1.65,
        }}>
          {cert.desc}
        </p>
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
    <div style={{ background: "oklch(0.97 0.002 260)" }}>

      {/* ── HERO: Full-screen Mux video (stays dark — it's a video overlay) ── */}
      <section style={{ position: "relative", width: "100%", height: "100vh", minHeight: "600px", overflow: "hidden" }}>
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
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(to top, oklch(0.10 0.008 255 / 0.92) 0%, oklch(0.10 0.008 255 / 0.55) 40%, oklch(0.10 0.008 255 / 0.30) 100%)",
        }} />

        <div style={{
          position: "absolute", inset: 0, zIndex: 2,
          display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "6rem",
        }} className="container">
          <div className="fuli-label" style={{ marginBottom: "1.5rem" }}>Shandong, China · Est. 2005</div>
          <h1 style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
            fontSize: "clamp(3rem, 8vw, 7.5rem)", letterSpacing: "-0.03em",
            lineHeight: 1.0, color: "oklch(0.97 0.002 260)", marginBottom: "1.5rem", maxWidth: "14ch",
          }}>
            Precision<br />Bearings<br />
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500, color: "oklch(0.65 0.22 45)" }}>
              for Industry
            </span>
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
            {["Motorcycle", "Motor & Pump", "Agricultural", "Industrial"].map((t, i) => (
              <span key={t} style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 600,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: i === 0 ? "oklch(0.65 0.22 45)" : "oklch(0.80 0.006 260)",
                padding: "0.4rem 1rem",
                border: `1px solid ${i === 0 ? "oklch(0.65 0.22 45 / 0.6)" : "oklch(1 0 0 / 0.18)"}`,
              }}>{t}</span>
            ))}
          </div>
          <p style={{ color: "oklch(0.82 0.006 260)", fontSize: "1rem", fontWeight: 400, maxWidth: "42ch", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            ISO 9001 certified bearings. Full export documentation on every shipment. Trusted by distributors and OEMs in 20+ countries.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
            <Link href="/products"><span className="fuli-cta">Explore Products<ArrowRight size={14} /></span></Link>
            <Link href="/contact"><span className="fuli-cta-ghost-light">Get a Quote</span></Link>
            <a
              href="https://wa.me/8615263521305?text=Hello%2C%20I%20need%20a%20bearing%20quote."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#25D366",
                textDecoration: "none",
                padding: "0.6rem 1rem",
                border: "1px solid #25D366",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: "2rem", right: "3rem", zIndex: 2,
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem",
        }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 600,
            letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.60 0.006 260)",
            writingMode: "vertical-rl",
          }}>Scroll</span>
          <ChevronDown size={14} style={{ color: "oklch(0.50 0.006 260)" }} />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div ref={statsRef} style={{ background: "oklch(0.97 0.002 260)", borderBottom: "1px solid oklch(0.88 0.004 260)" }}>
        <div className="container" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}
            className="sm:grid-cols-4">
            {stats.map((s) => (
              <StatItem key={s.label} {...s} start={statsVisible} />
            ))}
          </div>
        </div>
      </div>

      {/* ── MOQ STRIP ── */}
      <div style={{ background: "oklch(0.14 0.018 255)", padding: "0.9rem 0", borderTop: "3px solid oklch(0.65 0.22 45)" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "2.5rem" }}>
            {[
              { label: "Trial Order", value: "50 pcs min" },
              { label: "Mixed SKU", value: "200 pcs total" },
              { label: "Regular Order", value: "500 pcs/model" },
              { label: "Quote Response", value: "Within 24 hrs" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(0.58 0.008 260)" }}>{item.label}:</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "oklch(0.95 0.002 260)" }}>{item.value}</span>
              </div>
            ))}
            <a
              href="https://wa.me/8615263521305?text=Hello%2C%20I%20need%20a%20trial%20order%20quote."
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.65 0.22 45)", textDecoration: "none", padding: "0.4rem 1rem", border: "1px solid oklch(0.65 0.22 45 / 0.6)" }}
            >
              Start a Trial Order →
            </a>
          </div>
        </div>
      </div>

      {/* ── PRODUCTS ── */}
      <section style={{ paddingTop: "6rem", paddingBottom: "6rem", background: "oklch(0.97 0.002 260)" }}>
        <div className="container">
          <div style={{ marginBottom: "3.5rem" }}>
            <div className="fuli-label" style={{ marginBottom: "1rem" }}>Product Catalog</div>
            <h2 className="fuli-display" style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)", marginBottom: "0.5rem" }}>
              Our Bearing{" "}
              <span className="fuli-serif">Range</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {products.map((p, i) => (
              <Link key={p.code} href={p.href}>
                <div style={{
                  cursor: "pointer",
                  display: "grid",
                  gridTemplateColumns: "280px 1fr",
                  minHeight: "170px",
                  background: "oklch(1 0 0)",
                  border: "1px solid oklch(0.88 0.004 260)",
                  borderLeft: `4px solid ${p.accent}`,
                  transition: "box-shadow 0.25s, transform 0.2s",
                  overflow: "hidden",
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 4px 24px ${p.accent}20`;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ position: "relative", overflow: "hidden", width: "280px", minHeight: "170px" }}>
                    <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease", position: "absolute", inset: 0 }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, oklch(1 0 0 / 0.5) 100%)" }} />
                    <div style={{
                      position: "absolute", top: "0.75rem", left: "0.75rem",
                      fontSize: "0.65rem", fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                      letterSpacing: "0.1em", color: "oklch(1 0 0)",
                      background: p.accent, padding: "0.2rem 0.6rem",
                    }}>
                      {String(i + 1).padStart(2, "0")} {p.icon}
                    </div>
                  </div>
                  <div style={{ padding: "1.75rem 2.25rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "oklch(0.18 0.012 260)", marginBottom: "0.5rem" }}>
                      {p.name}
                    </h3>
                    <p style={{ color: "oklch(0.50 0.008 260)", fontSize: "0.85rem", lineHeight: 1.65, maxWidth: "55ch" }}>{p.desc}</p>
                    <div style={{
                      marginTop: "1rem", display: "inline-flex", alignItems: "center", gap: "0.35rem",
                      fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 700,
                      letterSpacing: "0.12em", textTransform: "uppercase" as const, color: p.accent,
                    }}>
                      View Models & Specs <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href="/products"><span className="fuli-cta-ghost">View All Products <ArrowRight size={14} /></span></Link>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section style={{
        paddingTop: "6rem", paddingBottom: "6rem",
        background: "oklch(0.94 0.003 260)",
        borderTop: "1px solid oklch(0.88 0.004 260)",
        borderBottom: "1px solid oklch(0.88 0.004 260)",
      }}>
        <div className="container">
          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3.5rem", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <div className="fuli-label" style={{ marginBottom: "1rem" }}>Trust & Compliance</div>
              <h2 className="fuli-display" style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)", marginBottom: "1rem" }}>
                Certi<span className="fuli-serif">fications</span>
              </h2>
              <p style={{ color: "oklch(0.45 0.008 260)", fontSize: "0.92rem", lineHeight: 1.7, maxWidth: "48ch" }}>
                Every shipment is backed by internationally recognized certifications. Upload your ISO 9001 certificate and other credentials to strengthen buyer confidence.</p>
            </div>

          </div>

          {/* Certificate carousel - auto-scrolling */}
          <div style={{ position: "relative", overflow: "hidden", marginLeft: "-2rem", marginRight: "-2rem" }}
            onMouseEnter={(e) => {
              const track = e.currentTarget.querySelector('.cert-track') as HTMLElement;
              if (track) track.style.animationPlayState = 'paused';
            }}
            onMouseLeave={(e) => {
              const track = e.currentTarget.querySelector('.cert-track') as HTMLElement;
              if (track) track.style.animationPlayState = 'running';
            }}
          >
            {/* Fade edges */}
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to right, oklch(0.94 0.003 260), transparent)", zIndex: 2, pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to left, oklch(0.94 0.003 260), transparent)", zIndex: 2, pointerEvents: "none" }} />
            <div className="cert-track" style={{
              display: "flex",
              gap: "1.5rem",
              padding: "0.5rem 2rem 1.5rem",
              animation: "certScroll 18s linear infinite",
              width: "max-content",
            }}>
              {/* Duplicate for seamless loop */}
              {[...certifications, ...certifications, ...certifications].map((cert, i) => (
                <CertCard key={`${cert.title}-${i}`} cert={cert} />
              ))}
            </div>
          </div>

          {/* Bottom trust bar */}
          <div style={{
            marginTop: "3rem",
            padding: "1.5rem 2rem",
            background: "oklch(1 0 0)",
            border: "1px solid oklch(0.88 0.004 260)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "2.5rem",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <ShieldCheck size={18} style={{ color: "oklch(0.65 0.22 45)", flexShrink: 0 }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "oklch(0.40 0.008 260)" }}>
                All bearings tested before shipment
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <Package size={18} style={{ color: "oklch(0.50 0.18 145)", flexShrink: 0 }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "oklch(0.40 0.008 260)" }}>
                Full export documentation on every order
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <Globe size={18} style={{ color: "oklch(0.45 0.18 220)", flexShrink: 0 }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "oklch(0.40 0.008 260)" }}>
                20+ years of compliant international trade
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHIPPING & PACKAGING ── */}
      <section style={{ paddingTop: "6rem", paddingBottom: "6rem", background: "oklch(0.97 0.002 260)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", alignItems: "center" }}
            className="lg:grid-cols-2">
            {/* Left: text */}
            <div>
              <div className="fuli-label" style={{ marginBottom: "1rem" }}>Ready to Ship</div>
              <h2 className="fuli-display" style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)", marginBottom: "1.5rem" }}>
                Warehouse &{" "}
                <span className="fuli-serif" style={{ color: "oklch(0.65 0.22 45)" }}>Dispatch</span>
              </h2>
              <p style={{ color: "oklch(0.45 0.008 260)", fontSize: "1rem", lineHeight: 1.8, maxWidth: "44ch", marginBottom: "2rem" }}>
                Large inventory stocked and ready for immediate dispatch. Standard orders ship within 24–72 hours. All pallets are stretch-wrapped and labeled for sea or air freight.
              </p>

              {/* Shipping specs table */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0", marginBottom: "2rem", border: "1px solid oklch(0.88 0.004 260)", overflow: "hidden" }}>
                {[
                  { label: "Standard Dispatch", value: "24 – 72 hours" },
                  { label: "Custom / OEM Orders", value: "15 – 30 days" },
                  { label: "Min. Order Qty", value: "1 carton (negotiable)" },
                  { label: "Packaging", value: "Neutral or branded box" },
                  { label: "Shipping Modes", value: "Sea, Air, Express" },
                ].map((row, i) => (
                  <div key={row.label} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "0.85rem 1.25rem",
                    background: i % 2 === 0 ? "oklch(1 0 0)" : "oklch(0.96 0.002 260)",
                    borderBottom: i < 4 ? "1px solid oklch(0.88 0.004 260)" : "none",
                  }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "oklch(0.55 0.008 260)", letterSpacing: "0.04em" }}>
                      {row.label}
                    </span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", fontWeight: 600, color: "oklch(0.18 0.012 260)" }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <span className="fuli-cta">Get a Shipping Quote <ArrowRight size={14} /></span>
              </Link>
            </div>

            {/* Right: photos — two side-by-side small thumbnails */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {shippingPhotos.map((photo, i) => (
                <div key={i} style={{ position: "relative", overflow: "hidden", border: "1px solid oklch(0.88 0.004 260)", height: "260px" }}>
                  <img
                    src={photo.img}
                    alt={photo.caption}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                  />
                  {/* Caption overlay */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    background: "linear-gradient(to top, oklch(0.10 0.008 255 / 0.85) 0%, transparent 100%)",
                    padding: "1rem 0.9rem 0.75rem",
                  }}>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.65 0.22 45)", marginBottom: "0.15rem" }}>
                      {photo.caption}
                    </div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.85 0.004 260)", lineHeight: 1.4 }}>
                      {photo.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY FULI ── */}
      <section style={{
        paddingTop: "6rem", paddingBottom: "6rem",
        background: "oklch(0.18 0.025 255)",
      }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", alignItems: "center" }}
            className="lg:grid-cols-2">
            {/* Left: heading */}
            <div>
              <div className="fuli-label" style={{ marginBottom: "1rem" }}>Supplier Advantage</div>
              <h2 style={{
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.03em",
                lineHeight: 1.05, color: "oklch(0.97 0.002 260)", marginBottom: "1.5rem",
              }}>
                Why Choose{" "}
                <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500, color: "oklch(0.65 0.22 45)" }}>FULI</span>
              </h2>
              <p style={{ color: "oklch(0.75 0.008 260)", fontSize: "1rem", lineHeight: 1.8, maxWidth: "44ch", marginBottom: "2rem" }}>
                20+ years of export experience. Sourced from Linqing, China's bearing capital. ISO 9001 certified with full documentation on every shipment.
              </p>
              <Link href="/contact">
                <span className="fuli-cta">Request a Quote <ArrowRight size={14} /></span>
              </Link>
            </div>

            {/* Right: advantage grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {advantages.map((a) => {
                const IconComp = a.icon;
                return (
                  <div key={a.num} style={{
                    background: "oklch(1 0 0 / 0.06)",
                    border: "1px solid oklch(1 0 0 / 0.12)",
                    borderTop: `3px solid ${a.color}`,
                    padding: "1.75rem",
                    transition: "background 0.2s",
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "oklch(1 0 0 / 0.10)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "oklch(1 0 0 / 0.06)"; }}
                  >
                    <div style={{
                      width: "2.5rem", height: "2.5rem",
                      background: `${a.color}20`,
                      border: `1px solid ${a.color}50`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "1rem",
                    }}>
                      <IconComp size={16} style={{ color: a.color }} />
                    </div>
                    <h3 style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 600,
                      color: "oklch(0.95 0.002 260)", marginBottom: "0.5rem",
                    }}>{a.title}</h3>
                    <p style={{ color: "oklch(0.72 0.008 260)", fontSize: "0.88rem", lineHeight: 1.65 }}>{a.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section style={{ paddingTop: "6rem", paddingBottom: "6rem", background: "oklch(0.97 0.002 260)" }}>
        <div className="container">
          <div style={{ marginBottom: "3.5rem" }}>
            <div className="fuli-label" style={{ marginBottom: "1rem" }}>Industries Served</div>
            <h2 className="fuli-display" style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)" }}>
              Appli<span className="fuli-serif">cations</span>
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
          }} className="lg:grid-cols-6">
            {[
              {
                name: "Motorcycle",
                icon: "🏍️",
                href: "/products/motorcycle",
                img: "/manus-storage/bearing-motorcycle_dc63e804.png",
              },
              {
                name: "Motor & Pump",
                icon: "⚡",
                href: "/products/motor",
                img: "/manus-storage/bearing-motor-pump_fc2189a0.png",
              },
              {
                name: "Agricultural",
                icon: "🌾",
                href: "/products/agricultural",
                img: "/manus-storage/bearing-agricultural_b095333d.png",
              },
              {
                name: "Industrial",
                icon: "🏭",
                href: "/products/industrial",
                img: "/manus-storage/bearing-industrial_0a55d947.png",
              },
              {
                name: "Light Industry",
                icon: "⚙️",
                href: "/products",
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
              },
              {
                name: "Construction",
                icon: "🏗️",
                href: "/products",
                img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
              },
            ].map((app) => (
              <a
                key={app.name}
                href={app.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "oklch(1 0 0)",
                  border: "1px solid oklch(0.88 0.004 260)",
                  overflow: "hidden",
                  textDecoration: "none",
                  transition: "transform 0.22s ease, box-shadow 0.22s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 6px 24px oklch(0.65 0.22 45 / 0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Top: icon + name */}
                <div style={{ padding: "1.25rem 1rem 1rem", flexShrink: 0 }}>
                  <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{app.icon}</div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase" as const,
                    color: "oklch(0.18 0.012 260)",
                    paddingBottom: "0.4rem",
                    borderBottom: "2px solid oklch(0.65 0.22 45)",
                    display: "inline-block",
                  }}>{app.name}</div>
                </div>
                {/* Bottom: scene image */}
                <div style={{
                  height: "150px",
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <img
                    src={app.img}
                    alt={app.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.35s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        paddingTop: "7rem", paddingBottom: "7rem",
        background: "oklch(0.13 0.020 255)",
        position: "relative", overflow: "hidden",
        borderTop: "4px solid oklch(0.65 0.22 45)",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: "800px", height: "400px",
          background: "radial-gradient(ellipse, oklch(1 0 0 / 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem",
            fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 600,
            letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(1 0 0 / 0.75)",
            marginBottom: "1.5rem",
          }}>
            <span style={{ display: "block", width: "2rem", height: "1px", background: "oklch(1 0 0 / 0.5)" }} />
            Get in Touch
            <span style={{ display: "block", width: "2rem", height: "1px", background: "oklch(1 0 0 / 0.5)" }} />
          </div>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
            fontSize: "clamp(2rem, 5vw, 5rem)", letterSpacing: "-0.03em",
            lineHeight: 1.05, color: "oklch(1 0 0)", marginBottom: "1.25rem",
          }}>
            Ready to{" "}
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500 }}>Order?</span>
          </h2>
          <p style={{ color: "oklch(1 0 0 / 0.80)", fontSize: "1rem", lineHeight: 1.8, maxWidth: "44ch", margin: "0 auto 2.5rem" }}>
            Send us your requirements and receive a competitive quote within 24 hours. Our team speaks English, Arabic, and Russian.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/contact">
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                background: "oklch(0.18 0.025 255)", color: "oklch(1 0 0)",
                fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "0.95rem 2.4rem",
                transition: "background 0.2s",
              }}>
                Request a Quote <ArrowRight size={14} />
              </span>
            </Link>
            <a href="https://wa.me/8615263521305" target="_blank" rel="noopener noreferrer">
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                background: "transparent", color: "oklch(1 0 0)",
                fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "0.95rem 2.4rem",
                border: "1.5px solid oklch(1 0 0 / 0.55)",
                transition: "background 0.2s, border-color 0.2s",
              }}>
                WhatsApp Us
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

