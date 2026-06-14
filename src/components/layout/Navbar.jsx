import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaCode, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
const { theme, toggleTheme } = useTheme();
const [menuOpen, setMenuOpen] = useState(false);

const navLinkClass = ({ isActive }) =>
isActive
? "text-blue-500 font-semibold"
: "text-slate-700 dark:text-slate-300 hover:text-blue-500 transition";

return ( <header className="sticky top-0 z-50 border-b border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-950"> <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">


    {/* Logo */}
    <Link
      to="/"
      className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white"
    >
      <FaCode className="text-blue-500" />
      DevPrepHub
    </Link>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center gap-8">
      <NavLink to="/" className={navLinkClass}>
        Home
      </NavLink>

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

    {/* Desktop Actions */}
    <div className="hidden md:flex items-center gap-3">

      <button
        onClick={toggleTheme}
        className="rounded-xl border border-slate-300 dark:border-slate-700 p-3 text-slate-700 dark:text-white hover:border-blue-500 transition"
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>

      <Link
        to="/questions"
        className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
      >
        Get Started
      </Link>

    </div>

    {/* Mobile Actions */}
    <div className="flex items-center gap-3 md:hidden">

      <button
        onClick={toggleTheme}
        className="rounded-xl border border-slate-300 dark:border-slate-700 p-2 text-slate-700 dark:text-white"
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-slate-900 dark:text-white"
      >
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

    </div>

  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="border-t border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 md:hidden">

      <div className="flex flex-col gap-5 p-6">

        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className={navLinkClass}
        >
          Home
        </NavLink>

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
          className="rounded-xl bg-blue-600 px-5 py-3 text-center font-medium text-white transition hover:bg-blue-700"
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
