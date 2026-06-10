import { motion } from "framer-motion";

const Hero = () => {
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
          className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl"
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
            className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-6 py-4 text-white outline-none focus:border-blue-500"
          />
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Start Learning
          </button>

          <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-blue-500">
            Explore Roadmaps
          </button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
            React
          </span>
          <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
            JavaScript
          </span>
          <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
            Node.js
          </span>
          <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
            MongoDB
          </span>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-bold text-white">500+</h3>
            <p className="mt-2 text-slate-400">Interview Questions</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-bold text-white">20+</h3>
            <p className="mt-2 text-slate-400">Developer Roadmaps</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-bold text-white">100+</h3>
            <p className="mt-2 text-slate-400">Career Resources</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;