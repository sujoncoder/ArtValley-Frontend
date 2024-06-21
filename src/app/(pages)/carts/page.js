"use client";

import RemoveItemBtn from "@/components/cart/RemoveItemBtn";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineCheck, AiOutlineShoppingCart } from "react-icons/ai";

const CartStore = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [groupedItems, setGroupedItems] = useState([]);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);

    const grouped = cartItems.reduce((acc, item) => {
      const found = acc.find((i) => i.id === item.id);
      if (found) {
        found.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);
    setGroupedItems(grouped);
  }, [cartItems]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <AiOutlineShoppingCart className="text-3xl mr-2" /> Cart (
        {cartItems.length} items)
      </h1>
      {cartItems.length > 0 ? (
        <>
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-6 py-2 rounded-lg mb-6 hover:bg-red-600 transition duration-200"
          >
            Clear Cart
          </button>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {groupedItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 border-b border-gray-200">
                      {item.name}{" "}
                      <span className="bg-blue-500 text-white bg-opacity-70 rounded-full px-2 py-1">
                        {item.quantity}
                      </span>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200">
                      <RemoveItemBtn
                        removeFromCart={removeFromCart}
                        item={item}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex justify-end items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <h2 className="text-3xl font-bold text-gray-700">Total:</h2>
                <p className="text-3xl font-bold text-gray-500">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
              <Link
                href="/payment"
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-200 flex items-center"
              >
                <AiOutlineCheck className="text-2xl mr-2" /> Checkout
              </Link>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-xl text-gray-500 mt-8">
          Your cart is empty.
        </p>
      )}
    </div>
  );
};

export default CartStore;
