"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoListOrdered } from "react-icons/go";
import { IoPowerOutline } from "react-icons/io5";
import { RiProfileLine } from "react-icons/ri";
import Logo from "../shared/Logo";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="border w-56 h-screen bg-slate-100 p-4">
      <div>
        <Logo />
        <br />
      </div>

      <div>
        <ul>
          <li className="space-y-4">
            <Link
              href="/dashboard"
              className={`flex justify-start space-x-4 px-2 py-2 rounded text-xl text-slate-500 items-center ${
                pathName === "/dashboard"
                  ? "!hover:bg-blue-200 !bg-blue-300 !text-white !duration-300"
                  : "bg-slate-200"
              }`}
            >
              <RiProfileLine className="w-8 h-8 text-slate-400" />
              <span>Profile</span>
            </Link>

            <Link
              href="/dashboard/user-orders"
              className={`flex justify-start space-x-4 px-2 py-2 rounded text-xl text-slate-500 items-center ${
                pathName === "/dashboard/user-orders"
                  ? "!hover:bg-blue-200 !bg-blue-300 !text-white !duration-300"
                  : "bg-slate-200"
              }`}
            >
              <GoListOrdered className="w-8 h-8 text-slate-400" />
              <span>Orders</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <Link
          href="/signout"
          className={`absolute bottom-2 flex justify-center space-x-4 px-4 py-2 rounded-full text-xl text-red-500 items-center ${
            pathName === "/signout"
              ? "!hover:bg-red-200 !bg-red-300 !text-red-500 !duration-300"
              : "bg-red-200"
          }`}
        >
          <IoPowerOutline className="w-8 h-8 text-red-400" />
          <span>Sign-out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
