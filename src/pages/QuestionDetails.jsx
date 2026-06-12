import { useParams, Link } from "react-router-dom";
import { allQuestions } from "../data";

const QuestionDetails = () => {
  const { slug } = useParams();

  const question = allQuestions.find(
    (item) => item.slug === slug
  );

  if (!question) {
    return (
      <h1 className="p-10 text-center text-slate-900 dark:text-white">
        Question Not Found
      </h1>
    );
  }

  const currentIndex = allQuestions.findIndex(
    (item) => item.slug === slug
  );

  const previousQuestion =
    currentIndex > 0
      ? allQuestions[currentIndex - 1]
      : null;

  const nextQuestion =
    currentIndex < allQuestions.length - 1
      ? allQuestions[currentIndex + 1]
      : null;

  const relatedQuestions = allQuestions
    .filter(
      (item) =>
        item.category === question.category &&
        item.slug !== question.slug
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-4xl">

        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
          {question.category}
        </span>

        <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">
          {question.title}
        </h1>

        <div className="mt-8 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">
          <p className="leading-8 text-slate-300 whitespace-pre-line">
            {question.answer}
          </p>
        </div>

        <div className="mt-8 flex justify-between">

          {previousQuestion ? (
            <Link
              to={`/questions/${previousQuestion.slug}`}
              className="text-blue-400 hover:text-blue-300"
            >
              ← Previous Question
            </Link>
          ) : (
            <div />
          )}

          {nextQuestion ? (
            <Link
              to={`/questions/${nextQuestion.slug}`}
              className="text-blue-400 hover:text-blue-300"
            >
              Next Question →
            </Link>
          ) : null}

        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Related Questions
          </h2>

          <div className="mt-6 grid gap-4">

            {relatedQuestions.map((item) => (
              <Link
                key={item.slug}
                to={`/questions/${item.slug}`}
                className="rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-slate-900 dark:text-white transition hover:border-blue-500"
              >
                {item.title}
              </Link>
            ))}

          </div>
        </div>

        <Link
          to="/questions"
          className="mt-10 inline-block text-blue-400 hover:text-blue-300"
        >
          ← Back to Questions
        </Link>

      </div>
    </div>
  );
};

export default QuestionDetails;