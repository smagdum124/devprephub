import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribeNewsletter = async () => {
    if (!email.trim()) {
      return toast.error("Please enter your email");
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return toast.error("Enter a valid email");
    }

    try {
      setLoading(true);

      const { data } = await api.post(
        "/newsletter",
        {
          email,
        }
      );

      toast.success(data.message);

      setEmail("");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="border-t border-slate-300 bg-slate-100 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-6">

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
              Master React, JavaScript, Node.js,
              MongoDB and other in-demand
              technologies through interview
              questions, roadmaps and career
              resources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link to="/questions">Interview Questions</Link>
              <Link to="/roadmaps">Roadmaps</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/resume-tips">Resume Tips</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Resources
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link to="/questions?category=React">
                React Questions
              </Link>

              <Link to="/questions?category=JavaScript">
                JavaScript Questions
              </Link>

              <Link to="/questions?category=Node.js">
                Node.js Questions
              </Link>

              <Link to="/questions?category=MongoDB">
                MongoDB Questions
              </Link>

              <Link to="/roadmaps">
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
              <Link to="/about">About Us</Link>
              <Link to="/privacy-policy">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions">
                Terms & Conditions
              </Link>
              <Link to="/disclaimer">
                Disclaimer
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Newsletter
            </h3>

            <p className="mt-4 text-slate-500 dark:text-slate-400">
              Get the latest interview
              questions, blogs and developer
              resources directly in your inbox.
            </p>

            <div className="mt-5 space-y-3">

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    subscribeNewsletter();
                  }
                }}
                className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-slate-900 dark:text-white outline-none focus:border-blue-500"
              />

              <button
                onClick={subscribeNewsletter}
                disabled={loading}
                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Subscribing..."
                  : "Subscribe"}
              </button>

            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Connect
            </h3>

            <p className="mt-4 text-slate-500 dark:text-slate-400">
              Follow DevPrepHub for updates,
              roadmaps and interview
              preparation content.
            </p>

            <div className="mt-6 flex gap-4">

              <a
                href="https://github.com/smagdum124"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/magdum-shaikh-713221204"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={20} />
              </a>

              <a
                href="https://magdum-portfolio-tau.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCode size={20} />
              </a>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-300 pt-6 text-center text-sm text-slate-500 dark:border-slate-800">
          © {new Date().getFullYear()} DevPrepHub • Built by Magdum Shaikh
        </div>

      </div>
    </footer>
  );
};

export default Footer;
