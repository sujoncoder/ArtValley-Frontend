import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="my-6 flex flex-col justify-center items-center">
      <div className="w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            className="w-full py-2 px-4 pr-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search..."
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none">
            <FaSearch className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
