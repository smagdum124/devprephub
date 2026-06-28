import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import api from "../services/api";

const QUESTIONS_PER_PAGE = 12;

const InterviewQuestions = () => {
  const [searchParams] = useSearchParams();

  const initialSearch = searchParams.get("search") || "";
  const initialCategory = searchParams.get("category") || "All";

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [activeCategory, setActiveCategory] =
    useState(initialCategory);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory]);

  const fetchQuestions = async () => {
    try {
      const { data } = await api.get("/questions");
      setQuestions(data.questions);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredQuestions = questions.filter((question) => {
    const matchesSearch = question.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      question.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(
    filteredQuestions.length / QUESTIONS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * QUESTIONS_PER_PAGE;

  const currentQuestions = filteredQuestions.slice(
    startIndex,
    startIndex + QUESTIONS_PER_PAGE
  );

  const categories = [
    "All",
    ...new Set(questions.map((q) => q.category)),
  ];

  return (
    <>
      <SEO
        title="Developer Interview | DevPrepHub"
        description="Practice the most asked developer interview questions with detailed answers."
        keywords="React Interview Questions, JavaScript Interview Questions, Node.js Interview Questions, MongoDB Interview Questions, DevPrepHub"
      />

      <div className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <h1 className="text-center text-5xl font-bold text-slate-900 dark:text-white">
            Interview Questions
          </h1>

          <p className="mt-4 text-center text-slate-400">
            Practice the most asked developer interview questions.
          </p>

          <div className="mx-auto mt-8 max-w-2xl">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="w-full rounded-xl border border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-slate-900 dark:text-white outline-none focus:border-blue-500"
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="mt-4 text-center text-slate-400">
            Showing {filteredQuestions.length} Questions
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
                {currentQuestions.map((question) => (
                  <div
                    key={question._id}
                    className="rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <span className="text-sm text-blue-400">
                      {question.category}
                    </span>

                    <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
                      {question.title}
                    </h3>

                    <Link
                      to={`/questions/${question.slug}`}
                      className="mt-5 inline-block text-blue-400 hover:text-blue-300"
                    >
                      Read Answer →
                    </Link>
                  </div>
                ))}
              </div>

              {filteredQuestions.length === 0 && (
                <div className="mt-16 text-center">
                  <h3 className="text-2xl font-semibold">
                    No Questions Found
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Try another keyword or category.
                  </p>
                </div>
              )}

              {totalPages > 1 && (
                <div className="mt-12 flex flex-wrap justify-center items-center gap-2">

                  <button
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((prev) => prev - 1)
                    }
                    className="rounded-lg bg-slate-800 px-4 py-2 text-white disabled:opacity-50"
                  >
                    Previous
                  </button>

                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setCurrentPage(index + 1)
                      }
                      className={`h-10 w-10 rounded-lg transition ${
                        currentPage === index + 1
                          ? "bg-blue-600 text-white"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setCurrentPage((prev) => prev + 1)
                    }
                    className="rounded-lg bg-slate-800 px-4 py-2 text-white disabled:opacity-50"
                  >
                    Next
                  </button>

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