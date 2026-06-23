import { useState } from "react";
import api from "../../services/api";

const AddQuestion = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    answer: "",
  });

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

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
      setLoading(true);
      setMessage("");

      const { data } =
        await api.post(
          "/questions",
          formData
        );

      setMessage(
        "✅ Question Added Successfully"
      );

      console.log(data);

      setFormData({
        title: "",
        slug: "",
        category: "",
        answer: "",
      });

    } catch (error) {
      console.log(error);

      setMessage(
        error.response?.data
          ?.message ||
        "❌ Failed To Add Question"
      );
    } finally {
      setLoading(false);
    }


  };

  return (
    <div>


    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow dark:border-slate-800 dark:bg-slate-900"
    >
      <h1 className="text-3xl font-bold">
        Add Question
      </h1>

      {message && (
        <div className="rounded-xl border border-slate-200 bg-slate-100 p-3 dark:border-slate-700 dark:bg-slate-800">
          {message}
        </div>
      )}

      <input
        type="text"
        name="title"
        placeholder="Question Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
        required
      />

      <input
        type="text"
        name="slug"
        placeholder="Slug"
        value={formData.slug}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
        required
      />

      <textarea
        name="answer"
        placeholder="Answer"
        rows="10"
        value={formData.answer}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-blue-600 px-6 py-3 text-white"
      >
        {loading
          ? "Adding..."
          : "Add Question"}
      </button>

    </form>

  </div>


  );
};

export default AddQuestion;
