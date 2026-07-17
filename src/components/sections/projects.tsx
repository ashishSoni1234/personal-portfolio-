import { Section } from "@/components/section";
import { projects } from "@/data/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FaPython, FaReact, FaNodeJs, FaDocker, FaDatabase, FaGithub } from "react-icons/fa";
import { Brain, Zap, MessageSquare, Sparkles, Bell, Network, TreePine, Share2, Globe, Code2, Server, LayoutTemplate } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const tagIcons: Record<string, React.ReactNode> = {
  "Python": <FaPython className="h-4 w-4 text-[#3776AB]" />,
  "FastAPI": <Zap className="h-4 w-4 text-[#009688]" />,
  "FAISS": <FaDatabase className="h-4 w-4 text-gray-500" />,
  "LLaMA 3.1": <Brain className="h-4 w-4 text-purple-500" />,
  "LLaMA 3.3": <Brain className="h-4 w-4 text-purple-500" />,
  "Groq": <Zap className="h-4 w-4 text-yellow-500" />,
  "Streamlit": <LayoutTemplate className="h-4 w-4 text-[#FF4B4B]" />,
  "NLP": <MessageSquare className="h-4 w-4 text-blue-500" />,
  "React": <FaReact className="h-4 w-4 text-[#61DAFB]" />,
  "Node.js": <FaNodeJs className="h-4 w-4 text-[#339939]" />,
  "PostgreSQL": <FaDatabase className="h-4 w-4 text-[#4169E1]" />,
  "Redis": <FaDatabase className="h-4 w-4 text-[#DC382D]" />,
  "Gemini LLM": <Sparkles className="h-4 w-4 text-blue-400" />,
  "Prometheus": <Server className="h-4 w-4 text-[#E6522C]" />,
  "Grafana": <LayoutTemplate className="h-4 w-4 text-[#F46800]" />,
  "Docker": <FaDocker className="h-4 w-4 text-[#2496ED]" />,
  "Alertmanager": <Bell className="h-4 w-4 text-red-500" />,
  "LangGraph": <Network className="h-4 w-4 text-green-500" />,
  "ChromaDB": <FaDatabase className="h-4 w-4 text-orange-500" />,
  "Next.js": <Code2 className="h-4 w-4 text-black dark:text-white" />,
  "Pinecone": <TreePine className="h-4 w-4 text-green-600" />,
  "Graph RAG": <Share2 className="h-4 w-4 text-blue-600" />,
  "Gemini Embeddings": <Sparkles className="h-4 w-4 text-blue-400" />
};

export function ProjectsSection() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="Some of the things I've built recently">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden bg-background/40 backdrop-blur-xl border border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] hover:-translate-y-2 duration-500 group rounded-2xl">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient for Top Right corner readability */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-background/90 via-background/40 to-transparent z-0 opacity-80" />
              {/* Gradient overlay for bottom to blend with content */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
              
              {/* Top Right Blinking Icons */}
              <div className="absolute top-3 right-3 flex gap-2 z-10">
                <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center p-2.5 bg-background/80 backdrop-blur-md rounded-full hover:bg-background border border-border/50 hover:border-primary/50 shadow-sm transition-all hover:scale-110 group/icon">
                  <Globe className="h-4 w-4 animate-pulse group-hover/icon:animate-none text-foreground" strokeWidth={2} />
                </Link>
                <Link href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center p-2.5 bg-background/80 backdrop-blur-md rounded-full hover:bg-background border border-border/50 hover:border-primary/50 shadow-sm transition-all hover:scale-110 group/icon">
                  <FaGithub className="h-4 w-4 animate-pulse group-hover/icon:animate-none text-foreground" strokeWidth={2} />
                </Link>
              </div>
            </div>
            
            <CardHeader className="pt-2 pb-2 z-10 relative">
              <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors tracking-tight leading-tight">{project.title}</CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 pb-6 z-10 relative flex flex-col justify-between">
              <CardDescription className="line-clamp-3 text-muted-foreground/90 text-sm leading-relaxed mb-6 font-medium">
                {project.description}
              </CardDescription>
              
              {/* Skills as Icons */}
              <div className="flex flex-wrap gap-2.5 items-center mt-auto">
                {project.tags.map((tag) => {
                  const IconComponent = tagIcons[tag];
                  return IconComponent ? (
                    <div key={tag} title={tag} className="flex items-center justify-center p-2 rounded-xl bg-primary/5 hover:bg-primary/15 transition-colors border border-primary/10 shadow-sm">
                      {IconComponent}
                    </div>
                  ) : (
                    <div key={tag} title={tag} className="text-[10px] font-bold px-2.5 py-1.5 rounded-xl bg-primary/5 border border-primary/10 text-muted-foreground uppercase tracking-wider shadow-sm">
                      {tag}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
