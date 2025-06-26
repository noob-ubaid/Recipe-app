import React from "react";

const ThirdSlider = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/4R4hFj4f/Adobe-Stock-1093372532-Preview.jpg')] mt-8 md:mt-10 rounded-md bg-cover bg-right w-full h-[550px]">
      <div className="flex flex-col items-center justify-center text-center px-4 md:px-0 h-full">
        <h2 className="text-2xl font-medium md:text-3xl md:font-semibold lg:text-5xl text-center md:text-left text-white">
         Taste the World From Your Kitchen
        </h2>
        <p className="text-gray-300 mt-4 w-full md:w-[1000px]">
          Take your taste buds on a global adventure. Explore international recipes that bring authentic flavors and cultural delights right to your dining table.
        </p>
      </div>
    </div>
  );
};

export default ThirdSlider;
