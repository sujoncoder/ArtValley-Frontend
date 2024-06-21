"use client";

import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
        <FaCheckCircle className="h-20 w-20 text-green-500 mx-auto" />
        <h1 className="text-2xl font-semibold mt-4">Payment Successful</h1>
        <p className="mt-2 text-gray-600">
          Thank you for your payment. Your transaction has been completed
          successfully.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
