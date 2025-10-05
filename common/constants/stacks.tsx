import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill, BsRobot } from "react-icons/bs";
import {
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiFirebase,
  SiMysql,
  SiMongodb,
  SiDart,
  SiSupabase,
  SiSocketdotio,
  SiFlutter,
  SiLaravel,
  SiPython,
  SiFastapi,
  SiVisualstudiocode,
  SiOpenai,
  SiX,
  SiFigma,
  SiCanva,
  SiAndroid 
} from "react-icons/si";

export type SkillProps = {
  [key: string]: {
    icon: JSX.Element;
    background: string;
    color: string;
    category: "language" | "framework" | "database" | "tool/ai";
    isActive?: boolean;
  };
};

const iconSize = 26;

export const STACKS: SkillProps = {
  // Languages
  HTML: {
    icon: <SiHtml5 size={iconSize} />,
    background: "bg-orange-500",
    color: "text-orange-500",
    category: "language",
    isActive: true,
  },
  CSS: {
    icon: <SiCss3 size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    category: "language",
    isActive: true,
  },
  JavaScript: {
    icon: <SiJavascript size={iconSize} />,
    background: "bg-yellow-400",
    color: "text-yellow-400",
    category: "language",
    isActive: true,
  },
  TypeScript: {
    icon: <SiTypescript size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    category: "language",
    isActive: true,
  },
  Dart: {
    icon: <SiDart size={iconSize} />,
    background: "bg-blue-600",
    color: "text-blue-600",
    category: "language",
    isActive: true,
  },
  Python: {
    icon: <SiPython size={iconSize} />,
    background: "bg-yellow-500",
    color: "text-yellow-500",
    category: "language",
    isActive: true,
  },

  // Frameworks
  "React.js": {
    icon: <SiReact size={iconSize} />,
    background: "bg-cyan-400",
    color: "text-cyan-400",
    category: "framework",
    isActive: true,
  },
  "Next.js": {
    icon: <SiNextdotjs size={iconSize} />,
    background: "bg-neutral-800",
    color: "text-neutral-50",
    category: "framework",
    isActive: true,
  },
  "Vue.js": {
    icon: <SiVuedotjs size={iconSize} />,
    background: "bg-blue-400",
    color: "text-blue-400",
    category: "framework",
    isActive: true,
  },
  Laravel: {
    icon: <SiLaravel size={iconSize} />,
    background: "bg-red-600",
    color: "text-red-600",
    category: "framework",
    isActive: true,
  },
  Flutter: {
    icon: <SiFlutter size={iconSize} />,
    background: "bg-blue-400",
    color: "text-blue-400",
    category: "framework",
    isActive: true,
  },
  FastAPI: {
    icon: <SiFastapi size={iconSize} />,
    background: "bg-emerald-600",
    color: "text-emerald-600",
    category: "framework",
    isActive: true,
  },
  TailwindCSS: {
    icon: <SiTailwindcss size={iconSize} />,
    background: "bg-sky-400",
    color: "text-sky-400",
    category: "framework",
    isActive: true,
  },
  Bootstrap: {
    icon: <BsFillBootstrapFill size={iconSize} />,
    background: "bg-violet-600",
    color: "text-violet-600",
    category: "framework",
    isActive: true,
  },
  Vite: {
    icon: <SiVite size={iconSize} />,
    background: "bg-purple-500",
    color: "text-purple-500",
    category: "framework",
    isActive: true,
  },
  SocketIO: {
    icon: <SiSocketdotio size={iconSize} />,
    background: "bg-neutral-700",
    color: "text-neutral-700",
    category: "framework",
    isActive: true,
  },

  // Database
  MySql: {
    icon: <SiMysql size={iconSize} />,
    background: "bg-cyan-700",
    color: "text-cyan-700",
    category: "database",
    isActive: true,
  },
  MongoDb: {
    icon: <SiMongodb size={iconSize} />,
    background: "bg-blue-600",
    color: "text-blue-600",
    category: "database",
    isActive: true,
  },
  PostgreSql: {
    icon: <BiLogoPostgresql size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    category: "database",
    isActive: true,
  },
  Firebase: {
    icon: <SiFirebase size={iconSize} />,
    background: "bg-amber-500",
    color: "text-amber-500",
    category: "database",
    isActive: true,
  },
  Supabase: {
    icon: <SiSupabase size={iconSize} />,
    background: "bg-emerald-500",
    color: "text-emerald-500",
    category: "database",
    isActive: true,
  },

  // Tools / Others
  Github: {
    icon: <SiGithub size={iconSize} />,
    background: "bg-slate-800",
    color: "text-neutral-50",
    category: "tool/ai",
    isActive: true,
  },
  VSCode: {
    icon: <SiVisualstudiocode size={iconSize} />, 
    background: "bg-blue-600",
    color: "text-blue-600",
    isActive: true,
    category: "tool/ai",
  },
  AndroidStudio: {
    icon: <SiAndroid size={iconSize} />,
    background: "bg-green-600",
    color: "text-white",
    isActive: true,
    category: "tool/ai",
  },
  Figma: {
    icon: <SiFigma size={iconSize} />,
    background: "bg-gradient-to-r from-[#F24E1E] via-[#A259FF] to-[#1ABCFE]",
    color: "text-[#F24E1E]",
    isActive: true,
    category: "tool/ai",
  },
  Canva: {
    icon: <SiCanva size={iconSize} />,
    background: "bg-[#00C4CC]",
    color: "text-[#00C4CC]",
    isActive: true,
    category: "tool/ai",
  },

  // AI
  AI: {
    icon: <BsRobot size={iconSize} />,
    background: "bg-fuchsia-700",
    color: "text-fuchsia-700",
    category: "tool/ai",
    isActive: true,
  },
  ChatGPT:{
    icon: <SiOpenai size={iconSize}/>,
    background: "bg-emerald-600",
    color: "text-emerald-600",
    isActive: true,
    category: "tool/ai",
  },
  Grok: {
    icon: <SiX size={24 }/>,
    background: "bg-neutral-800",
    color: "text-neutral-50",
    isActive: true,
    category: "tool/ai",
  },
};



//import { TbBrandFramerMotion } from "react-icons/tb";
// import { FaNpm, FaGolang, FaCode } from "react-icons/fa6";
// SiAstro,
// SiBun,
// SiYarn,
// SiNestjs,
// SiJest,
// SiDocker,
// SiNodedotjs,
// SiKotlin,
// SiReactrouter,
// SiReacthookform,
// SiReacttable,
// SiLaravel,
// SiPhp,
// SiRedux,
// SiPrisma,
// SiExpress,
// SiFramer,
  // "React Table": {
  //   icon: <SiReacttable size={iconSize} />,
  //   background: "bg-rose-600",
  //   color: "text-rose-600",
  //   isActive: true,
  // },
  // "React Hook Form": {
  //   icon: <SiReacthookform size={iconSize} />,
  //   background: "bg-pink-500",
  //   color: "text-pink-500",
  //   isActive: true,
  // },
  // "Node.js": {
  //   icon: <SiNodedotjs size={iconSize} />,
  //   background: "bg-blue-600",
  //   color: "text-blue-600",
  //   isActive: true,
  // },
  // "React Router": {
  //   icon: <SiReactrouter size={iconSize} />,
  //   background: "bg-red-500",
  //   color: "text-red-500",
  //   isActive: true,
  // },
  // "Framer Motion": {
  //   icon: <TbBrandFramerMotion size={iconSize} />,
  //   background: "bg-yellow-400",
  //   color: "text-yellow-400",
  //   isActive: true,
  // },
  // Redux: {
  //   icon: <SiRedux size={iconSize} />,
  //   background: "bg-violet-500",
  //   color: "text-violet-500",
  //   isActive: true,
  // },
  // "Astro.js": {
  //   icon: <SiAstro size={iconSize} />,
  //   background: "bg-violet-600",
  //   color: "text-violet-600",
  //   isActive: true,
  // },
  // "Express.js": {
  //   icon: <SiExpress size={iconSize} />,
  //   background: "bg-neutral-800",
  //   color: "text-neutral-800",
  //   isActive: true,
  // },
  // "Nest.js": {
  //   icon: <SiNestjs size={iconSize} />,
  //   background: "bg-rose-600",
  //   color: "text-rose-600",
  //   isActive: true,
  // },
  // Go: {
  //   icon: <FaGolang size={iconSize} />,
  //   background: "bg-sky-500",
  //   color: "text-sky-500",
  //   isActive: true,
  // },
  // PHP: {
  //   icon: <SiPhp size={iconSize} />,
  //   background: "bg-indigo-400",
  //   color: "text-indigo-400",
  //   isActive: true,
  // },
  // Laravel: {
  //   icon: <SiLaravel size={iconSize} />,
  //   background: "bg-red-700",
  //   color: "text-red-700",
  //   isActive: true,
  // },
  // Prisma: {
  //   icon: <SiPrisma size={iconSize} />,
  //   background: "bg-teal-500",
  //   color: "text-teal-500",
  //   isActive: true,
  // },
  // Kotlin: {
  //   icon: <SiKotlin size={iconSize} />,
  //   background: "bg-violet-600",
  //   color: "text-violet-600",
  //   isActive: true,
  // },
  // Jest: {
  //   icon: <SiJest size={iconSize} />,
  //   background: "bg-pink-600",
  //   color: "text-pink-600",
  //   isActive: true,
  // },
  // Docker: {
  //   icon: <SiDocker size={iconSize} />,
  //   background: "bg-blue-600",
  //   color: "text-blue-500",
  //   isActive: true,
  // },
  // Npm: {
  //   icon: <FaNpm size={iconSize} />,
  //   background: "bg-red-700",
  //   color: "text-red-500",
  //   isActive: true,
  // },
  // Yarn: {
  //   icon: <SiYarn size={iconSize} />,
  //   background: "bg-violet-800",
  //   color: "text-sky-400",
  //   isActive: true,
  // },
  // bun: {
  //   icon: <SiBun size={iconSize} />,
  //   background: "bg-orange-100",
  //   color: "text-yellow-50",
  //   isActive: true,
  // },

