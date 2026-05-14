/**
 * FULI Bearing — Product Category Detail Page
 * Design: SKF-inspired industrial dark, DM Sans + Playfair Display
 * Structure: Hero → Product Image + Quick Specs → SKU Table → Tech Features → Applications → Inquiry Form → Related
 */

import { useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowRight, ChevronRight, MessageCircle, ShieldCheck, Truck, Package, CheckCircle2, Send } from "lucide-react";

/* ─── Types ─────────────────────────────────────────────────── */
type SKU = {
  model: string;
  d: string;
  D: string;
  B: string;
  Cr?: string;
  C0r?: string;
  weight?: string;
  application: string;
  priority: number;
};

type CategoryData = {
  id: string;
  label: string;
  labelItalic: string;
  icon: string;
  tagline: string;
  description: string;
  accent: string;
  img: string;
  markets: string[];
  quickSpecs: { label: string; value: string }[];
  features: string[];
  applications: { name: string; examples: string[] }[];
  skus: SKU[];
  relatedIds: string[];
};

/* ─── Data ─────────────────────────────────────────────────── */
const allCategories: Record<string, CategoryData> = {
  motorcycle: {
    id: "motorcycle",
    label: "Motorcycle Bearings",
    labelItalic: "Boda-Boda Ready",
    icon: "🏍️",
    tagline: "10 core models covering 90% of East Africa's motorcycle repair demand.",
    description:
      "Over 40 million motorcycles run on African roads — 80–90% for commercial use (Boda-Boda / Okada). Rough unpaved roads mean bearings wear out 2–3× faster than in Europe. Our motorcycle bearing range is optimized for high-frequency replacement markets: standard 2RS sealed design, GCr15 chrome steel, P6 precision grade.",
    accent: "#f97316",
    img: "/manus-storage/bearing-motorcycle_dc63e804.png",
    markets: ["Kenya", "Tanzania", "Uganda", "Nigeria", "Ghana"],
    quickSpecs: [
      { label: "Type", value: "Deep Groove Ball Bearing" },
      { label: "Seal", value: "2RS (Rubber Sealed)" },
      { label: "Material", value: "GCr15 Chrome Steel" },
      { label: "Precision", value: "P6 / P0" },
      { label: "Clearance", value: "C0 / C3" },
      { label: "Cage", value: "Steel / Nylon" },
      { label: "Min. Order", value: "1 Carton (negotiable)" },
      { label: "Dispatch", value: "24 – 72 hours" },
    ],
    features: [
      "GCr15 high-carbon chrome steel for extended service life on rough roads",
      "Double rubber seal (2RS) prevents dust and mud ingress — critical for unpaved African roads",
      "P6 precision grade ensures smooth rotation and low vibration",
      "Grease pre-filled at factory — ready to install, no additional lubrication required",
      "Neutral or branded packaging available for OEM distributors",
      "ISO 9001 certified production — every batch inspected before shipment",
    ],
    applications: [
      { name: "Motorcycle Wheel Hubs", examples: ["Front wheel hub bearing", "Rear wheel hub bearing", "Boda-boda / Okada commercial motorcycles"] },
      { name: "Engine & Gearbox", examples: ["Engine end cover bearing", "Gearbox shaft bearing", "Crankshaft support"] },
      { name: "Small Motors & Generators", examples: ["Small electric motor", "Portable generator", "Water pump (small)"] },
    ],
    skus: [
      { model: "6201-2RS", d: "12", D: "32", B: "10", Cr: "5.1 kN", C0r: "2.38 kN", weight: "0.022 kg", application: "Engine gearbox", priority: 4 },
      { model: "6202-2RS", d: "15", D: "35", B: "11", Cr: "5.58 kN", C0r: "2.85 kN", weight: "0.030 kg", application: "Engine end cover", priority: 5 },
      { model: "6203-2RS", d: "17", D: "40", B: "12", Cr: "6.82 kN", C0r: "3.40 kN", weight: "0.040 kg", application: "Engine / small pump", priority: 4 },
      { model: "6204-2RS", d: "20", D: "47", B: "14", Cr: "9.95 kN", C0r: "5.00 kN", weight: "0.060 kg", application: "Rear wheel / small pump", priority: 4 },
      { model: "6205-2RS", d: "25", D: "52", B: "15", Cr: "11.2 kN", C0r: "6.55 kN", weight: "0.075 kg", application: "Rear wheel / generator", priority: 5 },
      { model: "6206-2RS", d: "30", D: "62", B: "16", Cr: "15.3 kN", C0r: "10.0 kN", weight: "0.115 kg", application: "Motorcycle / light motor", priority: 4 },
      { model: "6301-2RS", d: "12", D: "37", B: "12", Cr: "7.28 kN", C0r: "3.35 kN", weight: "0.035 kg", application: "Front wheel hub — most common", priority: 5 },
      { model: "6302-2RS", d: "15", D: "42", B: "13", Cr: "9.15 kN", C0r: "4.50 kN", weight: "0.050 kg", application: "Front wheel / small motor", priority: 5 },
      { model: "6303-2RS", d: "17", D: "47", B: "14", Cr: "11.4 kN", C0r: "5.85 kN", weight: "0.065 kg", application: "Front & rear wheel", priority: 4 },
      { model: "6305-2RS", d: "25", D: "62", B: "17", Cr: "17.0 kN", C0r: "9.30 kN", weight: "0.120 kg", application: "Motorcycle / small generator", priority: 3 },
    ],
    relatedIds: ["motor", "agricultural", "industrial"],
  },

  motor: {
    id: "motor",
    label: "Motor & Pump Bearings",
    labelItalic: "C3 Clearance Standard",
    icon: "⚡",
    tagline: "C3 clearance for thermal expansion. Covers 80% of industrial motor needs.",
    description:
      "Electric motors and water pumps are the backbone of African agriculture and light industry. The C3 internal clearance specification is critical for motors running at high temperatures — standard clearance bearings will seize under thermal expansion. These 6 models cover the vast majority of motor and pump applications from 25mm to 40mm shaft diameter.",
    accent: "#3b82f6",
    img: "/manus-storage/bearing-motor-pump_fc2189a0.png",
    markets: ["Kenya", "Nigeria", "South Africa", "Mexico", "Egypt"],
    quickSpecs: [
      { label: "Type", value: "Deep Groove Ball Bearing" },
      { label: "Clearance", value: "C3 (Thermal Expansion)" },
      { label: "Seal", value: "2RS / ZZ / Open" },
      { label: "Material", value: "GCr15 Chrome Steel" },
      { label: "Precision", value: "P6 / P0" },
      { label: "Cage", value: "Steel / Nylon" },
      { label: "Min. Order", value: "1 Carton (negotiable)" },
      { label: "Dispatch", value: "24 – 72 hours" },
    ],
    features: [
      "C3 internal clearance — larger gap accommodates thermal expansion in running motors",
      "Prevents premature seizure in motors operating at 60–120°C continuous temperature",
      "2RS rubber seal option keeps grease in and contaminants out in dusty environments",
      "ZZ metal shield option for high-speed applications requiring lower friction",
      "Compatible with standard IEC motor frame sizes — direct drop-in replacement",
      "ISO 9001 certified — batch test reports available on request",
    ],
    applications: [
      { name: "Electric Motors", examples: ["IEC standard frame motors (0.37 kW – 30 kW)", "Single-phase and three-phase motors", "Fan motors and blower motors"] },
      { name: "Water Pumps", examples: ["Centrifugal water pumps", "Submersible pump motors", "Irrigation pump systems"] },
      { name: "Industrial Equipment", examples: ["Compressors", "Conveyor drive motors", "Industrial fans and ventilators"] },
    ],
    skus: [
      { model: "6205-2RS C3", d: "25", D: "52", B: "15", Cr: "11.2 kN", C0r: "6.55 kN", weight: "0.075 kg", application: "Water pump motor — core model", priority: 5 },
      { model: "6206-2RS C3", d: "30", D: "62", B: "16", Cr: "15.3 kN", C0r: "10.0 kN", weight: "0.115 kg", application: "Medium motor / water pump", priority: 5 },
      { model: "6207-2RS C3", d: "35", D: "72", B: "17", Cr: "20.1 kN", C0r: "13.2 kN", weight: "0.160 kg", application: "Larger motor", priority: 4 },
      { model: "6208-2RS C3", d: "40", D: "80", B: "18", Cr: "22.9 kN", C0r: "15.3 kN", weight: "0.210 kg", application: "Large motor / generator", priority: 4 },
      { model: "6307-2RS", d: "35", D: "80", B: "21", Cr: "26.5 kN", C0r: "17.0 kN", weight: "0.250 kg", application: "High-power water pump", priority: 3 },
      { model: "6308-2RS", d: "40", D: "90", B: "23", Cr: "32.0 kN", C0r: "21.2 kN", weight: "0.340 kg", application: "Heavy-duty motor", priority: 3 },
    ],
    relatedIds: ["motorcycle", "agricultural", "industrial"],
  },

  agricultural: {
    id: "agricultural",
    label: "Agricultural Bearings",
    labelItalic: "Farm to Market",
    icon: "🌾",
    tagline: "UCP/UCF pillow blocks + tapered rollers. 14 SKUs, complete catalog.",
    description:
      "Agricultural machinery is the second pillar of African demand. Sub-Saharan Africa's tractor fleet is only 1/7 of what's needed — mechanization is accelerating fast. Pillow block bearings (UCP/UCF) and tapered roller bearings (30206/30208) cover the core of tractor, conveyor, and farm equipment maintenance.",
    accent: "#22c55e",
    img: "/manus-storage/bearing-agricultural_b095333d.png",
    markets: ["Kenya", "Tanzania", "Uganda", "Brazil", "Argentina"],
    quickSpecs: [
      { label: "Types", value: "Pillow Block (UCP/UCF) + Tapered Roller" },
      { label: "Housing Material", value: "Cast Iron / SG Iron" },
      { label: "Insert Bearing", value: "UC Series (2RS sealed)" },
      { label: "Taper Material", value: "GCr15 Chrome Steel" },
      { label: "Precision", value: "P0 / P6" },
      { label: "Shaft Range", value: "⌀25mm – ⌀50mm" },
      { label: "Min. Order", value: "1 Carton (negotiable)" },
      { label: "Dispatch", value: "24 – 72 hours" },
    ],
    features: [
      "UCP series: round flange housing — most common for conveyor and drive shaft mounting",
      "UCF series: square flange housing — compact fit for flat surface mounting",
      "UCFL series: oval flange — low-profile for space-constrained installations",
      "Tapered roller bearings (30206/30208) handle combined radial and axial loads — ideal for tractor wheel hubs",
      "Cast iron housing with set-screw locking — easy field installation without special tools",
      "Grease nipple fitting standard on all pillow block units for in-service re-lubrication",
    ],
    applications: [
      { name: "Tractor & Farm Vehicles", examples: ["Tractor front wheel hub (30206/30208)", "Tractor rear axle differential", "Truck wheel hub bearings"] },
      { name: "Conveyors & Elevators", examples: ["Grain conveyor drive shaft (UCP205/206)", "Bucket elevator shaft", "Belt conveyor idler shaft"] },
      { name: "Farm Equipment", examples: ["PTO (power take-off) drive shaft", "Seed drill shaft bearing", "Irrigation pump shaft"] },
    ],
    skus: [
      { model: "UCP205", d: "25", D: "—", B: "—", weight: "0.52 kg", application: "Drive shaft, conveyor", priority: 5 },
      { model: "UCP206", d: "30", D: "—", B: "—", weight: "0.65 kg", application: "Agricultural drive shaft", priority: 5 },
      { model: "UCP207", d: "35", D: "—", B: "—", weight: "0.85 kg", application: "Agricultural PTO shaft", priority: 4 },
      { model: "UCP208", d: "40", D: "—", B: "—", weight: "1.10 kg", application: "Medium conveyor", priority: 4 },
      { model: "UCP209", d: "45", D: "—", B: "—", weight: "1.40 kg", application: "Heavy agricultural machinery", priority: 3 },
      { model: "UCF205", d: "25", D: "—", B: "—", weight: "0.55 kg", application: "Square flange, compact fit", priority: 4 },
      { model: "UCF206", d: "30", D: "—", B: "—", weight: "0.70 kg", application: "Square flange, agricultural", priority: 4 },
      { model: "UCFL205", d: "25", D: "—", B: "—", weight: "0.48 kg", application: "Oval flange, low-profile mount", priority: 3 },
      { model: "UCFL206", d: "30", D: "—", B: "—", weight: "0.60 kg", application: "Oval flange", priority: 3 },
      { model: "UCT205", d: "25", D: "—", B: "—", weight: "0.50 kg", application: "T-type housing (conveyor)", priority: 3 },
      { model: "30206", d: "30", D: "62", B: "17.25", Cr: "43.2 kN", C0r: "48.0 kN", weight: "0.22 kg", application: "Tractor front wheel, truck differential", priority: 5 },
      { model: "30208", d: "40", D: "80", B: "19.75", Cr: "63.0 kN", C0r: "74.0 kN", weight: "0.45 kg", application: "Tractor / truck wheel hub", priority: 5 },
      { model: "30210", d: "50", D: "90", B: "21.75", Cr: "72.8 kN", C0r: "92.0 kN", weight: "0.60 kg", application: "Medium truck", priority: 4 },
      { model: "32210", d: "50", D: "90", B: "24.75", Cr: "90.0 kN", C0r: "108 kN", weight: "0.70 kg", application: "Heavy tractor differential", priority: 3 },
    ],
    relatedIds: ["motorcycle", "motor", "industrial"],
  },

  industrial: {
    id: "industrial",
    label: "Industrial Bearings",
    labelItalic: "Precision Grade",
    icon: "🏭",
    tagline: "Spherical roller bearings for mining, cement and heavy industry.",
    description:
      "For mining, cement, and heavy industrial equipment. South Africa's mining sector and Latin America's copper mines (Chile, Peru) have stable demand for spherical roller bearings. High unit value, professional buyers, stable repeat orders. Spherical roller bearings accommodate shaft misalignment and handle heavy combined loads — critical for vibrating screens, crushers, and cement mills.",
    accent: "#a855f7",
    img: "/manus-storage/bearing-industrial_0a55d947.png",
    markets: ["South Africa", "Chile", "Peru", "Mexico", "Germany"],
    quickSpecs: [
      { label: "Type", value: "Spherical Roller Bearing" },
      { label: "Rows", value: "Double Row" },
      { label: "Seal", value: "Open / W33 (oil groove)" },
      { label: "Material", value: "GCr15 / GCr15SiMn" },
      { label: "Cage", value: "Steel / Brass / Nylon" },
      { label: "Precision", value: "P0 / P6" },
      { label: "Min. Order", value: "1 piece (negotiable)" },
      { label: "Dispatch", value: "24 – 72 hours (stock)" },
    ],
    features: [
      "Double-row spherical design self-aligns to shaft deflection — tolerates up to 1–2.5° misalignment",
      "W33 groove and holes allow pressurized lubrication directly to rolling elements",
      "E-cage (pressed steel) design: compact, accommodates more rollers, higher load capacity",
      "GCr15SiMn steel option for extreme temperature environments (cement kilns, steel mills)",
      "Brass cage option for high-speed applications with reduced friction and noise",
      "ISO 9001 certified — material certificates and dimensional inspection reports available",
    ],
    applications: [
      { name: "Mining & Quarrying", examples: ["Vibrating screens (22213 / 22215)", "Jaw crushers and cone crushers", "Mining conveyor drive shafts"] },
      { name: "Cement & Heavy Industry", examples: ["Cement ball mills (22220 / 23022)", "Rotary kilns", "Heavy reducers and gearboxes"] },
      { name: "General Industrial", examples: ["Paper pulp machinery", "Bucket elevators", "Heavy-duty fans and blowers"] },
    ],
    skus: [
      { model: "22213", d: "65", D: "120", B: "31", Cr: "138 kN", C0r: "160 kN", weight: "1.45 kg", application: "Vibrating screen, crusher", priority: 4 },
      { model: "22215", d: "75", D: "130", B: "31", Cr: "150 kN", C0r: "180 kN", weight: "1.75 kg", application: "Cement mill, reducer", priority: 4 },
      { model: "22217", d: "85", D: "150", B: "36", Cr: "195 kN", C0r: "240 kN", weight: "2.70 kg", application: "Heavy reducer", priority: 3 },
      { model: "22220", d: "100", D: "180", B: "46", Cr: "285 kN", C0r: "360 kN", weight: "5.20 kg", application: "Mining equipment — high value", priority: 4 },
      { model: "23022", d: "110", D: "170", B: "45", Cr: "310 kN", C0r: "400 kN", weight: "4.22 kg", application: "Pulp machinery, heavy conveyor", priority: 3 },
      { model: "6209-2RS", d: "45", D: "85", B: "19", Cr: "25.5 kN", C0r: "17.8 kN", weight: "0.280 kg", application: "General industrial", priority: 3 },
    ],
    relatedIds: ["motorcycle", "motor", "agricultural"],
  },
};

const relatedLabels: Record<string, string> = {
  motorcycle: "Motorcycle Bearings",
  motor: "Motor & Pump Bearings",
  agricultural: "Agricultural Bearings",
  industrial: "Industrial Bearings",
};

const relatedImages: Record<string, string> = {
  motorcycle: "/manus-storage/bearing-motorcycle_dc63e804.png",
  motor: "/manus-storage/bearing-motor-pump_fc2189a0.png",
  agricultural: "/manus-storage/bearing-agricultural_b095333d.png",
  industrial: "/manus-storage/bearing-industrial_0a55d947.png",
};

/* ─── Shared styles ─────────────────────────────────────────── */
const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "oklch(0.13 0.007 260)",
  border: "1px solid oklch(1 0 0 / 0.10)",
  color: "oklch(0.88 0.003 260)",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.85rem",
  padding: "0.75rem 1rem",
  outline: "none",
  transition: "border-color 0.2s",
  borderRadius: 0,
  boxSizing: "border-box" as const,
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.62rem",
  fontWeight: 700,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "oklch(0.45 0.008 260)",
  display: "block",
  marginBottom: "0.4rem",
};

/* ─── Inquiry Form ───────────────────────────────────────────── */
function InquiryForm({ categoryLabel, accent }: { categoryLabel: string; accent: string }) {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", model: "", quantity: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Bearing Inquiry — ${categoryLabel}${form.model ? ` (${form.model})` : ""} from ${form.company || form.name}`;
    const body = `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone/WhatsApp: ${form.phone}\nProduct Category: ${categoryLabel}\nModel: ${form.model}\nQuantity: ${form.quantity}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:fuxuepu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{
        padding: "3rem 2rem",
        background: "oklch(0.10 0.006 260)",
        border: `1px solid ${accent}40`,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}>
        <CheckCircle2 size={40} style={{ color: accent }} />
        <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "oklch(0.95 0.002 260)" }}>
          Inquiry Sent!
        </h3>
        <p style={{ color: "oklch(0.65 0.008 260)", fontSize: "0.88rem", lineHeight: 1.7, maxWidth: "38ch" }}>
          Your email client should have opened. We'll respond within 24 hours. You can also reach us directly on WhatsApp for faster response.
        </p>
        <a
          href="https://wa.me/8615263521305"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.65rem 1.5rem",
            background: "#25D366",
            color: "#fff",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          <MessageCircle size={14} /> WhatsApp Us
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {/* Name + Company */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="sm:grid-cols-2">
        <div>
          <label style={labelStyle}>Your Name *</label>
          <input name="name" required value={form.name} onChange={handleChange} placeholder="John Smith" style={inputStyle}
            onFocus={(e) => { e.currentTarget.style.borderColor = accent; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.10)"; }}
          />
        </div>
        <div>
          <label style={labelStyle}>Company</label>
          <input name="company" value={form.company} onChange={handleChange} placeholder="ABC Trading Co." style={inputStyle}
            onFocus={(e) => { e.currentTarget.style.borderColor = accent; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.10)"; }}
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="sm:grid-cols-2">
        <div>
          <label style={labelStyle}>Email *</label>
          <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" style={inputStyle}
            onFocus={(e) => { e.currentTarget.style.borderColor = accent; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.10)"; }}
          />
        </div>
        <div>
          <label style={labelStyle}>Phone / WhatsApp</label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="+254 700 000 000" style={inputStyle}
            onFocus={(e) => { e.currentTarget.style.borderColor = accent; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.10)"; }}
          />
        </div>
      </div>

      {/* Model + Quantity */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="sm:grid-cols-2">
        <div>
          <label style={labelStyle}>Model Number</label>
          <input name="model" value={form.model} onChange={handleChange} placeholder="e.g. 6205-2RS C3" style={inputStyle}
            onFocus={(e) => { e.currentTarget.style.borderColor = accent; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.10)"; }}
          />
        </div>
        <div>
          <label style={labelStyle}>Quantity</label>
          <input name="quantity" value={form.quantity} onChange={handleChange} placeholder="e.g. 500 pcs / 10 cartons" style={inputStyle}
            onFocus={(e) => { e.currentTarget.style.borderColor = accent; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.10)"; }}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label style={labelStyle}>Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Please describe your requirements: application, operating conditions, preferred brands, delivery port, etc."
          style={{ ...inputStyle, resize: "vertical" as const, minHeight: "100px" }}
          onFocus={(e) => { e.currentTarget.style.borderColor = accent; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.10)"; }}
        />
      </div>

      {/* Submit */}
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <button type="submit" style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          padding: "0.75rem 2rem",
          background: accent,
          color: "#fff",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          border: "none",
          cursor: "pointer",
          transition: "opacity 0.2s",
        }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
        >
          <Send size={14} /> Send Inquiry
        </button>
        <a
          href="https://wa.me/8615263521305"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.75rem 1.5rem",
            background: "#25D366",
            color: "#fff",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
        >
          <MessageCircle size={14} /> WhatsApp
        </a>
      </div>

      <p style={{ color: "oklch(0.38 0.006 260)", fontSize: "0.72rem", lineHeight: 1.6 }}>
        Inquiry sent to fuxuepu@gmail.com · We respond within 24 hours on business days.
      </p>
    </form>
  );
}

/* ─── Main Page ─────────────────────────────────────────────── */
export default function ProductDetail() {
  const params = useParams<{ category: string }>();
  const cat = allCategories[params.category || "motorcycle"];

  if (!cat) {
    return (
      <div style={{ background: "oklch(0.08 0.005 260)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "oklch(0.60 0.008 260)" }}>Product category not found.</p>
          <Link href="/products"><span style={{ color: "oklch(0.65 0.22 45)", cursor: "pointer" }}>← Back to Products</span></Link>
        </div>
      </div>
    );
  }

  const isAgri = cat.id === "agricultural";

  return (
    <div style={{ background: "oklch(0.08 0.005 260)", minHeight: "100vh", color: "oklch(0.92 0.003 260)", paddingTop: "4.5rem" }}>

      {/* ── HERO / BREADCRUMB ── */}
      <section style={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
        background: "oklch(0.06 0.004 260)",
        borderBottom: "1px solid oklch(1 0 0 / 0.07)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Grid background */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(oklch(1 0 0 / 0.02) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "2rem", flexWrap: "wrap" }}>
            <Link href="/"><span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.40 0.006 260)", cursor: "pointer" }}>Home</span></Link>
            <ChevronRight size={10} style={{ color: "oklch(0.30 0.006 260)" }} />
            <Link href="/products"><span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.40 0.006 260)", cursor: "pointer" }}>Products</span></Link>
            <ChevronRight size={10} style={{ color: "oklch(0.30 0.006 260)" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: cat.accent }}>{cat.label}</span>
          </div>

          {/* Title */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2.5rem", lineHeight: 1 }}>{cat.icon}</span>
            <h1 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "oklch(0.95 0.002 260)",
              margin: 0,
            }}>
              {cat.label}{" "}
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500, color: "oklch(0.55 0.008 260)", fontSize: "0.7em" }}>
                — {cat.labelItalic}
              </span>
            </h1>
          </div>
          <p style={{ color: "oklch(0.60 0.008 260)", fontSize: "0.92rem", lineHeight: 1.7, maxWidth: "60ch" }}>{cat.tagline}</p>
        </div>
      </section>

      {/* ── PRODUCT IMAGE + QUICK SPECS ── */}
      <section style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "start" }}
            className="lg:grid-cols-2">

            {/* Left: Product Image */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "relative",
                overflow: "hidden",
                background: "oklch(0.06 0.004 260)",
                border: "1px solid oklch(1 0 0 / 0.08)",
              }}>
                <img
                  src={cat.img}
                  alt={cat.label}
                  style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
                />
                {/* Accent badge */}
                <div style={{
                  position: "absolute", top: "1rem", left: "1rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em",
                  color: cat.accent,
                  background: "oklch(0.06 0.004 260 / 0.92)",
                  border: `1px solid ${cat.accent}50`,
                  padding: "0.3rem 0.8rem",
                }}>
                  ISO 9001 CERTIFIED
                </div>
              </div>

              {/* Trust badges row */}
              <div style={{
                display: "flex",
                gap: "1px",
                background: "oklch(1 0 0 / 0.06)",
                marginTop: "1px",
              }}>
                {[
                  { icon: ShieldCheck, label: "Quality Tested", color: "oklch(0.65 0.22 45)" },
                  { icon: Truck, label: "24–72hr Dispatch", color: "oklch(0.55 0.18 220)" },
                  { icon: Package, label: "OEM Packaging", color: "oklch(0.60 0.18 145)" },
                ].map(({ icon: Icon, label, color }) => (
                  <div key={label} style={{
                    flex: 1,
                    background: "oklch(0.10 0.006 260)",
                    padding: "0.85rem 0.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}>
                    <Icon size={14} style={{ color, flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "oklch(0.65 0.008 260)", letterSpacing: "0.04em" }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Quick Specs + CTA */}
            <div>
              <div className="fuli-label" style={{ marginBottom: "1rem" }}>Specifications</div>
              <h2 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                letterSpacing: "-0.03em",
                color: "oklch(0.95 0.002 260)",
                marginBottom: "1.5rem",
              }}>
                Quick{" "}
                <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500, color: cat.accent }}>
                  Reference
                </span>
              </h2>

              {/* Specs table */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "oklch(1 0 0 / 0.06)", marginBottom: "2rem" }}>
                {cat.quickSpecs.map((spec) => (
                  <div key={spec.label} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.8rem 1.25rem",
                    background: "oklch(0.10 0.006 260)",
                  }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "oklch(0.50 0.008 260)", letterSpacing: "0.04em" }}>
                      {spec.label}
                    </span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "oklch(0.88 0.003 260)", textAlign: "right", maxWidth: "55%" }}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p style={{ color: "oklch(0.40 0.008 260)", fontSize: "0.88rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                {cat.description}
              </p>

              {/* Market tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "2rem" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(0.40 0.006 260)", alignSelf: "center" }}>
                  Key Markets:
                </span>
                {cat.markets.map((m) => (
                  <span key={m} style={{
                    fontSize: "0.65rem",
                    padding: "0.2rem 0.6rem",
                    border: `1px solid ${cat.accent}40`,
                    color: cat.accent,
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.05em",
                  }}>{m}</span>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a href="#inquiry" style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.75rem 1.75rem",
                  background: cat.accent,
                  color: "#fff",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                >
                  Request a Quote <ArrowRight size={14} />
                </a>
                <a
                  href={`https://wa.me/8615263521305?text=Hi, I'm interested in your ${cat.label}. Please send me a price list.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    padding: "0.75rem 1.5rem",
                    background: "#25D366",
                    color: "#fff",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKU TABLE ── */}
      <section style={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
        background: "oklch(0.06 0.004 260)",
        borderTop: "1px solid oklch(1 0 0 / 0.06)",
      }}>
        <div className="container">
          <div className="fuli-label" style={{ marginBottom: "1rem" }}>Model Range</div>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
            letterSpacing: "-0.03em",
            color: "oklch(0.95 0.002 260)",
            marginBottom: "2rem",
          }}>
            Available{" "}
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500 }}>Models</span>
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid oklch(1 0 0 / 0.1)" }}>
                  {["Model", isAgri ? "Shaft ⌀ / d (mm)" : "d (mm)", isAgri ? "—" : "D (mm)", isAgri ? "—" : "B (mm)", "Cr", "C0r", "Weight", "Application"].map((h) => (
                    h === "—" ? null :
                    <th key={h} style={{
                      textAlign: "left",
                      padding: "0.65rem 1rem 0.65rem 0",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase" as const,
                      color: "oklch(0.42 0.006 260)",
                      whiteSpace: "nowrap",
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cat.skus.map((sku, i) => (
                  <tr key={sku.model}
                    onClick={() => window.location.href = `/products/${cat.id}/${encodeURIComponent(sku.model)}`}
                    style={{
                      borderBottom: "1px solid oklch(1 0 0 / 0.05)",
                      background: i % 2 === 0 ? "transparent" : "oklch(1 0 0 / 0.015)",
                      cursor: "pointer",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "oklch(1 0 0 / 0.06)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? "transparent" : "oklch(1 0 0 / 0.015)"; }}
                  >
                    <td style={{ padding: "0.75rem 1rem 0.75rem 0" }}>
                      <span style={{ fontFamily: "monospace", fontWeight: 700, color: cat.accent, fontSize: "0.88rem", textDecoration: "underline", textDecorationColor: `${cat.accent}55` }}>
                        {sku.model}
                      </span>
                    </td>
                    <td style={{ padding: "0.75rem 1rem 0.75rem 0", fontFamily: "monospace", color: "oklch(0.65 0.008 260)", fontSize: "0.78rem" }}>
                      {sku.d}
                    </td>
                    {!isAgri && (
                      <td style={{ padding: "0.75rem 1rem 0.75rem 0", fontFamily: "monospace", color: "oklch(0.65 0.008 260)", fontSize: "0.78rem" }}>
                        {sku.D}
                      </td>
                    )}
                    {!isAgri && (
                      <td style={{ padding: "0.75rem 1rem 0.75rem 0", fontFamily: "monospace", color: "oklch(0.65 0.008 260)", fontSize: "0.78rem" }}>
                        {sku.B}
                      </td>
                    )}
                    <td style={{ padding: "0.75rem 1rem 0.75rem 0", fontFamily: "monospace", color: "oklch(0.55 0.008 260)", fontSize: "0.75rem" }}>
                      {sku.Cr || "—"}
                    </td>
                    <td style={{ padding: "0.75rem 1rem 0.75rem 0", fontFamily: "monospace", color: "oklch(0.55 0.008 260)", fontSize: "0.75rem" }}>
                      {sku.C0r || "—"}
                    </td>
                    <td style={{ padding: "0.75rem 1rem 0.75rem 0", fontFamily: "monospace", color: "oklch(0.50 0.008 260)", fontSize: "0.75rem" }}>
                      {sku.weight || "—"}
                    </td>
                    <td style={{ padding: "0.75rem 1rem 0.75rem 0", color: "oklch(0.68 0.008 260)", fontSize: "0.82rem", maxWidth: "200px" }}>
                      {sku.application}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: "oklch(0.38 0.006 260)", fontSize: "0.72rem", marginTop: "1.25rem", lineHeight: 1.6 }}>
            * Cr = Basic Dynamic Load Rating · C0r = Basic Static Load Rating
          </p>
        </div>
      </section>

      {/* ── TECH FEATURES + APPLICATIONS ── */}
      <section style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}
            className="lg:grid-cols-2">

            {/* Technical Features */}
            <div>
              <div className="fuli-label" style={{ marginBottom: "1rem" }}>Technical Features</div>
              <h2 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                letterSpacing: "-0.03em",
                color: "oklch(0.95 0.002 260)",
                marginBottom: "1.75rem",
              }}>
                Why These{" "}
                <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500, color: cat.accent }}>
                  Bearings
                </span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {cat.features.map((f, i) => (
                  <div key={i} style={{
                    display: "flex",
                    gap: "0.75rem",
                    padding: "1rem 1.25rem",
                    background: "oklch(0.10 0.006 260)",
                    border: "1px solid oklch(1 0 0 / 0.06)",
                    transition: "border-color 0.2s",
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${cat.accent}40`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.06)"; }}
                  >
                    <div style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      background: `${cat.accent}18`,
                      border: `1px solid ${cat.accent}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "0.05rem",
                    }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", fontWeight: 700, color: cat.accent }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p style={{ color: "oklch(0.72 0.008 260)", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>{f}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <div className="fuli-label" style={{ marginBottom: "1rem" }}>Applications</div>
              <h2 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                letterSpacing: "-0.03em",
                color: "oklch(0.95 0.002 260)",
                marginBottom: "1.75rem",
              }}>
                Where They're{" "}
                <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500, color: cat.accent }}>
                  Used
                </span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "oklch(1 0 0 / 0.06)" }}>
                {cat.applications.map((app) => (
                  <div key={app.name} style={{
                    background: "oklch(0.10 0.006 260)",
                    padding: "1.25rem 1.5rem",
                  }}>
                    <h3 style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      color: "oklch(0.90 0.003 260)",
                      marginBottom: "0.6rem",
                    }}>
                      <span style={{ color: cat.accent, marginRight: "0.5rem" }}>▸</span>
                      {app.name}
                    </h3>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                      {app.examples.map((ex) => (
                        <li key={ex} style={{
                          color: "oklch(0.60 0.008 260)",
                          fontSize: "0.82rem",
                          lineHeight: 1.6,
                          paddingLeft: "1rem",
                          position: "relative",
                        }}>
                          <span style={{ position: "absolute", left: 0, color: "oklch(0.35 0.006 260)", fontSize: "0.6rem", top: "0.3rem" }}>—</span>
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INQUIRY FORM ── */}
      <section id="inquiry" style={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
        background: "oklch(0.06 0.004 260)",
        borderTop: "1px solid oklch(1 0 0 / 0.06)",
      }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}
            className="lg:grid-cols-5">

            {/* Left: form intro */}
            <div style={{ gridColumn: "span 2" }} className="lg:col-span-2">
              <div className="fuli-label" style={{ marginBottom: "1rem" }}>Get a Quote</div>
              <h2 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
                letterSpacing: "-0.03em",
                color: "oklch(0.95 0.002 260)",
                marginBottom: "1.25rem",
              }}>
                Request{" "}
                <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500, color: cat.accent }}>
                  Pricing
                </span>
              </h2>
              <p style={{ color: "oklch(0.40 0.008 260)", fontSize: "0.88rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                Tell us your model, quantity, and destination. We'll reply with a competitive FOB price within 24 hours.
              </p>

              {/* Contact shortcuts */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a href="https://wa.me/8615263521305" target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  padding: "0.85rem 1.25rem",
                  background: "oklch(0.10 0.006 260)",
                  border: "1px solid oklch(1 0 0 / 0.08)",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#25D36640"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.08)"; }}
                >
                  <MessageCircle size={16} style={{ color: "#25D366", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#25D366", marginBottom: "0.1rem" }}>WhatsApp</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "oklch(0.72 0.008 260)" }}>+86 152 6352 1305</div>
                  </div>
                </a>
                <a href="mailto:fuxuepu@gmail.com" style={{
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  padding: "0.85rem 1.25rem",
                  background: "oklch(0.10 0.006 260)",
                  border: "1px solid oklch(1 0 0 / 0.08)",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${cat.accent}40`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.08)"; }}
                >
                  <Send size={16} style={{ color: cat.accent, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: cat.accent, marginBottom: "0.1rem" }}>Email</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "oklch(0.72 0.008 260)" }}>fuxuepu@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div style={{ gridColumn: "span 3" }} className="lg:col-span-3">
              <InquiryForm categoryLabel={cat.label} accent={cat.accent} />
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED CATEGORIES ── */}
      <section style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div className="fuli-label" style={{ marginBottom: "1rem" }}>Related Products</div>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
            letterSpacing: "-0.03em",
            color: "oklch(0.95 0.002 260)",
            marginBottom: "2rem",
          }}>
            Other{" "}
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500 }}>Categories</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1px", background: "oklch(1 0 0 / 0.06)" }}
            className="sm:grid-cols-3">
            {cat.relatedIds.map((rid) => (
              <Link key={rid} href={`/products/${rid}`}>
                <div style={{
                  background: "oklch(0.10 0.006 260)",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "oklch(0.13 0.008 260)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "oklch(0.10 0.006 260)"; }}
                >
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    <img
                      src={relatedImages[rid]}
                      alt={relatedLabels[rid]}
                      style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                    />
                  </div>
                  <div style={{ padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", fontWeight: 600, color: "oklch(0.88 0.003 260)" }}>
                      {relatedLabels[rid]}
                    </span>
                    <ArrowRight size={14} style={{ color: "oklch(0.45 0.008 260)", flexShrink: 0 }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
