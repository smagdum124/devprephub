import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      <div className="absolute h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="relative z-10 text-center">

        <h1 className="text-8xl font-bold text-blue-500 md:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Oops! Lost In The Code?
        </h2>

        <p className="mx-auto mt-4 max-w-md text-slate-400">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <Link
            to="/"
            className="rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            Back To Home
          </Link>

          <Link
            to="/questions"
            className="rounded-xl border border-slate-700 px-6 py-3 text-white transition hover:border-blue-500"
          >
            Browse Questions
          </Link>

        </div>

      </div>
    </div>
  );
};

export default NotFound;