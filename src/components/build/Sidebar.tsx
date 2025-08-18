import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Search } from "lucide-react";
import { format } from "date-fns";

const Sidebar = () => {
  const [pickupDate, setPickupDate] = React.useState<Date | undefined>();
  const [returnDate, setReturnDate] = React.useState<Date | undefined>();

  return (
    <div className="w-80 h-full bg-white shadow-xl p-6 flex flex-col gap-6 rounded-2xl">
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
  );
};

export default Sidebar;
