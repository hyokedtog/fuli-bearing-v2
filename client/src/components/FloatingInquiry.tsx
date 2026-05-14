/**
 * FULI Bearing — Floating WhatsApp Button
 * Design: WhatsApp green (#25D366) floating circle with pulsing breath animation
 * Click: Direct link to WhatsApp chat with pre-filled message
 */
import { useState, useEffect } from "react";

export default function FloatingInquiry() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Delay appearance by 1.5s after page load
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const waUrl =
    "https://wa.me/8615263521305?text=Hello%2C%20I%20am%20interested%20in%20your%20bearings.%20Please%20send%20me%20a%20price%20list.";

  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1);    box-shadow: 0 0 0 0   rgba(37,211,102,0.60); }
          60%  { transform: scale(1.05); box-shadow: 0 0 0 16px rgba(37,211,102,0); }
          100% { transform: scale(1);    box-shadow: 0 0 0 0   rgba(37,211,102,0); }
        }
        @keyframes wa-ring {
          0%   { transform: scale(1);   opacity: 0.65; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes wa-fadein {
          from { opacity: 0; transform: translateY(14px) scale(0.82); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @keyframes wa-tooltip-in {
          from { opacity: 0; transform: translateX(10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {visible && (
        <div
          className="hidden lg:block"
          style={{
            position: "fixed",
            bottom: "1.75rem",
            right: "1.75rem",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            animation: "wa-fadein 0.5s cubic-bezier(0.34,1.56,0.64,1) both",
          }}
        >
          {/* Tooltip — shown on hover */}
          {hovered && (
            <div
              style={{
                background: "oklch(0.12 0.016 255)",
                color: "oklch(0.95 0.002 260)",
                fontFamily: "'DM Sans', sans-serif",
                padding: "0.6rem 1rem",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 24px rgba(0,0,0,0.30)",
                borderLeft: "3px solid #25D366",
                animation: "wa-tooltip-in 0.2s ease both",
              }}
            >
              <div style={{
                fontSize: "0.58rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#25D366",
                marginBottom: "0.2rem",
              }}>
                ● Online · Reply within 1hr
              </div>
              <div style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.04em" }}>
                Chat on WhatsApp
              </div>
            </div>
          )}

          {/* Button + pulse rings wrapper */}
          <div style={{ position: "relative", width: "3.6rem", height: "3.6rem" }}>
            {/* Outer ring */}
            <span style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: "rgba(37,211,102,0.30)",
              animation: "wa-ring 2s ease-out infinite",
              pointerEvents: "none",
            }} />
            {/* Inner ring (offset phase) */}
            <span style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: "rgba(37,211,102,0.18)",
              animation: "wa-ring 2s ease-out 0.7s infinite",
              pointerEvents: "none",
            }} />

            {/* Main button */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: hovered ? "#1db954" : "#25D366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                boxShadow: hovered
                  ? "0 6px 32px rgba(37,211,102,0.60)"
                  : "0 4px 20px rgba(37,211,102,0.45)",
                animation: hovered ? "none" : "wa-pulse 2.2s ease-in-out infinite",
                transition: "background 0.2s, box-shadow 0.2s",
              }}
            >
              {/* WhatsApp logo SVG */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
