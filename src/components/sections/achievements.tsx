import { Section } from "@/components/section";
import { SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { ExternalLink, Trophy, Medal, Star, Target } from "lucide-react";

const profiles = [
  {
    id: "leetcode",
    platform: "LeetCode",
    username: "Ashish032005",
    link: "https://leetcode.com/Ashish032005",
    icon: SiLeetcode,
    theme: "from-orange-500/10 to-yellow-500/10 hover:from-orange-500/20 hover:to-yellow-500/20 border-orange-500/20",
    iconColor: "text-orange-500",
    stats: [
      { label: "Questions Solved", value: "1500+", icon: Target },
      { label: "Contest Rating", value: "1989", sub: "Top 2.76%", icon: Trophy },
      { label: "Level", value: "Knight", icon: Medal },
      { label: "Badges", value: "47", icon: Star },
    ]
  },
  {
    id: "codeforces",
    platform: "Codeforces",
    username: "ashish5496",
    link: "https://codeforces.com/profile/ashish5496",
    icon: SiCodeforces,
    theme: "from-blue-500/10 to-red-500/10 hover:from-blue-500/20 hover:to-red-500/20 border-blue-500/20",
    iconColor: "text-blue-500",
    stats: [
      { label: "Rating", value: "1400+", sub: "Specialist", icon: Trophy },
      { label: "Max Rating", value: "1426", icon: Target },
      { label: "Contests", value: "Participating", icon: Star },
    ]
  },
  {
    id: "codechef",
    platform: "CodeChef",
    username: "ashish_770",
    link: "https://www.codechef.com/users/ashish_770",
    icon: SiCodechef,
    theme: "from-amber-700/10 to-amber-900/10 hover:from-amber-700/20 hover:to-amber-900/20 border-amber-700/20",
    iconColor: "text-amber-700",
    stats: [
      { label: "Stars", value: "3★", icon: Star },
      { label: "Max Rating", value: "1723", icon: Trophy },
      { label: "Global Rank", value: "Top 5%", icon: Target },
    ]
  },
  {
    id: "gfg",
    platform: "GeeksforGeeks",
    username: "soniashi9xs4",
    link: "https://www.geeksforgeeks.org/profile/soniashi9xs4",
    icon: SiGeeksforgeeks,
    theme: "from-green-500/10 to-emerald-700/10 hover:from-green-500/20 hover:to-emerald-700/20 border-green-500/20",
    iconColor: "text-green-500",
    stats: [
      { label: "Problems Solved", value: "278", icon: Target },
      { label: "Coding Score", value: "1000+", icon: Trophy },
      { label: "Streak", value: "Consistent", icon: Star },
    ]
  }
];

export function AchievementsSection() {
  return (
    <Section id="achievements" title="Competitive Profiles" subtitle="My coding journey across various competitive platforms">
      <div className="grid gap-6 md:grid-cols-2">
        {profiles.map((profile) => {
          const Icon = profile.icon;
          return (
            <a 
              href={profile.link} 
              key={profile.id}
              target="_blank"
              rel="noopener noreferrer"
              className={`block rounded-3xl border bg-gradient-to-br ${profile.theme} backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5 group relative overflow-hidden`}
            >
              <div className="absolute top-6 right-6 flex items-center justify-center">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-background/50 border border-foreground/10 backdrop-blur-md transition-transform group-hover:scale-110">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/20 opacity-75"></span>
                  <ExternalLink className="relative w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
                </span>
              </div>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-16 h-16 bg-background/80 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-sm border border-foreground/5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className={`w-8 h-8 ${profile.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{profile.platform}</h3>
                  <p className="text-foreground/60 font-medium">@{profile.username}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {profile.stats.map((stat, idx) => {
                  const StatIcon = stat.icon;
                  return (
                    <div key={idx} className="bg-background/40 rounded-xl p-4 border border-foreground/5 backdrop-blur-sm hover:bg-background/60 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <StatIcon className="w-4 h-4 text-foreground/50" />
                        <span className="text-[10px] sm:text-xs font-semibold text-foreground/60 uppercase tracking-wider">{stat.label}</span>
                      </div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-base sm:text-lg font-bold text-foreground">{stat.value}</span>
                        {stat.sub && (
                          <span className="text-[10px] font-medium text-foreground/60 bg-foreground/5 px-2 py-0.5 rounded-full">
                            {stat.sub}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Decorative background element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-background/10 rounded-full blur-3xl group-hover:bg-background/20 transition-colors duration-500 z-0 pointer-events-none"></div>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
