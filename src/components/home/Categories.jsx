import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const categories = [
  {
    title: "React",
    icon: <FaReact size={40} />,
    count: "150+ Questions",
    color: "text-cyan-400",
    hover: "hover:border-cyan-500",
  },
  {
    title: "JavaScript",
    icon: <FaJs size={40} />,
    count: "200+ Questions",
    color: "text-yellow-400",
    hover: "hover:border-yellow-500",
  },
  {
    title: "HTML",
    icon: <FaHtml5 size={40} />,
    count: "80+ Questions",
    color: "text-orange-500",
    hover: "hover:border-orange-500",
  },
  {
    title: "CSS",
    icon: <FaCss3Alt size={40} />,
    count: "100+ Questions",
    color: "text-blue-500",
    hover: "hover:border-blue-500",
  },
  {
    title: "Node.js",
    icon: <FaNodeJs size={40} />,
    count: "120+ Questions",
    color: "text-green-500",
    hover: "hover:border-green-500",
  },
  {
    title: "MongoDB",
    icon: <SiMongodb size={40} />,
    count: "90+ Questions",
    color: "text-emerald-500",
    hover: "hover:border-emerald-500",
  },
];

const Categories = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-white">
          Popular Categories
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Learn the most in-demand technologies and crack interviews faster.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className={`group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 ${category.hover}`}
            >
              <div className={category.color}>{category.icon}</div>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                {category.title}
              </h3>

              <p className="mt-2 text-slate-400">
                {category.count}
              </p>

              <div className="mt-5 text-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Explore →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;