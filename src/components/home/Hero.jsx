import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [questionCount, setQuestionCount] = useState(0);
  const [roadmapCount, setRoadmapCount] = useState(0);
  const [resourceCount, setResourceCount] = useState(0);


  const [search, setSearch] = useState("");


  useEffect(() => {
    const animateCounter = (
      setter,
      target,
      duration = 2500
    ) => {
      let start = 0;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;

        const progress = Math.min(
          elapsed / duration,
          1
        );

        const value = Math.floor(
          progress * target
        );

        setter(value);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    };

    animateCounter(setQuestionCount, 500, 2800);
    animateCounter(setRoadmapCount, 20, 2500);
    animateCounter(setResourceCount, 100, 2600);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="relative z-10 max-w-5xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
        >
          🚀 Learn • Practice • Get Hired
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-5xl font-bold leading-tight text-slate-900 dark:text-white md:text-7xl"
        >
          Crack Developer Interviews
          <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            With Confidence
          </span>
        </motion.h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Master React, JavaScript, Node.js, System Design, Resume Building
          and everything you need to land your dream developer job.
        </p>

        <div className="mx-auto mt-10 max-w-2xl">
          <input
            type="text"
            placeholder="Search React, JavaScript, Node.js..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-slate-700 bg-white dark:bg-slate-900 px-6 py-4 text-slate-900 dark:text-white outline-none focus:border-blue-500"
          />
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate(`/questions?search=${search}`)}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-slate-900 dark:text-white transition hover:bg-blue-700"
          >
            Start Learning
          </button>

          <Link
            to="/roadmaps"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-900 dark:text-white transition hover:border-blue-500"
          >
            Explore Roadmaps
          </Link>
        </div>


        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6"> <h3 className="text-3xl font-bold text-slate-900 dark:text-white"> {questionCount}+ </h3> <p className="mt-2 text-slate-400"> Interview Questions </p> </div> <div className="rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6"> <h3 className="text-3xl font-bold text-slate-900 dark:text-white"> {roadmapCount}+ </h3> <p className="mt-2 text-slate-400"> Developer Roadmaps </p> </div> <div className="rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6"> <h3 className="text-3xl font-bold text-slate-900 dark:text-white"> {resourceCount}+ </h3> <p className="mt-2 text-slate-400"> Career Resources </p> </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;