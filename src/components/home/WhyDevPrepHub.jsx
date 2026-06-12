import {
  FaBookOpen,
  FaBullseye,
  FaRoad,
  FaRocket,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBookOpen />,
    title: "Structured Learning",
    description:
      "Follow a clear path from beginner to advanced without confusion.",
  },
  {
    icon: <FaBullseye />,
    title: "Interview Focused",
    description:
      "Practice real interview questions asked by top companies.",
  },
  {
    icon: <FaRoad />,
    title: "Developer Roadmaps",
    description:
      "Step-by-step learning roadmaps for every technology.",
  },
  {
    icon: <FaRocket />,
    title: "Career Growth",
    description:
      "Build skills, projects and confidence to get hired faster.",
  },
];

const WhyDevPrepHub = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <h2 className="text-center text-4xl font-bold text-slate-900 dark:text-white">
          Why DevPrepHub?
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Everything you need to prepare for developer interviews.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-blue-500"
            >
              <div className="text-4xl text-blue-400">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyDevPrepHub;