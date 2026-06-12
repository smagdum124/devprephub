import { FaRocket } from "react-icons/fa";

const ComingSoon = ({ title }) => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <FaRocket className="mx-auto text-6xl text-blue-500" />

        <h1 className="mt-6 text-5xl font-bold text-slate-900 dark:text-white">
          {title}
        </h1>

        <p className="mt-4 text-slate-400">
          We're working hard on this section.
          Stay tuned for exciting content.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;