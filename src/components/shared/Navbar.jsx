"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hrefggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              ArtValley
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 text-lg md:ml-10">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md font-medium"
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md font-medium"
            >
              Contact
            </Link>
          </div>
          <Link
            href="/login"
            className="bg-blue-500 hover:brightness-110 duration-300 text-white px-3 py-2 rounded font-medium"
          >
            Login
          </Link>
        </div>
        <div className="flex items-center">
          <div className="-mr-2 flex md:hidden">
            <buthrefn
              onClick={hrefggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-800"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </buthrefn>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            href="/gallery"
            className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            Gallery
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
