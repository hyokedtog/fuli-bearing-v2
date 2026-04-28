/**
 * FULI Machinery Footer
 * Design: Modern B2B Professional - Deep Blue background
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "oklch(0.18 0.08 255)" }} className="text-white">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-sm flex items-center justify-center"
                style={{ background: "oklch(0.65 0.20 45)" }}>
                <span className="text-white font-bold text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}>FL</span>
              </div>
              <div>
                <div className="font-bold text-lg leading-none text-white"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}>
                  FULI
                </div>
                <div className="text-xs leading-none text-white/50"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.15em" }}>
                  MACHINERY
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Professional bearing manufacturer with 15+ years of experience. ISO 9001 certified, serving 50+ countries worldwide.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2 py-1 rounded"
                style={{ background: "oklch(0.65 0.20 45 / 0.2)", color: "oklch(0.85 0.15 45)", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}>
                ISO 9001
              </span>
              <span className="text-xs font-semibold px-2 py-1 rounded"
                style={{ background: "oklch(0.65 0.20 45 / 0.2)", color: "oklch(0.85 0.15 45)", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}>
                FACTORY DIRECT
              </span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Products
            </h4>
            <ul className="space-y-2.5">
              {[
                "Deep Groove Ball Bearings",
                "Tapered Roller Bearings",
                "Spherical Roller Bearings",
                "Pillow Block Bearings",
              ].map((item) => (
                <li key={item}>
                  <Link href="/products">
                    <span className="text-white/55 text-sm hover:text-orange-400 transition-colors cursor-pointer">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Factory", href: "/about" },
                { label: "Certifications", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Request Quote", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span className="text-white/55 text-sm hover:text-orange-400 transition-colors cursor-pointer">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/8618606311628" className="flex items-start gap-2.5 text-white/55 hover:text-green-400 transition-colors text-sm">
                  <MessageCircle size={15} className="mt-0.5 shrink-0" />
                  <span>WhatsApp: +86 186 0631 1628</span>
                </a>
              </li>
              <li>
                <a href="tel:+8663553128885" className="flex items-start gap-2.5 text-white/55 hover:text-white transition-colors text-sm">
                  <Phone size={15} className="mt-0.5 shrink-0" />
                  <span>+86 635 5312 885</span>
                </a>
              </li>
              <li>
                <a href="mailto:fulibearing@163.com" className="flex items-start gap-2.5 text-white/55 hover:text-white transition-colors text-sm">
                  <Mail size={15} className="mt-0.5 shrink-0" />
                  <span>fulibearing@163.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-white/55 text-sm">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>Yandian Town, Liaocheng City,<br />Shandong Province, China</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid oklch(1 0 0 / 0.08)" }}>
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © 2026 FULI Machinery (Shandong) Limited Company. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Working Hours: Mon–Sat 8:00 AM – 6:00 PM (GMT+8)
          </p>
        </div>
      </div>
    </footer>
  );
}
