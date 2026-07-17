import { Section } from "@/components/section";
import { SiGithub } from "react-icons/si";
import { ExternalLink, GitPullRequest, GitMerge, Star, CheckCircle2, ShieldCheck, Database } from "lucide-react";

export function OpenSourceSection() {
  return (
    <Section id="open-source" title="Best Open Source Contribution" subtitle="Making impactful contributions to widely-used AI frameworks">
      <div className="max-w-4xl mx-auto">
        <div className="relative group rounded-3xl border border-rose-500/20 bg-gradient-to-br from-rose-500/10 via-background to-orange-500/5 backdrop-blur-sm p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-500/10 overflow-hidden">
          
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
            <SiGithub className="w-64 h-64" />
          </div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-8">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center shadow-lg border border-rose-500/20 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-transparent"></div>
                <SiGithub className="w-8 h-8 text-rose-500 relative z-10" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">DSPy — Stanford NLP</h3>
                <div className="flex items-center gap-2 mt-2 text-muted-foreground font-medium">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>34K+ GitHub Stars</span>
                  <span className="hidden sm:inline mx-2 text-border">•</span>
                  <span className="hidden sm:inline text-rose-500/80">Declarative LLM Framework</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <a 
                href="https://github.com/stanfordnlp/dspy/pull/9741" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/20 px-4 py-2 rounded-full text-sm font-semibold transition-colors"
              >
                <GitMerge className="w-4 h-4" />
                Merged PR
              </a>
              <a 
                href="https://github.com/stanfordnlp/dspy/issues/9589" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/20 px-4 py-2 rounded-full text-sm font-semibold transition-colors"
              >
                <GitPullRequest className="w-4 h-4" />
                Issue
              </a>
              <a 
                href="https://github.com/stanfordnlp/dspy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/20 px-4 py-2 rounded-full text-sm font-semibold transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Framework
              </a>
            </div>
          </div>

          <div className="relative z-10 space-y-5 bg-background/50 rounded-2xl p-6 md:p-8 border border-foreground/5 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-rose-500" />
              </div>
              <p className="text-foreground/80 leading-relaxed text-[15px] md:text-base">
                Contributed a production-grade fix to <span className="font-semibold text-foreground">DSPy</span>, Stanford NLP's declarative LLM framework — resolving a critical <span className="font-semibold text-rose-500 dark:text-rose-400">silent state-corruption bug</span> in <code className="bg-muted px-1.5 py-0.5 rounded text-sm text-foreground">load_state()</code> causing inconsistent RAG and inference behavior.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                <Database className="w-4 h-4 text-orange-500" />
              </div>
              <p className="text-foreground/80 leading-relaxed text-[15px] md:text-base">
                Implemented a <span className="font-semibold text-foreground">validate-first + deepcopy transactional loading strategy</span> ensuring all-or-nothing state restoration, analogous to database <code className="bg-muted px-1.5 py-0.5 rounded text-sm text-foreground">BEGIN/ROLLBACK/COMMIT</code> semantics — shipped with <span className="font-semibold text-green-600 dark:text-green-400">47 passing tests</span>.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </Section>
  );
}
