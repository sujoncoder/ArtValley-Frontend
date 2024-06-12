import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-2 sm:px-0 w-full bg-slate-100 text-slate-900 py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Company Name</h3>
          <p className="text-sm">123 Street Name</p>
          <p className="text-sm">City, Country</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-500">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-500">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-500">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-2">Social Media</h3>
          <ul className="flex">
            <li className="mr-4">
              <a href="#">
                <FaFacebook className="w-8 h-8 text-slate-500 hover:text-slate-600 duration-300 hover:scale-105" />
              </a>
            </li>
            <li className="mr-4">
              <a href="#">
                <FaTwitter className="w-8 h-8 text-slate-500 hover:text-slate-600 duration-300 hover:scale-105" />
              </a>
            </li>
            <li className="mr-4">
              <a href="#">
                <FaInstagram className="w-8 h-8 text-slate-500 hover:text-slate-600 duration-300 hover:scale-105" />
              </a>
            </li>
            <li className="mr-4">
              <a href="#">
                <FaLinkedin className="w-8 h-8 text-slate-500 hover:text-slate-600 duration-300 hover:scale-105" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
