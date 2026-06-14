import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { resumeTips } from "../data/resumeTips";

const tips = [
    "Keep your resume to one page.",
    "Add GitHub and Portfolio links.",
    "Highlight projects with technologies used.",
    "Use action words like Built, Developed, Implemented.",
    "Keep skills relevant to the job role.",
    "Customize resume for every application.",
];

const ResumeTips = () => {
    return (
        <>
            <Helmet>
                <title>Resume Tips | DevPrepHub</title>

                <meta
                    name="description"
                    content="Professional resume tips for developers and software engineers."
                />
            </Helmet>

            <div className="min-h-screen px-6 py-20">
                <div className="mx-auto max-w-5xl">

                    <h1 className="text-center text-5xl font-bold text-slate-900 dark:text-white">
                        Resume Tips
                    </h1>

                    <p className="mt-4 text-center text-slate-500 dark:text-slate-400">
                        Improve your resume and increase your interview chances.
                    </p>

                    <div className="mt-12 grid gap-6 md:grid-cols-2">

                        {resumeTips.map((tip) => (
                            <div
                                key={tip.id}
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
                                    className="mt-4 inline-block text-blue-500"
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

export default ResumeTips;