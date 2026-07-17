"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export function WordTypewriter({
  phrases,
  typingSpeed = 300,
  deletingSpeed = 200,
  pauseTime = 1500,
  className = "",
}: TypewriterProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentWords, setCurrentWords] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetPhrase = phrases[currentPhraseIndex];
    const targetWords = targetPhrase.split(" ");

    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing mode
      if (currentWords.length < targetWords.length) {
        timer = setTimeout(() => {
          setCurrentWords(targetWords.slice(0, currentWords.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing phrase, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      // Deleting mode
      if (currentWords.length > 0) {
        timer = setTimeout(() => {
          setCurrentWords(targetWords.slice(0, currentWords.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentWords, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <h1 className={className}>
      {currentWords.join(" ")}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block ml-2 w-1 h-10 md:h-14 lg:h-16 bg-primary align-middle"
      />
    </h1>
  );
}
