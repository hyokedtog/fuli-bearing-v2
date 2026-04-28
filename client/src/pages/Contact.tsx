/**
 * FULI Machinery - Contact Page
 * Design: Modern B2B Professional
 * Key improvements: better form UX, WhatsApp prominent, contact info cards
 */
import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Phone, Mail, MapPin, Clock, MessageCircle, ChevronRight, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    primary: "+86 186 0631 1628",
    secondary: "+86 178 6111 6848",
    action: "https://wa.me/8618606311628",
    actionLabel: "Chat Now",
    color: "#25D366",
  },
  {
    icon: Phone,
    title: "Phone",
    primary: "+86 635 5312 885",
    secondary: "Mon–Sat 8:00–18:00 GMT+8",
    action: "tel:+8663553128885",
    actionLabel: "Call Us",
    color: "oklch(0.33 0.12 255)",
  },
  {
    icon: Mail,
    title: "Email",
    primary: "fulibearing@163.com",
    secondary: "fulimachinery@foxmail.com",
    action: "mailto:fulibearing@163.com",
    actionLabel: "Send Email",
    color: "oklch(0.65 0.20 45)",
  },
  {
    icon: MapPin,
    title: "Address",
    primary: "Yandian Town, Liaocheng City",
    secondary: "Shandong Province, China",
    action: "https://maps.google.com/?q=Liaocheng,Shandong,China",
    actionLabel: "View Map",
    color: "oklch(0.55 0.18 145)",
  },
];

const productOptions = [
  "Deep Groove Ball Bearings",
  "Tapered Roller Bearings",
  "Spherical Roller Bearings",
  "Pillow Block Bearings",
  "Multiple Products",
  "Custom / OEM",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend or email service
    // For now, open mailto as fallback
    const subject = encodeURIComponent(`Bearing Inquiry from ${form.name} - ${form.company}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nPhone: ${form.phone}\nProduct Interest: ${form.product}\nQuantity: ${form.quantity}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:fulibearing@163.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
    toast.success("Inquiry sent! We will respond within 24 hours.");
  };

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
            <span className="text-white">Contact</span>
          </div>
          <div className="fuli-section-label mb-2" style={{ color: "oklch(0.80 0.18 45)" }}>
            Get In Touch
          </div>
          <h1 className="fuli-heading text-white mb-3" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
            Request a Quote
          </h1>
          <p className="text-white/60 text-base max-w-xl">
            Send us your requirements and receive a competitive quote within 24 hours. Our export team handles all documentation.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-10 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: `${info.color}15` }}>
                  <info.icon size={18} style={{ color: info.color }} />
                </div>
                <h4 className="font-bold text-gray-900 mb-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}>
                  {info.title}
                </h4>
                <p className="text-gray-700 text-sm font-medium">{info.primary}</p>
                <p className="text-gray-400 text-xs mb-3">{info.secondary}</p>
                <a href={info.action} target={info.action.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-xs font-bold flex items-center gap-1 transition-colors hover:opacity-80"
                  style={{ color: info.color, fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}>
                  {info.actionLabel} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="fuli-heading text-3xl text-gray-900 mb-6">Send an Inquiry</h2>

              {submitted ? (
                <div className="rounded-xl p-10 text-center border border-green-100 bg-green-50">
                  <CheckCircle2 size={48} className="mx-auto mb-4" style={{ color: "#22c55e" }} />
                  <h3 className="fuli-heading text-2xl text-gray-900 mb-2">Inquiry Sent!</h3>
                  <p className="text-gray-600 text-sm mb-5">
                    Thank you for your inquiry. Our team will respond within 24 hours.
                  </p>
                  <p className="text-gray-500 text-xs">
                    For urgent inquiries, please contact us via WhatsApp: +86 186 0631 1628
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                        style={{ focusRingColor: "oklch(0.33 0.12 255)" } as React.CSSProperties}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        Phone / WhatsApp
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        Product Interest
                      </label>
                      <select
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select product type...</option>
                        {productOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 1000 pcs / 1 container"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      Message / Requirements
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Please describe your requirements: bearing model numbers, specifications, application, delivery terms, etc."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                  <button type="submit" className="fuli-btn-primary text-base px-10 py-4 w-full sm:w-auto justify-center">
                    <Send size={16} />
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* WhatsApp CTA */}
              <div className="rounded-xl p-6 text-white" style={{ background: "#25D366" }}>
                <div className="flex items-center gap-3 mb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <h4 className="font-bold text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    Prefer WhatsApp?
                  </h4>
                </div>
                <p className="text-white/85 text-sm mb-4 leading-relaxed">
                  Get a faster response by messaging us directly on WhatsApp. Our team responds within 1–2 hours during business hours.
                </p>
                <a href="https://wa.me/8618606311628?text=Hello%2C%20I%20am%20interested%20in%20your%20bearings."
                  target="_blank" rel="noopener noreferrer"
                  className="block w-full text-center py-3 rounded-lg bg-white text-green-600 font-bold text-sm transition-opacity hover:opacity-90"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}>
                  Open WhatsApp Chat →
                </a>
              </div>

              {/* Working Hours */}
              <div className="rounded-xl p-6 border border-gray-100 bg-gray-50">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={18} style={{ color: "oklch(0.33 0.12 255)" }} />
                  <h4 className="font-bold text-gray-900"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}>
                    Working Hours
                  </h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday – Saturday</span>
                    <span className="font-semibold text-gray-900">8:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <span className="text-gray-400 text-xs">All times in GMT+8 (China Standard Time)</span>
                  </div>
                </div>
              </div>

              {/* Why inquire */}
              <div className="rounded-xl p-6 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}>
                  What to Expect
                </h4>
                <ul className="space-y-3">
                  {[
                    "Quote within 24 hours",
                    "Free samples available",
                    "Full export documentation",
                    "Dedicated export manager",
                    "FOB / CIF / EXW terms",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 size={14} style={{ color: "oklch(0.65 0.20 45)", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
