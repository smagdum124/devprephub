import { useState } from "react";

const AddBlog = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <h1 className="text-3xl font-bold">
        Add Blog
      </h1>

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