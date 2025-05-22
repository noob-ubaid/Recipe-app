import React from "react";
import { Link } from "react-router";

const Recipe = ({ recipe }) => {
  return (
    <div className="border hover:shadow-md transition duration-300 border-[#0F0F0F26] p-4 md:p-6 rounded-md">
      <div>
        <img
          className="w-full h-[280px] object-cover bg-center rounded-md"
          src={recipe.photo}
          alt=""
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold">{recipe.name}</h3>
      <p className="text-[#0F0F0F99] font-medium mt-2">
        Preparation Time : {recipe.time} Minutes
      </p>
      <p className="text-[#0F0F0F99] font-medium mt-2">
        Cuisine Type : {recipe.cuisine}{" "}
      </p>
      <p className="text-[#0F0F0F99] font-medium mt-2">
        Category : {recipe.category}{" "}
      </p>
      <div className="mt-4 w-full ">
        <Link
          to={`/recipes/${recipe._id}`}
          className="block w-full text-center bg-[#AD49E1] text-white py-3 rounded-lg font-semibold hover:bg-[#9b3cd3] transition"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
