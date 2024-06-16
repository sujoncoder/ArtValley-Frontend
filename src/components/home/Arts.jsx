"use client";

import fourDatas from "@/utils/artData";
import { useRouter } from "next/navigation";
import Art from "./Art";
import Search from "./SearchBox";

const Arts = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/gallery");
  };
  return (
    <div className="py-2 sm:py-10 bg-gray-100">
      <h2 className="text-3xl text-center pt-10 md:text-4xl font-bold text-gray-800 mb-12">
        Featured <span className="text-indigo-500">Artworks</span>
      </h2>

      <Search />
      <br />

      <div className="max-w-6xl mx-auto">
        <div className="px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fourDatas.map((data) => (
            <Art key={data.id} art={data} />
          ))}
        </div>
      </div>
      <br />

      <div className="flex justify-center items-center my-6">
        <button
          onClick={handleClick}
          className="bg-blue-500 rounded text-white px-4 py-2 hover:brightness-110 duration-300"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default Arts;
