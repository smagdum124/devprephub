import { Link } from "react-router-dom";
import { categories } from "../../data/categories";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <Link
              key={category.title}
              to={`/questions?category=${category.slug}`}
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 text-4xl ${category.color}`}
              >
                {category.icon === "react" && <FaReact />}
                {category.icon === "javascript" && <SiJavascript />}
                {category.icon === "nodejs" && <FaNodeJs />}
                {category.icon === "mongodb" && <SiMongodb />}
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                {category.title}
              </h3>

              <p className="mt-2 text-slate-400">
                {category.count}
              </p>

              <div className="mt-5 text-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Explore →
              </div>
            </Link>
          ))}

        </div>

        <div className="mt-12 text-center">
          <Link
            to="/questions"
            className="rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            View All Questions
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Categories;