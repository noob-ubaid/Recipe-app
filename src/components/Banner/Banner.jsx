import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/qMYbFv5h/top-view-fresh-fruits-strawberries-lemons-gray-surface.jpg')] mt-6 rounded-md bg-cover bg-right w-full h-[550px]">
      <div className="flex flex-col items-center justify-center text-center px-4 md:px-0 h-full">
        <h2 className="text-2xl font-medium md:text-3xl md:font-semibold lg:text-4xl text-center md:text-left text-white">
          Discover Delicious Recipes for Every Taste
        </h2>
        <p className="text-gray-300 mt-4 w-full md:w-[1000px]">Explore a world of flavor with our handpicked collection of easy-to-follow recipes. Whether you're a beginner or a seasoned chef, you'll find inspiration to cook mouthwatering meals for any occasion. Start your culinary adventure today!</p>
      </div>
    </div>
  );
};

export default Banner;
