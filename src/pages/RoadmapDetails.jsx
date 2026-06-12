import { Link, useParams } from "react-router-dom";
import { roadmaps } from "../data/roadmaps";
import { FaArrowLeft } from "react-icons/fa";
import { getRoadmapIcon } from "../utils/getRoadmapIcon";
const RoadmapDetails = () => {
    const { slug } = useParams();

    const roadmap = roadmaps.find(
        (item) => item.slug === slug
    );

    if (!roadmap) {
        return (
            <div className="min-h-screen flex items-center justify-center text-slate-900 dark:text-white">
                Roadmap Not Found
            </div>
        );
    }

    return (
        <div className="min-h-screen px-6 py-20">
            <div className="mx-auto max-w-5xl">



                <div className="flex items-center gap-4">

                    <div className="text-5xl">
                        {getRoadmapIcon(roadmap.icon)}
                    </div>
                    <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
                        {roadmap.title}
                    </h1>

                </div>

                <p className="mt-4 text-slate-400">
                    {roadmap.description}
                </p>

                <div className="mt-10 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">

                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                        Learning Path
                    </h2>

                    <div className="mt-6 grid gap-4">

                        {roadmap.steps.map((step, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-950 p-4 text-slate-300"
                            >
                                ✅ {step}
                            </div>
                        ))}

                    </div>

                </div>
                <Link
                    to="/roadmaps"
                    className=" mt-4 mb-8 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                >
                    <FaArrowLeft />
                    Back to Roadmaps
                </Link>
            </div>
        </div>
    );
};

export default RoadmapDetails;