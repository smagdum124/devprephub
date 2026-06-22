import { useState } from "react";

const Register = () => {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    console.log(formData);

    // API Tomorrow
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-8"
      >
        <h1 className="text-3xl font-bold text-center">
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="mt-6 w-full rounded-xl border px-4 py-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="mt-4 w-full rounded-xl border px-4 py-3"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="mt-4 w-full rounded-xl border px-4 py-3"
        />

        <button
          className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-white"
        >
          Register
        </button>
      </form>

    </div>
  );
};

export default Register;