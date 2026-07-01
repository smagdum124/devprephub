import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import { FaCopy, FaShareAlt } from "react-icons/fa";
import api from "../services/api";
import Breadcrumb from "../components/Breadcrumb";

const QuestionDetails = () => {
  const { slug } = useParams();

  const [question, setQuestion] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuestion();
    fetchQuestions();
  }, [slug]);

  const fetchQuestion = async () => {
    try {
      const { data } = await api.get(
        `/questions/${encodeURIComponent(slug)}`
      );

      setQuestion(data.question);
    } catch (error) {
      console.log(error);
      setQuestion(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchQuestions = async () => {
    try {
      const { data } = await api.get("/questions");
      setQuestions(data.questions);
    } catch (error) {
      console.log(error);
    }
  };

  const copyAnswer = () => {
    navigator.clipboard.writeText(question.answer);
    alert("Answer copied successfully!");
  };

  const shareQuestion = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Question link copied!");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">
          Loading...
        </h2>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">
          Question Not Found
        </h2>
      </div>
    );
  }

  const currentIndex = questions.findIndex(
    (item) => item.slug === question.slug
  );

  const previousQuestion =
    currentIndex > 0
      ? questions[currentIndex - 1]
      : null;

  const nextQuestion =
    currentIndex < questions.length - 1
      ? questions[currentIndex + 1]
      : null;

  const relatedQuestions = questions
    .filter(
      (item) =>
        item.category === question.category &&
        item.slug !== question.slug
    )
    .slice(0, 3);

  return (
    <>
      <SEO
        title={`${question.title} | DevPrepHub`}
        description={question.answer.slice(0, 150)}
        keywords={`${question.category}, Interview Questions`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Question",
          name: question.title,
          acceptedAnswer: {
            "@type": "Answer",
            text: question.answer,
          },
        }}
      />

      <div className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Breadcrumb />
          <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
            {question.category}
          </span>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">
            {question.title}
          </h1>

          <div className="mt-8 flex flex-wrap gap-3">

            <button
              onClick={copyAnswer}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              <FaCopy />
              Copy Answer
            </button>

            <button
              onClick={shareQuestion}
              className="flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-2 hover:border-blue-500"
            >
              <FaShareAlt />
              Share Question
            </button>

          </div>

          <div className="mt-8 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">

            <p className="whitespace-pre-line leading-8 text-slate-700 dark:text-slate-300">
              {question.answer}
            </p>

          </div>

          <div className="mt-10 flex justify-between">

            {previousQuestion ? (
              <Link
                to={`/questions/${previousQuestion.slug}`}
                className="text-blue-500 hover:underline"
              >
                ← Previous Question
              </Link>
            ) : (
              <div />
            )}

            {nextQuestion && (
              <Link
                to={`/questions/${nextQuestion.slug}`}
                className="text-blue-500 hover:underline"
              >
                Next Question →
              </Link>
            )}

          </div>

          <div className="mt-16">

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Related Questions
            </h2>

            <div className="mt-6 grid gap-4">

              {relatedQuestions.length > 0 ? (
                relatedQuestions.map((item) => (
                  <Link
                    key={item._id}
                    to={`/questions/${item.slug}`}
                    className="rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 transition hover:border-blue-500"
                  >
                    {item.title}
                  </Link>
                ))
              ) : (
                <p className="text-slate-500">
                  No related questions found.
                </p>
              )}

            </div>

          </div>

          <Link
            to="/questions"
            className="mt-10 inline-block text-blue-500 hover:underline"
          >
            ← Back to Questions
          </Link>

        </div>
      </div>
    </>
  );
};

export default QuestionDetails;