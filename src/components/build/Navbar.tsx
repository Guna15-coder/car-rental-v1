import { useState } from "react";
import { Button } from "../ui/button";
import {
  faSearch,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Hotel", path: "/hotel" },
    { name: "Flight", path: "/flight" },
    { name: "Train", path: "/train" },
    { name: "Travel", path: "/travel" },
    { name: "Car Rental", path: "/car-rental" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-6 mt-4 bg-white/30 backdrop-blur-lg rounded-md shadow-lg text-black">
        <div className="flex justify-between items-center py-3 px-4">
          {/* Logo + Links */}
          <div className="flex gap-8 items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faOpencart}
                className="text-black text-xl"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 text-sm font-medium">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="relative group cursor-pointer text-gray-700 hover:text-black transition-colors"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 h-[1px] bg-black transition-all duration-300 w-0 group-hover:w-full rounded"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-full bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm text-black placeholder-gray-500 w-56 transition"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4"
            />
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex gap-4">
            <Button className="bg-transparent text-white hover:bg-transparent hover:text-white hover:border hover:border-white cursor-pointer transition-all px-5">
              Log in
            </Button>
            <Button className="bg-white text-black hover:bg-gray-800 transition px-5">
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black transition-colors"
            >
              {isOpen ? (
                <FontAwesomeIcon icon={faTimes} size="lg" />
              ) : (
                <FontAwesomeIcon icon={faBars} size="lg" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 px-6 py-6 bg-white/90 border-t border-gray-200 rounded-b-2xl shadow-lg">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm text-black placeholder-gray-500 w-full"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>

            {links.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="relative group cursor-pointer hover:text-gray-700 transition-colors py-2 text-lg font-medium"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 w-0 group-hover:w-full rounded"></span>
              </a>
            ))}

            <div className="flex flex-col gap-3 mt-4">
              <Button className="bg-transparent text-white border border-white">
                Log in
              </Button>
              <Button className="bg-white">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
