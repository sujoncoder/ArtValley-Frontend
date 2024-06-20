import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const CartBtn = ({ cartItems }) => {
  return (
    <Link href="/cart" className="relative mt-2">
      <IoCartOutline className="w-8 h-8" />
      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
        {cartItems?.length}
      </span>
    </Link>
  );
};

export default CartBtn;
