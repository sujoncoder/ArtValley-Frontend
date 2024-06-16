"use client";

import { usePathname } from "next/navigation";
import { GoListOrdered } from "react-icons/go";
// import { IoPowerOutline } from "react-icons/io5";
import Link from "next/link";
import { RiProfileLine } from "react-icons/ri";
import Logo from "../shared/Logo";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="w-52 h-screen bg-slate-100 p-4">
      <div>
        <Logo />
        <br />
      </div>

      <div>
        <ul>
          <li className="space-y-4">
            <Link
              href="/dashboard"
              className={`flex justify-start space-x-4 px-2 py-2 rounded text-xl text-slate-500 items-center bg-slate-200 ${
                pathName === "/dashboard"
                  ? "!hover:bg-blue-200 !bg-blue-300 !text-white !duration-300"
                  : ""
              }`}
            >
              <RiProfileLine className="w-8 h-8 text-slate-400" />
              <span>Profile</span>
            </Link>

            <Link
              href="/dashboard/user-orders"
              className={`flex justify-start space-x-4 px-2 py-2 rounded text-xl text-slate-500 items-center bg-slate-200 ${
                pathName === "/dashboard/user-orders"
                  ? "!hover:bg-blue-200 !bg-blue-300 !text-white !duration-300"
                  : ""
              }`}
            >
              <GoListOrdered className="w-8 h-8 text-slate-400" />
              <span>Orders</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
