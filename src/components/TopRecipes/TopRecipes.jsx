import React from "react";
import SingleRecipe from "./SingleRecipe";
import { Link } from "react-router";

const TopRecipes = ({ data }) => {
  return (
    <>
      <h3 className="text-2xl md:text-4xl mt-12 md:mt-20  lg:text-5xl text-center  font-bold text-[#AD49E1]">
        Top Recipes
      </h3>
      <div className="grid grid-cols-1 mt-8 md:mt-12 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {data.map((recipe) => (
          <SingleRecipe recipe={recipe}></SingleRecipe>
        ))}
      </div>
      <div className="mt-14 flex items-center justify-center">
        <Link
          to="/allrecipes"
          className="cursor-pointer bg-[#AD49E1] text-white px-6 py-3 rounded-md "
        >
          🍕 All Recipes
        </Link>
      </div>
    </>
  );
};

export default TopRecipes;
