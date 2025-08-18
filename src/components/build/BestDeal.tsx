import { faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const deals = [
  {
    id: 1,
    title: "Experience the Holidays with Our Festive Promotions",
    discount: "40%",
    validity: "Valid only on 12 Jan",
    terms: "*with Terms and Conditions",
    image:
      "https://www.godigit.com/content/dam/godigit/directportal/en/family-car.jpg",
  },
  {
    id: 2,
    title: "Drive Longer with Our Weekly Specials",
    discount: "25%",
    validity: "Valid till 20 Jan",
    terms: "*T&C apply",
    image:
      "https://www.etags.com/blog/wp-content/uploads/2020/09/AdobeStock_294950461.jpeg",
  },
];

const BestDeal = () => {
  return (
    <div className="px-4 py-8 md:px-10 ">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
        Enjoy extra miles with our best deals
      </h1>

      {/* Deals Flex Container */}
      <div className="flex flex-col sm:flex-row gap-6">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="relative flex flex-col justify-between flex-1 rounded-xl shadow-lg text-white sm:h-96  overflow-hidden"
          >
            {/* Background Image */}
            <img
              src={deal.image}
              alt={deal.title}
              className="absolute w-full h-full object-cover"
            />

            {/* Dim Overlay */}
            <div className="absolute w-full h-full bg-black/50"></div>

            {/* Content */}
            <div className="relative flex flex-col justify-between h-full p-4 sm:p-6 z-10">
              {/* Top row */}
              <div className="flex justify-between items-center">
                <div
                  className={`w-5 h-5 sm:w-8 sm:h-8 bg-black/80 rounded-sm flex items-center justify-center`}
                >
                  <FontAwesomeIcon icon={faGift} />
                </div>
                <div className="text-xs sm:text-sm font-medium bg-black/60 px-2 py-1 rounded-lg backdrop-blur-md">
                  {deal.validity}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 mt-auto">
                <p className="text-base sm:text-lg font-semibold leading-snug">
                  {deal.title}
                </p>
                <p className="text-4xl sm:text-5xl md:text-6xl font-bold">
                  {deal.discount}
                </p>
                <p className="text-[10px] sm:text-xs">{deal.terms}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-8 flex justify-center">
        <button className="bg-black hover:bg-gray-800 text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition w-full sm:w-auto">
          View All
        </button>
      </div>
    </div>
  );
};

export default BestDeal;
