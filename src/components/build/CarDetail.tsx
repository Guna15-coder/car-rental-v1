import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button"
import Navbar from "./Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCalendar,
  faCalendarCheck,
  faCar,
  faGasPump,
  faGear,
  faLocationDot,
  faTags,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons"

const CarDetail = () => {
  const features = [
    { label: "Brand", value: "Dodge", icon: <FontAwesomeIcon icon={faCar} /> },
    { label: "Model", value: "Challenger SRT", icon: <FontAwesomeIcon icon={faCalendar} /> },
    { label: "Year", value: "2021", icon: <FontAwesomeIcon icon={faCalendarCheck} /> },
    { label: "Fuel Type", value: "Petrol", icon: <FontAwesomeIcon icon={faGasPump} /> },
    { label: "Transmission", value: "Automatic", icon: <FontAwesomeIcon icon={faGear} /> },
    { label: "Seats", value: "5", icon: <FontAwesomeIcon icon={faUserGroup} /> },
    { label: "Price / Day", value: "₹ 6,500", highlight: true, icon: <FontAwesomeIcon icon={faTags} /> },
    { label: "Location", value: "Bengaluru, India", icon: <FontAwesomeIcon icon={faLocationDot} /> },
  ]

  const images = [
    "https://wallpapers.com/images/hd/red-dodge-challenger-side-view-i7jp1j3zcl169fxb.png",
    "https://www.pngmart.com/files/22/Dodge-Demon-PNG-Free-Download.png",
    "https://www.pngmart.com/files/22/Dodge-Demon-PNG-Isolated-Pic.png",
  ]

  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div>
      <Navbar />

      <div className="w-full mt-12 h-auto md:h-[calc(100vh-65px)] flex flex-col md:flex-row bg-white rounded-md overflow-hidden">
        
        {/* Right Section (Image first on mobile) */}
        <div className="flex-1 order-1 md:order-2 flex flex-col justify-center items-center relative px-4">
          
          {/* Fixed Height Image Container */}
          <div className="w-full max-w-2xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex justify-center items-center">
            <img
              src={mainImage}
              className="w-full h-full object-contain drop-shadow-2xl transition-all duration-500"
              alt="Car"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4 flex-wrap justify-center">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setMainImage(img)}
                className={`cursor-pointer w-20 h-16 sm:w-24 sm:h-20 rounded-xl overflow-hidden border-2 transition ${
                  mainImage === img ? "border-blue-500 scale-105" : "border-gray-300"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail-${idx}`}
                  className="w-full h-full object-contain bg-white"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Left Section (Card second on mobile) */}
        <div className="flex-1 order-2 md:order-1 flex flex-col justify-center items-start mt-6 px-6 md:px-12 py-6">
          <Card className="w-full max-w-3xl bg-white/30 backdrop-blur-xl shadow-2xl rounded-2xl border-2 border-black/20 p-8 hover:shadow-xl transition">
            <CardHeader>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 drop-shadow-lg">
                Dodge Challenger SRT Hellcat
              </h1>
              <CardTitle className="text-sm font-bold text-gray-800">
                Car Details
              </CardTitle>
            </CardHeader>

            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-4 border border-gray-200/60 rounded-lg bg-white/40 hover:bg-white/60 transition"
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-gray-600">{item.label}</span>
                  </div>
                  <span
                    className={`font-semibold ${
                      item.highlight ? "text-green-700 text-lg" : "text-gray-900"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}

              {/* Availability */}
              <div className="flex justify-between items-center col-span-1 sm:col-span-2 p-4 border border-gray-200/60 rounded-lg bg-white/40">
                <span className="text-gray-600">Availability</span>
                <Badge
                  variant="outline"
                  className="bg-green-100 text-green-700 border-green-400 px-3 py-1 rounded-lg"
                >
                  Available
                </Badge>
              </div>

              {/* Button */}
              <div className="flex justify-center col-span-1 sm:col-span-2 pt-4">
                <Button className="px-10 py-3 text-md rounded-xl shadow-lg">
                  Book now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CarDetail
