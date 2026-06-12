import { Link } from "react-router-dom";
import { allQuestions } from "../../data";

const FeaturedQuestions = () => {
  const featuredQuestions = allQuestions.slice(0, 6);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <h2 className="text-center text-4xl font-bold text-white">
          Featured Interview Questions
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Most asked questions in developer interviews.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {featuredQuestions.map((question) => (
            <div
              key={question.id}
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
            >
              <span className="text-sm text-blue-400">
                {question.category}
              </span>

              <h3 className="mt-3 text-xl font-semibold text-white">
                {question.title}
              </h3>

              <p className="mt-3 text-slate-400">
                Click to view detailed answer.
              </p>

              <Link
                to={`/questions/${question.slug}`}
                className="mt-5 inline-block text-blue-400 opacity-0 transition-opacity group-hover:opacity-100"
              >
                Read Answer →
              </Link>
            </div>
          ))}

        </div>

        <div className="mt-10 text-center">
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

export default FeaturedQuestions;