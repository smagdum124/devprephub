import { allQuestions } from "../data";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const InterviewQuestions = () => {
  const [searchParams] = useSearchParams();

  const initialSearch = searchParams.get("search") || "";

  const initialCategory =
    searchParams.get("category") || "All";

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [activeCategory, setActiveCategory] =
    useState(initialCategory);

  const filteredQuestions = allQuestions.filter((question) => {
    const matchesSearch = question.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      question.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Interview Questions | DevPrepHub</title>

        <meta
          name="description"
          content="Practice React, JavaScript, HTML, CSS, Node.js and MongoDB interview questions with detailed answers."
        />

        <meta
          name="keywords"
          content="React Interview Questions, JavaScript Interview Questions, HTML Interview Questions, CSS Interview Questions, Node.js Interview Questions, MongoDB Interview Questions"
        />
      </Helmet>

      <div className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-5xl font-bold text-white">
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
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "All",
              "React",
              "JavaScript",
              "HTML",
              "CSS",
              "Node.js",
              "MongoDB",
            ].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeCategory === category
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
            Showing {filteredQuestions.length} Questions
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredQuestions.map((question) => (
              <div
                key={question.id}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <span className="text-sm text-blue-400">
                  {question.category}
                </span>

                <h3 className="mt-3 text-xl font-semibold text-white">
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
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-semibold text-white">
                No Questions Found
              </h3>

              <p className="mt-2 text-slate-400">
                Try another search keyword or category.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InterviewQuestions;