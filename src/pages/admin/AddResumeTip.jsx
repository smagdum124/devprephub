import { useState } from "react";

const AddResumeTip = () => {
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
        Add Resume Tip
      </h1>

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