import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // ShadCN select
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer"; // ShadCN drawer
import { supabase } from "../../lib/api";

const Hero = () => {
  const [locations, setLocations] = useState<any[]>([]);
  const [selectedDeparture, setSelectedDeparture] = useState<string | null>(null);
  const [selectedReturn, setSelectedReturn] = useState<string | null>(null);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState<"departure" | "return" | null>(null);
  const [drawerBranches, setDrawerBranches] = useState<any[]>([]);
  const [selected, setSelected] = useState("without");

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const { data, error } = await supabase.from("locations").select("*");
        if (error) throw error;
        setLocations(data || []);
      } catch (error: any) {
        console.error("Error fetching locations:", error.message);
      }
    };
    fetchLocations();
  }, []);

  const openDrawer = (type: "departure" | "return") => {
    setDrawerType(type);
    if (type === "departure") {
      setDrawerBranches(locations);
    } else {
      setDrawerBranches(locations.filter((loc) => loc.city !== selectedDeparture));
    }
    setDrawerOpen(true);
  };

  const handleSelectBranch = (branch: any) => {
    if (drawerType === "departure") setSelectedDeparture(branch.city);
    else if (drawerType === "return") setSelectedReturn(branch.city);
    setDrawerOpen(false);
  };

  const distinctCities = [...new Set(locations.map((loc) => loc.city))];

  return (
    <div className="relative w-full h-screen flex flex-col justify-between rounded-md overflow-hidden">
      <Navbar />

      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <img
          src="https://images.carexpert.com.au/resize/1920/-/app/uploads/2020/04/porsche-taycan.jpeg"
          className="w-full h-full object-cover"
          alt="Car Background"
        />
      </div>

      <div className="flex flex-col mx-4 md:mx-10 mb-10 mt-20 sm:mt-32">
        <div className="text-white mb-6 md:mb-8 text-center md:text-left">
          <p className="text-4xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Rent a Car for Every Journey
          </p>
        </div>

        {/* Search Box at bottom like old design */}
        <div className="flex justify-end flex-col h-auto bg-white rounded-lg p-4 md:p-6 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Departure Dropdown */}
            <div>
              <h1 className="text-sm font-semibold mb-1">Departure</h1>
              <Select onValueChange={() => openDrawer("departure")}>
                <SelectTrigger className="w-full bg-gray-100 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder={selectedDeparture || "Select departure city"} />
                </SelectTrigger>
                <SelectContent>
                  {distinctCities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Return Dropdown */}
            <div>
              <h1 className="text-sm font-semibold mb-1">Return Location</h1>
              <Select onValueChange={() => openDrawer("return")}>
                <SelectTrigger className="w-full bg-gray-100 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder={selectedReturn || "Select return city"} />
                </SelectTrigger>
                <SelectContent>
                  {distinctCities.filter((city) => city !== selectedDeparture).map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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

              <p
                onClick={() => setSelected("without")}
                className={`rounded-full px-3 py-1 text-sm cursor-pointer transition ${selected === "without"
                    ? "bg-black text-white"
                    : "bg-transparent border border-gray-300 text-black"
                  }`}
              >
                Without Driver
              </p>

              <p
                onClick={() => setSelected("with")}
                className={`rounded-full px-3 py-1 text-sm cursor-pointer transition ${selected === "with"
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

      {/* Drawer */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="w-full bg-white rounded-lg shadow-xl p-4">
          <DrawerHeader>
            <DrawerTitle className="text-lg font-bold">
              {drawerType === "departure" ? "Departure Branches" : "Return Branches"}
            </DrawerTitle>
          </DrawerHeader>

          <div className="flex flex-col gap-3 mt-4 max-h-[70vh] overflow-y-auto">
            {drawerBranches.length > 0 ? (
              drawerBranches.map((branch) => (
                <div
                  key={branch.location_id}
                  className="p-3 border rounded-md hover:shadow-md hover:bg-gray-50 cursor-pointer transition"
                  onClick={() => handleSelectBranch(branch)}
                >
                  <p><span className="font-semibold">Name:</span> {branch.name}</p>
                  <p><span className="font-semibold">Address:</span> {branch.address}</p>
                  <p><span className="font-semibold">City:</span> {branch.city}</p>
                  <p><span className="font-semibold">State:</span> {branch.state}</p>
                  <p><span className="font-semibold">Country:</span> {branch.country}</p>
                  <p><span className="font-semibold">Postal Code:</span> {branch.zip_code}</p>
                </div>
              ))
            ) : (
              <p>No branches found.</p>
            )}
          </div>

          <DrawerClose className="mt-6 px-4 py-2 bg-black text-white rounded-lg cursor-pointer text-center">
            Close
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Hero;
