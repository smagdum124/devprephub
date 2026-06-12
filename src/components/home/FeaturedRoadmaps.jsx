import { Link } from "react-router-dom";
import { roadmaps } from "../../data/roadmaps";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

const FeaturedRoadmaps = () => {
  const featuredRoadmaps = roadmaps.slice(0, 4);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <h2 className="text-center text-4xl font-bold text-slate-900 dark:text-white">
          Featured Roadmaps
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Follow structured learning paths and become job ready.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {featuredRoadmaps.map((roadmap) => (
            <div
              key={roadmap.id}
              className="rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500"
            >
              <div className="text-5xl">

                {roadmap.icon === "react" && (
                  <FaReact className="text-cyan-400" />
                )}

                {roadmap.icon === "javascript" && (
                  <SiJavascript className="text-yellow-400" />
                )}

                {roadmap.icon === "nodejs" && (
                  <FaNodeJs className="text-green-500" />
                )}

                {roadmap.icon === "mongodb" && (
                  <SiMongodb className="text-green-400" />
                )}

              </div>

              <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
                {roadmap.title}
              </h3>

              <p className="mt-2 text-slate-400">
                {roadmap.description}
              </p>

              <Link
                to={`/roadmaps/${roadmap.slug}`}
                className="mt-5 inline-block text-blue-400"
              >
                View Roadmap →
              </Link>
            </div>
          ))}

        </div>

        <div className="mt-10 text-center">
          <Link
            to="/roadmaps"
            className="rounded-xl bg-blue-600 px-6 py-3 text-slate-900 dark:text-white transition hover:bg-blue-700"
          >
            View All Roadmaps
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedRoadmaps;