import { useEffect, useState } from "react";
import api from "../../services/api";

const ManageResumeTips = () => {
const [tips, setTips] =
useState([]);

const [editingId, setEditingId] =
useState(null);

const [editData, setEditData] =
useState({
title: "",
description: "",
});

const fetchTips =
async () => {
try {
const { data } =
await api.get(
"/resume-tips"
);


    setTips(data.tips);
  } catch (error) {
    console.log(error);
  }
};


useEffect(() => {
fetchTips();
}, []);

const handleDelete =
async (id) => {
const confirmDelete =
window.confirm(
"Delete this Resume Tip?"
);


  if (!confirmDelete)
    return;

  try {
    await api.delete(
      `/resume-tips/${id}`
    );

    setTips(
      tips.filter(
        (tip) =>
          tip._id !== id
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
`/resume-tips/${id}`,
editData
);


    setTips(
      tips.map((tip) =>
        tip._id === id
          ? data.tip
          : tip
      )
    );

    setEditingId(null);
  } catch (error) {
    console.log(error);
  }
};


return ( <div>


  <h1 className="mb-6 text-3xl font-bold">
    Manage Resume Tips
  </h1>

  <div className="space-y-4">

    {tips.length === 0 ? (

      <div className="rounded-2xl border border-dashed p-12 text-center">

        <h2 className="text-2xl font-semibold">
          No Resume Tips Found
        </h2>

        <p className="mt-2 text-slate-500">
          Start by adding your first Resume Tip.
        </p>

      </div>

    ) : (

      tips.map((tip) => (
        <div
          key={tip._id}
          className="rounded-xl border p-5"
        >

          {editingId ===
          tip._id ? (

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

              <textarea
                rows="6"
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

              <div className="flex gap-3">

                <button
                  onClick={() =>
                    handleUpdate(
                      tip._id
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
                {tip.title}
              </h2>

              <p className="mt-2 text-slate-500">
                {
                  tip.description
                }
              </p>

              <div className="mt-4 flex gap-3">

                <button
                  onClick={() => {
                    setEditingId(
                      tip._id
                    );

                    setEditData({
                      title:
                        tip.title,
                      description:
                        tip.description,
                    });
                  }}
                  className="rounded-lg bg-yellow-500 px-4 py-2 text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(
                      tip._id
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

export default ManageResumeTips;
