import Image from "next/image";

const About = () => {
  return (
    <div className="my-0 sm:py-6 min-h-screen bg-slate-100 flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-4">
          Welcome to MyApp! We are dedicated to providing you with the best
          service possible.
        </p>
        <p className="text-gray-600 text-lg md:text-xl mb-4">
          Our mission is to make your life easier with our innovative solutions
          and exceptional customer service.
        </p>
        <p className="text-gray-600 text-lg md:text-xl mb-4">
          Our team is made up of passionate and experienced professionals who
          are always here to help you.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Our Team
          </h2>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <Image width={500} height={500} alt="Team Member" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    John Doe
                  </h3>
                  <p className="text-gray-600">CEO</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <Image width={500} height={500} alt="Team Member" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Jane Smith
                  </h3>
                  <p className="text-gray-600">CTO</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <Image width={500} height={500} alt="Team Member" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Sarah Johnson
                  </h3>
                  <p className="text-gray-600">COO</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <Image width={500} height={500} alt="Team Member" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Michael Brown
                  </h3>
                  <p className="text-gray-600">CFO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
