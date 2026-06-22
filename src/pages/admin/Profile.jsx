const Profile = () => {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        Profile
      </h1>

      <div className="rounded-xl border p-6">
        <p>
          <strong>Name:</strong>{" "}
          {user?.name}
        </p>

        <p className="mt-3">
          <strong>Email:</strong>{" "}
          {user?.email}
        </p>

        <p className="mt-3">
          <strong>Role:</strong>{" "}
          {user?.role}
        </p>
      </div>
    </div>
  );
};

export default Profile;