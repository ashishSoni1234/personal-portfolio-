import { Section } from "@/components/section";

export function AboutSection() {
  return (
    <Section id="about" title="About Me" subtitle="Get to know me better">
      <div className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl p-[2px]">
        {/* Animated glowing edge */}
        <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,var(--color-primary)_100%)] opacity-70" />
        
        {/* Inner transparent container */}
        <div className="relative bg-background/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-primary/20 shadow-xl">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am an AI Engineer and Full-Stack Developer passionate about turning ambitious ideas into working products.
              Over the last year, I have built 40+ AI Multi-Agent Systems and Full-Stack applications and shipped them on free platforms like Vercel, Render, Railway, and Hugging Face, taking ideas from scratch to production-ready MVPs. I love designing intelligent systems that do not just demonstrate AI capabilities, they solve real business problems, automate complex workflows, and create measurable impact.
            </p>
            <p>
              My work spans LLMs, Multi-Agent Architectures, RAG, AI Automation, Backend Systems, and Modern Full-Stack Development. Whether it is building autonomous AI workforces, developer tools, or enterprise automation platforms, I enjoy owning the complete engineering journey from architecture and backend infrastructure to AI orchestration and deployment.
            </p>
            <p>
              I am driven by curiosity and obsessed with building. Every project is an opportunity to learn something new, experiment with emerging technologies, and transform an idea into something people can actually use.
            </p>
            <p>
              When I am not coding, you will usually find me exploring cutting-edge AI research, contributing to open-source projects, or building the next product that pushes the boundaries of what AI can accomplish.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

