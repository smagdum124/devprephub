import { reactQuestions } from "../data/reactQuestions";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const InterviewQuestions = () => {
    const [searchParams] = useSearchParams();

    const initialSearch = searchParams.get("search") || "";

    const [searchTerm, setSearchTerm] = useState(initialSearch);
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredQuestions = reactQuestions.filter((question) => {
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
                <title>React Interview Questions | DevPrepHub</title>

                <meta
                    name="description"
                    content="Practice React interview questions and answers. Prepare for frontend developer interviews with DevPrepHub."
                />

                <meta
                    name="keywords"
                    content="React Interview Questions, React JS Interview Questions, Frontend Interview Questions, React Developer Jobs"
                />
            </Helmet>

            <div className="min-h-screen px-6 py-20">
                <div className="mx-auto max-w-7xl">
                    <h1 className="text-center text-5xl font-bold text-white">
                        Interview Questions
                    </h1>

                    <p className="mt-4 text-center text-slate-400">
                        Practice the most asked React interview questions.
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
                        {["All", "React", "JavaScript", "Node.js", "MongoDB"].map(
                            (category) => (
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

                    {activeCategory !== "All" && activeCategory !== "React" && (
                        <div className="mt-8 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-6 text-center">
                            <h3 className="text-xl font-semibold text-yellow-400">
                                🚧 {activeCategory} Questions Coming Soon
                            </h3>

                            <p className="mt-2 text-slate-400">
                                We are currently adding high-quality {activeCategory} interview
                                questions and answers.
                            </p>
                        </div>
                    )}

                    <p className="mt-4 text-center text-slate-400">
                        Showing {filteredQuestions.length} Questions
                    </p>

                    {(activeCategory === "All" || activeCategory === "React") && (
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
                    )}
                </div>
            </div>
        </>
    );
};

export default InterviewQuestions;