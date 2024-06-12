"use client";

import fourDatas from "@/utils/artData";
import { useRouter } from "next/navigation";
import Art from "./Art";

const Arts = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/gallery");
  };
  return (
    <div className="my-2 sm:my-10">
      <h1 className="text-2xl text-slate-500 text-center my-2 sm:my-10 font-semibold">
        Creativity takes courage.
      </h1>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fourDatas.map((data) => (
            <Art key={data.id} art={data} />
          ))}
        </div>
      </div>

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
