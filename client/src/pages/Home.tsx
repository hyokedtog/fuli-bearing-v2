/**
 * FULI Machinery - Home Page
 * Design: Modern B2B Professional
 * Colors: Deep Blue (#1e3a5f) + Orange (#f97316) accent
 * Font: Barlow Condensed (headings) + Barlow (body)
 * Key improvements over original:
 *  - Real product images (not just icons)
 *  - Trust signals on homepage (stats, certifications)
 *  - Testimonials section
 *  - WhatsApp float button
 *  - Better hero with split layout
 *  - Industry applications with icons
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import {
  ArrowRight,
  CheckCircle2,
  Award,
  Truck,
  Factory,
  Wrench,
  Globe,
  Star,
  ChevronRight,
  Shield,
  Zap,
  Package,
} from "lucide-react";

// Animated counter hook
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// Intersection observer hook
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const products = [
  {
    id: "dgb",
    code: "DGB",
    name: "Deep Groove Ball Bearings",
    desc: "Versatile single-row bearings for high speeds and moderate loads. Standard and non-standard sizes available.",
    specs: "d: 10–150mm · Open / ZZ / 2RS · P0/P6/P5 Precision",
    tags: ["High Speed", "Low Noise", "Chrome Steel"],
    series: "6000 · 6200 · 6300 · 6400 · 16000",
    color: "oklch(0.33 0.12 255)",
  },
  {
    id: "trb",
    code: "TRB",
    name: "Tapered Roller Bearings",
    desc: "Handle combined radial and axial loads with high precision. Metric and inch series available.",
    specs: "d: 15–260mm · Metric / Inch · P0/P6 Precision",
    tags: ["Radial + Axial", "High Precision", "Metric & Inch"],
    series: "30200 · 30300 · 31300 · 32000",
    color: "oklch(0.38 0.14 255)",
  },
  {
    id: "srb",
    code: "SRB",
    name: "Spherical Roller Bearings",
    desc: "Self-aligning design compensates for shaft deflection. Ideal for heavy radial loads and vibrating screens.",
    specs: "d: 25–400mm · CC/CA/E/MB Cage · P0/P6",
    tags: ["Self-Aligning", "Heavy Radial", "Shock Load"],
    series: "21300 · 22200 · 22300 · 23000",
    color: "oklch(0.43 0.16 255)",
  },
  {
    id: "pbu",
    code: "PBU",
    name: "Pillow Block Bearings",
    desc: "Mounted bearing units with housing for easy installation. UCP, UCF, UCT, UCFC series.",
    specs: "d: 12–140mm · Cast Iron / SS Housing",
    tags: ["Easy Install", "Sealed", "UCP/UCF/UCT"],
    series: "UCP · UCF · UCT · UCFC · UCFL",
    color: "oklch(0.48 0.18 255)",
  },
];

const advantages = [
  {
    icon: Award,
    title: "ISO 9001 Certified",
    desc: "Strict quality control at every production stage. All products meet international standards.",
    badge: "ISO 9001",
  },
  {
    icon: Factory,
    title: "Factory Direct",
    desc: "No middlemen. Direct from our Shandong factory to your warehouse. Volume discounts available.",
    badge: "Factory Direct",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Large stock ready for immediate shipment. Standard orders ship within 24–72 hours.",
    badge: "Ships 24–72 hrs",
  },
  {
    icon: Wrench,
    title: "OEM / ODM Ready",
    desc: "Custom sizes, materials, packaging, and branding accepted. Special orders in 15–30 days.",
    badge: "OEM / ODM",
  },
];

const industries = [
  { icon: "🚗", name: "Automotive", items: ["Wheel hubs", "Transmissions", "Steering columns"] },
  { icon: "🌾", name: "Agriculture", items: ["Combine harvesters", "Grain augers", "Tractors"] },
  { icon: "⛏️", name: "Mining", items: ["Rock crushers", "Conveyor systems", "Drilling rigs"] },
  { icon: "⚙️", name: "Machinery", items: ["Pumps & compressors", "Gearboxes", "Machine tools"] },
  { icon: "⚡", name: "Electric Motors", items: ["Motor shafts", "Generators", "Industrial fans"] },
  { icon: "🏗️", name: "Construction", items: ["Excavators", "Tower cranes", "Concrete mixers"] },
];

const testimonials = [
  {
    name: "Ahmed Al-Rashidi",
    company: "Al-Rashidi Trading Co.",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    text: "We have been sourcing bearings from FULI for 3 years. Consistent quality, competitive pricing, and reliable delivery. Highly recommended for Middle East distributors.",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    company: "Industrias Mendoza S.A.",
    country: "Mexico",
    flag: "🇲🇽",
    text: "FULI's tapered roller bearings perform excellently in our agricultural machinery. The team is responsive and the documentation for import is always complete.",
    rating: 5,
  },
  {
    name: "Dmitri Volkov",
    company: "Volkov Machinery",
    country: "Russia",
    flag: "🇷🇺",
    text: "Spherical roller bearings for our mining equipment. Excellent load capacity and service life. We order 3–4 containers per year without issues.",
    rating: 5,
  },
];

// Hero image URL
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663607109789/48YXxtoXbaoufcubufBDmH/hero-factory-8LxGMpDRD3qc3Kz7e7xbAt.webp";
const PRODUCT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663607109789/48YXxtoXbaoufcubufBDmH/product-bearings-9MK2PWAX6J9fwQKVqB6Wxb.webp";
const QUALITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663607109789/48YXxtoXbaoufcubufBDmH/factory-quality-mNzDztzAPVnFRBmd4Grbas.webp";

export default function Home() {
  const { ref: statsRef, inView: statsInView } = useInView();
  const years = useCountUp(15, 1800, statsInView);
  const models = useCountUp(2000, 2000, statsInView);
  const countries = useCountUp(50, 1600, statsInView);
  const monthly = useCountUp(500, 2200, statsInView);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="FULI Bearing Factory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(105deg, oklch(0.18 0.10 255 / 0.92) 0%, oklch(0.18 0.10 255 / 0.75) 55%, oklch(0.18 0.10 255 / 0.40) 100%)"
          }} />
        </div>

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-0.5" style={{ background: "oklch(0.65 0.20 45)" }} />
              <span className="fuli-section-label text-white/80">
                Shandong, China · Est. 2009
              </span>
            </div>

            {/* Headline */}
            <h1 className="fuli-heading text-white mb-6"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1.02 }}>
              Precision Bearings<br />
              <span style={{ color: "oklch(0.80 0.18 45)" }}>for Global Industry</span>
            </h1>

            <p className="text-white/75 text-lg mb-4 max-w-xl leading-relaxed">
              ISO 9001 certified bearing manufacturer. Factory-direct supply with full export documentation. Trusted by distributors and OEMs in 50+ countries.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["ISO 9001 Certified", "Factory Direct", "OEM/ODM Ready", "Ships 24–72 hrs"].map((b) => (
                <span key={b} className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: "oklch(1 0 0 / 0.12)",
                    border: "1px solid oklch(1 0 0 / 0.25)",
                    color: "white",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    letterSpacing: "0.06em"
                  }}>
                  <CheckCircle2 size={12} style={{ color: "oklch(0.80 0.18 45)" }} />
                  {b}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <span className="fuli-btn-primary text-base px-8 py-3.5">
                  Get a Quote <ArrowRight size={16} />
                </span>
              </Link>
              <Link href="/products">
                <span className="fuli-btn-secondary text-base px-8 py-3.5">
                  View Products
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.15em" }}>SCROLL</span>
          <div className="w-px h-10 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section ref={statsRef} style={{ background: "oklch(0.22 0.10 255)" }}>
        <div className="container py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: years, suffix: "+", label: "Years Experience" },
              { value: models, suffix: "+", label: "Product Models" },
              { value: countries, suffix: "+", label: "Countries Served" },
              { value: monthly, suffix: "K", label: "Monthly Production" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="fuli-stat-number text-white" style={{ color: "oklch(0.80 0.18 45)" }}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-white/50 text-sm mt-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
            <div>
              <div className="fuli-section-label mb-2">Product Catalog</div>
              <h2 className="fuli-heading text-4xl lg:text-5xl text-gray-900">Our Products</h2>
              <p className="text-gray-500 mt-2 text-base">Comprehensive bearing solutions for every application</p>
            </div>
            <Link href="/products">
              <span className="fuli-btn-primary text-sm px-6 py-2.5 whitespace-nowrap">
                View All Products <ChevronRight size={15} />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p, i) => (
              <Link href="/products" key={p.id}>
                <div className="fuli-card h-full group cursor-pointer">
                  {/* Card header */}
                  <div className="p-5 pb-4" style={{ background: p.color }}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white/50 text-xs font-bold"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.15em" }}>
                        0{i + 1}
                      </span>
                      <span className="text-white text-xs font-bold px-2 py-0.5 rounded"
                        style={{ background: "oklch(1 0 0 / 0.15)", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}>
                        {p.code} SERIES
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {p.name}
                    </h3>
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex flex-col gap-3">
                    <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                    <div className="text-xs text-gray-400 font-mono">{p.specs}</div>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ background: "oklch(0.96 0.01 255)", color: "oklch(0.33 0.12 255)", fontFamily: "'Barlow Condensed', sans-serif" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 mt-2 text-sm font-semibold group-hover:gap-2.5 transition-all"
                      style={{ color: "oklch(0.65 0.20 45)", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}>
                      EXPLORE SERIES <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE FULI ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img src={QUALITY_IMG} alt="FULI Quality Control" className="w-full h-80 object-cover" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-xl p-4 flex items-center gap-3 border border-gray-100">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "oklch(0.65 0.20 45 / 0.12)" }}>
                  <Shield size={22} style={{ color: "oklch(0.65 0.20 45)" }} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    ISO 9001:2015
                  </div>
                  <div className="text-gray-500 text-xs">Quality Certified</div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <div className="fuli-section-label mb-2">Manufacturer Advantage</div>
              <h2 className="fuli-heading text-4xl lg:text-5xl text-gray-900 mb-4">
                Why Choose FULI
              </h2>
              <p className="text-gray-500 text-base mb-8 leading-relaxed">
                Factory-direct supply with full export documentation and dedicated international support. We eliminate middlemen to give you better pricing and faster service.
              </p>

              <div className="space-y-5">
                {advantages.map((adv) => (
                  <div key={adv.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "oklch(0.33 0.12 255 / 0.08)" }}>
                      <adv.icon size={18} style={{ color: "oklch(0.33 0.12 255)" }} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-gray-900"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.05rem" }}>
                          {adv.title}
                        </h4>
                        <span className="text-xs px-2 py-0.5 rounded font-semibold"
                          style={{ background: "oklch(0.65 0.20 45 / 0.12)", color: "oklch(0.52 0.22 45)", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}>
                          {adv.badge}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.005 255)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <div className="fuli-section-label mb-2">Industries Served</div>
            <h2 className="fuli-heading text-4xl lg:text-5xl text-gray-900">Applications</h2>
            <p className="text-gray-500 mt-2">Our bearings serve diverse industries worldwide</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind) => (
              <div key={ind.name}
                className="bg-white rounded-lg p-5 text-center border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all group cursor-default">
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h4 className="font-bold text-gray-800 text-sm mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}>
                  {ind.name}
                </h4>
                <ul className="space-y-0.5">
                  {ind.items.map((item) => (
                    <li key={item} className="text-gray-400 text-xs">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="fuli-section-label mb-2">Customer Reviews</div>
            <h2 className="fuli-heading text-4xl lg:text-5xl text-gray-900">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="fuli-card p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="oklch(0.65 0.20 45)" style={{ color: "oklch(0.65 0.20 45)" }} />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg shrink-0"
                    style={{ background: "oklch(0.96 0.01 255)" }}>
                    {t.flag}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {t.name}
                    </div>
                    <div className="text-gray-400 text-xs">{t.company} · {t.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20" style={{ background: "oklch(0.22 0.10 255)" }}>
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <div className="fuli-section-label mb-3" style={{ color: "oklch(0.80 0.18 45)" }}>
              Get In Touch
            </div>
            <h2 className="fuli-heading text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Ready to Order?
            </h2>
            <p className="text-white/60 text-base mb-8 leading-relaxed">
              Send us your requirements and receive a competitive quote within 24 hours. Our export team handles all documentation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <span className="fuli-btn-primary text-base px-10 py-4">
                  Request a Quote <ArrowRight size={16} />
                </span>
              </Link>
              <a href="https://wa.me/8618606311628" target="_blank" rel="noopener noreferrer">
                <span className="fuli-btn-secondary text-base px-10 py-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
