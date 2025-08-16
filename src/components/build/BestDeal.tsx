const deals = [
  {
    id: 1,
    title: "Experience the Holidays with Our Festive Promotions",
    discount: "40%",
    validity: "Valid only on 12 Jan",
    terms: "*with Terms and Conditions",
    image:
      "https://www.godigit.com/content/dam/godigit/directportal/en/family-car.jpg",
    badgeColor: "bg-red-400",
  },
  {
    id: 2,
    title: "Drive Longer with Our Weekly Specials",
    discount: "25%",
    validity: "Valid till 20 Jan",
    terms: "*T&C apply",
    image:
      "https://www.etags.com/blog/wp-content/uploads/2020/09/AdobeStock_294950461.jpeg",
    badgeColor: "bg-yellow-400",
  },
  {
    id: 3,
    title: "Exclusive Luxury Car Rental Deals",
    discount: "50%",
    validity: "Valid this Weekend",
    terms: "*Only premium cars included",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWDJfjvY3zIr70NDsJ1yAjb76sHi6eWRLDQ&s",
    badgeColor: "bg-pink-400",
  },
];

const BestDeal = () => {
  return (
    <div className="px-4 py-8 md:px-10 lg:px-20">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
        Enjoy extra miles with our best deals
      </h1>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="relative flex flex-col justify-between rounded-xl shadow-lg text-white w-full h-80 sm:h-96 lg:h-[420px] overflow-hidden"
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
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${deal.badgeColor}`}
                ></div>
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
