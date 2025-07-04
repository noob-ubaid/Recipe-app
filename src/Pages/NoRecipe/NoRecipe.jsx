import React from "react";
import { Link } from "react-router";

const NoRecipe = () => {
  return (
    <div className="bg-[rgba(15, 15, 15, 0.05)] w-full dark:bg-gray-600 py-20 md:mb-28 text-center px-4 md:px-0 bg-[#0F0F0F0D] mt-6 md:mt-10 rounded-md">
      <h4 className="font-semibold dark:text-white text-2xl md:text-3xl text-[#141414]">
        No recipes have been added yet{" "}
      </h4>
      <p className="mt-4 dark:text-white text-[#141414B3]">
        Your kitchen creations deserve to be seen! Whether it's a family
        favorite or a new experiment, share your delicious recipes with the
        community.
      </p>
      <div className="mt-6">
        <Link
          to="/addrecipes"
          className=" bg-[#AD49E1] mt-6 text-white font-medium px-8 py-2.5  rounded"
        >
          Add Recipe
        </Link>
      </div>
    </div>
  );
};

export default NoRecipe;
