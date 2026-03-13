"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const circumference = 2 * Math.PI * 22; // r=22
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [circumference, 0]
  );

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="回到頂部"
          className="fixed bottom-6 left-6 z-[90] group cursor-pointer"
          initial={{ opacity: 0, scale: 0, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Outer pulsing glow ring — persistent bounce */}
          <motion.div
            className="absolute -inset-2 rounded-full bg-gradient-to-br from-red-500 to-amber-500 opacity-30 blur-lg"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Secondary pulse ring */}
          <motion.div
            className="absolute -inset-1 rounded-full border-2 border-red-400/40"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.3,
            }}
          />

          {/* Main circle */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red-600 via-red-500 to-amber-500 shadow-xl shadow-red-500/40">
            {/* SVG progress ring */}
            <svg
              className="absolute inset-0 -rotate-90"
              width="56"
              height="56"
              viewBox="0 0 56 56"
            >
              <circle
                cx="28"
                cy="28"
                r="22"
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="2.5"
              />
              <motion.circle
                cx="28"
                cy="28"
                r="22"
                fill="none"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={circumference}
                style={{ strokeDashoffset }}
              />
            </svg>

            {/* Arrow — bouncing up-down */}
            <motion.svg
              className="h-6 w-6 text-white drop-shadow-md"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 15l7-7 7 7"
              />
            </motion.svg>
          </div>

          {/* Hover tooltip — appears to the right */}
          <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900/90 px-3 py-1.5 text-xs font-medium text-white shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm">
            回到頂部
            <span className="absolute -left-1 top-1/2 -translate-y-1/2 h-2 w-2 rotate-45 bg-gray-900/90" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
