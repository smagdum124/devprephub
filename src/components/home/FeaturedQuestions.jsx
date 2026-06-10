const questions = [
  "What is Virtual DOM?",
  "Difference between useState and useEffect?",
  "What is Event Loop in JavaScript?",
  "Difference between var, let and const?",
  "What are React Hooks?",
  "What is Hoisting?",
];

const FeaturedQuestions = () => {
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
          {questions.map((question, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
            >
              <span className="text-sm text-blue-400">
                Question #{index + 1}
              </span>

              <h3 className="mt-3 text-xl font-semibold text-white">
                {question}
              </h3>

              <p className="mt-3 text-slate-400">
                Click to view detailed answer.
              </p>

              <div className="mt-5 text-blue-400 opacity-0 transition-opacity group-hover:opacity-100">
                Read More →
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedQuestions;