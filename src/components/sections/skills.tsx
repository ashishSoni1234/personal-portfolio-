"use client";

import { Section } from "@/components/section";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills" subtitle="The tools and frameworks I use to bring ideas to life">
      <div className="flex flex-col gap-12">
        {skills.map((skillGroup, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground/90">{skillGroup.category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {skillGroup.items.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 p-4 rounded-xl bg-card border border-black/5 hover:border-primary/50 hover:bg-card/80 transition-colors group cursor-default shadow-sm"
                  >
                    <Icon className={`w-6 h-6 ${skill.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
