"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SignupPage = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // handle form submit
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/v1/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setFormData({});
      setLoading(false);
      console.log(data);

      if (res.ok) {
        toast.success("Sign-up successful!");
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      } else {
        toast.error(data.message || "Sign-up failed!");
      }
    } catch (error) {
      toast.error("An unexpected error occurred!");
    }
  };

  return (
    <div className="bg-slate-100 px-1 sm:px-0 min-h-screen flex items-center justify-center">
      <Toaster />
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={handleChange}
              required
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={handleChange}
              required
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={handleChange}
              required
              id="password"
              type="password"
              placeholder="*******"
            />
            <p className="text-gray-500 text-sm my-1">
              Already have an account?{" "}
              <Link
                className="text-blue-500 hover:underline duration-300"
                href="/login"
              >
                Login
              </Link>
            </p>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              type="submit"
              disabled={loading}
            >
              {loading ? "loading..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
