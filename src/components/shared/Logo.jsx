import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h2 className="text-2xl font-bold">
        <span className="text-blue-500"> Art</span>{" "}
        <span className="text-pink-500">
          Va<span className="text-lime-700">ll</span>ey
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
