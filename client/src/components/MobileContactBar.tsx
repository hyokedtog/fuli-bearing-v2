/**
 * FULI Bearing — Mobile Bottom Contact Bar
 * Design: Fixed bottom bar visible only on mobile (< lg)
 * 4 actions: WhatsApp | Phone | Email | Inquiry
 * Inspired by WXING's mobile UX pattern
 */

const waUrl = "https://wa.me/8615263521305?text=Hello%2C%20I%20am%20interested%20in%20your%20bearings.%20Please%20send%20me%20a%20price%20list.";
const phoneUrl = "tel:+8615263521305";
const emailUrl = "mailto:sales@fulibearing.com";
const inquiryUrl = "/contact";

const actions = [
  {
    label: "WhatsApp",
    href: waUrl,
    target: "_blank",
    color: "#25D366",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: "Phone",
    href: phoneUrl,
    target: "_self",
    color: "#4A9EFF",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
      </svg>
    ),
  },
  {
    label: "E-Mail",
    href: emailUrl,
    target: "_self",
    color: "#FF8C42",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: "Inquiry",
    href: inquiryUrl,
    target: "_self",
    color: "oklch(0.65 0.22 45)",
    isInternal: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
];

export default function MobileContactBar() {
  return (
    <>
      <style>{`
        .mobile-contact-bar {
          display: none;
        }
        @media (max-width: 1023px) {
          .mobile-contact-bar {
            display: flex;
          }
          /* Add bottom padding to page so content isn't hidden behind bar */
          body {
            padding-bottom: 4rem;
          }
        }
      `}</style>

      <div
        className="mobile-contact-bar"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9000,
          background: "oklch(0.10 0.012 255)",
          borderTop: "1px solid oklch(0.22 0.015 255)",
          height: "3.75rem",
          alignItems: "stretch",
          boxShadow: "0 -4px 20px oklch(0 0 0 / 0.30)",
        }}
      >
        {actions.map((action) =>
          action.isInternal ? (
            <a
              key={action.label}
              href={action.href}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.2rem",
                textDecoration: "none",
                color: action.color,
                background: "oklch(0.65 0.22 45)",
                transition: "opacity 0.15s",
              }}
              onTouchStart={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.8"; }}
              onTouchEnd={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >
              <span style={{ color: "oklch(0.10 0.008 260)" }}>{action.icon}</span>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.58rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "oklch(0.10 0.008 260)",
              }}>{action.label}</span>
            </a>
          ) : (
            <a
              key={action.label}
              href={action.href}
              target={action.target}
              rel={action.target === "_blank" ? "noopener noreferrer" : undefined}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.2rem",
                textDecoration: "none",
                color: action.color,
                borderRight: "1px solid oklch(0.22 0.015 255)",
                transition: "background 0.15s",
              }}
              onTouchStart={(e) => { (e.currentTarget as HTMLElement).style.background = "oklch(0.16 0.015 255)"; }}
              onTouchEnd={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              {action.icon}
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.58rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "oklch(0.65 0.008 260)",
              }}>{action.label}</span>
            </a>
          )
        )}
      </div>
    </>
  );
}
