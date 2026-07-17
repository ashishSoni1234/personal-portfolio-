"use client";

import { Section } from "@/components/section";
import { experience } from "@/data/experience";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  SiPython, SiTensorflow, SiPytorch, SiOpencv, 
  SiNodedotjs, SiMongodb, SiNextdotjs, SiReact, 
  SiCplusplus, SiJavascript, SiGit 
} from "react-icons/si";

const SkillIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "Python": return <SiPython className="w-5 h-5 text-[#3776AB]" title="Python" />;
    case "TensorFlow": return <SiTensorflow className="w-5 h-5 text-[#FF6F00]" title="TensorFlow" />;
    case "PyTorch": return <SiPytorch className="w-5 h-5 text-[#EE4C2C]" title="PyTorch" />;
    case "Computer Vision": return <SiOpencv className="w-5 h-5 text-[#5C3EE8]" title="Computer Vision" />;
    case "Node.js": return <SiNodedotjs className="w-5 h-5 text-[#339933]" title="Node.js" />;
    case "MongoDB": return <SiMongodb className="w-5 h-5 text-[#47A248]" title="MongoDB" />;
    case "Next.js": return <SiNextdotjs className="w-5 h-5 text-foreground" title="Next.js" />;
    case "React": return <SiReact className="w-5 h-5 text-[#61DAFB]" title="React" />;
    case "C++": return <SiCplusplus className="w-5 h-5 text-[#00599C]" title="C++" />;
    case "Git": return <SiGit className="w-5 h-5 text-[#F05032]" title="Git" />;
    case "Javascript": return <SiJavascript className="w-5 h-5 text-[#F7DF1E]" title="JavaScript" />;
    default: return <div className="text-xs font-bold px-2 py-1 bg-secondary rounded-md">{name}</div>;
  }
};

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience & Education" subtitle="My professional journey">
      <div className="relative max-w-6xl mx-auto px-4 md:px-0 mt-16">
        {/* Glowing Timeline line */}
        <div className="absolute left-[39px] md:left-1/2 md:-ml-[2px] top-0 bottom-0 w-[4px] bg-gradient-to-b from-primary/10 via-primary to-primary/10 rounded-full" />
        
        <div className="space-y-24">
          {experience.map((item, index) => {
            const isEven = index % 2 === 0;
            const logoPath = item.logoText === "ISRO" ? "/isro-logo.svg" : "/dtu-logo.png";
            
            return (
              <div key={item.id} className="relative w-full group">
                
                {/* Desktop layout: Left or Right side */}
                <div className={`hidden md:flex w-1/2 ${isEven ? 'pr-20 justify-end' : 'pl-20 justify-start ml-auto'}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    className="w-full max-w-2xl"
                  >
                    <Card className="relative overflow-hidden bg-background/60 backdrop-blur-xl border-primary/20 hover:border-primary/60 transition-all duration-300 shadow-xl hover:shadow-primary/20 group-hover:shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <CardContent className="p-8 relative z-10">
                        <div className="flex flex-row gap-6 items-start">
                          {/* Logo on the left inside a circle */}
                          <div className="flex-shrink-0 mt-2">
                            <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white p-2 shadow-lg border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={logoPath} alt={item.logoText} className="w-full h-full object-contain" />
                            </div>
                          </div>
                          
                          {/* Content on the right */}
                          <div className="flex-1 space-y-4 text-left">
                            <div>
                              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider mb-3">{item.duration}</span>
                              <h3 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-1">{item.role}</h3>
                              <h4 className="text-lg text-primary/80 font-bold">{item.company}</h4>
                            </div>
                            <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                            
                            {item.skills && (
                              <div className="flex flex-wrap gap-3 items-center pt-2">
                                {item.skills.map(skill => (
                                  <div key={skill} className="p-2 rounded-xl bg-background shadow-sm border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group/skill">
                                    <SkillIcon name={skill} />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Center Icon / Logo */}
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.5, delay: 0.2 }}
                  className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-4 md:top-12 flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full border-4 border-background bg-card shadow-2xl z-10 overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/60 transition-all duration-500 group-hover:scale-110"
                >
                  <div className="w-full h-full p-2 bg-white flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={logoPath} 
                      alt={item.logoText} 
                      className="w-full h-full object-contain" 
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                           parent.classList.remove('bg-white');
                           parent.classList.add('bg-primary', 'text-primary-foreground', 'font-black', 'text-sm', 'text-center');
                           parent.innerText = item.logoText || 'LOGO';
                        }
                      }}
                    />
                  </div>
                </motion.div>

                {/* Mobile Layout */}
                <div className="md:hidden w-full pl-32 pt-6 pb-8">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <Card className="relative overflow-hidden bg-background/60 backdrop-blur-xl border-primary/20 shadow-lg hover:border-primary/50 transition-colors">
                      <CardContent className="p-5 relative z-10">
                        <div className="flex flex-col gap-4 items-start">
                          <div className="flex items-center gap-4">
                            {/* Logo inside card */}
                            <div className="h-14 w-14 rounded-full bg-white p-1.5 shadow-sm border-2 border-primary/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={logoPath} alt={item.logoText} className="w-full h-full object-contain" />
                            </div>
                            <div>
                              <span className="inline-block px-2 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-bold tracking-wider mb-1">{item.duration}</span>
                              <h4 className="text-sm text-primary/80 font-bold leading-tight">{item.company}</h4>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-black mb-2">{item.role}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                            
                            {item.skills && (
                              <div className="flex flex-wrap gap-2 items-center">
                                {item.skills.map(skill => (
                                  <div key={skill} className="p-1.5 rounded-lg bg-background shadow-sm border border-border/50">
                                    <SkillIcon name={skill} />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
