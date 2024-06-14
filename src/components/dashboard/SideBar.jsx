"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="w-64 h-screen bg-gray-100 p-5">
      <div className="text-2xl font-bold mb-10">ArtValley</div>
      <ul>
        <li className="mb-5">
          <Link
            href="/dashboard"
            className={`flex items-center text-lg font-semibold text-gray-700 ${
              pathName === "/dashboard"
                ? "bg-blue-500 rounded py-2 bg-opacity-20 text-slate-700 duration-300 hover:brightness-110"
                : ""
            }`}
          >
            <span className="ml-3">Profile</span>
          </Link>
        </li>
        <li className="mb-5">
          <Link
            href="/dashboard/user-orders"
            className={`flex items-center text-lg font-semibold text-gray-700 ${
              pathName === "/dashboard/user-orders"
                ? "bg-blue-500 rounded py-2 bg-opacity-20 text-slate-700 duration-300 hover:brightness-110"
                : ""
            }`}
          >
            <span className="ml-3">Orders</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
