import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-white"
        >
          <FaCode className="text-blue-500" />
          DevPrepHub
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-slate-300">
          <Link
            to="/questions"
            className="hover:text-white transition"
          >
            Questions
          </Link>

          <Link
            to="/roadmaps"
            className="hover:text-white transition"
          >
            Roadmaps
          </Link>

          <Link
            to="/blogs"
            className="hover:text-white transition"
          >
            Blogs
          </Link>

          <Link
            to="/resume-tips"
            className="hover:text-white transition"
          >
            Resume Tips
          </Link>

          <Link
            to="/contact"
            className="hover:text-white transition"
          >
            Contact
          </Link>
        </nav>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Navbar;