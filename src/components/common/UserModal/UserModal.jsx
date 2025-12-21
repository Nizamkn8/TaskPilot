import React, { useEffect, useState } from "react";

const UserModal = ({ close, onSubmit, editUser }) => {
  const [userForm, setUserForm] = useState({
    id: null,
    name: "",
    email: "",
    role: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserForm((prev) => ({
      ...prev,
      [name]: value,
      id: prev.id ?? Date.now()
    }));
  };

  useEffect(() => {
    if (editUser) {
      setUserForm({
        id: editUser.id,
        name: editUser.name,
        email: editUser.email,
        role: editUser.role
      });
    } else {
      setUserForm({
        id: null,
        name: "",
        email: "",
        role: ""
      });
    }
  }, [editUser]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Modal Card */}
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            {editUser ? "Edit User" : "Add User"}
          </h2>
          <button
            onClick={close}
            className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={userForm.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={userForm.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <input
            type="text"
            name="role"
            placeholder="Role (e.g. Admin, User)"
            value={userForm.role}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={close}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={() => onSubmit(userForm)}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            {editUser ? "Update User" : "Add User"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
