import React, { useState } from "react";
import { saveUser } from "../features/auth/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user to localStorage
    saveUser(form);

    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl mb-4">Register</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
          name="name"
          type="text"
          placeholder="Name"
          className="border p-2"
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-2"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2"
          onChange={handleChange}
        />

        <button className="bg-blue-600 px-4 py-2 text-white">
          Register
        </button>

      </form>
    </div>
  );
};

export default Register;
