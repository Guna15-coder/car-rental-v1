import { faArrowRight, faEarthAmericas } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui/button";

const Feature = () => {
  return (
    <div className="w-full p-4 mt-10">
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[80vh] gap-4">
        
        {/* LEFT CONTAINER (1/3) */}
        <div className="flex flex-col w-full md:w-1/3 gap-4">
          
          {/* Top Section */}
          <div className="relative flex flex-col justify-between rounded-md overflow-hidden h-64 md:h-1/2 text-white shadow-lg">
            {/* Background */}
            <img
              src="https://www.shutterstock.com/image-photo/warsaw-poland-november-17-2023-600nw-2394353421.jpg"
              alt="background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-lg"></div>

            {/* Globe top-left */}
            <div className="relative z-10 p-4">
              <FontAwesomeIcon icon={faEarthAmericas} className="text-2xl" />
            </div>

            {/* Text bottom */}
            <div className="relative z-10 p-6 flex flex-col gap-3">
              <h2 className="text-base sm:text-lg md:text-xl font-bold leading-snug">
                Explore more to get your comfort zone
              </h2>
              <p className="text-gray-200 text-xs sm:text-sm">
                Book your perfect stay with us
              </p>
              <Button className="w-max text-xs sm:text-sm bg-white text-black">
                Book Now <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="relative rounded-md overflow-hidden h-48 md:h-1/2 flex items-end justify-start text-white shadow-lg">
            <img
              src="https://i0.wp.com/picjumbo.com/wp-content/uploads/bmw-speed-o-meter-free-photo.jpg?w=2210&quality=70"
              alt="Speedometer"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>
            <div className="relative z-10 p-6">
              <p className="text-sm sm:text-base md:text-lg font-semibold">
                Vehicles Available
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">2,390</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTAINER (2/3) */}
        <div className="relative w-full md:w-2/3 rounded-md overflow-hidden flex items-center justify-center text-white shadow-lg h-64 md:h-auto">
          <img
            src="https://omo-oss-image.thefastimg.com/portal-saas/pg2024102819242542822/cms/image/89a33605-c21c-441a-9fb9-4ffe52129bfd.jpg_560xaf.jpg"
            alt="Audi Car"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="relative z-10 max-w-[600px] px-4 md:px-6 text-center md:text-left">
            <h2 className="text-lg sm:text-2xl md:text-4xl font-bold leading-snug">
              Beyond accommodation, creating memories of a lifetime
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
