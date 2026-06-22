import { useState } from "react";

const AddQuestion = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    answer: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Axios API Tomorrow
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <h1 className="text-3xl font-bold">
        Add Question
      </h1>

      <input
        type="text"
        name="title"
        placeholder="Question Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
      />

      <input
        type="text"
        name="slug"
        placeholder="Slug"
        value={formData.slug}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
      />

      <textarea
        name="answer"
        placeholder="Answer"
        rows="10"
        value={formData.answer}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
      />

      <button
        type="submit"
        className="rounded-xl bg-blue-600 px-6 py-3 text-white"
      >
        Add Question
      </button>
    </form>
  );
};

export default AddQuestion;