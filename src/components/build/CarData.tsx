import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCarRear,
  faFan,
  faGasPump,
} from "@fortawesome/free-solid-svg-icons";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cars = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
    name: "Toyota Corolla",
    model: "2022",
    pricePerDay: 45,
    transmission: "Automatic",
    fuel: "Petrol",
    ac: true,
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
    name: "Honda Civic",
    model: "2021",
    pricePerDay: 50,
    transmission: "Manual",
    fuel: "Diesel",
    ac: true,
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    name: "Ford Mustang",
    model: "2023",
    pricePerDay: 120,
    transmission: "Automatic",
    fuel: "Petrol",
    ac: true,
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
    name: "Chevrolet Spark",
    model: "2020",
    pricePerDay: 35,
    transmission: "Manual",
    fuel: "Petrol",
    ac: false,
  },
];

const CarData = () => {
  return (
    <div id="vehicle" className="mt-14 px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
  <div>
    <h1 className="text-xl sm:text-3xl font-bold">
      Top picks vehicle this month
    </h1>
    <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
      Experience the epitome of amazing journey with our top picks
    </p>
  </div>

  <button className="flex items-center gap-1 text-sm sm:text-base font-semibold text-blue-600 hover:underline self-start sm:self-auto">
    View All <FontAwesomeIcon icon={faArrowRight} />
  </button>
</div>


      {/* Car Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <Card key={car.id} className="overflow-hidden border shadow-none">
            {/* Image */}
            <div className="h-48 w-full rounded-md overflow-hidden px-2">
              <img
                src={car.image}
                alt={car.name}
                className="h-full w-full object-cover rounded-md hover:scale-102 transition duration-300"
              />
            </div>

            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>{car.name}</CardTitle>
                <CardDescription>{car.model}</CardDescription>
              </div>
              <div>
                <p className="font-semibold text-right">
                  $ <span className="text-xl">{car.pricePerDay}</span>/day
                </p>
              </div>
            </CardHeader>

            <CardContent>
              {/* Specs */}
              <div className="flex justify-between items-center text-sm mt-2 text-gray-600">
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faCarRear} />
                  <span>{car.transmission}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faGasPump} />
                  <span>{car.fuel}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faFan} />
                  <span>{car.ac ? "AC" : "--"}</span>
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Button className="w-full mb-1 cursor-pointer">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CarData;
