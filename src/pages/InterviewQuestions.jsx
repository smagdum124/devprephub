import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import api from "../services/api";

const InterviewQuestions = () => {
  const [searchParams] = useSearchParams();

  const initialSearch =
    searchParams.get("search") || "";

  const initialCategory =
    searchParams.get("category") || "All";

  const [questions, setQuestions] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [searchTerm, setSearchTerm] =
    useState(initialSearch);

  const [activeCategory, setActiveCategory] =
    useState(initialCategory);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const { data } = await api.get(
        "/questions"
      );

      setQuestions(data.questions);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredQuestions =
    questions.filter((question) => {
      const matchesSearch =
        question.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const matchesCategory =
        activeCategory === "All" ||
        question.category ===
        activeCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  const categories = [
    "All",
    ...new Set(
      questions.map(
        (q) => q.category
      )
    ),
  ];

  return (
    <>
      <SEO
        title="Developer Interview | DevPrepHub"
        description="Explore complete learning roadmaps for React, JavaScript, Node.js, MongoDB, HTML, CSS and become job-ready."
        keywords="Developer Roadmaps, React Roadmap, JavaScript Roadmap, Node.js Roadmap, MongoDB Roadmap, DevPrepHub"
      />

      <div className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <h1 className="text-center text-5xl font-bold text-slate-900 dark:text-white">
            Interview Questions
          </h1>

          <p className="mt-4 text-center text-slate-400">
            Practice the most asked
            developer interview
            questions.
          </p>

          <div className="mx-auto mt-8 max-w-2xl">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
              className="w-full rounded-xl border border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-slate-900 dark:text-white outline-none focus:border-blue-500"
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            {categories.map(
              (category) => (
                <button
                  key={category}
                  onClick={() =>
                    setActiveCategory(
                      category
                    )
                  }
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeCategory ===
                    category
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                >
                  {category}
                </button>
              )
            )}

          </div>

          <p className="mt-4 text-center text-slate-400">
            Showing{" "}
            {
              filteredQuestions.length
            }{" "}
            Questions
          </p>

          {loading ? (
            <div className="mt-20 text-center">
              <h2 className="text-2xl font-semibold">
                Loading...
              </h2>
            </div>
          ) : (
            <>
              <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {filteredQuestions.map(
                  (question) => (
                    <div
                      key={
                        question._id
                      }
                      className="rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
                    >
                      <span className="text-sm text-blue-400">
                        {
                          question.category
                        }
                      </span>

                      <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
                        {
                          question.title
                        }
                      </h3>

                      <Link
                        to={`/questions/${question.slug}`}
                        className="mt-5 inline-block text-blue-400 hover:text-blue-300"
                      >
                        Read Answer →
                      </Link>
                    </div>
                  )
                )}

              </div>

              {filteredQuestions.length ===
                0 && (
                  <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold">
                      No Questions
                      Found
                    </h3>

                    <p className="mt-2 text-slate-500">
                      Try another
                      keyword or
                      category.
                    </p>
                  </div>
                )}
            </>
          )}

        </div>
      </div>
    </>
  );
};

export default InterviewQuestions;