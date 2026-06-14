import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { resumeTips } from "../data/resumeTips";
import { FaShareAlt } from "react-icons/fa";

const ResumeTipDetails = () => {
const { slug } = useParams();

const tip = resumeTips.find(
(item) => item.slug === slug
);

if (!tip) {
return ( <h1 className="p-10 text-center text-slate-900 dark:text-white">
Resume Tip Not Found </h1>
);
}

const currentIndex = resumeTips.findIndex(
(item) => item.slug === slug
);

const previousTip =
currentIndex > 0
? resumeTips[currentIndex - 1]
: null;

const nextTip =
currentIndex < resumeTips.length - 1
? resumeTips[currentIndex + 1]
: null;

const relatedTips = resumeTips
.filter(
(item) => item.slug !== tip.slug
)
.slice(0, 3);

const shareTip = () => {
navigator.clipboard.writeText(
window.location.href
);


alert("Resume tip link copied!");


};

return (
<> <Helmet> <title>
{tip.title} | DevPrepHub </title>

```
    <meta
      name="description"
      content={tip.description}
    />

    <meta
      name="keywords"
      content={`${tip.title}, Resume Tips, Developer Resume`}
    />
  </Helmet>

  <div className="min-h-screen px-6 py-20">
    <div className="mx-auto max-w-4xl">

      <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
        {tip.title}
      </h1>

      <p className="mt-4 text-slate-500 dark:text-slate-400">
        {tip.description}
      </p>

      <div className="mt-6">
        <button
          onClick={shareTip}
          className="flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-900 dark:text-white hover:border-blue-500"
        >
          <FaShareAlt />
          Share Tip
        </button>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">
        <p className="whitespace-pre-line leading-8 text-slate-700 dark:text-slate-300">
          {tip.content}
        </p>
      </div>

      <div className="mt-10 flex justify-between">

        {previousTip ? (
          <Link
            to={`/resume-tips/${previousTip.slug}`}
            className="text-blue-500 hover:text-blue-600"
          >
            ← Previous Tip
          </Link>
        ) : (
          <div />
        )}

        {nextTip ? (
          <Link
            to={`/resume-tips/${nextTip.slug}`}
            className="text-blue-500 hover:text-blue-600"
          >
            Next Tip →
          </Link>
        ) : null}

      </div>

      <div className="mt-16">

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Related Resume Tips
        </h2>

        <div className="mt-6 grid gap-4">

          {relatedTips.map((item) => (
            <Link
              key={item.slug}
              to={`/resume-tips/${item.slug}`}
              className="rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-slate-900 dark:text-white transition hover:border-blue-500"
            >
              {item.title}
            </Link>
          ))}

        </div>

      </div>

      <Link
        to="/resume-tips"
        className="mt-10 inline-block text-blue-500 hover:text-blue-600"
      >
        ← Back to Resume Tips
      </Link>

    </div>
  </div>
</>


);
};

export default ResumeTipDetails;
