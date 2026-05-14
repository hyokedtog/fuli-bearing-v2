/**
 * FULI Bearing — News & Knowledge Hub
 * Design: Light theme — white cards, deep navy hero, orange accent
 * Target: East Africa motorcycle bearing buyers (Boda-Boda, Okada)
 * SEO: Educational content targeting long-tail Africa bearing keywords
 */
import { useState } from "react";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, Clock, Tag, MessageCircle } from "lucide-react";

type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  tags: string[];
  content: string[];
};

const articles: Article[] = [
  {
    slug: "boda-boda-bearing-guide",
    category: "Motorcycle Bearings",
    title: "Which Bearings Does a Boda-Boda Motorcycle Actually Need? (Complete Guide)",
    excerpt: "Over 40 million motorcycles run on African roads — 80–90% for commercial use. Rough unpaved roads mean bearings wear out 2–3× faster than in Europe. Here is exactly which models you need to stock.",
    readTime: "5 min read",
    date: "May 2025",
    tags: ["Boda-Boda", "Kenya", "Tanzania", "Uganda", "6301-2RS", "6302-2RS"],
    content: [
      "The Boda-Boda motorcycle taxi is the backbone of East African urban transport. In Nairobi, Kampala, and Dar es Salaam, these bikes run 12–16 hours a day on unpaved roads, carrying passengers and goods. The result: bearings wear out 2–3× faster than in Europe or Asia.",
      "**The 5 bearings every Boda-Boda repair shop must stock:**",
      "**6301-2RS** (12×37×12mm) — Front wheel hub. This is the single highest-volume bearing in East Africa. A busy repair shop in Mombasa goes through 50–100 pcs per month.",
      "**6302-2RS** (15×42×13mm) — Front wheel / small motor. Second highest volume. Often sold alongside 6301-2RS.",
      "**6303-2RS** (17×47×14mm) — Front and rear wheel on larger displacement bikes (Honda CG125, Bajaj Boxer).",
      "**6304-2RS** (20×52×15mm) — Rear wheel hub. Heavier load, needs higher quality grease seal.",
      "**6305-2RS** (25×62×17mm) — Engine crankshaft on 150cc+ bikes. Failure here means engine replacement — buyers pay premium for quality.",
      "**Why 2RS matters:** The -2RS suffix means rubber-sealed on both sides. Without seals, African road dust destroys bearings in weeks. Always specify 2RS for motorcycle applications.",
      "**MOQ for trial orders:** FULI accepts 50 pcs minimum per model for first orders. Mix models to reach MOQ. WhatsApp +86 152 6352 1305 for a price list.",
    ],
  },
  {
    slug: "how-to-read-bearing-numbers",
    category: "Technical Guide",
    title: "How to Read a Bearing Number: A Practical Guide for Importers",
    excerpt: "6301-2RS, 30205, UCP205 — what do these numbers actually mean? Understanding bearing codes helps you order the right part and avoid costly mistakes.",
    readTime: "4 min read",
    date: "April 2025",
    tags: ["Bearing Numbers", "6301-2RS", "30205", "UCP205", "How to Order"],
    content: [
      "When you receive a bearing inquiry from a customer, you'll see codes like 6301-2RS, 30205, or UCP205. These are not random — every digit has a meaning.",
      "**Deep Groove Ball Bearings (6xxx series):**",
      "Take 6301-2RS: The '6' means deep groove ball bearing. '3' is the diameter series (medium). '01' is the bore code — multiply by 5 to get bore in mm: 01×5 = 5mm? No — for 00–03, use the table: 00=10mm, 01=12mm, 02=15mm, 03=17mm. So 6301 = 12mm bore. '-2RS' = rubber sealed both sides.",
      "**Tapered Roller Bearings (3xxxx series):**",
      "30205: '3' = tapered roller. '02' = light series. '05' = bore code 05×5 = 25mm bore. These are common in agricultural equipment and truck wheel hubs.",
      "**Pillow Block Bearings (UCPxxx):**",
      "UCP205: 'UC' = insert bearing unit. 'P' = pillow block housing. '2' = light series. '05' = 25mm bore. These are used in conveyor systems, agricultural machinery, and pumps throughout East Africa.",
      "**Practical tip:** When a customer sends you a worn bearing with no number, measure the bore (inner diameter), outer diameter, and width. These three numbers uniquely identify the bearing. Send us the dimensions on WhatsApp and we'll identify the exact model.",
    ],
  },
  {
    slug: "fob-vs-cif-bearing-import",
    category: "Import Guide",
    title: "FOB vs CIF: Which Shipping Term Should You Use When Importing Bearings from China?",
    excerpt: "Most first-time importers in Kenya and Tanzania default to CIF without understanding the risks. Here is why FOB often saves you money and gives you more control.",
    readTime: "4 min read",
    date: "March 2025",
    tags: ["FOB", "CIF", "Import Kenya", "Import Tanzania", "Shipping"],
    content: [
      "When you request a bearing quote from a Chinese supplier, they will ask: FOB or CIF? Many first-time importers say CIF because it seems simpler — the supplier handles everything. But for experienced importers in Mombasa and Dar es Salaam, FOB is almost always better.",
      "**FOB (Free On Board):** Supplier delivers goods to the port in China. You pay freight from China to your port. You control the shipping company, the insurance, and the timeline.",
      "**CIF (Cost, Insurance, Freight):** Supplier arranges shipping and insurance to your port. Sounds convenient, but the supplier chooses the cheapest freight forwarder, and you have no visibility until the container arrives.",
      "**Why FOB wins for East Africa:**",
      "1. You can use your own freight forwarder who knows Mombasa or Dar es Salaam customs procedures.",
      "2. You get better freight rates if you consolidate multiple suppliers into one container.",
      "3. You control insurance — CIF insurance from Chinese suppliers is often minimum coverage.",
      "4. Faster customs clearance because your forwarder has the documents from day one.",
      "**FULI's standard terms:** We quote FOB Qingdao or FOB Tianjin. For orders under $3,000, we can arrange DDP (Delivered Duty Paid) to your warehouse via express courier (DHL/FedEx) — no customs hassle for small trial orders.",
      "**Ready to start?** WhatsApp us your bearing list and destination port. We'll send an FOB price within 24 hours.",
    ],
  },
  {
    slug: "agricultural-bearing-guide-africa",
    category: "Agricultural Bearings",
    title: "Agricultural Bearings for East Africa: What Maize Farmers and Tractor Dealers Need to Stock",
    excerpt: "From maize shellers to irrigation pumps, East African agricultural equipment runs on a small set of bearing models. Here is the definitive stocking guide.",
    readTime: "6 min read",
    date: "February 2025",
    tags: ["Agricultural", "Kenya", "Tanzania", "UCP205", "30205", "Maize Sheller"],
    content: [
      "East Africa's agricultural sector is growing rapidly. Maize shellers, irrigation pumps, grain mills, and tractors all depend on bearings — and when a bearing fails during harvest season, the cost is enormous.",
      "**Top 5 agricultural bearings for East Africa:**",
      "**UCP205** (25mm bore pillow block) — The single most common bearing in small agricultural machinery. Used in maize shellers, grain mills, and conveyor systems. Stock 50–100 pcs if you serve agricultural dealers.",
      "**UCP206** (30mm bore pillow block) — Slightly larger, used in medium-capacity grain mills and water pumps.",
      "**30205** (25mm bore tapered roller) — Tractor front axle and wheel hub. High load capacity, essential for any tractor parts dealer.",
      "**30206** (30mm bore tapered roller) — Rear axle on small tractors and power tillers.",
      "**1205** (25mm bore self-aligning ball) — Irrigation pump shafts. Self-aligning design compensates for shaft misalignment common in field-installed pumps.",
      "**Seasonal demand pattern:** Bearing demand spikes before planting season (March–April) and before harvest (October–November). Order 6–8 weeks before peak season to avoid stockouts.",
      "**FULI's agricultural bearing advantage:** All agricultural bearings come with C3 clearance (wider internal clearance) as standard — this is critical for temperature variation in field conditions. Confirm C3 when ordering.",
    ],
  },
  {
    slug: "why-cheap-bearings-cost-more",
    category: "Buyer's Guide",
    title: "Why the Cheapest Bearing Always Costs More in the End",
    excerpt: "A $0.30 bearing vs a $0.80 bearing — the math seems obvious. But when you factor in warranty claims, customer returns, and reputation damage, the calculation changes completely.",
    readTime: "3 min read",
    date: "January 2025",
    tags: ["Quality", "Cost", "Warranty", "Africa Market"],
    content: [
      "Every bearing importer in East Africa faces the same pressure: customers want the lowest price. And there are always suppliers offering 6301-2RS at $0.25 per piece. So why not buy cheap?",
      "**The real cost of a failed bearing:**",
      "A motorcycle mechanic in Nairobi buys 20 pcs of 6301-2RS at $0.30 each = $6.00. Three months later, 8 of them fail prematurely. He returns them, demands replacements, and tells 10 other mechanics. You've lost $6 in product, $15 in replacement cost, and potentially $500 in future business.",
      "**What makes a bearing fail prematurely?**",
      "1. Insufficient grease fill — cheap bearings use 15–20% grease fill; quality bearings use 25–35%.",
      "2. Poor steel quality — chrome steel (GCr15) vs. carbon steel. Carbon steel bearings look identical but have 30–40% lower load capacity.",
      "3. Loose tolerances — a P6 tolerance bearing has 2× the dimensional accuracy of an ungraded bearing.",
      "**FULI's quality standard:** All bearings use GCr15 chrome steel, 28–32% grease fill, P6 tolerance minimum. We provide material certificates on request.",
      "**The right question is not 'what is the price?' but 'what is the failure rate?'** Ask your current supplier for their warranty claim rate. FULI's is under 0.3%.",
    ],
  },
  {
    slug: "how-to-start-bearing-import-business",
    category: "Business Guide",
    title: "How to Start a Bearing Import Business in East Africa (Step-by-Step)",
    excerpt: "From finding a reliable Chinese supplier to clearing customs in Mombasa — a practical guide for first-time bearing importers in Kenya, Tanzania, and Uganda.",
    readTime: "7 min read",
    date: "December 2024",
    tags: ["Import Business", "Kenya", "Mombasa", "First Order", "How to Start"],
    content: [
      "The bearing import business in East Africa is highly profitable — margins of 40–80% are common for established importers. But first-time importers make costly mistakes. Here is how to avoid them.",
      "**Step 1: Start with a focused product list.** Don't try to import 50 models on your first order. Start with 5–8 high-velocity models: 6301-2RS, 6302-2RS, 6303-2RS, 6304-2RS, UCP205, 30205. These cover 70% of motorcycle and agricultural demand.",
      "**Step 2: Order a trial shipment.** A good supplier will accept 50 pcs minimum per model. Total first order: 400–500 pcs, value $300–500. Ship by DHL Express — arrives in 5–7 days, no customs complications under $500.",
      "**Step 3: Test the bearings before selling.** Check: smooth rotation with no rough spots, correct dimensions (measure with calipers), grease visible through seal, no rust or damage.",
      "**Step 4: Build your customer list before your second order.** Visit 10 motorcycle repair shops, 5 agricultural equipment dealers. Show them the bearings. Get commitment for 20–30 pcs each. Now you know exactly what to order.",
      "**Step 5: Scale with a sea freight order.** Once you have 3–4 months of sales data, place a sea freight order (minimum 1 CBM, about 2,000–3,000 pcs). FOB Qingdao to Mombasa: approximately $200–300 freight for 1 CBM.",
      "**FULI supports first-time importers:** We provide product photos, specifications, and packing lists for customs documentation. WhatsApp +86 152 6352 1305 to discuss your first order.",
    ],
  },
];

const categories = ["All", "Motorcycle Bearings", "Technical Guide", "Import Guide", "Agricultural Bearings", "Buyer's Guide", "Business Guide"];

export default function News() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const filtered = activeCategory === "All" ? articles : articles.filter((a) => a.category === activeCategory);

  if (activeArticle) {
    return (
      <div style={{ background: "oklch(0.97 0.002 260)", paddingTop: "4.5rem" }}>
        {/* Article Hero */}
        <section style={{ paddingTop: "4rem", paddingBottom: "3rem", background: "oklch(0.18 0.025 255)", borderBottom: "1px solid oklch(0.25 0.015 255)" }}>
          <div className="container" style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "2rem" }}>
              <Link href="/"><span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.55 0.006 260)", cursor: "pointer" }}>Home</span></Link>
              <ChevronRight size={10} style={{ color: "oklch(0.38 0.005 260)" }} />
              <span onClick={() => setActiveArticle(null)} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.55 0.006 260)", cursor: "pointer" }}>Knowledge Hub</span>
              <ChevronRight size={10} style={{ color: "oklch(0.38 0.005 260)" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.65 0.22 45)" }}>{activeArticle.category}</span>
            </div>
            <div style={{ display: "inline-block", padding: "0.3rem 0.8rem", background: "oklch(0.65 0.22 45)", marginBottom: "1.25rem" }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(0.10 0.008 260)" }}>{activeArticle.category}</span>
            </div>
            <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "oklch(0.95 0.002 260)", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              {activeArticle.title}
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Clock size={13} style={{ color: "oklch(0.55 0.006 260)" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.55 0.006 260)" }}>{activeArticle.readTime}</span>
              </div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.45 0.006 260)" }}>{activeArticle.date}</span>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {activeArticle.tags.slice(0, 3).map((tag) => (
                  <span key={tag} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.1em", color: "oklch(0.65 0.22 45)", padding: "0.2rem 0.5rem", border: "1px solid oklch(0.65 0.22 45 / 0.4)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section style={{ paddingTop: "3.5rem", paddingBottom: "5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 1.5rem" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "oklch(0.35 0.008 260)", lineHeight: 1.8, marginBottom: "2rem", fontStyle: "italic", borderLeft: "3px solid oklch(0.65 0.22 45)", paddingLeft: "1.25rem" }}>
              {activeArticle.excerpt}
            </p>
            {activeArticle.content.map((para, i) => {
              const isBold = para.startsWith("**") && para.includes(":**");
              if (isBold) {
                const parts = para.split("**");
                return (
                  <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "oklch(0.25 0.008 260)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                    {parts.map((p, j) => j % 2 === 1 ? <strong key={j}>{p}</strong> : p)}
                  </p>
                );
              }
              return (
                <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "oklch(0.32 0.008 260)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  {para}
                </p>
              );
            })}

            {/* CTA */}
            <div style={{ marginTop: "3rem", padding: "2rem", background: "oklch(0.18 0.025 255)", borderLeft: "3px solid oklch(0.65 0.22 45)" }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.65 0.22 45)", marginBottom: "0.75rem" }}>
                Ready to Order?
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "oklch(0.72 0.006 260)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                WhatsApp us your bearing list and destination port. We'll send an FOB price within 24 hours. Trial orders from 50 pcs per model.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  href="https://wa.me/8615263521305?text=Hello%2C%20I%20read%20your%20article%20and%20need%20a%20bearing%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.10 0.008 260)", textDecoration: "none", padding: "0.65rem 1.25rem", background: "#25D366" }}
                >
                  <MessageCircle size={14} /> WhatsApp Now
                </a>
                <Link href="/contact">
                  <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.65 0.22 45)", padding: "0.65rem 1.25rem", border: "1px solid oklch(0.65 0.22 45)", cursor: "pointer" }}>
                    Email Inquiry <ArrowRight size={13} />
                  </span>
                </Link>
              </div>
            </div>

            <button
              onClick={() => setActiveArticle(null)}
              style={{ marginTop: "2.5rem", display: "flex", alignItems: "center", gap: "0.4rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.45 0.008 260)", background: "none", border: "none", cursor: "pointer" }}
            >
              ← Back to Knowledge Hub
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div style={{ background: "oklch(0.97 0.002 260)", paddingTop: "4.5rem" }}>
      {/* Page Hero */}
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem", background: "oklch(0.18 0.025 255)", borderBottom: "1px solid oklch(0.25 0.015 255)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(oklch(1 0 0 / 0.025) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.025) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "2rem" }}>
            <Link href="/"><span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.55 0.006 260)", cursor: "pointer" }}>Home</span></Link>
            <ChevronRight size={10} style={{ color: "oklch(0.38 0.005 260)" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.65 0.22 45)" }}>Knowledge Hub</span>
          </div>
          <div style={{ display: "inline-block", padding: "0.3rem 0.8rem", background: "oklch(0.65 0.22 45)", marginBottom: "1.25rem" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(0.10 0.008 260)" }}>For East Africa Importers</span>
          </div>
          <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2.5rem, 6vw, 6rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "oklch(0.95 0.002 260)", marginBottom: "1.25rem", lineHeight: 1 }}>
            Bearing Knowledge<br />
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500, color: "oklch(0.65 0.22 45)" }}>Hub</span>
          </h1>
          <p style={{ color: "oklch(0.65 0.008 260)", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: "52ch" }}>
            Practical guides for bearing importers in Kenya, Tanzania, Uganda, Nigeria and beyond. From stocking the right models to clearing customs — real knowledge from 17+ years of export experience.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div style={{ background: "oklch(1 0 0)", borderBottom: "1px solid oklch(0.90 0.003 260)", position: "sticky", top: "4.5rem", zIndex: 10 }}>
        <div className="container">
          <div style={{ display: "flex", gap: "0", overflowX: "auto", scrollbarWidth: "none" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "1.1rem 1.25rem",
                  background: "none",
                  border: "none",
                  borderBottom: activeCategory === cat ? "2px solid oklch(0.65 0.22 45)" : "2px solid transparent",
                  color: activeCategory === cat ? "oklch(0.65 0.22 45)" : "oklch(0.50 0.006 260)",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <section style={{ paddingTop: "4rem", paddingBottom: "6rem" }}>
        <div className="container">
          {/* Featured article */}
          {filtered.length > 0 && (
            <div
              onClick={() => setActiveArticle(filtered[0])}
              style={{ cursor: "pointer", background: "oklch(1 0 0)", border: "1px solid oklch(0.90 0.003 260)", marginBottom: "2rem", display: "grid", gridTemplateColumns: "1fr", transition: "box-shadow 0.2s" }}
              className="lg:grid-cols-[1fr_400px]"
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 24px oklch(0 0 0 / 0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ padding: "3rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <div style={{ padding: "0.25rem 0.75rem", background: "oklch(0.65 0.22 45)" }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(0.10 0.008 260)" }}>Featured</span>
                  </div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(0.50 0.006 260)" }}>{filtered[0].category}</span>
                </div>
                <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "oklch(0.18 0.012 260)", lineHeight: 1.25, marginBottom: "1rem" }}>
                  {filtered[0].title}
                </h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "oklch(0.42 0.008 260)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {filtered[0].excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <Clock size={13} style={{ color: "oklch(0.55 0.006 260)" }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.50 0.006 260)" }}>{filtered[0].readTime}</span>
                  </div>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.65 0.22 45)" }}>
                    Read Article <ArrowRight size={12} />
                  </span>
                </div>
              </div>
              <div style={{ background: "oklch(0.14 0.018 255)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "3rem", gap: "0.75rem" }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.55 0.006 260)", marginBottom: "0.5rem" }}>
                  Key Models Covered
                </div>
                {filtered[0].tags.map((tag) => (
                  <div key={tag} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Tag size={11} style={{ color: "oklch(0.65 0.22 45)", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "oklch(0.80 0.006 260)" }}>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Article grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.5rem" }} className="sm:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(1).map((article) => (
              <div
                key={article.slug}
                onClick={() => setActiveArticle(article)}
                style={{ cursor: "pointer", background: "oklch(1 0 0)", border: "1px solid oklch(0.90 0.003 260)", display: "flex", flexDirection: "column", transition: "box-shadow 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 20px oklch(0 0 0 / 0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ padding: "0.5rem 1.25rem", background: "oklch(0.65 0.22 45)", alignSelf: "flex-start", margin: "1.5rem 1.5rem 0" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(0.10 0.008 260)" }}>{article.category}</span>
                </div>
                <div style={{ padding: "1.25rem 1.5rem 1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.01em", color: "oklch(0.18 0.012 260)", lineHeight: 1.35, marginBottom: "0.75rem" }}>
                    {article.title}
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "oklch(0.45 0.008 260)", lineHeight: 1.65, marginBottom: "1.25rem", flex: 1 }}>
                    {article.excerpt.slice(0, 120)}…
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <Clock size={12} style={{ color: "oklch(0.55 0.006 260)" }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", color: "oklch(0.50 0.006 260)" }}>{article.readTime}</span>
                    </div>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.65 0.22 45)", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      Read <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ marginTop: "5rem", padding: "3rem", background: "oklch(0.18 0.025 255)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1.25rem" }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.65 0.22 45)" }}>
              Have a Question?
            </div>
            <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "oklch(0.95 0.002 260)", lineHeight: 1.1 }}>
              WhatsApp us your bearing question.<br />
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500, color: "oklch(0.65 0.22 45)" }}>We answer within 1 hour.</span>
            </h3>
            <a
              href="https://wa.me/8615263521305?text=Hello%2C%20I%20have%20a%20bearing%20question."
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "oklch(0.10 0.008 260)", textDecoration: "none", padding: "0.85rem 2rem", background: "#25D366" }}
            >
              <MessageCircle size={15} /> Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
