import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Search, Star } from "lucide-react";
import { format } from "date-fns";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Sidebar = () => {
  const [pickupDate, setPickupDate] = React.useState<Date | undefined>();
  const [returnDate, setReturnDate] = React.useState<Date | undefined>();
  const [carSize, setCarSize] = React.useState("medium");

  const cars = [
    {
      id: 1,
      name: "Toyota Corolla",
      model: "2023",
      size: "small",
      price: "$40/day",
      rating: 4.5,
      features: ["Air Conditioning", "Automatic", "Bluetooth"],
      image: "https://via.placeholder.com/600x350",
    },
    {
      id: 2,
      name: "Honda Civic",
      model: "2023",
      size: "medium",
      price: "$55/day",
      rating: 4.7,
      features: ["GPS", "Cruise Control", "Hybrid"],
      image: "https://via.placeholder.com/600x350",
    },
    {
      id: 3,
      name: "BMW X5",
      model: "2023",
      size: "large",
      price: "$120/day",
      rating: 4.9,
      features: ["Luxury Interior", "Panoramic Sunroof", "Premium Audio"],
      image: "https://via.placeholder.com/600x350",
    },
  ];

  const filteredCars = cars.filter((car) => car.size === carSize);

  return (
    <div className="flex w-full min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-[30%] bg-white shadow-xl p-6 flex flex-col gap-6 rounded-r-2xl">
        <h2 className="text-xl font-semibold mb-2">Search Cars</h2>

        {/* Departure Location */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="departure">Departure Location</Label>
          <Input id="departure" placeholder="Enter city or airport" />
        </div>

        {/* Return Location */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="return">Return Location</Label>
          <Input id="return" placeholder="Enter city or airport" />
        </div>

        {/* Pickup Date */}
        <div className="flex flex-col gap-2">
          <Label>Pickup Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {pickupDate ? format(pickupDate, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={pickupDate} onSelect={setPickupDate} />
            </PopoverContent>
          </Popover>
        </div>

        {/* Return Date */}
        <div className="flex flex-col gap-2">
          <Label>Return Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} />
            </PopoverContent>
          </Popover>
        </div>

        {/* Search Button */}
        <Button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white">
          <Search className="mr-2 h-4 w-4" /> Search Cars
        </Button>

        {/* Extra Features */}
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="driver">With Driver</Label>
            <input type="checkbox" id="driver" className="h-4 w-4" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="luxury">Luxury Only</Label>
            <input type="checkbox" id="luxury" className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="w-[70%] p-8 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Choose a Car</h2>

        {/* Toggle for car size */}
        <ToggleGroup
          type="single"
          value={carSize}
          onValueChange={(val) => val && setCarSize(val)}
          className="flex gap-4"
        >
          <ToggleGroupItem value="small">Small</ToggleGroupItem>
          <ToggleGroupItem value="medium">Medium</ToggleGroupItem>
          <ToggleGroupItem value="large">Large</ToggleGroupItem>
        </ToggleGroup>

        {/* Car List */}
        <div className="flex flex-col gap-8">
          {filteredCars.map((car) => (
            <Card key={car.id} className="shadow-lg border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition">
              <CardHeader className="p-0">
                <img src={car.image} alt={car.name} className="w-full h-64 object-cover" />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold">{car.name}</CardTitle>
                    <p className="text-gray-500 text-sm">Model: {car.model}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium">{car.rating}</span>
                    </div>
                    <p className="text-lg font-semibold mt-2 text-indigo-600">{car.price}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {car.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary">{feature}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="mt-4 md:mt-0 bg-green-600 hover:bg-green-700 text-white">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
