import { useEffect, useState } from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import api from "../services/api";

const ResumeTips = () => {
  const [resumeTips, setResumeTips] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchResumeTips();
  }, []);

  const fetchResumeTips =
    async () => {
      try {
        const { data } =
          await api.get(
            "/resume-tips"
          );

        setResumeTips(
          data.tips
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <>
      <SEO
        title="Developer Resume Tips | DevPrepHub"
        description="Explore complete learning roadmaps for React, JavaScript, Node.js, MongoDB, HTML, CSS and become job-ready."
        keywords="Developer Roadmaps, React Roadmap, JavaScript Roadmap, Node.js Roadmap, MongoDB Roadmap, DevPrepHub"
      />

      <div className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-5xl">

          <h1 className="text-center text-5xl font-bold text-slate-900 dark:text-white">
            Resume Tips
          </h1>

          <p className="mt-4 text-center text-slate-500 dark:text-slate-400">
            Improve your resume and increase your interview chances.
          </p>

          {loading ? (
            <div className="mt-20 text-center text-xl">
              Loading...
            </div>
          ) : resumeTips.length ===
            0 ? (
            <div className="mt-20 text-center">
              <h2 className="text-2xl font-semibold">
                No Resume Tips Found
              </h2>

              <p className="mt-2 text-slate-500">
                Resume tips will appear here.
              </p>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-2">

              {resumeTips.map(
                (tip) => (
                  <div
                    key={tip._id}
                    className="rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6"
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
                )
              )}

            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default ResumeTips;