import { useState } from "react";
import api from "../../services/api";

const AddBlog = () => {
  const [message, setMessage] =
    useState("");


  const [isError, setIsError] =
    useState(false);
  const [formData, setFormData] =
    useState({
      title: "",
      slug: "",
      description: "",
      content: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } =
        await api.post(
          "/blogs",
          formData
        );

      setMessage(
        "✅ Blog published successfully"
      );

      setFormData({
        title: "",
        slug: "",
        description: "",
        content: "",
      });

      setTimeout(() => {
        setMessage("");
      }, 3000);

    } catch (error) {
      setMessage(
        "❌ Failed to publish blog"
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
        Add Blog
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
        name="title"
        placeholder="Title"
        onChange={handleChange}
        className="w-full border p-3"
      />

      <input
        name="slug"
        placeholder="Slug"
        onChange={handleChange}
        className="w-full border p-3"
      />

      <input
        name="description"
        placeholder="Description"
        onChange={handleChange}
        className="w-full border p-3"
      />

      <textarea
        name="content"
        placeholder="Content"
        rows="10"
        onChange={handleChange}
        className="w-full border p-3"
      />

      <button
        className="rounded-xl bg-blue-600 px-6 py-3 text-white"
      >
        Publish Blog
      </button>
    </form>
  );
};

export default AddBlog;