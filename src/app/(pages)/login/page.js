"use client";

import { useUser } from "@/context/UserContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const LoginPage = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const { fetchUserDetails } = useUser();

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
      const res = await fetch(`http://localhost:5000/api/v1/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        toast.success("Sign-in successful!");
        localStorage.setItem("token", data?.user?.token);
        fetchUserDetails();
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        toast.error(data.message || "Sign-in failed!");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      setFormData({});
    }
  };

  return (
    <div className="bg-slate-100 px-1 sm:px-0 min-h-screen flex items-center justify-center">
      <Toaster />
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Login
        </h2>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
              id="password"
              type="password"
              placeholder="*******"
            />
            <p className="text-gray-500 text-sm my-1">
              New to here?{" "}
              <Link
                className="text-blue-500 hover:underline duration-300"
                href="/signup"
              >
                Sign-Up
              </Link>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
