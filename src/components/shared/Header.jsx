import { useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Profile from "../profile/Profile";
import CartBtn from "./CartBtn";
import Logo from "./Logo";

const navsData = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useUser();
  const { cartItems } = useCart();
  const pathName = usePathname();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full p-4 bg-gray-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Navigation Links for larger screens */}
        <div className="hidden sm:flex flex-1 justify-center items-center space-x-4">
          {navsData.map((nav) => (
            <Link
              key={nav.name}
              href={nav.path}
              className={`text-xl text-slate-500 font-medium ${
                pathName === nav.path ? "!text-blue-500 !underline" : ""
              }`}
            >
              {nav.name}
            </Link>
          ))}
        </div>

        {/* User Profile and Cart Icon or Login Link */}
        <div className="hidden sm:flex items-center space-x-4">
          {user ? (
            <>
              <Profile onUser={user} />
              <Link href="/carts" className="relative mt-2">
                <IoCartOutline className="w-8 h-8" />
                <span className="absolute top-0 left-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-blue-500 bg-opacity-80 rounded-full">
                  {cartItems?.length}
                </span>
              </Link>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-blue-500 hover:brightness-110 duration-300 text-white px-3 py-2 rounded font-medium"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={handleToggle}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-800"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="flex flex-col space-y-2 mt-2">
          {navsData.map((nav) => (
            <Link
              key={nav.name}
              href={nav.path}
              className="block text-center border-b bg-gray-200 rounded px-4 py-2 text-xl text-slate-500 font-medium"
              onClick={closeMenu}
            >
              {nav.name}
            </Link>
          ))}
          <div className="flex flex-col justify-center items-center py-2">
            {user ? (
              <>
                <Profile onUser={user} />
                <CartBtn cartItems={cartItems} />
              </>
            ) : (
              <Link
                href="/login"
                className="bg-blue-500 hover:brightness-110 duration-300 text-white px-3 py-2 rounded font-medium mt-2"
                onClick={closeMenu}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
