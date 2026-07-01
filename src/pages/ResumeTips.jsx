import { useEffect, useState } from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import api from "../services/api";
import SkeletonCard from "../components/SkeletonCard";
import Breadcrumb from "../components/Breadcrumb";

const TIPS_PER_PAGE = 12;

const ResumeTips = () => {
  const [resumeTips, setResumeTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchResumeTips();
  }, []);

  const fetchResumeTips = async () => {
    try {
      const { data } = await api.get("/resume-tips");
      setResumeTips(data.tips);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Pagination

  const totalPages = Math.ceil(
    resumeTips.length / TIPS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * TIPS_PER_PAGE;

  const currentTips = resumeTips.slice(
    startIndex,
    startIndex + TIPS_PER_PAGE
  );

  // Standard Pagination

  const getPagination = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  return (
    <>
      <SEO
        title="Developer Resume Tips | DevPrepHub"
        description="Professional resume tips for software developers to improve ATS score and increase interview calls."
        keywords="Resume Tips, ATS Resume, Software Developer Resume, DevPrepHub"
      />

      <div className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-5xl">
 <Breadcrumb />
          <h1 className="text-center text-5xl font-bold text-slate-900 dark:text-white">
            Resume Tips
          </h1>

          <p className="mt-4 text-center text-slate-500 dark:text-slate-400">
            Improve your resume and increase your interview chances.
          </p>

          <p className="mt-4 text-center text-slate-400">
            Showing {resumeTips.length} Resume Tips
          </p>

          {loading ? (
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {[...Array(6)].map((_, index) => (
                <SkeletonCard key={index} />
              ))}

            </div>
          ) : resumeTips.length === 0 ? (
            <div className="mt-20 text-center">
              <h2 className="text-2xl font-semibold">
                No Resume Tips Found
              </h2>

              <p className="mt-2 text-slate-500">
                Resume tips will appear here.
              </p>
            </div>
          ) : (
            <>
              <div className="mt-12 grid gap-6 md:grid-cols-2">

                {currentTips.map((tip) => (
                  <div
                    key={tip._id}
                    className="rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {tip.title}
                    </h2>

                    <p className="mt-2 text-slate-500 dark:text-slate-400">
                      {tip.description}
                    </p>

                    <Link
                      to={`/resume-tips/${tip.slug}`}
                      className="mt-4 inline-block text-blue-500 hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                ))}

              </div>

              {totalPages > 1 && (
                <div className="mt-12 flex flex-wrap items-center justify-center gap-2">

                  <button
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((prev) => prev - 1)
                    }
                    className="rounded-lg bg-slate-800 px-4 py-2 text-white disabled:opacity-50"
                  >
                    Previous
                  </button>

                  {getPagination().map((page, index) =>
                    page === "..." ? (
                      <span
                        key={index}
                        className="px-3 text-slate-500"
                      >
                        ...
                      </span>
                    ) : (
                      <button
                        key={index}
                        onClick={() =>
                          setCurrentPage(page)
                        }
                        className={`h-10 w-10 rounded-lg transition ${currentPage === page
                            ? "bg-blue-600 text-white"
                            : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                          }`}
                      >
                        {page}
                      </button>
                    )
                  )}

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

export default ResumeTips;