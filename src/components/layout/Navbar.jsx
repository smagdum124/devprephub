import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-medium"
      : "text-slate-300 hover:text-white transition";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-white"
        >
          <FaCode className="text-blue-500" />
          DevPrepHub
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/questions" className={navLinkClass}>
            Questions
          </NavLink>

          <NavLink to="/roadmaps" className={navLinkClass}>
            Roadmaps
          </NavLink>

          <NavLink to="/blogs" className={navLinkClass}>
            Blogs
          </NavLink>

          <NavLink to="/resume-tips" className={navLinkClass}>
            Resume Tips
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/questions"
          className="hidden md:block rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="flex flex-col gap-5 p-6">

            <NavLink
              to="/questions"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Questions
            </NavLink>

            <NavLink
              to="/roadmaps"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Roadmaps
            </NavLink>

            <NavLink
              to="/blogs"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Blogs
            </NavLink>

            <NavLink
              to="/resume-tips"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Resume Tips
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Contact
            </NavLink>

            <Link
              to="/questions"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-blue-600 px-5 py-3 text-center text-white transition hover:bg-blue-700"
            >
              Get Started
            </Link>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;