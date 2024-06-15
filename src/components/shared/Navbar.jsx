"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { GoListOrdered } from "react-icons/go";
import { ImProfile } from "react-icons/im";

const Sidebar = () => {
  const pathName = usePathname();

  const baseLinkClasses =
    "flex items-center text-lg font-semibold duration-300 rounded p-2";
  const activeLinkClasses = "bg-blue-500 bg-opacity-20 text-slate-700";
  const hoverLinkClasses = "hover:bg-slate-200";

  return (
    <div className="w-64 h-screen bg-gray-100 p-5 flex flex-col justify-between">
      <div>
        <Link href="/" className="text-2xl font-bold mb-10 block">
          ArtValley
        </Link>
        <ul>
          <li className="mb-5">
            <Link
              href="/dashboard"
              className={`${baseLinkClasses} ${
                pathName === "/dashboard" ? activeLinkClasses : "text-gray-700"
              } ${hoverLinkClasses}`}
              aria-label="Profile"
            >
              <ImProfile className="w-8 h-8 text-slate-500" />
              <span className="ml-3">Profile</span>
            </Link>
          </li>
          <li className="mb-5">
            <Link
              href="/dashboard/user-orders"
              className={`${baseLinkClasses} ${
                pathName === "/dashboard/user-orders"
                  ? activeLinkClasses
                  : "text-gray-700"
              } ${hoverLinkClasses}`}
              aria-label="Orders"
            >
              <GoListOrdered className="w-8 h-8 text-slate-500" />
              <span className="ml-3">Orders</span>
            </Link>
          </li>
        </ul>
      </div>
      <Link
        href="/sign-out"
        className={`${baseLinkClasses} text-red-500 hover:bg-red-200`}
      >
        <FiLogOut className="w-8 h-8 text-red-500" />
        <span className="ml-3">Sign-out</span>
      </Link>
    </div>
  );
};

export default Sidebar;
