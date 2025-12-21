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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Please login to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm
                         focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm
                         focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium
                       text-white hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="cursor-pointer font-medium text-blue-600 hover:underline"
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
