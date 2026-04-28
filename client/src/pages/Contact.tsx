/**
 * FULI Machinery — Contact Page
 * Design: SKF-inspired industrial dark
 */
import { useState } from "react";
import { Link } from "wouter";
import { ChevronRight, Phone, Mail, MapPin, MessageCircle, Clock, ArrowRight } from "lucide-react";

const contacts = [
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    value: "+86 186 0631 1628",
    sub: "Fastest response — typically within 1 hour",
    href: "https://wa.me/8618606311628?text=Hello%2C%20I%20am%20interested%20in%20your%20bearings.",
    color: "#25D366",
    cta: "Chat Now",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+86 152 6352 1305",
    sub: "Mon–Sat, 8:00 AM – 6:00 PM GMT+8",
    href: "tel:+8615263521305",
    color: "oklch(0.65 0.22 45)",
    cta: "Call Us",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "fulibearing@163.com",
    sub: "Response within 24 hours on business days",
    href: "mailto:fulibearing@163.com",
    color: "oklch(0.60 0.18 200)",
    cta: "Send Email",
  },
  {
    Icon: MapPin,
    label: "Address",
    value: "Yandian Town, Liaocheng, Shandong",
    sub: "Factory visits welcome by appointment",
    href: "https://maps.google.com/?q=Liaocheng+Shandong+China",
    color: "oklch(0.55 0.18 145)",
    cta: "View Map",
  },
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
};

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
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.62rem",
  fontWeight: 700,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "oklch(0.45 0.008 260)",
  display: "block",
  marginBottom: "0.4rem",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Bearing Inquiry from ${form.company || form.name}`;
    const body = `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nProduct: ${form.product}\nQuantity: ${form.quantity}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:fulibearing@163.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

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
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "oklch(0.65 0.22 45)" }}>Contact</span>
          </div>
          <div className="fuli-label" style={{ marginBottom: "1rem" }}>Get in Touch</div>
          <h1 className="fuli-display" style={{ fontSize: "clamp(3rem, 7vw, 7rem)", color: "oklch(0.95 0.002 260)", marginBottom: "1.25rem" }}>
            Contact Us
          </h1>
          <p style={{ color: "oklch(0.48 0.008 260)", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: "52ch" }}>
            Send us your requirements and receive a competitive quote within 24 hours. Our team speaks English, Arabic, and Russian.
          </p>
        </div>
      </section>

      {/* Contact channels */}
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1px", background: "oklch(1 0 0 / 0.06)", marginBottom: "5rem" }} className="sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  background: "oklch(0.10 0.006 260)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "oklch(0.14 0.008 260)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "oklch(0.10 0.006 260)"; }}
              >
                <c.Icon size={20} style={{ color: c.color }} />
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "oklch(0.40 0.006 260)", marginBottom: "0.3rem" }}>
                    {c.label}
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 700, color: "oklch(0.88 0.003 260)", marginBottom: "0.3rem" }}>
                    {c.value}
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.40 0.008 260)", lineHeight: 1.5 }}>
                    {c.sub}
                  </div>
                </div>
                <div style={{
                  marginTop: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase" as const,
                  color: c.color,
                }}>
                  {c.cta} <ArrowRight size={11} />
                </div>
              </a>
            ))}
          </div>

          {/* Quote form + side info */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }} className="lg:grid-cols-[1fr_380px]">

            {/* Form */}
            <div>
              <div className="fuli-label" style={{ marginBottom: "1rem" }}>Inquiry Form</div>
              <h2 className="fuli-display" style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)", color: "oklch(0.95 0.002 260)", marginBottom: "2rem" }}>
                Request a Quote
              </h2>

              {submitted ? (
                <div style={{
                  background: "oklch(0.10 0.006 260)",
                  border: "1px solid oklch(0.65 0.22 45 / 0.3)",
                  padding: "3rem",
                  textAlign: "center",
                }}>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "2rem", color: "oklch(0.65 0.22 45)", marginBottom: "0.75rem" }}>
                    Inquiry Sent
                  </div>
                  <p style={{ color: "oklch(0.50 0.008 260)", fontSize: "0.85rem", lineHeight: 1.7 }}>
                    Your email client has opened with the inquiry. We will respond within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} style={{ marginTop: "1.5rem", background: "none", border: "none", cursor: "pointer" }}>
                    <span className="fuli-cta-ghost">Send Another</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="sm:grid-cols-2">
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        style={inputStyle}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "oklch(0.65 0.22 45 / 0.6)"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.10)"; }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Company</label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="ACME Industries"
                        style={inputStyle}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "oklch(0.65 0.22 45 / 0.6)"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.10)"; }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="sm:grid-cols-2">
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        style={inputStyle}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "oklch(0.65 0.22 45 / 0.6)"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.10)"; }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>WhatsApp / Phone</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 555 000 0000"
                        style={inputStyle}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "oklch(0.65 0.22 45 / 0.6)"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.10)"; }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="sm:grid-cols-2">
                    <div>
                      <label style={labelStyle}>Product / Bearing Type</label>
                      <select
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        style={{ ...inputStyle, appearance: "none" as const }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "oklch(0.65 0.22 45 / 0.6)"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.10)"; }}
                      >
                        <option value="">Select type...</option>
                        <option value="DGB">Deep Groove Ball Bearings</option>
                        <option value="TRB">Tapered Roller Bearings</option>
                        <option value="SRB">Spherical Roller Bearings</option>
                        <option value="PBU">Pillow Block Bearings</option>
                        <option value="Custom">Custom / Non-standard</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Estimated Quantity</label>
                      <input
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 500 pcs / month"
                        style={inputStyle}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "oklch(0.65 0.22 45 / 0.6)"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.10)"; }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Message / Specifications</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Please describe your requirements: bearing model numbers, dimensions, load conditions, quantity, destination country..."
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "oklch(0.65 0.22 45 / 0.6)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.10)"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      alignSelf: "flex-start",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      padding: "0.85rem 2rem",
                      background: "oklch(0.65 0.22 45)",
                      color: "oklch(0.10 0.006 260)",
                      border: "none",
                      cursor: "pointer",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "oklch(0.72 0.22 45)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "oklch(0.65 0.22 45)"; }}
                  >
                    Send Inquiry <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* Side info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              {/* Business hours */}
              <div style={{ background: "oklch(0.10 0.006 260)", padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
                  <Clock size={14} style={{ color: "oklch(0.65 0.22 45)" }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "oklch(0.45 0.008 260)" }}>
                    Business Hours
                  </span>
                </div>
                {[
                  { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
                  { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map((row) => (
                  <div key={row.day} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid oklch(1 0 0 / 0.05)" }}>
                    <span style={{ color: "oklch(0.50 0.008 260)", fontSize: "0.78rem" }}>{row.day}</span>
                    <span style={{ color: row.hours === "Closed" ? "oklch(0.38 0.006 260)" : "oklch(0.70 0.003 260)", fontSize: "0.78rem", fontWeight: 600 }}>{row.hours}</span>
                  </div>
                ))}
                <div style={{ marginTop: "1rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", color: "oklch(0.38 0.006 260)" }}>
                  All times GMT+8 (China Standard Time)
                </div>
              </div>

              {/* WhatsApp highlight */}
              <a
                href="https://wa.me/8618606311628"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "oklch(0.10 0.006 260)",
                  padding: "2rem",
                  textDecoration: "none",
                  display: "block",
                  borderLeft: "3px solid #25D366",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "oklch(0.14 0.008 260)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "oklch(0.10 0.006 260)"; }}
              >
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#25D366", marginBottom: "0.6rem" }}>
                  Fastest Response
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.3rem", letterSpacing: "0.08em", color: "oklch(0.90 0.003 260)", marginBottom: "0.4rem" }}>
                  WhatsApp Us
                </div>
                <div style={{ color: "oklch(0.48 0.008 260)", fontSize: "0.78rem", lineHeight: 1.5 }}>
                  +86 186 0631 1628<br />
                  Typically responds within 1 hour
                </div>
              </a>

              {/* Languages */}
              <div style={{ background: "oklch(0.10 0.006 260)", padding: "2rem" }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "oklch(0.45 0.008 260)", marginBottom: "1rem" }}>
                  Languages Supported
                </div>
                {[
                  { flag: "🇬🇧", lang: "English" },
                  { flag: "🇸🇦", lang: "Arabic" },
                  { flag: "🇷🇺", lang: "Russian" },
                  { flag: "🇨🇳", lang: "Chinese" },
                ].map((l) => (
                  <div key={l.lang} style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.4rem 0" }}>
                    <span style={{ fontSize: "1rem" }}>{l.flag}</span>
                    <span style={{ color: "oklch(0.55 0.008 260)", fontSize: "0.8rem" }}>{l.lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
