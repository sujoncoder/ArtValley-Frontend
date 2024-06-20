import datas from "@/utils/artData";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

const UserOrders = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {datas.map((data) => (
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              key={data.id}
            >
              <div className="relative w-full pb-[50%]">
                <Image
                  src={data.photo}
                  layout="fill"
                  objectFit="cover"
                  alt={data.name}
                  className="rounded-t-lg hover:opacity-90 transition-opacity duration-300 w-full h-20"
                />
              </div>
              <div className="p-2">
                <h2 className="text-lg font-semibold mb-2">{data.name}</h2>
                <p className="text-gray-600">
                  Artist: <span className="text-gray-500">{data.artist}</span>
                </p>
                <p className="text-gray-600">
                  Price: <span className="text-gray-500">${data.price}</span>
                </p>
              </div>
              <div className="p-2 flex justify-end">
                <MdDelete className="w-6 h-6 text-red-500 cursor-pointer hover:scale-110 transition-transform duration-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
