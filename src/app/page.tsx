"use client";

import { useState } from "react";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { AchievementsSection } from "@/components/sections/achievements";
import { OpenSourceSection } from "@/components/sections/open-source";
import { ExperienceSection } from "@/components/sections/experience";
import { ContactSection } from "@/components/sections/contact";
import { Toaster } from "@/components/ui/sonner";
import { Preloader } from "@/components/preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {/* 
        We use opacity/visibility to prevent unmounting/remounting layout shifts,
        or we can conditionally render if preferred. 
        Usually, rendering it but keeping it hidden (or just letting the preloader cover it) is smoother.
      */}
      <div className={loading ? "h-screen overflow-hidden opacity-0" : "opacity-100 transition-opacity duration-1000"}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <OpenSourceSection />
        <ExperienceSection />
        <ContactSection />
        <Toaster />
      </div>
    </>
  );
}
