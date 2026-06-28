import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SEO from "../components/SEO";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      setError("");

      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      navigate("/admin");

    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Login failed"
      );
    } finally {
      setLoading(false);
    }


  };

  return (<div className="flex min-h-screen items-center justify-center bg-slate-100 px-6 dark:bg-slate-950">

    <SEO
      title="Blogs | DevPrepHub"
      description="Developer Blogs and Career Guides"
      keywords="Developer Blogs, React Blogs"
    />
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-2xl border border-slate-300 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900"
    >
      <h1 className="text-center text-3xl font-bold">
        Admin Login
      </h1>

      <p className="mt-2 text-center text-sm text-gray-500">
        Sign in to DevPrepHub Dashboard
      </p>

      {error && (
        <div className="mt-4 rounded-lg border border-red-500 bg-red-100 px-4 py-3 text-red-600">
          {error}
        </div>
      )}

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
        className="mt-6 w-full rounded-xl border px-4 py-3"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
        className="mt-4 w-full rounded-xl border px-4 py-3"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      <div className="mt-6 border-t pt-4 text-center">
        <p className="text-sm text-red-500 font-medium">
          Authorized Administrators Only
        </p>
      </div>
    </form>

  </div>


  );
};

export default Login;
