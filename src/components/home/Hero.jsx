import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Welcome to <span className="text-blue-500">Art Valley</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Discover and explore the most popular artworks from around the
            world. Immerse yourself in a diverse collection of art pieces.
          </p>
          <div>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium inline-flex items-center hover:bg-blue-600 duration-300">
              Explore Now
              <FiArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/1280px-Starry_Night_Over_the_Rhone.jpg"
            width={1000}
            height={1000}
            alt="Art Valley Hero Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
