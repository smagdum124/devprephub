import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import SkeletonCard from "../components/SkeletonCard";
import Breadcrumb from "../components/Breadcrumb";

const BLOGS_PER_PAGE = 12;

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } = await api.get("/blogs");
      setBlogs(data.blogs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Pagination

  const totalPages = Math.ceil(
    blogs.length / BLOGS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * BLOGS_PER_PAGE;

  const currentBlogs = blogs.slice(
    startIndex,
    startIndex + BLOGS_PER_PAGE
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
        title="Developer Blog | DevPrepHub"
        description="Explore complete learning roadmaps for React, JavaScript, Node.js, MongoDB, HTML, CSS and become job-ready."
        keywords="Developer Roadmaps, React Roadmap, JavaScript Roadmap, Node.js Roadmap, MongoDB Roadmap, DevPrepHub"
      />

      <div className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-7xl">
 <Breadcrumb />
          <h1 className="text-center text-5xl font-bold text-slate-900 dark:text-white">
            Developer Blogs
          </h1>

          <p className="mt-4 text-center text-slate-500 dark:text-slate-400">
            Learn faster with blogs and interview guides.
          </p>

          <p className="mt-4 text-center text-slate-400">
            Showing {blogs.length} Blogs
          </p>

          {loading ? (
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {[...Array(6)].map((_, index) => (
                <SkeletonCard key={index} />
              ))}

            </div>
          ) : blogs.length === 0 ? (
            <div className="mt-20 rounded-2xl border border-dashed p-12 text-center">

              <h2 className="text-3xl font-bold">
                No Blogs Found
              </h2>

              <p className="mt-3 text-slate-500">
                Blogs will appear here once published.
              </p>

            </div>
          ) : (
            <>
              <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {currentBlogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
                  >

                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {blog.title}
                    </h2>

                    <p className="mt-3 line-clamp-3 text-slate-500 dark:text-slate-400">
                      {blog.description}
                    </p>

                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="mt-5 inline-block text-blue-500 hover:underline"
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

export default Blogs;