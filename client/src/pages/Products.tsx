/**
 * FULI Bearing — Products Page
 * Design: Dark industrial, DM Sans + Playfair Display Italic
 * Structure: Application-based categories (NOT model-based)
 *   1. Motorcycle Bearings (East Africa Boda-Boda focus)
 *   2. Motor & Pump Bearings (C3 clearance)
 *   3. Agricultural Bearings (UCP/UCF + tapered roller)
 *   4. Industrial Bearings (spherical roller)
 */

import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp, MessageCircle, Star, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  {
    id: "motorcycle",
    label: "Motorcycle Bearings",
    labelItalic: "Boda-Boda Ready",
    icon: "🏍️",
    tagline: "10 models cover 90% of East Africa's motorcycle repair demand.",
    description:
      "The #1 priority product line for East Africa. Over 40 million motorcycles run on African roads — 80–90% for commercial use (Boda-Boda / Okada). Rough unpaved roads mean bearings wear out 2–3× faster than in Europe. High repeat purchase, simple SKU, fast verification.",
    accent: "#f97316",
    markets: ["Kenya", "Tanzania", "Uganda", "Nigeria"],
    skus: [
      { model: "6301-2RS", spec: "12×37×12mm", application: "Front wheel hub — most common", priority: 5 },
      { model: "6302-2RS", spec: "15×42×13mm", application: "Front wheel / small motor", priority: 5 },
      { model: "6303-2RS", spec: "17×47×14mm", application: "Front & rear wheel", priority: 4 },
      { model: "6202-2RS", spec: "15×35×11mm", application: "Engine end cover", priority: 5 },
      { model: "6203-2RS", spec: "17×40×12mm", application: "Engine / small pump", priority: 4 },
      { model: "6204-2RS", spec: "20×47×14mm", application: "Rear wheel / small pump", priority: 4 },
      { model: "6201-2RS", spec: "12×32×10mm", application: "Engine gearbox", priority: 4 },
      { model: "6205-2RS", spec: "25×52×15mm", application: "Rear wheel / generator", priority: 5 },
      { model: "6206-2RS", spec: "30×62×16mm", application: "Motorcycle / light motor", priority: 4 },
      { model: "6305-2RS", spec: "25×62×17mm", application: "Motorcycle / small generator", priority: 3 },
    ],
  },
  {
    id: "motor",
    label: "Motor & Pump Bearings",
    labelItalic: "C3 Clearance Standard",
    icon: "⚡",
    tagline: "C3 clearance for thermal expansion. Covers 80% of industrial motor needs.",
    description:
      "Electric motors and water pumps are the backbone of African agriculture and light industry. The C3 internal clearance specification is critical for motors running at high temperatures — standard clearance bearings will seize. These 6 models cover the vast majority of motor and pump applications.",
    accent: "#3b82f6",
    markets: ["Kenya", "Nigeria", "South Africa", "Mexico"],
    skus: [
      { model: "6205-2RS C3", spec: "25×52×15mm", application: "Water pump motor — core model", priority: 5 },
      { model: "6206-2RS C3", spec: "30×62×16mm", application: "Medium motor / water pump", priority: 5 },
      { model: "6207-2RS C3", spec: "35×72×17mm", application: "Larger motor", priority: 4 },
      { model: "6208-2RS C3", spec: "40×80×18mm", application: "Large motor / generator", priority: 4 },
      { model: "6307-2RS", spec: "35×80×21mm", application: "High-power water pump", priority: 3 },
      { model: "6308-2RS", spec: "40×90×23mm", application: "Heavy-duty motor", priority: 3 },
    ],
  },
  {
    id: "agricultural",
    label: "Agricultural Bearings",
    labelItalic: "Farm to Market",
    icon: "🌾",
    tagline: "UCP/UCF pillow blocks + tapered rollers. 14 SKUs, complete catalog.",
    description:
      "Agricultural machinery is the second pillar of African demand. Sub-Saharan Africa's tractor fleet is only 1/7 of what's needed — mechanization is accelerating fast. Pillow block bearings (UCP/UCF) and tapered roller bearings (30206/30208) cover the core of tractor, conveyor, and farm equipment maintenance.",
    accent: "#22c55e",
    markets: ["Kenya", "Tanzania", "Uganda", "Brazil", "Argentina"],
    skus: [
      { model: "UCP205", spec: "Shaft ⌀25mm", application: "Drive shaft, conveyor", priority: 5 },
      { model: "UCP206", spec: "Shaft ⌀30mm", application: "Agricultural drive shaft", priority: 5 },
      { model: "UCP207", spec: "Shaft ⌀35mm", application: "Agricultural PTO shaft", priority: 4 },
      { model: "UCP208", spec: "Shaft ⌀40mm", application: "Medium conveyor", priority: 4 },
      { model: "UCP209", spec: "Shaft ⌀45mm", application: "Heavy agricultural machinery", priority: 3 },
      { model: "UCF205", spec: "Shaft ⌀25mm", application: "Square flange, compact fit", priority: 4 },
      { model: "UCF206", spec: "Shaft ⌀30mm", application: "Square flange, agricultural", priority: 4 },
      { model: "UCFL205", spec: "Shaft ⌀25mm", application: "Oval flange, low-profile mount", priority: 3 },
      { model: "UCFL206", spec: "Shaft ⌀30mm", application: "Oval flange", priority: 3 },
      { model: "UCT205", spec: "Shaft ⌀25mm", application: "T-type housing (conveyor)", priority: 3 },
      { model: "30206", spec: "30×62×17.25mm", application: "Tractor front wheel, truck differential", priority: 5 },
      { model: "30208", spec: "40×80×19.75mm", application: "Tractor / truck wheel hub", priority: 5 },
      { model: "30210", spec: "50×90×21.75mm", application: "Medium truck", priority: 4 },
      { model: "32210", spec: "50×90×24.75mm", application: "Heavy tractor differential", priority: 3 },
    ],
  },
  {
    id: "industrial",
    label: "Industrial Bearings",
    labelItalic: "Precision Grade",
    icon: "🏭",
    tagline: "Spherical roller & standard deep groove for mining and heavy industry.",
    description:
      "For mining, cement, and heavy industrial equipment. South Africa's mining sector and Latin America's copper mines (Chile, Peru) have stable demand for spherical roller bearings. High unit value, professional buyers, stable repeat orders — ideal for the second phase of business development.",
    accent: "#a855f7",
    markets: ["South Africa", "Chile", "Peru", "Mexico"],
    skus: [
      { model: "22213", spec: "65×120×31mm", application: "Vibrating screen, crusher", priority: 4 },
      { model: "22215", spec: "75×130×31mm", application: "Cement mill, reducer", priority: 4 },
      { model: "22217", spec: "85×150×36mm", application: "Heavy reducer", priority: 3 },
      { model: "22220", spec: "100×180×46mm", application: "Mining equipment — high value", priority: 4 },
      { model: "23022", spec: "110×170×45mm", application: "Pulp machinery, heavy conveyor", priority: 3 },
      { model: "6209-2RS", spec: "45×85×19mm", application: "General industrial", priority: 3 },
    ],
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function PriorityStars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={10}
          style={{
            fill: i <= count ? "#f97316" : "transparent",
            color: i <= count ? "#f97316" : "oklch(1 0 0 / 0.2)",
          }}
        />
      ))}
    </div>
  );
}

function SKUTable({ skus }: { skus: typeof categories[0]["skus"] }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid oklch(1 0 0 / 0.1)" }}>
            {["Model", "Spec", "Application", "Priority"].map((h) => (
              <th key={h} style={{
                textAlign: "left",
                padding: "0.65rem 1.25rem 0.65rem 0",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                color: "oklch(0.42 0.006 260)",
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {skus.map((sku, i) => (
            <motion.tr
              key={sku.model}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.035 }}
              style={{ borderBottom: "1px solid oklch(1 0 0 / 0.05)" }}
            >
              <td style={{ padding: "0.7rem 1.25rem 0.7rem 0" }}>
                <span style={{ fontFamily: "monospace", fontWeight: 700, color: "oklch(0.92 0.003 260)", fontSize: "0.85rem" }}>
                  {sku.model}
                </span>
              </td>
              <td style={{ padding: "0.7rem 1.25rem 0.7rem 0", fontFamily: "monospace", color: "oklch(0.52 0.008 260)", fontSize: "0.75rem" }}>
                {sku.spec}
              </td>
              <td style={{ padding: "0.7rem 1.25rem 0.7rem 0", color: "oklch(0.68 0.008 260)", fontSize: "0.82rem" }}>
                {sku.application}
              </td>
              <td style={{ padding: "0.7rem 0" }}>
                <PriorityStars count={sku.priority} />
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CategoryCard({ cat, isActive, onClick }: {
  cat: typeof categories[0];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      style={{
        border: `1px solid ${isActive ? "oklch(1 0 0 / 0.22)" : "oklch(1 0 0 / 0.08)"}`,
        background: isActive ? "oklch(1 0 0 / 0.04)" : "oklch(1 0 0 / 0.015)",
        transition: "border-color 0.25s, background 0.25s",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {/* Card Header */}
      <div style={{ padding: "1.75rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
            <span style={{ fontSize: "2rem", lineHeight: 1 }}>{cat.icon}</span>
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap" as const }}>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.35rem", fontWeight: 700, color: "oklch(0.94 0.003 260)", margin: 0 }}>
                  {cat.label}
                </h3>
                <em style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1rem", color: "oklch(0.52 0.008 260)" }}>
                  {cat.labelItalic}
                </em>
              </div>
              <p style={{ color: "oklch(0.55 0.008 260)", fontSize: "0.82rem", marginTop: "0.3rem", marginBottom: "0.75rem" }}>
                {cat.tagline}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.4rem" }}>
                {cat.markets.map((m) => (
                  <span key={m} style={{
                    fontSize: "0.65rem",
                    padding: "0.15rem 0.55rem",
                    border: "1px solid oklch(1 0 0 / 0.12)",
                    color: "oklch(0.48 0.008 260)",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.05em",
                  }}>{m}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
            <span style={{ fontSize: "0.72rem", color: "oklch(0.40 0.006 260)", fontFamily: "'DM Sans', sans-serif" }}>
              {cat.skus.length} models
            </span>
            {isActive
              ? <ChevronUp size={16} style={{ color: "oklch(0.55 0.008 260)" }} />
              : <ChevronDown size={16} style={{ color: "oklch(0.55 0.008 260)" }} />
            }
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 2rem 2rem", borderTop: "1px solid oklch(1 0 0 / 0.08)" }}>
              <p style={{ color: "oklch(0.60 0.008 260)", fontSize: "0.84rem", lineHeight: 1.75, marginTop: "1.5rem", marginBottom: "1.5rem", maxWidth: "72ch" }}>
                {cat.description}
              </p>

              {/* Accent divider */}
              <div style={{ height: "1px", marginBottom: "1.5rem", background: `linear-gradient(to right, ${cat.accent}50, transparent)` }} />

              <SKUTable skus={cat.skus} />

              {/* CTA */}
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", flexWrap: "wrap" as const }}>
                <a
                  href={`https://wa.me/8615263521305?text=Hi, I'm interested in your ${cat.label}. Please send me a price list.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.65rem 1.4rem",
                    background: cat.accent,
                    color: "#fff",
                    fontSize: "0.75rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                >
                  <MessageCircle size={14} />
                  WhatsApp — Get Price List
                </a>
                <Link
                  href="/contact"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.65rem 1.4rem",
                    border: "1px solid oklch(1 0 0 / 0.18)",
                    color: "oklch(0.75 0.008 260)",
                    fontSize: "0.75rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.35)";
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.92 0.003 260)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.18)";
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.75 0.008 260)";
                  }}
                >
                  Request Samples
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Products() {
  const [activeId, setActiveId] = useState<string>("motorcycle");

  const toggle = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return (
    <div style={{ background: "oklch(0.08 0.005 260)", minHeight: "100vh", color: "oklch(0.92 0.003 260)" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section style={{
        paddingTop: "8rem",
        paddingBottom: "4rem",
        borderBottom: "1px solid oklch(1 0 0 / 0.08)",
        background: "oklch(0.06 0.004 260)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(oklch(1 0 0 / 0.02) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "2rem" }}>
            <Link href="/">
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "oklch(0.40 0.006 260)", cursor: "pointer" }}>Home</span>
            </Link>
            <ChevronRight size={10} style={{ color: "oklch(0.30 0.005 260)" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "oklch(0.65 0.22 45)" }}>Products</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "oklch(0.65 0.22 45)", marginBottom: "1rem" }}>
              Product Range
            </p>
            <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 800, color: "oklch(0.95 0.002 260)", lineHeight: 1.1, marginBottom: "1rem" }}>
              Find Bearings by{" "}
              <em style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "oklch(0.55 0.008 260)" }}>
                Application
              </em>
            </h1>
            <p style={{ color: "oklch(0.55 0.008 260)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "56ch" }}>
              We organize our catalog by what you actually need — not by bearing type codes.
              Select your application below to see recommended models, specs, and pricing.
            </p>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ display: "flex", flexWrap: "wrap" as const, gap: "2.5rem", marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid oklch(1 0 0 / 0.08)" }}
          >
            {[
              { value: "30", label: "Core SKUs" },
              { value: "4", label: "Application Categories" },
              { value: "50 pcs", label: "Minimum Order" },
              { value: "7 days", label: "Ready to Ship" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 700, color: "oklch(0.92 0.003 260)" }}>
                  {stat.value}
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "oklch(0.40 0.006 260)", marginTop: "0.2rem" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Category Selector (sticky) ── */}
      <div style={{
        position: "sticky",
        top: "64px",
        zIndex: 30,
        background: "oklch(0.08 0.005 260 / 0.96)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid oklch(1 0 0 / 0.08)",
        padding: "0.75rem 0",
      }}>
        <div className="container">
          <div style={{ display: "flex", gap: "0.4rem", overflowX: "auto", paddingBottom: "2px" }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                style={{
                  flexShrink: 0,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.5rem 1rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  border: `1px solid ${activeId === cat.id ? "oklch(1 0 0 / 0.28)" : "oklch(1 0 0 / 0.08)"}`,
                  background: activeId === cat.id ? "oklch(1 0 0 / 0.08)" : "transparent",
                  color: activeId === cat.id ? "oklch(0.92 0.003 260)" : "oklch(0.48 0.008 260)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Category Cards ── */}
      <section style={{ padding: "3rem 0 4rem" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              cat={cat}
              isActive={activeId === cat.id}
              onClick={() => toggle(cat.id)}
            />
          ))}
        </div>
      </section>

      {/* ── Not Sure Section ── */}
      <section style={{ padding: "5rem 0", borderTop: "1px solid oklch(1 0 0 / 0.08)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "oklch(0.40 0.006 260)", marginBottom: "1rem" }}>
                Selection Guide
              </p>
              <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "oklch(0.94 0.003 260)", lineHeight: 1.15, marginBottom: "1rem" }}>
                Not sure which{" "}
                <em style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "oklch(0.50 0.008 260)" }}>model?</em>
              </h2>
              <p style={{ color: "oklch(0.55 0.008 260)", fontSize: "0.88rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Send us the old bearing or tell us the machine model. We'll identify the correct
                specification within 2 hours and confirm stock availability.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                {[
                  "Tell us your machine type (motorcycle, tractor, motor)",
                  "Send a photo of the old bearing if available",
                  "We confirm model + price within 2 hours",
                  "MOQ from 50 pcs, ship to Mombasa in 7 days",
                ].map((step, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <span style={{ color: "#f97316", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0, marginTop: "0.15rem" }}>
                      0{i + 1}
                    </span>
                    <span style={{ color: "oklch(0.62 0.008 260)", fontSize: "0.84rem" }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ border: "1px solid oklch(1 0 0 / 0.1)", padding: "2rem", background: "oklch(1 0 0 / 0.02)" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "oklch(0.38 0.006 260)", marginBottom: "1.5rem" }}>
                Quick Contact
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a
                  href="https://wa.me/8615263521305?text=Hi, I need help selecting the right bearing for my application."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "1rem",
                    background: "oklch(0.55 0.18 145 / 0.1)",
                    border: "1px solid oklch(0.55 0.18 145 / 0.3)",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "oklch(0.55 0.18 145 / 0.18)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "oklch(0.55 0.18 145 / 0.1)"; }}
                >
                  <div style={{ width: "2.25rem", height: "2.25rem", borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <MessageCircle size={16} color="#fff" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "oklch(0.92 0.003 260)", fontWeight: 600, fontSize: "0.85rem" }}>WhatsApp</div>
                    <div style={{ color: "oklch(0.48 0.008 260)", fontSize: "0.72rem" }}>+86 152 6352 1305 · Reply within 2 hours</div>
                  </div>
                  <ArrowRight size={14} style={{ color: "oklch(0.40 0.006 260)", flexShrink: 0 }} />
                </a>
                <Link
                  href="/contact"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "1rem",
                    border: "1px solid oklch(1 0 0 / 0.1)",
                    textDecoration: "none",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.22)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.1)"; }}
                >
                  <div style={{ width: "2.25rem", height: "2.25rem", border: "1px solid oklch(1 0 0 / 0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <ArrowRight size={14} style={{ color: "oklch(0.55 0.008 260)" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "oklch(0.92 0.003 260)", fontWeight: 600, fontSize: "0.85rem" }}>Send Inquiry</div>
                    <div style={{ color: "oklch(0.48 0.008 260)", fontSize: "0.72rem" }}>Fill in the contact form for detailed quotes</div>
                  </div>
                  <ArrowRight size={14} style={{ color: "oklch(0.40 0.006 260)", flexShrink: 0 }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why FULI ── */}
      <section style={{ padding: "5rem 0", borderTop: "1px solid oklch(1 0 0 / 0.08)", background: "oklch(1 0 0 / 0.015)" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, color: "oklch(0.94 0.003 260)", marginBottom: "2.5rem" }}>
            Why buyers in{" "}
            <em style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "oklch(0.50 0.008 260)" }}>50+ countries</em>
            {" "}choose FULI
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: "oklch(1 0 0 / 0.06)" }}>
            {[
              { title: "Direct from Linqing", body: "Linqing, Shandong — China's largest bearing production base. No middlemen, factory-direct pricing." },
              { title: "Low MOQ", body: "Start from 50 pcs per model. Ideal for distributors testing new product lines without large inventory risk." },
              { title: "Consistent Quality", body: "Same factory, same spec every batch. The #1 complaint from Africa buyers is inconsistent quality — we solve that." },
              { title: "Fast Response", body: "Price quote within 2 hours. Stock confirmation same day. Shipping to Mombasa in 7 days from order." },
            ].map((item) => (
              <div key={item.title} style={{ background: "oklch(0.10 0.006 260)", padding: "1.75rem" }}>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "oklch(0.90 0.003 260)", fontSize: "0.9rem", marginBottom: "0.6rem" }}>
                  {item.title}
                </h3>
                <p style={{ color: "oklch(0.52 0.008 260)", fontSize: "0.82rem", lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
