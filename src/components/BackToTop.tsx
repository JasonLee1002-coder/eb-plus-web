"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const circumference = 2 * Math.PI * 24;
  const strokeDashoffset = circumference * (1 - progress);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0);
    };
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
          className="fixed bottom-28 left-6 z-[90] group cursor-pointer"
          initial={{ opacity: 0, scale: 0, x: -30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: -30 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.85 }}
        >
          {/* Layer 5b: Ripple ring 2 (inner, delayed) */}
          <motion.div
            className="absolute inset-[-10px] rounded-full border border-red-400/30"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1.5,
            }}
          />

          {/* Layer 5a: Ripple ring 1 (outer) */}
          <motion.div
            className="absolute inset-[-14px] rounded-full border-2 border-red-500/40"
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          {/* Layer 4: Glow pulse */}
          <motion.div
            className="absolute inset-[-8px] rounded-full bg-gradient-to-br from-red-500 to-amber-500 blur-lg"
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Layer 2: Button body — periodic hop */}
          <motion.div
            className="relative w-14 h-14 rounded-full bg-gradient-to-br from-red-600 via-red-500 to-amber-500 shadow-[0_0_24px_rgba(200,16,46,0.6)] hover:shadow-[0_0_40px_rgba(200,16,46,0.8)] transition-shadow flex items-center justify-center"
            animate={{ y: [0, -5, 0, -2, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1.5,
            }}
          >
            {/* Layer 3: SVG progress ring */}
            <svg
              className="absolute inset-[-3px] w-[62px] h-[62px] -rotate-90"
              viewBox="0 0 62 62"
            >
              {/* Track */}
              <circle
                cx="31"
                cy="31"
                r="24"
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="3"
              />
              {/* Progress */}
              <circle
                cx="31"
                cy="31"
                r="24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                style={{ transition: "stroke-dashoffset 0.1s ease-out" }}
              />
            </svg>

            {/* Layer 1: Arrow — energetic double-bounce */}
            <motion.svg
              className="h-6 w-6 text-white drop-shadow-md"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ y: [0, -4, 0, -2, 0] }}
              transition={{
                duration: 1.2,
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
          </motion.div>

          {/* Hover tooltip — right side */}
          <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-gray-900/90 px-3 py-1.5 text-xs font-medium text-white shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm">
            回到頂部 ↑
            <span className="absolute -left-1 top-1/2 -translate-y-1/2 h-2 w-2 rotate-45 bg-gray-900/90" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
