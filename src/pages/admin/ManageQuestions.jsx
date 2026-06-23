import { useEffect, useState } from "react";
import api from "../../services/api";

const ManageQuestions = () => {
  const [questions, setQuestions] =
    useState([]);

  const [editingId, setEditingId] =
    useState(null);

  const [editData, setEditData] =
    useState({
      title: "",
      slug: "",
      category: "",
      answer: "",
    });

  const fetchQuestions =
    async () => {
      try {
        const { data } =
          await api.get(
            "/questions"
          );


        setQuestions(
          data.questions
        );
      } catch (error) {
        console.log(error);
      }
    };


  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleDelete =
    async (id) => {
      const confirmDelete =
        window.confirm(
          "Delete this question?"
        );


      if (!confirmDelete)
        return;

      try {
        await api.delete(
          `/questions/${id}`
        );

        setQuestions(
          questions.filter(
            (q) =>
              q._id !== id
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
            `/questions/${id}`,
            editData
          );


        setQuestions(
          questions.map((q) =>
            q._id === id
              ? data.question
              : q
          )
        );

        setEditingId(null);
      } catch (error) {
        console.log(error);
      }
    };


  return (<div> <h1 className="mb-6 text-3xl font-bold">
    Manage Questions </h1>


    <div className="space-y-4">

      {questions.length === 0 ? (

        <div className="rounded-2xl border border-dashed p-12 text-center">

          <h2 className="text-2xl font-semibold">
            No Questions Found
          </h2>

          <p className="mt-2 text-slate-500">
            Start by adding your first interview question.
          </p>

        </div>

      ) : (

        questions.map(
          (question) => (
            <div
              key={question._id}
              className="rounded-xl border p-5"
            >

              {editingId ===
                question._id ? (

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
                      editData.category
                    }
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        category:
                          e.target
                            .value,
                      })
                    }
                    className="w-full rounded border p-2"
                  />

                  <textarea
                    rows="6"
                    value={
                      editData.answer
                    }
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        answer:
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
                          question._id
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
                    {
                      question.title
                    }
                  </h2>

                  <p className="mt-2 text-sm text-gray-500">
                    {
                      question.category
                    }
                  </p>

                  <p className="mt-2 line-clamp-2">
                    {
                      question.answer
                    }
                  </p>

                  <div className="mt-4 flex gap-3">

                    <button
                      onClick={() => {
                        setEditingId(
                          question._id
                        );

                        setEditData({
                          title:
                            question.title,
                          slug:
                            question.slug,
                          category:
                            question.category,
                          answer:
                            question.answer,
                        });
                      }}
                      className="rounded-lg bg-yellow-500 px-4 py-2 text-white"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(
                          question._id
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
          )
        )

      )}

    </div>
  </div>


  );
};

export default ManageQuestions;
