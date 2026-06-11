import { useParams } from "react-router-dom";
import { reactQuestions } from "../data/reactQuestions";
import { Link } from "react-router-dom";

const QuestionDetails = () => {
    const { slug } = useParams();

    const question = reactQuestions.find(
        (item) => item.slug === slug
    );

    if (!question) {
        return (
            <h1 className="p-10 text-center text-white">
                Question Not Found
            </h1>
        );
    }

    return (
        <div className="min-h-screen px-6 py-20">
            <div className="mx-auto max-w-4xl">

                <span className="text-blue-400">
                    {question.category}
                </span>

                <h1 className="mt-4 text-4xl font-bold text-white">
                    {question.title}
                </h1>

                <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8">
                    <p className="leading-8 text-slate-300">
                        {question.answer}
                    </p>
                </div>
                <Link
                    to="/questions"
                    className="mt-8 inline-block text-blue-400"
                >
                    ← Back to Questions
                </Link>
            </div>

        </div>
    );
};

export default QuestionDetails;