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
    <nav className="w-full z-50 text-white">
      <div className="flex justify-between items-center py-3 px-6">
        {/* Logo + Links */}
        <div className="flex gap-8 items-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-black">
            <FontAwesomeIcon icon={faOpencart} color="white" />

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="relative group cursor-pointer hover:text-white transition-colors"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-[1px] bg-white transition-all duration-300 w-0 group-hover:w-full rounded"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm text-white placeholder-gray-400 w-56 transition"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
          />
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4">
          <Button className="bg-transparent border border-transparent text-white cursor-pointer hover:border transition-all hover:border-white hover:bg-transparent">
            Log in
          </Button>
          <Button className="bg-white text-black cursor-pointer hover:bg-gray-200 transition ">
            Sign up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white transition-colors"
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
        <div className="flex flex-col gap-4 px-6 py-6 bg-black border-t border-white/10 rounded-b-2xl shadow-lg">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm text-white placeholder-gray-400 w-full"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="relative group cursor-pointer hover:text-gray-300 transition-colors py-2 text-lg font-medium"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 w-0 group-hover:w-full rounded"></span>
            </a>
          ))}

          <div className="flex flex-col gap-3 mt-4">
            <Button className="px-4 py-2 text-white bg-transparent border border-white rounded-full hover:bg-white hover:text-black transition">
              Log in
            </Button>
            <Button className="bg-white text-black rounded-full hover:bg-gray-200">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
