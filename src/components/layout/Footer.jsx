import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-300 bg-slate-100 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-5">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white"
            >
              <FaCode className="text-blue-500" />
              DevPrepHub
            </Link>

            <p className="mt-4 max-w-sm text-slate-500 dark:text-slate-400">
              Master React, JavaScript, Node.js, MongoDB and other
              in-demand technologies through interview questions,
              roadmaps and career resources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/questions"
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
              >
                Interview Questions
              </Link>

              <Link
                to="/roadmaps"
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
              >
                Roadmaps
              </Link>

              <Link
                to="/blogs"
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
              >
                Blogs
              </Link>

              <Link
                to="/resume-tips"
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
              >
                Resume Tips
              </Link>

              <Link
                to="/contact"
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Resources
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/questions?category=React"
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
              >
                React Questions
              </Link>

              <Link
                to="/questions?category=JavaScript"
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
              >
                JavaScript Questions
              </Link>

              <Link
                to="/questions?category=Node.js"
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
              >
                Node.js Questions
              </Link>

              <Link
                to="/questions?category=MongoDB"
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
              >
                MongoDB Questions
              </Link>

              <Link
                to="/roadmaps"
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
              >
                Developer Roadmaps
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/about"
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
              >
                About Us
              </Link>

              <Link
                to="/privacy-policy"
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-and-conditions"
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
              >
                Terms & Conditions
              </Link>

              <Link
               to="/disclaimer"
               className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
               >
                Disclaimer
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Connect
            </h3>

            <p className="mt-4 text-slate-500 dark:text-slate-400">
              Follow DevPrepHub for updates, roadmaps and interview
              preparation content.
            </p>

            <div className="mt-6 flex gap-4">

              <a
                aria-label="GitHub Profile"
                href="https://github.com/smagdum124"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 dark:border-slate-800 p-3 text-slate-500 dark:text-slate-400 transition hover:border-blue-500 hover:text-blue-500"
              >
                <FaGithub size={20} />
              </a>

              <a
                aria-label="LinkedIn Profile"
                href="https://www.linkedin.com/in/magdum-shaikh-713221204"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 dark:border-slate-800 p-3 text-slate-500 dark:text-slate-400 transition hover:border-blue-500 hover:text-blue-500"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                aria-label="Portfolio Website"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 dark:border-slate-800 p-3 text-slate-500 dark:text-slate-400 transition hover:border-blue-500 hover:text-blue-500"
              >
                <FaXTwitter size={20} />
              </a>

              <a
                href="https://magdum-portfolio-tau.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 dark:border-slate-800 p-3 text-slate-500 dark:text-slate-400 transition hover:border-blue-500 hover:text-blue-500"
              >
                <FaCode size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-300 pt-6 text-center text-sm text-slate-500 dark:border-slate-800">
          © {new Date().getFullYear()} DevPrepHub • Built by Magdum Shaikh
        </div>

      </div>
    </footer>
  );
};

export default Footer;