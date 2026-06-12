import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaServer,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";

import { MdDeveloperMode } from "react-icons/md";

export const getRoadmapIcon = (icon) => {
  switch (icon) {
    case "react":
      return <FaReact className="text-cyan-400" />;

    case "javascript":
      return <SiJavascript className="text-yellow-400" />;

    case "nodejs":
      return <FaNodeJs className="text-green-500" />;

    case "mongodb":
      return <SiMongodb className="text-green-400" />;

    case "typescript":
      return <SiTypescript className="text-blue-500" />;

    case "redux":
      return <SiRedux className="text-purple-500" />;

    case "nextjs":
      return <SiNextdotjs className="text-slate-900 dark:text-white" />;

    case "expressjs":
      return <SiExpress className="text-gray-300" />;

    case "github":
      return <FaGithub className="text-slate-900 dark:text-white" />;

    case "frontend":
      return <MdDeveloperMode className="text-pink-400" />;

    case "backend":
      return <FaServer className="text-orange-400" />;

    case "fullstack":
      return <FaProjectDiagram className="text-red-400" />;

    case "system-design":
      return <FaProjectDiagram className="text-indigo-400" />;

    case "dsa":
      return <FaProjectDiagram className="text-emerald-400" />;

    default:
      return <FaProjectDiagram className="text-slate-400" />;
  }
};