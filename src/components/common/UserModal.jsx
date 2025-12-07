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

    setUserForm(prev => ({
      ...prev,
      [name]: value,
      id: prev.id ?? Date.now() // keep existing id OR create new one
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
    <div className="fixed top-[30%] left-[50%] -translate-x-1/2 bg-[#f0d8d8] p-8 rounded-2xl">

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={userForm.name}
        className="w-full border-2 mb-4 rounded h-[40px] px-4"
        onChange={handleChange}
      />

      <input
        type="text"
        name="email"
        placeholder="Email"
        value={userForm.email}
        className="w-full border-2 mb-4 rounded h-[40px] px-2"
        onChange={handleChange}
      />

      <input
        type="text"
        name="role"
        placeholder="Role"
        value={userForm.role}
        className="w-full border-2 mb-4 rounded h-[40px] px-2"
        onChange={handleChange}
      />

      <div>
        <button
          className="bg-blue-400 text-white px-4 py-2 rounded mr-3"
          onClick={() => onSubmit(userForm)}
        >
          {editUser ? "Edit" : "Add"}
        </button>

        <button
          className="bg-blue-400 text-white px-4 py-2 rounded"
          onClick={close}
        >
          Cancel
        </button>
      </div>

    </div>
  );
};

export default UserModal;
