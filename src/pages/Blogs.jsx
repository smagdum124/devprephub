import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Developer Blogs | DevPrepHub</title>

        <meta
          name="description"
          content="Developer blogs, interview guides and career resources."
        />
      </Helmet>

      <div className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <h1 className="text-center text-5xl font-bold text-slate-900 dark:text-white">
            Developer Blogs
          </h1>

          <p className="mt-4 text-center text-slate-500 dark:text-slate-400">
            Learn faster with blogs and interview guides.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6"
              >
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {blog.title}
                </h2>

                <p className="mt-3 text-slate-500 dark:text-slate-400">
                  {blog.description}
                </p>

                <Link
                  to={`/blogs/${blog.slug}`}
                  className="mt-5 inline-block text-blue-500"
                >
                  Read More →
                </Link>
              </div>
            ))}

          </div>

        </div>
      </div>
    </>
  );
};

export default Blogs;