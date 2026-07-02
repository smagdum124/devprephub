import { useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { FiTrash2, FiMail } from "react-icons/fi";

function ManageSubscribers() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const { data } = await api.get("/newsletter");
      setSubscribers(data.subscribers);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch subscribers");
    } finally {
      setLoading(false);
    }
  };

  const deleteSubscriber = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this subscriber?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/newsletter/${id}`);

      toast.success("Subscriber deleted");

      setSubscribers((prev) =>
        prev.filter((subscriber) => subscriber._id !== id)
      );
    } catch (error) {
      console.log(error);
      toast.error("Delete failed");
    }
  };

  return (
    <div className="p-6">

      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-3 dark:bg-slate-800">
          <FiMail
            size={24}
            className="text-blue-600"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Newsletter Subscribers
          </h1>

          <p className="text-slate-500">
            Total Subscribers : {subscribers.length}
          </p>
        </div>
      </div>

      {loading ? (
        <div className="rounded-xl border border-slate-300 bg-white p-10 text-center dark:border-slate-800 dark:bg-slate-900">
          Loading Subscribers...
        </div>
      ) : subscribers.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold">
            No Subscribers Yet
          </h2>

          <p className="mt-2 text-slate-500">
            Once users subscribe, they'll appear here.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

          <table className="w-full">

            <thead className="border-b border-slate-300 dark:border-slate-800">

              <tr className="text-left">

                <th className="px-6 py-4">
                  #
                </th>

                <th className="px-6 py-4">
                  Email
                </th>

                <th className="px-6 py-4">
                  Subscribed On
                </th>

                <th className="px-6 py-4 text-center">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {subscribers.map(
                (subscriber, index) => (
                  <tr
                    key={subscriber._id}
                    className="border-b border-slate-200 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/40"
                  >

                    <td className="px-6 py-4">
                      {index + 1}
                    </td>

                    <td className="px-6 py-4 font-medium">
                      {subscriber.email}
                    </td>

                    <td className="px-6 py-4">
                      {new Date(
                        subscriber.createdAt
                      ).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-4 text-center">

                      <button
                        onClick={() =>
                          deleteSubscriber(
                            subscriber._id
                          )
                        }
                        className="rounded-lg bg-red-500 p-2 text-white transition hover:bg-red-600"
                      >
                        <FiTrash2 />
                      </button>

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>
      )}
    </div>
  );
}

export default ManageSubscribers;
