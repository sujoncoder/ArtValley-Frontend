import toast, { Toaster } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";

const RemoveItemBtn = ({ item, removeFromCart }) => {
  const handleItemRemove = () => {
    removeFromCart(item.id);
    toast.success("Product remove successfull!");
  };

  return (
    <>
      <Toaster />
      <button
        onClick={handleItemRemove}
        className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
      >
        <AiOutlineDelete className="w-5 h-5" />
        <span className="hidden md:inline ml-2">Remove</span>
      </button>
    </>
  );
};

export default RemoveItemBtn;
