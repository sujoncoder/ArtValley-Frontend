import { AiOutlineDelete } from "react-icons/ai";

const RemoveItemBtn = ({ item, removeFromCart }) => {
  return (
    <button
      onClick={() => removeFromCart(item.id)}
      className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
    >
      <AiOutlineDelete className="w-5 h-5" />
      <span className="hidden md:inline ml-2">Remove</span>
    </button>
  );
};

export default RemoveItemBtn;
