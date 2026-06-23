import { useState } from "react";
import api from "../../services/api";

const AddResumeTip = () => {
  const [message, setMessage] =
    useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
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
      await api.post(
        "/resume-tips",
        formData
      );

      setMessage(
        "✅ Resume Tip added successfully"
      );

      setFormData({
        title: "",
        description: "",
      });

      setTimeout(() => {
        setMessage("");
      }, 3000);

    } catch (error) {
      setMessage(
        "❌ Failed to add Resume Tip"
      );

      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow dark:border-slate-800 dark:bg-slate-900"
    >
      <h1 className="text-3xl font-bold">
        Add Resume Tip
      </h1>
      {message && (
        <div
          className="
      rounded-xl
      bg-green-100
      px-4
      py-3
      text-green-700
      dark:bg-green-900/30
      dark:text-green-400
    "
        >
          {message}
        </div>
      )}
      <input
        type="text"
        name="title"
        placeholder="Tip Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
      />

      <textarea
        name="description"
        placeholder="Tip Description"
        rows="6"
        value={formData.description}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
      />

      <button
        type="submit"
        className="rounded-xl bg-blue-600 px-6 py-3 text-white"
      >
        Add Resume Tip
      </button>
    </form>
  );
};

export default AddResumeTip;