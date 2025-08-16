import { useState } from "react";
import Navbar from "./Navbar";

const Hero = () => {
  const [selected, setSelected] = useState("without");

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between rounded-md overflow-hidden">
      {/* Navbar */}
      <div className="relative w-full">
        <Navbar />
      </div>

      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
  <iframe
    className="w-full h-full object-cover scale-111"
    src="https://www.youtube.com/embed/E7pCceDrKmg?autoplay=1&mute=1&loop=1&playlist=E7pCceDrKmg&controls=0&modestbranding=1&showinfo=0&disablekb=1"
    title="Car Video Background"
    frameBorder="0"
    allow="autoplay; fullscreen"
  ></iframe>
</div>


      {/* Content */}
      <div className="flex flex-col mx-4 md:mx-10 mb-10 mt-20 sm:mt-32">
        {/* Heading */}
        <div className="text-white mb-6 md:mb-8 text-center md:text-left">
          <p className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Rent a Car for Every Journey
          </p>
        </div>

        {/* Search Box */}
        <div className="h-auto bg-white rounded-lg p-4 md:p-6 shadow-md">
          {/* Form Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Departure */}
            <div>
              <h1 className="text-sm font-semibold mb-1">Departure</h1>
              <input
                type="text"
                placeholder="Enter departure location"
                className="w-full bg-gray-100 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Return Location */}
            <div>
              <h1 className="text-sm font-semibold mb-1">Return Location</h1>
              <input
                type="text"
                placeholder="Enter return location"
                className="w-full bg-gray-100 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Pickup Date & Time */}
            <div>
              <h1 className="text-sm font-semibold mb-1">Pickup Date & Time</h1>
              <input
                type="datetime-local"
                className="w-full bg-gray-100 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Return Date & Time */}
            <div>
              <h1 className="text-sm font-semibold mb-1">Return Date & Time</h1>
              <input
                type="datetime-local"
                className="w-full bg-gray-100 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Search Filter & Button */}
          <div className="mt-4 flex flex-col md:flex-row md:justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-medium">Search Filter:</p>

              {/* Without Driver */}
              <p
                onClick={() => setSelected("without")}
                className={`rounded-full px-3 py-1 text-sm cursor-pointer transition 
                  ${
                    selected === "without"
                      ? "bg-black text-white"
                      : "bg-transparent border border-gray-300 text-black"
                  }`}
              >
                Without Driver
              </p>

              {/* With Driver */}
              <p
                onClick={() => setSelected("with")}
                className={`rounded-full px-3 py-1 text-sm cursor-pointer transition 
                  ${
                    selected === "with"
                      ? "bg-black text-white"
                      : "bg-transparent border border-gray-300 text-black"
                  }`}
              >
                With Driver
              </p>
            </div>

            <div>
              <button className="bg-black hover:bg-gray-800 cursor-pointer transition text-white px-5 py-2 rounded-lg w-full md:w-auto">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
