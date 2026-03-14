"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  quality?: number;
}

export function LightboxImage({
  src,
  alt,
  width,
  height,
  fill,
  className = "",
  quality,
}: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, close]);

  return (
    <>
      {/* Thumbnail */}
      <div className={`cursor-zoom-in ${className}`} onClick={open}>
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            quality={quality}
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width || 800}
            height={height || 600}
            quality={quality}
            className={`transition-transform duration-500 hover:scale-105 ${className}`}
          />
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              onClick={close}
              aria-label="Close"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Full-size image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-full"
            >
              <Image
                src={src}
                alt={alt}
                width={1920}
                height={1080}
                quality={90}
                className="max-h-[90vh] w-auto rounded-lg object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface LightboxVideoProps {
  src: string;
  alt: string;
  className?: string;
}

export function LightboxVideo({ src, alt, className = "" }: LightboxVideoProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, close]);

  return (
    <>
      <div className={`cursor-pointer ${className}`} onClick={open}>
        <video src={src} className="w-full rounded-2xl" muted playsInline />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              onClick={close}
              aria-label="Close"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-full"
            >
              <video src={src} className="max-h-[90vh] w-auto rounded-lg" controls autoPlay />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
