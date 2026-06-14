import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogs } from "../data/blogs";
import { FaShareAlt } from "react-icons/fa";

const BlogDetails = () => {
    const { slug } = useParams();

    const blog = blogs.find(
        (item) => item.slug === slug
    );

    if (!blog) {
        return (<h1 className="p-10 text-center text-slate-900 dark:text-white">
            Blog Not Found </h1>
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
            (item) => item.slug !== blog.slug
        )
        .slice(0, 3);

    const shareBlog = () => {
        navigator.clipboard.writeText(
            window.location.href
        );

        ```
alert("Blog link copied!");
```

    };

    return (
        <> <Helmet> <title>
            {blog.title} | DevPrepHub </title>

            <meta
                name="description"
                content={blog.description}
            />

            <meta
                name="keywords"
                content={`${blog.title}, Developer Blog, Interview Preparation`}
            />
        </Helmet>

            <div className="min-h-screen px-6 py-20">
                <div className="mx-auto max-w-4xl">

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
                                className="text-blue-500 hover:text-blue-600"
                            >
                                ← Previous Blog
                            </Link>
                        ) : (
                            <div />
                        )}

                        {nextBlog ? (
                            <Link
                                to={`/blogs/${nextBlog.slug}`}
                                className="text-blue-500 hover:text-blue-600"
                            >
                                Next Blog →
                            </Link>
                        ) : null}

                    </div>

                    <div className="mt-16">

                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            Related Blogs
                        </h2>

                        <div className="mt-6 grid gap-4">

                            {relatedBlogs.map((item) => (
                                <Link
                                    key={item.slug}
                                    to={`/blogs/${item.slug}`}
                                    className="rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-slate-900 dark:text-white transition hover:border-blue-500"
                                >
                                    {item.title}
                                </Link>
                            ))}

                        </div>

                    </div>

                    <Link
                        to="/blogs"
                        className="mt-10 inline-block text-blue-500 hover:text-blue-600"
                    >
                        ← Back to Blogs
                    </Link>

                </div>
            </div>
        </>


    );
};

export default BlogDetails;
