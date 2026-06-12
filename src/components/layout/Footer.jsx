import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-300 dark:border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white"
            >
              <FaCode className="text-blue-500" />
              DevPrepHub
            </Link>

            <p className="mt-4 max-w-sm text-slate-400">
              Learn, Practice and Get Hired.
              The ultimate platform for developers preparing
              for interviews and building successful careers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-slate-400">

              <Link
                to="/questions"
                className="hover:text-slate-900 dark:text-white transition"
              >
                Interview Questions
              </Link>

              <Link
                to="/roadmaps"
                className="hover:text-slate-900 dark:text-white transition"
              >
                Roadmaps
              </Link>

              <Link
                to="/blogs"
                className="hover:text-slate-900 dark:text-white transition"
              >
                Blogs
              </Link>

              <Link
                to="/resume-tips"
                className="hover:text-slate-900 dark:text-white transition"
              >
                Resume Tips
              </Link>

              <Link
                to="/contact"
                className="hover:text-slate-900 dark:text-white transition"
              >
                Contact
              </Link>


            </div>
          </div>
          {/* Legal */}

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-slate-400">

              <Link
                to="/about"
                className="hover:text-slate-900 dark:text-white transition"
              >
                About Us
              </Link>

              <Link
                to="/privacy-policy"
                className="hover:text-slate-900 dark:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-and-conditions"
                className="hover:text-slate-900 dark:text-white transition"
              >
                Terms & Conditions
              </Link>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Connect
            </h3>

            <p className="mt-4 text-slate-400">
              Follow DevPrepHub for updates,
              roadmaps and interview preparation content.
            </p>

            <div className="mt-6 flex gap-4">

              <a
                href="https://github.com/smagdum124"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 dark:border-slate-800 p-3 text-slate-400 transition hover:border-blue-500 hover:text-slate-900 dark:text-white"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/magdum-shaikh-713221204"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 dark:border-slate-800 p-3 text-slate-400 transition hover:border-blue-500 hover:text-slate-900 dark:text-white"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 dark:border-slate-800 p-3 text-slate-400 transition hover:border-blue-500 hover:text-slate-900 dark:text-white"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="https://magdum-portfolio-tau.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 dark:border-slate-800 p-3 text-slate-400 transition hover:border-blue-500 hover:text-slate-900 dark:text-white"
              >
                Portfolio
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-300 dark:border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} DevPrepHub. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;