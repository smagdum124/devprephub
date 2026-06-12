import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">

          <h2 className="text-4xl font-bold text-white">
            Ready to Crack Your Next Interview?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Explore hundreds of interview questions, follow structured
            roadmaps, and become job ready with DevPrepHub.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/questions"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Start Learning
            </Link>

            <Link
              to="/roadmaps"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-blue-500"
            >
              Explore Roadmaps
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CallToAction;