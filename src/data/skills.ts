import { 
  SiPython, SiTypescript, SiJavascript, SiCplusplus,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiSupabase, SiJsonwebtokens, SiApachekafka, SiRabbitmq, SiFastapi,
  SiPostgresql, SiMongodb,
  SiGit, SiGithub, SiLinux, SiVercel, SiRender, SiRailway, SiHuggingface, SiDocker, SiKubernetes
} from "react-icons/si";
import { FaRobot, FaProjectDiagram, FaNetworkWired, FaCogs, FaDatabase, FaServer, FaCode, FaLink, FaAws, FaHtml5, FaCss3Alt, FaTrophy } from "react-icons/fa";

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" }
    ]
  },
  {
    category: "AI & LLM Engineering",
    items: [
      { name: "LangGraph", icon: FaNetworkWired, color: "text-green-500" },
      { name: "LangChain", icon: FaLink, color: "text-blue-500" },
      { name: "RAG Pipelines", icon: FaDatabase, color: "text-orange-500" },
      { name: "Multi-Agent Systems", icon: FaProjectDiagram, color: "text-purple-500" },
      { name: "LLM Integrations", icon: FaRobot, color: "text-teal-500" },
      { name: "Prompt Engineering", icon: FaCode, color: "text-yellow-500" },
      { name: "AI Workflow Automation", icon: FaCogs, color: "text-gray-500" }
    ]
  },
  {
    category: "Full Stack Web Development",
    items: [
      { name: "HTML", icon: FaHtml5, color: "text-[#E34F26]" },
      { name: "CSS", icon: FaCss3Alt, color: "text-[#1572B6]" },
      { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339939]" },
      { name: "Express.js", icon: SiExpress, color: "text-black dark:text-white" },
      { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
      { name: "JWT Token", icon: SiJsonwebtokens, color: "text-pink-500" },
      { name: "REST API / Microservices", icon: FaServer, color: "text-blue-400" },
      { name: "Kafka", icon: SiApachekafka, color: "text-[#231F20]" },
      { name: "RabbitMQ", icon: SiRabbitmq, color: "text-[#FF6600]" },
      { name: "FastAPI", icon: SiFastapi, color: "text-[#009688]" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "Pinecone", icon: FaDatabase, color: "text-green-600" },
      { name: "FAISS", icon: FaDatabase, color: "text-gray-500" },
      { name: "ChromaDB", icon: FaDatabase, color: "text-orange-500" }
    ]
  },
  {
    category: "Tools & Deployment",
    items: [
      { name: "Git/GitHub", icon: SiGithub, color: "text-black dark:text-white" },
      { name: "Linux", icon: SiLinux, color: "text-yellow-500" },
      { name: "AWS EC2", icon: FaAws, color: "text-[#FF9900]" },
      { name: "AWS S3", icon: FaAws, color: "text-[#FF9900]" },
      { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
      { name: "Render", icon: SiRender, color: "text-blue-500" },
      { name: "Railway", icon: SiRailway, color: "text-purple-500" },
      { name: "Hugging Face", icon: SiHuggingface, color: "text-yellow-500" },
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326CE5]" }
    ]
  }
];

