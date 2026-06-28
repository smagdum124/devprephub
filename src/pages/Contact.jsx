import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaClock,
} from "react-icons/fa";
import SEO from "../components/SEO";
import { useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const { data } = await api.post(
                "/contact",
                formData
            );

            toast.success(data.message);

            setFormData({
                name: "",
                email: "",
                message: "",
            });

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
        <>

            <SEO
                title="Contact Us | DevPrepHub"
                description="Developer Blogs and Career Guides"
                keywords="Developer Blogs, React Blogs"
                name="description"
                content="Contact DevPrepHub for suggestions, feedback, collaborations and developer career guidance."
            />

            <div className="min-h-screen px-6 py-20">
                <div className="mx-auto max-w-7xl">

                    {/* Heading */}

                    <div className="text-center">
                        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                            💬 Get In Touch
                        </span>

                        <h1 className="mt-6 text-5xl font-bold text-slate-900 dark:text-white md:text-6xl">
                            Let's Talk About
                            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Your Career Growth
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
                            Have a question, suggestion, collaboration idea or feedback?
                            We'd love to hear from you.
                        </p>
                    </div>

                    {/* Content */}

                    <div className="mt-16 grid gap-8 lg:grid-cols-2">

                        {/* Contact Form */}

                        <div className="rounded-3xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                                Send a Message
                            </h2>

                            <p className="mt-2 text-slate-400">
                                Fill out the form below and we'll get back to you soon.
                            </p>

                            <form onSubmit={handleSubmit}
                                className="mt-8 space-y-5">

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 outline-none focus:border-blue-500"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 outline-none focus:border-blue-500"
                                />

                                <textarea
                                    rows="6"
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 outline-none focus:border-blue-500"
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>

                            </form>
                        </div>

                        {/* Contact Info */}

                        <div className="space-y-6">

                            <div className="rounded-3xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition hover:border-blue-500">
                                <div className="flex items-center gap-4">
                                    <FaEnvelope size={24} className="text-blue-400" />

                                    <div>
                                        <h3 className="font-semibold text-slate-900 dark:text-white">
                                            Email
                                        </h3>

                                        <p className="text-slate-400">
                                            smagdum124@email.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition hover:border-blue-500">
                                <div className="flex items-center gap-4">
                                    <FaLinkedin size={24} className="text-blue-400" />

                                    <div>
                                        <a
                                            href="https://www.linkedin.com/in/magdum-shaikh-713221204"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-400 hover:text-blue-400"
                                        >
                                            Connect on LinkedIn →
                                        </a>

                                        <p className="text-slate-400">
                                            Connect with DevPrepHub
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition hover:border-blue-500">
                                <div className="flex items-center gap-4">
                                    <FaGithub size={24} className="text-blue-400" />

                                    <div>
                                        <a
                                            href="https://github.com/smagdum124"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-400 hover:text-blue-400"
                                        >
                                            Visit GitHub →
                                        </a>

                                        <p className="text-slate-400">
                                            Explore our projects
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition hover:border-blue-500">
                                <div className="flex items-center gap-4">
                                    <FaClock size={24} className="text-blue-400" />

                                    <div>
                                        <h3 className="font-semibold text-slate-900 dark:text-white">
                                            Response Time
                                        </h3>

                                        <p className="text-slate-400">
                                            Usually within 24-48 hours
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;