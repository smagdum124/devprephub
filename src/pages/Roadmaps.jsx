  import { Helmet } from "react-helmet-async";
  import { roadmaps } from "../data/roadmaps";
  import { Link } from "react-router-dom";
  import { getRoadmapIcon } from "../utils/getRoadmapIcon";

const Roadmaps = () => {
  return (
    <>
      <Helmet>
        <title>Developer Roadmaps | DevPrepHub</title>
      </Helmet>

      <div className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <h1 className="text-center text-5xl font-bold text-white">
            Developer Roadmaps
          </h1>

          <p className="mt-4 text-center text-slate-400">
            Follow structured paths and become job ready.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {roadmaps.map((roadmap) => (
              <div
                key={roadmap.id}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500"
              >


                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 text-4xl">
                  {getRoadmapIcon(roadmap.icon)}
                </div>

                <h3 className="mt-4 text-xl font-semibold text-white">
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
        </div>
      </div>
    </>
  );
};

export default Roadmaps;