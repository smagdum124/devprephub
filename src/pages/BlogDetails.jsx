import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import { FaShareAlt } from "react-icons/fa";
import api from "../services/api";
import Breadcrumb from "../components/Breadcrumb";

const BlogDetails = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
    fetchBlogs();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const { data } = await api.get(`/blogs/${slug}`);
      setBlog(data.blog);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBlogs = async () => {
    try {
      const { data } = await api.get("/blogs");
      setBlogs(data.blogs);
    } catch (error) {
      console.log(error);
    }
  };

  const shareBlog = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Blog link copied!");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Loading...
        </h2>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Blog Not Found
        </h2>
      </div>
    );
  }

  const currentIndex = blogs.findIndex(
    (item) => item.slug === slug
  );

  const previousBlog =
    currentIndex > 0
      ? blogs[currentIndex - 1]
      : null;

  const nextBlog =
    currentIndex < blogs.length - 1
      ? blogs[currentIndex + 1]
      : null;

  const relatedBlogs = blogs
    .filter(
      (item) =>
        item.slug !== blog.slug
    )
    .slice(0, 3);

  return (
    <>
      <SEO
        title={`${blog.title} | DevPrepHub`}
        description={blog.description}
        keywords={`${blog.title}, Developer Blog`}
        type="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blog.title,
          description: blog.description,
          author: {
            "@type": "Organization",
            name: "DevPrepHub",
          },
          datePublished: blog.createdAt,
        }}
      />

      <div className="min-h-screen px-6 py-20">

        <div className="mx-auto max-w-4xl">
          <Breadcrumb />
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            {blog.title}
          </h1>

          <p className="mt-4 text-slate-500 dark:text-slate-400">
            {blog.description}
          </p>

          <div className="mt-6">
            <button
              onClick={shareBlog}
              className="flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-900 dark:text-white hover:border-blue-500"
            >
              <FaShareAlt />
              Share Blog
            </button>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">
            <p className="whitespace-pre-line leading-8 text-slate-700 dark:text-slate-300">
              {blog.content}
            </p>
          </div>

          <div className="mt-10 flex justify-between">

            {previousBlog ? (
              <Link
                to={`/blogs/${previousBlog.slug}`}
                className="text-blue-500 hover:underline"
              >
                ← Previous Blog
              </Link>
            ) : (
              <div />
            )}

            {nextBlog && (
              <Link
                to={`/blogs/${nextBlog.slug}`}
                className="text-blue-500 hover:underline"
              >
                Next Blog →
              </Link>
            )}

          </div>

          <div className="mt-16">

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Related Blogs
            </h2>

            <div className="mt-6 grid gap-4">

              {relatedBlogs.length > 0 ? (
                relatedBlogs.map((item) => (
                  <Link
                    key={item._id}
                    to={`/blogs/${item.slug}`}
                    className="rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-slate-900 dark:text-white transition hover:border-blue-500"
                  >
                    {item.title}
                  </Link>
                ))
              ) : (
                <p className="text-slate-500">
                  No related blogs found.
                </p>
              )}

            </div>

          </div>

          <Link
            to="/blogs"
            className="mt-10 inline-block text-blue-500 hover:underline"
          >
            ← Back to Blogs
          </Link>

        </div>
      </div>
    </>
  );
};

export default BlogDetails;