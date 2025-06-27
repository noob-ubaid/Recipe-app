import {
  FaCalendarAlt,
  FaHeart,
  FaSearchLocation,
  FaSort,
  FaUsers,
} from "react-icons/fa";
import { MdEventAvailable, MdOutlineDashboard } from "react-icons/md";

const features = [
    {
    icon: <FaUsers className="text-4xl text-green-600" />,
    title: "Community Driven Recipes",
    description:
      "Join a vibrant community of home cooks and food lovers sharing recipes, tips, and feedback.",
  },
  {
    icon: <MdEventAvailable className="text-4xl text-orange-500" />,
    title: "Easy Recipe Upload",
    description:
      "Upload your favorite recipes in just a few steps, with images, instructions, and ingredients.",
  },
  {
    icon: <FaSearchLocation className="text-4xl text-yellow-500" />,
    title: "Smart Search & Filters",
    description:
      "Quickly find the perfect recipe using filters for ingredients, cooking time, diet, and more.",
  },
  {
    icon: <MdOutlineDashboard className="text-4xl text-purple-600" />,
    title: "Personal Recipe Dashboard",
    description:
      "Manage your uploaded recipes, saved dishes, and favorite collections from one place.",
  },
  {
    icon: <FaCalendarAlt className="text-4xl text-blue-600" />,
    title: "Step-by-Step Cooking Guide",
    description:
      "Every recipe includes clear, step-by-step instructions to help you cook with confidence.",
  },
  {
  icon: <FaSearchLocation className="text-4xl text-indigo-500" />,
  title: "Custom Sorting & Recipe Notes",
  description:
    "Sort your recipes the way you like—by time and personalize them with your own notes or descriptions.",
}
];


const FeatureSection = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 rounded-md my-10 md:mt-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="text-3xl feature-title md:text-4xl font-bold mb-12 text-gray-800 dark:text-white"
        >
          What Makes Our Platform Special?
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
       
          initial="hidden"
          whileInView="visible"
        >
          {features.map((feature, index) => (
            <div
             
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl border border-[#14141426] shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
