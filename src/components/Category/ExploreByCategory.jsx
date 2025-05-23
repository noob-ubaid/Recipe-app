import {
  FaUtensils,
  FaHamburger,
  FaLeaf,
  FaCookieBite,
  FaCoffee,
  FaFish,
} from "react-icons/fa";

const categories = [
  { name: "Breakfast", icon: <FaCoffee />, bg: "bg-yellow-100" },
  { name: "Lunch", icon: <FaHamburger />, bg: "bg-red-100" },
  { name: "Dinner", icon: <FaUtensils />, bg: "bg-green-100" },
  { name: "Dessert", icon: <FaCookieBite />, bg: "bg-pink-100" },
  { name: "Vegan", icon: <FaLeaf />, bg: "bg-lime-100" },
  { name: "Seafood", icon: <FaFish />, bg: "bg-blue-100" },
];

const ExploreByCategory = () => {
  return (
    <section className="py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl md:text-4xl  lg:text-5xl text-center  font-bold text-[#AD49E1]">
           Explore by Category 🍽️
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 mt-12 md:mt-20  gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`rounded-xl flex items-center justify-center flex-col p-6 text-center shadow-md hover:scale-105 transition-transform cursor-pointer ${cat.bg}`}
            >
              <div className="text-4xl mb-3 text-gray-700 mx-auto">
                {cat.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreByCategory;
