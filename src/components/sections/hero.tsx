"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { WordTypewriter } from "@/components/typewriter";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      {/* Top Header / Socials */}
      <header className="absolute top-0 w-full flex justify-between items-center px-8 py-6 z-20">
        <div className="flex gap-6">
          <Link href={personalInfo.social.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaLinkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href={personalInfo.social.twitter} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaTwitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href={personalInfo.social.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
        <div className="flex gap-6">
          <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase">
            <FileText className="h-5 w-5" /> RESUME
          </a>
          <Link href="#contact" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase">
            <Mail className="h-5 w-5" /> GET IN TOUCH
          </Link>
        </div>
      </header>

      {/* Concentric Circles Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
        <div className="absolute w-[400px] h-[400px] rounded-full border border-blue-500/30"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full border border-purple-500/30"></div>
        <div className="absolute w-[800px] h-[800px] rounded-full border border-green-500/30"></div>
        <div className="absolute w-[1100px] h-[1100px] rounded-full border border-orange-500/30"></div>
      </div>

      <div className="z-10 flex flex-col items-center text-center max-w-4xl px-4 mt-8">
        
        {/* Avatar */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl mb-8 bg-muted"
        >
          {/* Using the user's actual profile picture */}
          <Image 
            src="/profile.jpg" 
            alt={personalInfo.name}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xs md:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4"
        >
          Software Engineer
        </motion.p>

        {/* Main Title - Word Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-10 min-h-[4rem] md:min-h-[5rem]"
        >
          <WordTypewriter 
            phrases={["Welcome to my Portfolio", "Hey ! I am Ashish"]} 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
          />
        </motion.div>

        {/* Centered Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs md:text-sm tracking-[0.15em] uppercase text-muted-foreground"
        >
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="#achievements" className="hover:text-primary transition-colors">Achievements</Link>
          <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
        </motion.nav>

      </div>
    </section>
  );
}
