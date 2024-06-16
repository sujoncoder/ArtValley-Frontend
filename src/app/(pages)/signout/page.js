"use client";

import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

const SignoutPage = () => {
  const { setUser } = useUser();
  const router = useRouter();

  const handleSignout = () => {
    setUser(null);
    localStorage.removeItem("token");

    router.push("/login");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Out</h2>
        <p className="text-gray-600 text-center mb-6">
          Are you sure you want to sign out?
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleSignout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mr-4 focus:outline-none"
          >
            Sign Out
          </button>
          <button
            onClick={() => router.push("/")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignoutPage;
