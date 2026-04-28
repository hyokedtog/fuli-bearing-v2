/**
 * FULI Machinery - About Us Page
 * Design: Modern B2B Professional
 * Key improvements: factory photos, certifications, mission/vision, team stats
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";

const FACTORY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663607109789/48YXxtoXbaoufcubufBDmH/about-factory-BPSYYzF6a4tJNGTRApZ3NC.webp";
const QUALITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663607109789/48YXxtoXbaoufcubufBDmH/factory-quality-mNzDztzAPVnFRBmd4Grbas.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663607109789/48YXxtoXbaoufcubufBDmH/hero-factory-8LxGMpDRD3qc3Kz7e7xbAt.webp";

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

const certifications = [
  { name: "ISO 9001:2015", desc: "Quality Management System", icon: "🏆" },
  { name: "SGS Certified", desc: "International Inspection", icon: "✅" },
  { name: "CE Marking", desc: "European Conformity", icon: "🇪🇺" },
  { name: "RoHS Compliant", desc: "Hazardous Substances Free", icon: "🌿" },
];

const capabilities = [
  "CNC precision grinding machines",
  "Automatic assembly lines",
  "Precision testing equipment",
  "CMM coordinate measuring",
  "Noise & vibration testing",
  "Salt spray corrosion testing",
  "Hardness testing",
  "Dimensional inspection",
];

const timeline = [
  { year: "2009", event: "FULI Machinery founded in Yandian Town, Liaocheng, Shandong" },
  { year: "2012", event: "Obtained ISO 9001 quality management certification" },
  { year: "2015", event: "Expanded production capacity to 500,000 units/month" },
  { year: "2018", event: "Entered Middle East and Southeast Asian markets" },
  { year: "2021", event: "Launched OEM/ODM custom bearing program" },
  { year: "2024", event: "Serving 50+ countries with 2,000+ product models" },
];

export default function About() {
  const { ref: statsRef, inView: statsInView } = useInView();
  const years = useCountUp(15, 1800, statsInView);
  const models = useCountUp(2000, 2000, statsInView);
  const countries = useCountUp(50, 1600, statsInView);
  const monthly = useCountUp(500, 2200, statsInView);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={FACTORY_IMG} alt="FULI Factory" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "oklch(0.18 0.10 255 / 0.85)" }} />
        </div>
        <div className="container relative z-10">
          <div className="flex items-center gap-2 mb-3 text-white/50 text-sm"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <Link href="/"><span className="hover:text-white transition-colors cursor-pointer">Home</span></Link>
            <ChevronRight size={14} />
            <span className="text-white">About Us</span>
          </div>
          <div className="fuli-section-label mb-2" style={{ color: "oklch(0.80 0.18 45)" }}>
            Our Story
          </div>
          <h1 className="fuli-heading text-white mb-4" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
            About FULI Machinery
          </h1>
          <p className="text-white/65 text-base max-w-2xl leading-relaxed">
            Founded in 2009 in Shandong Province, China, FULI Machinery has grown from a regional bearing supplier into a globally recognized manufacturer trusted by distributors and OEMs across 50+ countries.
          </p>
        </div>
      </section>

      {/* Stats */}
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
                <div className="fuli-stat-number" style={{ color: "oklch(0.80 0.18 45)" }}>
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

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="fuli-section-label mb-2">Who We Are</div>
              <h2 className="fuli-heading text-4xl lg:text-5xl text-gray-900 mb-6">
                Professional Bearing Manufacturer
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  FULI Machinery (Shandong) Limited Company is a professional bearing manufacturer with complete production lines and a strong R&D team. We specialize in deep groove ball bearings, tapered roller bearings, spherical roller bearings, and pillow block bearing units.
                </p>
                <p>
                  We accept customers' special requirements for bearing structure and quality, and produce corresponding bearing products according to various customers' diversified demands. FULI brand focuses on high-end products. With its stable quality, our bearings are sold worldwide and widely used in food machinery, agricultural machinery, mining machinery, automobiles, motorcycles and electric vehicles.
                </p>
                <p>
                  Our factory is equipped with advanced CNC grinding machines, automatic assembly lines, and precision testing equipment. Every bearing undergoes rigorous quality inspection before shipment.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={QUALITY_IMG} alt="Quality Control" className="rounded-xl shadow-xl w-full object-cover" style={{ height: "400px" }} />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-xl p-4 border border-gray-100">
                <div className="text-3xl font-black text-gray-900 leading-none mb-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "oklch(0.33 0.12 255)" }}>
                  15+
                </div>
                <div className="text-gray-500 text-xs">Years of Manufacturing<br />Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16" style={{ background: "oklch(0.97 0.005 255)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ background: "oklch(0.33 0.12 255 / 0.08)" }}>
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="fuli-heading text-2xl text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class bearing solutions that enable our customers' success through quality, innovation, and reliable service. We are committed to delivering precision-engineered products that exceed international standards.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ background: "oklch(0.65 0.20 45 / 0.08)" }}>
                <span className="text-2xl">🔭</span>
              </div>
              <h3 className="fuli-heading text-2xl text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become a globally recognized bearing brand known for precision, durability, and customer satisfaction. We aim to be the preferred bearing partner for distributors and OEMs in every major market worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Factory & Equipment */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="fuli-section-label mb-2">Production Facility</div>
              <h2 className="fuli-heading text-4xl lg:text-5xl text-gray-900 mb-6">
                Factory & Equipment
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our modern manufacturing facility in Yandian Town, Liaocheng City, Shandong Province is equipped with state-of-the-art machinery and testing equipment to ensure every bearing meets the highest quality standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 size={15} style={{ color: "oklch(0.65 0.20 45)", flexShrink: 0 }} />
                    {cap}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={HERO_IMG} alt="FULI Factory Floor" className="rounded-xl shadow-xl w-full object-cover" style={{ height: "400px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16" style={{ background: "oklch(0.97 0.005 255)" }}>
        <div className="container">
          <div className="text-center mb-10">
            <div className="fuli-section-label mb-2">Quality Assurance</div>
            <h2 className="fuli-heading text-4xl text-gray-900">Certifications</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h4 className="font-bold text-gray-900 mb-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.05rem" }}>
                  {cert.name}
                </h4>
                <p className="text-gray-500 text-xs">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="fuli-section-label mb-2">Our Journey</div>
            <h2 className="fuli-heading text-4xl text-gray-900">Company Milestones</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-16 top-0 bottom-0 w-px" style={{ background: "oklch(0.90 0.01 255)" }} />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div key={item.year} className="flex items-start gap-8">
                    <div className="w-16 shrink-0 text-right">
                      <span className="font-bold text-sm"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "oklch(0.65 0.20 45)" }}>
                        {item.year}
                      </span>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full border-2 bg-white"
                        style={{ borderColor: i === timeline.length - 1 ? "oklch(0.65 0.20 45)" : "oklch(0.33 0.12 255)" }} />
                      <div className="pl-5 pb-2">
                        <p className="text-gray-700 text-sm leading-relaxed">{item.event}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "oklch(0.22 0.10 255)" }}>
        <div className="container text-center">
          <h2 className="fuli-heading text-white text-3xl mb-3">Ready to Partner with FULI?</h2>
          <p className="text-white/60 text-base mb-7">Contact us today for a factory tour or product samples.</p>
          <Link href="/contact">
            <span className="fuli-btn-primary text-base px-10 py-4">
              Contact Us <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
