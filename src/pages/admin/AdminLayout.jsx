import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

import {
    FiMenu,
    FiX,
    FiHome,
    FiFileText,
    FiHelpCircle,
    FiBook,
    FiLogOut,
    FiMail
} from "react-icons/fi";

const AdminLayout = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");


        window.location.href = "/login";


    };

    const navLinkClass = ({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ${isActive
            ? "bg-blue-600 text-white shadow-lg"
            : "hover:bg-slate-100 dark:hover:bg-slate-800"
        }`;

    return (<div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">


        {/* Mobile Overlay */}

        {sidebarOpen && (
            <div
                className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                onClick={() =>
                    setSidebarOpen(false)
                }
            />
        )}

        {/* Sidebar */}

        <aside
            className={`
  fixed left-0 top-0 z-50
  h-screen
  w-64
  bg-white
  border-r
  p-6
  shadow-lg
  dark:bg-slate-900
  dark:border-slate-800

  ${sidebarOpen
                    ? "translate-x-0"
                    : "-translate-x-full"
                }

  lg:sticky
  lg:top-0
  lg:translate-x-0
`}
        >

            {/* Mobile Header */}

            <div className="mb-6 flex items-center justify-between lg:hidden">

                <h2 className="text-2xl font-bold text-blue-600">
                    DevPrepHub
                </h2>

                <button
                    onClick={() =>
                        setSidebarOpen(false)
                    }
                >
                    <FiX size={24} />
                </button>

            </div>

            {/* Desktop Logo */}

            <h2 className="mb-8 hidden text-3xl font-extrabold text-blue-600 lg:block">
                DevPrepHub
            </h2>

            {/* Navigation */}

            <div className="flex flex-col gap-2">

                <NavLink
                    to="/admin"
                    end
                    className={navLinkClass}
                    onClick={() =>
                        setSidebarOpen(false)
                    }
                >
                    <FiHome size={20} />
                    Dashboard
                </NavLink>

                <NavLink
                    to="/admin/add-question"
                    className={navLinkClass}
                    onClick={() =>
                        setSidebarOpen(false)
                    }
                >
                    <FiHelpCircle size={20} />
                    Add Question
                </NavLink>

                <NavLink
                    to="/admin/add-blog"
                    className={navLinkClass}
                    onClick={() =>
                        setSidebarOpen(false)
                    }
                >
                    <FiFileText size={20} />
                    Add Blog
                </NavLink>

                <NavLink
                    to="/admin/add-resume-tip"
                    className={navLinkClass}
                    onClick={() =>
                        setSidebarOpen(false)
                    }
                >
                    <FiBook size={20} />
                    Add Resume Tip
                </NavLink>

                <NavLink
                    to="/admin/manage-questions"
                    className={navLinkClass}
                    onClick={() =>
                        setSidebarOpen(false)
                    }
                >
                    <FiHelpCircle size={20} />
                    Manage Questions
                </NavLink>

                <NavLink
                    to="/admin/manage-blogs"
                    className={navLinkClass}
                    onClick={() =>
                        setSidebarOpen(false)
                    }
                >
                    <FiFileText size={20} />
                    Manage Blogs
                </NavLink>

                <NavLink
                    to="/admin/manage-resume-tips"
                    className={navLinkClass}
                    onClick={() =>
                        setSidebarOpen(false)
                    }
                >
                    <FiBook size={20} />
                    Manage Resume Tips
                </NavLink>
                <NavLink
                    to="/admin/contacts"
                    className={navLinkClass}
                    onClick={() => setSidebarOpen(false)}
                >
                    <FiMail size={20} />
                    Contact Messages
                </NavLink>


            </div>

        </aside>

        {/* Main Section */}

        <main className="flex-1">

            {/* Header */}

            <div className="flex items-center justify-between border-b bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-900 md:px-8">

                <div className="flex items-center gap-4">

                    <button
                        className="lg:hidden"
                        onClick={() =>
                            setSidebarOpen(true)
                        }
                    >
                        <FiMenu size={24} />
                    </button>

                    <h1 className="text-xl font-bold md:text-2xl">
                        Admin Dashboard
                    </h1>

                </div>

                {/* Profile */}

                <div className="relative">

                    <button
                        onClick={() =>
                            setShowMenu(!showMenu)
                        }
                        className="flex items-center gap-3"
                    >

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                            {user?.name?.charAt(0)}
                        </div>

                        <span className="hidden font-medium md:block">
                            {user?.name}
                        </span>

                    </button>

                    {showMenu && (
                        <div className="absolute right-0 mt-3 w-60 rounded-xl border bg-white shadow-xl dark:border-slate-700 dark:bg-slate-800">

                            <div className="border-b p-4 dark:border-slate-700">

                                <h3 className="font-semibold">
                                    {user?.name}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    {user?.email}
                                </p>

                            </div>

                            <button
                                onClick={handleLogout}
                                className="flex w-full items-center gap-2 px-4 py-3 text-left hover:bg-red-100 dark:hover:bg-red-900"
                            >
                                <FiLogOut />
                                Logout
                            </button>

                        </div>
                    )}

                </div>

            </div>

            {/* Page Content */}

            <div className="p-4 md:p-6 lg:p-8">
                <Outlet />
            </div>

        </main>

    </div>


    );
};

export default AdminLayout;
