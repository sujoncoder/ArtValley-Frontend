import Image from "next/image";

const CardForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Add New Card</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Card Number
            </label>
            <div className="flex items-center bg-gray-100 rounded px-3 py-2">
              <Image
                src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                width={100}
                height={100}
                alt="Mastercard"
                className="h-6 w-6 mr-3"
              />
              <input
                type="text"
                placeholder="1234 0000 0000 0000"
                className="bg-gray-100 flex-1 border-none focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">CVV</label>
            <input
              type="password"
              placeholder="•••"
              className="bg-gray-100 w-full px-3 py-2 rounded border-none focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Name on card
            </label>
            <input
              type="text"
              placeholder="Daniyal"
              className="bg-gray-100 w-full px-3 py-2 rounded border-none focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Expiry</label>
            <input
              type="text"
              placeholder="06/2024"
              className="bg-gray-100 w-full px-3 py-2 rounded border-none focus:outline-none"
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Add Card
            </button>
            <button
              type="button"
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardForm;
