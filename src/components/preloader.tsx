"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  { text: "Developer", color: "text-white" },
  { text: "Curious", color: "text-white" },
  { text: "Thinker", color: "text-primary" }
];

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (index < words.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 700); // Wait 700ms before showing next word
      return () => clearTimeout(timer);
    } else {
      // Last word "Thinker", hold it for 1 second then fade out
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 800); // Call onComplete after fade out animation finishes
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [index, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`text-5xl md:text-7xl font-bold tracking-tight ${words[index].color}`}
            >
              {words[index].text}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
