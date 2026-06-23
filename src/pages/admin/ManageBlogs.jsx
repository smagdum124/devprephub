import { useEffect, useState } from "react";
import api from "../../services/api";

const ManageBlogs = () => {
  const [blogs, setBlogs] =
    useState([]);

  const [editingId, setEditingId] =
    useState(null);

  const [editData, setEditData] =
    useState({
      title: "",
      slug: "",
      description: "",
      content: "",
    });

  const fetchBlogs =
    async () => {
      try {
        const { data } =
          await api.get("/blogs");


        setBlogs(data.blogs);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete =
    async (id) => {
      if (
        !window.confirm(
          "Delete this blog?"
        )
      )
        return;


      try {
        await api.delete(
          `/blogs/${id}`
        );

        setBlogs(
          blogs.filter(
            (blog) =>
              blog._id !== id
          )
        );
      } catch (error) {
        console.log(error);
      }
    };


  const handleUpdate =
    async (id) => {
      try {
        const { data } =
          await api.put(
            `/blogs/${id}`,
            editData
          );


        setBlogs(
          blogs.map((blog) =>
            blog._id === id
              ? data.blog
              : blog
          )
        );

        setEditingId(null);
      } catch (error) {
        console.log(error);
      }
    };


  return (<div> <h1 className="mb-6 text-3xl font-bold">
    Manage Blogs </h1>


    <div className="space-y-4">

      {blogs.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-12 text-center">
          <h2 className="text-2xl font-semibold">
            No Blogs Found
          </h2>

          <p className="mt-2 text-slate-500">
            Start by publishing your first blog.
          </p>
        </div>
      ) : (
        blogs.map((blog) => (
          <div
            key={blog._id}
            className="rounded-xl border p-5"
          >
            {editingId ===
              blog._id ? (
              <div className="space-y-3">

                <input
                  type="text"
                  value={
                    editData.title
                  }
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      title:
                        e.target
                          .value,
                    })
                  }
                  className="w-full rounded border p-2"
                />

                <input
                  type="text"
                  value={
                    editData.slug
                  }
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      slug:
                        e.target
                          .value,
                    })
                  }
                  className="w-full rounded border p-2"
                />

                <input
                  type="text"
                  value={
                    editData.description
                  }
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      description:
                        e.target
                          .value,
                    })
                  }
                  className="w-full rounded border p-2"
                />

                <textarea
                  rows="8"
                  value={
                    editData.content
                  }
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      content:
                        e.target
                          .value,
                    })
                  }
                  className="w-full rounded border p-2"
                />

                <div className="flex gap-3">

                  <button
                    onClick={() =>
                      handleUpdate(
                        blog._id
                      )
                    }
                    className="rounded-lg bg-green-600 px-4 py-2 text-white"
                  >
                    Save
                  </button>

                  <button
                    onClick={() =>
                      setEditingId(
                        null
                      )
                    }
                    className="rounded-lg bg-gray-500 px-4 py-2 text-white"
                  >
                    Cancel
                  </button>

                </div>

              </div>
            ) : (
              <>
                <h2 className="text-xl font-semibold">
                  {blog.title}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  {
                    blog.description
                  }
                </p>

                <div className="mt-4 flex gap-3">

                  <button
                    onClick={() => {
                      setEditingId(
                        blog._id
                      );

                      setEditData({
                        title:
                          blog.title,
                        slug:
                          blog.slug,
                        description:
                          blog.description,
                        content:
                          blog.content,
                      });
                    }}
                    className="rounded-lg bg-yellow-500 px-4 py-2 text-white"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(
                        blog._id
                      )
                    }
                    className="rounded-lg bg-red-500 px-4 py-2 text-white"
                  >
                    Delete
                  </button>

                </div>
              </>
            )}
          </div>
        ))
      )}

    </div>
  </div>

  );
};

export default ManageBlogs;
