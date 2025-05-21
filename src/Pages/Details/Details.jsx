import React from "react";
import { useLoaderData } from "react-router";

const Details = () => {
  const recipe = useLoaderData();
  console.log(recipe);
  return (
    <div className="max-w-[1600px] mx-auto">
        <div className="border flex justify-between mt-6 md:mt-12 items-start gap-8 flex-col md:flex-row border-[#0F0F0F26] p-6 md:p-8 rounded-md">
      <div className="w-full md:w-[40%]">
        <img
          className="w-full md:h-[500px] h-[300px] object-cover bg-center rounded-md"
          src={recipe.photo}
          alt=""
        />
      </div>
      <div className=" w-full md:w-[60%]">
        <h3 className=" text-xl font-semibold"> Recipe Name : {recipe.name}</h3>
        <p className="text-[#0F0F0F99] font-medium mt-2">
          Preparation Time : {recipe.time} Minutes
        </p>
        <p className="text-[#0F0F0F99] font-medium mt-2">
          Cuisine Type : {recipe.cuisine}{" "}
        </p>
        <p className="text-[#0F0F0F99] font-medium mt-2">
          Category : {recipe.category}{" "}
        </p>
        <p className="text-[#0F0F0F99] font-medium mt-2">
          Ingredients : {recipe.ingredients}{" "}
        </p>
        <p className="text-[#0F0F0F99] font-medium mt-2">
          Instructions : {recipe.instructions}{" "}
        </p>
      </div>
    </div>
    </div>
  );
};

export default Details;
