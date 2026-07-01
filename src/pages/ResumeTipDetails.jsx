import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import { FaShareAlt } from "react-icons/fa";
import api from "../services/api";
import Breadcrumb from "../components/Breadcrumb";

const ResumeTipDetails = () => {
  const { slug } = useParams();

  const [tip, setTip] =
    useState(null);

  const [tips, setTips] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchTip();
    fetchTips();
  }, [slug]);

  const fetchTip = async () => {
    try {
      const { data } =
        await api.get(
          `/resume-tips/${slug}`
        );

      setTip(data.tip);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTips = async () => {
    try {
      const { data } =
        await api.get(
          "/resume-tips"
        );

      setTips(data.tips);
    } catch (error) {
      console.log(error);
    }
  };

  const shareTip = () => {
    navigator.clipboard.writeText(
      window.location.href
    );

    alert(
      "Resume Tip link copied!"
    );
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Loading...
        </h2>
      </div>
    );
  }

  if (!tip) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Resume Tip Not Found
        </h2>
      </div>
    );
  }

  const currentIndex =
    tips.findIndex(
      (item) =>
        item.slug === slug
    );

  const previousTip =
    currentIndex > 0
      ? tips[currentIndex - 1]
      : null;

  const nextTip =
    currentIndex <
      tips.length - 1
      ? tips[currentIndex + 1]
      : null;

  const relatedTips =
    tips
      .filter(
        (item) =>
          item.slug !==
          tip.slug
      )
      .slice(0, 3);

  return (
    <>
      <SEO
        title={`${tip.title} | DevPrepHub`}
        description={tip.description}
        keywords="Resume Tips, Resume Guide"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: tip.title,
          description: tip.description,
        }}
      />

      <div className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Breadcrumb />
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            {tip.title}
          </h1>

          <p className="mt-4 text-slate-500 dark:text-slate-400">
            {tip.description}
          </p>

          <div className="mt-6">
            <button
              onClick={
                shareTip
              }
              className="flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 hover:border-blue-500 dark:border-slate-700"
            >
              <FaShareAlt />
              Share Tip
            </button>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-300 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
            <p className="whitespace-pre-line leading-8 text-slate-700 dark:text-slate-300">
              {tip.content}
            </p>
          </div>

          <div className="mt-10 flex justify-between">

            {previousTip ? (
              <Link
                to={`/resume-tips/${previousTip.slug}`}
                className="text-blue-500 hover:underline"
              >
                ← Previous Tip
              </Link>
            ) : (
              <div />
            )}

            {nextTip && (
              <Link
                to={`/resume-tips/${nextTip.slug}`}
                className="text-blue-500 hover:underline"
              >
                Next Tip →
              </Link>
            )}

          </div>

          <div className="mt-16">

            <h2 className="text-2xl font-bold">
              Related Resume Tips
            </h2>

            <div className="mt-6 grid gap-4">

              {relatedTips.length >
                0 ? (
                relatedTips.map(
                  (item) => (
                    <Link
                      key={
                        item._id
                      }
                      to={`/resume-tips/${item.slug}`}
                      className="rounded-xl border bg-white p-4 transition hover:border-blue-500 dark:bg-slate-900"
                    >
                      {
                        item.title
                      }
                    </Link>
                  )
                )
              ) : (
                <p className="text-slate-500">
                  No related
                  resume tips
                  found.
                </p>
              )}

            </div>

          </div>

          <Link
            to="/resume-tips"
            className="mt-10 inline-block text-blue-500 hover:underline"
          >
            ← Back to
            Resume Tips
          </Link>

        </div>
      </div>
    </>
  );
};

export default ResumeTipDetails;