import AddToCartBtn from "@/components/shared/AddToCartBtn";
import artsData from "@/utils/data";
import Image from "next/image";

const ArtDetails = ({ params }) => {
  const art = artsData.find((art) => art.id === params.id);

  if (!art) return <div>Art piece not found</div>;

  const {
    name,
    artist,
    photo,
    description,
    country,
    price,
    year,
    stock,
    medium,
  } = art;

  return (
    <div className="px-1 sm:px-0 container mx-auto my-10">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10">
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-0 pb-[100%]">
            <Image
              src={photo}
              layout="fill"
              objectFit="cover"
              alt={name}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-3xl font-semibold">{name}</h1>
          <p className="text-lg text-gray-600 mt-2">
            Artist: <span className="font-medium">{artist}</span>
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Year: <span className="font-medium">{year}</span>
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Medium: <span className="font-medium">{medium}</span>
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Country: <span className="font-medium">{country}</span>
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Price: <span className="font-medium">${price}</span>
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Stock: <span className="font-medium">{stock}</span>
          </p>
          <p className="text-lg text-gray-600 mt-4">{description}</p>
          <AddToCartBtn item={art} />
        </div>
      </div>
    </div>
  );
};

export default ArtDetails;
