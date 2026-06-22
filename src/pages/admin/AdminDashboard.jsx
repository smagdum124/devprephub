const AdminDashboard = () => {
  return (
    <div className="min-h-screen px-6 py-20">

      <h1 className="text-4xl font-bold">
        Admin Dashboard
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl border p-6">
          <h2>Total Users</h2>
          <p className="mt-2 text-3xl font-bold">
            0
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h2>Total Questions</h2>
          <p className="mt-2 text-3xl font-bold">
            0
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h2>Total Blogs</h2>
          <p className="mt-2 text-3xl font-bold">
            0
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h2>Resume Tips</h2>
          <p className="mt-2 text-3xl font-bold">
            0
          </p>
        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;