import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X, Search } from "lucide-react";

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
    <nav className=" w-full z-50 text-gray-800 text-white">
      <div className="flex justify-between items-center py-3 px-4 max-w-7xl mx-auto">
        {/* Logo + Links */}
        <div className="flex gap-8 items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <p className="text-2xl font-bold text-white">Horizone</p>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm font-semibold">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="relative group cursor-pointer hover:text-blue-600 transition-colors"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 w-0 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800 placeholder-gray-500 w-56 transition"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4">
          <Button
            className="px-4 text-white bg-transparent"
          >
            Log in
          </Button>
          <Button>
            Sign up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="flex flex-col md:hidden gap-4 px-6 py-4 bg-white border-t border-gray-200">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800 placeholder-gray-500"
          />
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="relative group cursor-pointer hover:text-blue-600 transition-colors py-2"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 w-0 group-hover:w-full"></span>
            </a>
          ))}
          <div className="flex gap-4 mt-2">
            <Button
              variant="outline"
              
            >
              Log in
            </Button>
            <Button>
              Sign up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
