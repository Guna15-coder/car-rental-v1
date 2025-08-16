import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between rounded-md overflow-hidden">
      {/* Navbar */}
      <div className="relative w-full">
        <Navbar />
      </div>

      {/* Background Image with dull effect */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <img
          className="w-full h-full object-cover"
          src="https://gadgetlite.com/wp-content/uploads/2024/06/Tips-to-Protect-Your-Car-This-Summer-800x400.jpg.webp"
          alt="Car Background"
        />
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
              <p className="text-white bg-black rounded-full px-3 py-1 text-sm cursor-pointer">
                Without Driver
              </p>
              <p className="text-black bg-gray-200 rounded-full px-3 py-1 text-sm cursor-pointer">
                With Driver
              </p>
            </div>
            <div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg w-full md:w-auto">
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
