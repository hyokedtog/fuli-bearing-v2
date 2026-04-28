/**
 * FULI Brand Intro Splash
 * — Shows only on first visit (localStorage flag)
 * — Full-screen black, FULI letters stagger in, then fade out
 * — Design: SKF-inspired luxury industrial brand reveal
 */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "fuli_intro_seen";

interface IntroSplashProps {
  onComplete: () => void;
}

export default function IntroSplash({ onComplete }: IntroSplashProps) {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      setVisible(true);
      // Phase 1: letters appear (0–1.2s)
      // Phase 2: hold (1.2–2.2s)
      // Phase 3: exit (2.2–3.0s)
      const exitTimer = setTimeout(() => setExiting(true), 2200);
      const doneTimer = setTimeout(() => {
        localStorage.setItem(STORAGE_KEY, "1");
        setVisible(false);
        onComplete();
      }, 3100);
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(doneTimer);
      };
    } else {
      onComplete();
    }
  }, [onComplete]);

  if (!visible) return null;

  const letters = ["F", "U", "L", "I"];

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "oklch(0.06 0.004 260)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {/* Thin top rule — animates in */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: "2.5rem",
              height: "1px",
              background: "oklch(0.65 0.22 45)",
              transformOrigin: "left center",
              marginBottom: "0.5rem",
            }}
          />

          {/* FULI letters */}
          <div
            style={{
              display: "flex",
              gap: "0.08em",
              fontFamily: "'Bebas Neue', 'Barlow Condensed', sans-serif",
              fontSize: "clamp(5rem, 15vw, 11rem)",
              fontWeight: 400,
              letterSpacing: "0.08em",
              color: "oklch(0.95 0.002 260)",
              lineHeight: 1,
            }}
          >
            {letters.map((letter, i) => (
              <motion.span
                key={letter}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.3 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* MACHINERY subtitle */}
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 0.45, letterSpacing: "0.35em" }}
            transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              color: "oklch(0.93 0.003 260)",
              textTransform: "uppercase",
            }}
          >
            MACHINERY
          </motion.div>

          {/* Bottom rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: "2.5rem",
              height: "1px",
              background: "oklch(0.65 0.22 45)",
              transformOrigin: "right center",
              marginTop: "0.5rem",
            }}
          />

          {/* Shandong origin line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "0.62rem",
              fontWeight: 400,
              color: "oklch(0.93 0.003 260)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginTop: "0.25rem",
            }}
          >
            Shandong, China · Est. 2009
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
