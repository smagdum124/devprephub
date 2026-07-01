import { Link, useLocation } from "react-router-dom";
import { FaChevronRight, FaHome } from "react-icons/fa";

const Breadcrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <div className="mb-8">
      <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">

        <Link
          to="/"
          className="flex items-center gap-1 hover:text-blue-500"
        >
          <FaHome size={13} />
          Home
        </Link>

        {pathnames.map((value, index) => {
          const to =
            "/" + pathnames.slice(0, index + 1).join("/");

          const isLast =
            index === pathnames.length - 1;

          const label = value
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

          return (
            <div
              key={to}
              className="flex items-center gap-2"
            >
              <FaChevronRight size={10} />

              {isLast ? (
                <span className="font-medium text-slate-900 dark:text-white">
                  {label}
                </span>
              ) : (
                <Link
                  to={to}
                  className="hover:text-blue-500"
                >
                  {label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Breadcrumb;