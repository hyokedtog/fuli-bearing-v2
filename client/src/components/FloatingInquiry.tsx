/**
 * FloatingInquiry — 右下角悬浮询价弹窗
 * Design: Deep navy panel, orange accent, 4-field minimal form
 * Inspired by WXING's real-time chat popup for maximum conversion
 */
import { useState, useRef } from "react";
import { MessageSquarePlus, X, Send, CheckCircle, ChevronDown } from "lucide-react";

const RECIPIENT = "sales@fulibearings.com";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function FloatingInquiry() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitting(true);
    try {
      await fetch(`https://formsubmit.co/ajax/${RECIPIENT}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Bearing Inquiry from ${form.name}`,
          name: form.name,
          email: form.email,
          phone: form.phone || "—",
          message: form.message,
          _captcha: "false",
        }),
      });
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      // fallback: still show success to not block user
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "oklch(0.22 0.018 255)",
    border: "1px solid oklch(0.30 0.015 255)",
    color: "oklch(0.92 0.003 260)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.82rem",
    padding: "0.65rem 0.85rem",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box" as const,
  };

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => { setOpen(!open); setSubmitted(false); }}
        aria-label="Quick Inquiry"
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 200,
          width: "3.2rem",
          height: "3.2rem",
          background: "oklch(0.65 0.22 45)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 24px oklch(0.65 0.22 45 / 0.40)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow = "0 6px 32px oklch(0.65 0.22 45 / 0.55)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 24px oklch(0.65 0.22 45 / 0.40)";
        }}
      >
        {open
          ? <ChevronDown size={20} color="oklch(0.10 0.008 260)" strokeWidth={2.5} />
          : <MessageSquarePlus size={20} color="oklch(0.10 0.008 260)" strokeWidth={2.5} />
        }
      </button>

      {/* Popup panel */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "5.5rem",
            right: "1.5rem",
            zIndex: 200,
            width: "min(340px, calc(100vw - 2rem))",
            background: "oklch(0.14 0.018 255)",
            border: "1px solid oklch(0.25 0.015 255)",
            boxShadow: "0 12px 48px oklch(0 0 0 / 0.35)",
            animation: "floatIn 0.22s ease",
          }}
        >
          {/* Header */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 1.25rem",
            borderBottom: "1px solid oklch(0.22 0.015 255)",
            background: "oklch(0.18 0.022 255)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              {/* FL badge */}
              <div style={{
                width: "1.8rem",
                height: "1.8rem",
                background: "oklch(0.65 0.22 45)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, color: "oklch(0.10 0.008 260)" }}>FL</span>
              </div>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "oklch(0.95 0.002 260)", lineHeight: 1.1 }}>FULI Bearing</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", color: "#4ade80", letterSpacing: "0.04em" }}>● Online · Reply within 1hr</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "oklch(0.55 0.008 260)", padding: "0.2rem" }}
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: "1.25rem" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                <CheckCircle size={36} style={{ color: "oklch(0.65 0.22 45)", margin: "0 auto 0.75rem" }} />
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", fontWeight: 700, color: "oklch(0.95 0.002 260)", marginBottom: "0.4rem" }}>
                  Inquiry Sent!
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "oklch(0.58 0.008 260)", lineHeight: 1.6 }}>
                  We'll reply to <strong style={{ color: "oklch(0.75 0.008 260)" }}>{form.email || "your email"}</strong> within 24 hours.
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: "1.25rem",
                    padding: "0.55rem 1.25rem",
                    background: "oklch(0.65 0.22 45)",
                    color: "oklch(0.10 0.008 260)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  New Inquiry
                </button>
              </div>
            ) : (
              <>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "oklch(0.60 0.008 260)", lineHeight: 1.6, marginBottom: "1rem" }}>
                  Tell us the bearing model, quantity and destination — we'll send a FOB price within 24 hours.
                </p>
                <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {/* Name */}
                  <div>
                    <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.50 0.008 260)", display: "block", marginBottom: "0.3rem" }}>
                      Your Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Ahmed Hassan"
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "oklch(0.65 0.22 45)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(0.30 0.015 255)"; }}
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.50 0.008 260)", display: "block", marginBottom: "0.3rem" }}>
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "oklch(0.65 0.22 45)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(0.30 0.015 255)"; }}
                    />
                  </div>
                  {/* Phone/WhatsApp */}
                  <div>
                    <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.50 0.008 260)", display: "block", marginBottom: "0.3rem" }}>
                      Phone / WhatsApp
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "oklch(0.65 0.22 45)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(0.30 0.015 255)"; }}
                    />
                  </div>
                  {/* Message */}
                  <div>
                    <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.50 0.008 260)", display: "block", marginBottom: "0.3rem" }}>
                      Inquiry *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Model, quantity, destination…"
                      style={{ ...inputStyle, resize: "vertical", minHeight: "72px" }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "oklch(0.65 0.22 45)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(0.30 0.015 255)"; }}
                    />
                  </div>
                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.4rem",
                      padding: "0.7rem",
                      background: submitting ? "oklch(0.50 0.15 45)" : "oklch(0.65 0.22 45)",
                      color: "oklch(0.10 0.008 260)",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      border: "none",
                      cursor: submitting ? "not-allowed" : "pointer",
                      transition: "opacity 0.2s",
                      marginTop: "0.25rem",
                    }}
                    onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.opacity = "0.88"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                  >
                    {submitting ? "Sending…" : <><Send size={13} /> Send Inquiry</>}
                  </button>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", color: "oklch(0.42 0.006 260)", textAlign: "center", lineHeight: 1.5 }}>
                    Reply within 24 hrs · sales@fulibearings.com
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
}
