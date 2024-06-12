import allArts from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
const ArtGallery = () => {
  return (
    <div className="my-4 sm:my-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-4 sm:my-10">
        Wellcome to exhibition gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allArts.map((art) => (
          <div
            key={art.id}
            className="border-2 rounded-lg shadow hover:opacity-90 duration-300 cursor-pointer"
          >
            <Link href={`/gallery/${art.id}`}>
              <div className="relative w-full pb-[100%]">
                <Image
                  src={art.photo}
                  layout="fill"
                  objectFit="cover"
                  alt={art.name}
                  className="rounded"
                />
              </div>
              <div className="p-2">
                <h2 className="text-lg font-medium">{art.name}</h2>
                <p className="text-lg">
                  Artist: <span className="text-slate-500">{art.artist}</span>{" "}
                </p>
                <p>
                  Price: <span className="text-slate-500">${art.price}</span>
                </p>
                <p>
                  Stock: <span className="text-slate-500">{art.stock}</span>
                </p>
              </div>
            </Link>

            <div className="flex justify-center items-center">
              <button className="bg-blue-500 rounded hover:brightness-110 text-white px-4 py-2 mt-1 mb-3">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtGallery;
