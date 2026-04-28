/**
 * FULI Machinery - Products Page
 * Design: Modern B2B Professional
 * Key improvements: product images, filtering tabs, better specs layout
 */
import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { ArrowRight, Download, Mail, CheckCircle2, ChevronRight } from "lucide-react";

const BEARING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663607109789/48YXxtoXbaoufcubufBDmH/product-bearings-9MK2PWAX6J9fwQKVqB6Wxb.webp";
const DGB_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663607109789/48YXxtoXbaoufcubufBDmH/product-dgb-VzG2ehpLaRNz5g7S6WEgC4.webp";

const products = [
  {
    id: "dgb",
    code: "DGB",
    name: "Deep Groove Ball Bearings",
    shortName: "Ball Bearings",
    desc: "Versatile single-row bearings designed for high-speed operation and moderate radial and axial loads. Available in standard and non-standard sizes with multiple seal configurations.",
    image: DGB_IMG,
    series: ["6000", "6200", "6300", "6400", "16000", "61800", "61900"],
    specs: [
      { label: "Bore Diameter", value: "d: 10–150 mm" },
      { label: "Seal Type", value: "Open / ZZ / 2RS" },
      { label: "Precision Class", value: "P0 / P6 / P5" },
      { label: "Material", value: "Chrome Steel / Stainless Steel" },
      { label: "Cage", value: "Steel / Brass / Nylon" },
    ],
    features: [
      "High speed capability",
      "Low noise & vibration",
      "Long service life",
      "Easy maintenance",
      "Wide temperature range",
    ],
    applications: ["Electric motors", "Pumps", "Gearboxes", "Conveyors", "Agricultural machinery"],
    color: "oklch(0.33 0.12 255)",
  },
  {
    id: "trb",
    code: "TRB",
    name: "Tapered Roller Bearings",
    shortName: "Tapered Roller",
    desc: "Designed to handle combined radial and axial loads simultaneously. The tapered inner and outer ring raceways meet at a common apex on the bearing axis. Available in metric and inch series.",
    image: BEARING_IMG,
    series: ["30200", "30300", "31300", "32000", "32200", "32300", "33000", "33100", "33200"],
    specs: [
      { label: "Bore Diameter", value: "d: 15–260 mm" },
      { label: "Series", value: "Metric / Inch" },
      { label: "Precision Class", value: "P0 / P6" },
      { label: "Material", value: "Chrome Steel" },
      { label: "Contact Angle", value: "10°–30°" },
    ],
    features: [
      "High radial & axial load capacity",
      "Separable design",
      "Precise clearance control",
      "Wide size range",
      "Suitable for heavy-duty applications",
    ],
    applications: ["Automotive wheel hubs", "Gearboxes", "Mining equipment", "Construction machinery", "Railway"],
    color: "oklch(0.38 0.14 255)",
  },
  {
    id: "srb",
    code: "SRB",
    name: "Spherical Roller Bearings",
    shortName: "Spherical Roller",
    desc: "Self-aligning design with two rows of rollers and a common sphered outer ring raceway. Compensates for shaft deflection and misalignment. Ideal for heavy radial loads and shock conditions.",
    image: BEARING_IMG,
    series: ["21300", "22200", "22300", "23000", "24000", "23100", "24100"],
    specs: [
      { label: "Bore Diameter", value: "d: 25–400 mm" },
      { label: "Cage Type", value: "CC / CA / E / MB" },
      { label: "Precision Class", value: "P0 / P6" },
      { label: "Material", value: "Chrome Steel" },
      { label: "Alignment", value: "±1.5°–2.5°" },
    ],
    features: [
      "Self-aligning capability",
      "High radial load capacity",
      "Shock load resistance",
      "Suitable for vibrating screens",
      "Handles shaft misalignment",
    ],
    applications: ["Vibrating screens", "Paper mills", "Mining crushers", "Steel mills", "Heavy conveyors"],
    color: "oklch(0.43 0.16 255)",
  },
  {
    id: "pbu",
    code: "PBU",
    name: "Pillow Block Bearings",
    shortName: "Pillow Block",
    desc: "Complete bearing units combining an insert bearing with a cast iron or pressed steel housing. Designed for easy installation and replacement. Available in multiple mounting configurations.",
    image: BEARING_IMG,
    series: ["UCP", "UCF", "UCT", "UCFC", "UCFL", "UCPA", "UCPH", "UCPX"],
    specs: [
      { label: "Bore Diameter", value: "d: 12–140 mm" },
      { label: "Housing", value: "Cast Iron / Stainless Steel" },
      { label: "Lubrication", value: "Grease nipple included" },
      { label: "Insert Bearing", value: "Chrome Steel" },
      { label: "Locking", value: "Set screw / Eccentric collar" },
    ],
    features: [
      "Easy installation & replacement",
      "Sealed for life options",
      "Various housing materials",
      "Multiple mounting styles",
      "Self-aligning insert bearing",
    ],
    applications: ["Conveyor systems", "Agricultural equipment", "Food processing", "Packaging machinery", "Fan shafts"],
    color: "oklch(0.48 0.18 255)",
  },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all" ? products : products.filter((p) => p.id === activeTab);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="pt-28 pb-14" style={{ background: "oklch(0.22 0.10 255)" }}>
        <div className="container">
          <div className="flex items-center gap-2 mb-3 text-white/50 text-sm"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <Link href="/"><span className="hover:text-white transition-colors cursor-pointer">Home</span></Link>
            <ChevronRight size={14} />
            <span className="text-white">Products</span>
          </div>
          <div className="fuli-section-label mb-2" style={{ color: "oklch(0.80 0.18 45)" }}>
            Product Catalog
          </div>
          <h1 className="fuli-heading text-white mb-3" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
            Our Bearing Products
          </h1>
          <p className="text-white/60 text-base max-w-xl">
            Comprehensive range of precision bearings for industrial applications. All products are ISO 9001 certified and available for immediate shipment.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
        <div className="container">
          <div className="flex gap-0 overflow-x-auto">
            {[{ id: "all", label: "All Products" }, ...products.map((p) => ({ id: p.id, label: p.shortName }))].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.05em",
                  borderBottomColor: activeTab === tab.id ? "oklch(0.65 0.20 45)" : "transparent",
                  color: activeTab === tab.id ? "oklch(0.33 0.12 255)" : "oklch(0.52 0.02 255)",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="space-y-8">
            {filtered.map((p, i) => (
              <div key={p.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Image */}
                  <div className="lg:col-span-2 relative overflow-hidden" style={{ minHeight: "260px" }}>
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                      style={{ minHeight: "260px" }}
                    />
                    <div className="absolute inset-0" style={{
                      background: `linear-gradient(135deg, ${p.color} / 0.7) 0%, transparent 60%)`
                    }} />
                    <div className="absolute top-4 left-4">
                      <span className="text-white text-xs font-bold px-3 py-1 rounded"
                        style={{ background: p.color, fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}>
                        {p.code} SERIES
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-7">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-5">
                      <div>
                        <h2 className="fuli-heading text-2xl lg:text-3xl text-gray-900 mb-2">{p.name}</h2>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-lg">{p.desc}</p>
                      </div>
                      <a
                        href="mailto:fulibearing@163.com"
                        className="fuli-btn-primary text-sm px-5 py-2.5 whitespace-nowrap shrink-0"
                      >
                        <Mail size={14} />
                        Send Inquiry
                      </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Series */}
                      <div>
                        <h4 className="text-xs font-bold mb-2 uppercase tracking-widest text-gray-400"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                          Series
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {p.series.map((s) => (
                            <span key={s} className="text-xs px-2 py-0.5 rounded font-mono"
                              style={{ background: "oklch(0.96 0.01 255)", color: "oklch(0.33 0.12 255)" }}>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Specs */}
                      <div>
                        <h4 className="text-xs font-bold mb-2 uppercase tracking-widest text-gray-400"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                          Specifications
                        </h4>
                        <ul className="space-y-1">
                          {p.specs.slice(0, 4).map((s) => (
                            <li key={s.label} className="flex items-center gap-1.5 text-xs text-gray-600">
                              <CheckCircle2 size={11} style={{ color: "oklch(0.65 0.20 45)", flexShrink: 0 }} />
                              <span>{s.value}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-xs font-bold mb-2 uppercase tracking-widest text-gray-400"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                          Key Features
                        </h4>
                        <ul className="space-y-1">
                          {p.features.slice(0, 4).map((f) => (
                            <li key={f} className="flex items-center gap-1.5 text-xs text-gray-600">
                              <ArrowRight size={10} style={{ color: "oklch(0.65 0.20 45)", flexShrink: 0 }} />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mt-5 pt-5 border-t border-gray-100">
                      <span className="text-xs text-gray-400 font-semibold uppercase tracking-widest mr-3"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        Applications:
                      </span>
                      {p.applications.map((a) => (
                        <span key={a} className="inline-block text-xs mr-2 mb-1 text-gray-500">
                          {a} ·
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download CTA */}
          <div className="mt-10 rounded-xl p-8 text-center" style={{ background: "oklch(0.22 0.10 255)" }}>
            <h3 className="fuli-heading text-white text-2xl mb-2">Need Full Specifications?</h3>
            <p className="text-white/60 text-sm mb-5">
              Download our complete product catalogue with detailed dimension tables and technical drawings.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:fulibearing@163.com?subject=Product%20Catalogue%20Request"
                className="fuli-btn-primary text-sm px-7 py-3">
                <Download size={15} />
                Request Catalogue
              </a>
              <Link href="/contact">
                <span className="fuli-btn-secondary text-sm px-7 py-3">
                  Get a Quote
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
