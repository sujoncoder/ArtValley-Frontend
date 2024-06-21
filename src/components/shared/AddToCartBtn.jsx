"use client";

import { useCart } from "@/context/CartContext";
import toast, { Toaster } from "react-hot-toast";

const AddToCartBtn = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    toast.success("Product add successfull!");
  };

  return (
    <>
      <Toaster />
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 px-4 py-2 mb-4 rounded text-white active:bg-blue-600 duration-200"
      >
        Add to Cart
      </button>
    </>
  );
};

export default AddToCartBtn;
