"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  // SVG circle progress ring
  const circumference = 2 * Math.PI * 20; // r=20
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
          className="fixed bottom-6 right-6 z-[90] group"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulsing glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-red-600 opacity-40 blur-md animate-pulse" />

          {/* Main circle */}
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-500 shadow-lg shadow-red-500/30">
            {/* SVG progress ring */}
            <svg
              className="absolute inset-0 -rotate-90"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              {/* Track */}
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="2.5"
              />
              {/* Progress */}
              <motion.circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={circumference}
                style={{ strokeDashoffset }}
              />
            </svg>

            {/* Arrow icon — bouncing */}
            <motion.svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ y: [0, -2, 0] }}
              transition={{
                duration: 1.5,
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

          {/* Hover tooltip */}
          <motion.span
            className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            回到頂部
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-gray-900" />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
