import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } =
        await api.get("/blogs");

      setBlogs(data.blogs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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

          <h1 className="text-center text-5xl font-bold text-slate-900 dark:text-white">
            Developer Blogs
          </h1>

          <p className="mt-4 text-center text-slate-500 dark:text-slate-400">
            Learn faster with blogs and interview guides.
          </p>

          {loading ? (
            <div className="mt-20 text-center">
              <h2 className="text-2xl font-semibold">
                Loading Blogs...
              </h2>
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
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {blogs.map((blog) => (
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
          )}

        </div>
      </div>
    </>
  );
};

export default Blogs;