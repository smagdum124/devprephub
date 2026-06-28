import { useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

const ManageContacts = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {

      const { data } = await api.get("/contact");

      setContacts(data.contacts);

    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {

    if (!window.confirm("Delete message?"))
      return;

    try {

      await api.delete(`/contact/${id}`);

      toast.success("Deleted successfully");

      fetchContacts();

    } catch (error) {

      toast.error("Delete failed");

    }
  };

  const markRead = async (id) => {

    try {

      await api.put(`/contact/${id}/read`);

      fetchContacts();

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="p-6">

      <h1 className="mb-8 text-4xl font-bold">
        Contact Messages
      </h1>

      <div className="overflow-x-auto rounded-2xl border">

        <table className="min-w-full">

          <thead className="bg-slate-100 dark:bg-slate-800">

            <tr>

              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Message
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {contacts.map((contact) => (

              <tr
                key={contact._id}
                className="border-t"
              >

                <td className="p-4">
                  {contact.name}
                </td>

                <td className="p-4">
                  {contact.email}
                </td>

                <td className="p-4 max-w-xs truncate">
                  {contact.message}
                </td>

                <td className="p-4">

                  {contact.isRead ? (

                    <span className="rounded bg-green-100 px-3 py-1 text-green-700">
                      Read
                    </span>

                  ) : (

                    <span className="rounded bg-red-100 px-3 py-1 text-red-700">
                      New
                    </span>

                  )}

                </td>

                <td className="space-x-2 p-4">

                  {!contact.isRead && (

                    <button
                      onClick={() =>
                        markRead(contact._id)
                      }
                      className="rounded bg-blue-600 px-3 py-2 text-white"
                    >
                      Mark Read
                    </button>

                  )}

                  <button
                    onClick={() =>
                      deleteContact(contact._id)
                    }
                    className="rounded bg-red-600 px-3 py-2 text-white"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ManageContacts;