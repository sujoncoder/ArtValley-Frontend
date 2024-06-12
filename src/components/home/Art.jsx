import Image from "next/image";

const Art = ({ art }) => {
  const { name, photo, artist, price, stock } = art;
  return (
    <div className="border-2 rounded-lg shadow hover:scale-105 duration-300 cursor-pointer">
      <div className="relative w-full pb-[100%]">
        <Image
          src={photo}
          layout="fill"
          objectFit="cover"
          alt={name}
          className="rounded"
        />
      </div>
      <div className="p-2">
        <h2 className="text-lg font-medium">{name}</h2>
        <p className="text-lg">
          Artist: <span className="text-slate-500">{artist}</span>{" "}
        </p>
        <p>
          Price: <span className="text-slate-500">${price}</span>
        </p>
        <p>
          Stock: <span className="text-slate-500">{stock}</span>
        </p>
      </div>
    </div>
  );
};

export default Art;
