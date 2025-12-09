import React, { useState } from "react";
import { loginUser } from "../features/auth/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = loginUser(form.email, form.password);

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    alert("Login successful");
    navigate("/");
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl mb-4">Login</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

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
          Login
        </button>

      </form>
    </div>
  );
};

export default Login;
