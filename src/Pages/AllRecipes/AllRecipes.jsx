import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Recipe from "../Recipe/recipe";
import Filter from "../Filter/Filter";

const AllRecipes = () => {
  const data = useLoaderData();
  const [cuisine, setCuisine] = useState("All");

  const handleCuisineType = (e) => {
    setCuisine(e.target.value.trim());
  };
console.log(cuisine)
  const filteredRecipe =
    cuisine === "All"
      ? data
      : data.filter((recipe) => recipe.cuisine === cuisine);

  return (
    <>
      <div className="w-full mt-6 md:mt-8 mb-6">
        <select
          value={cuisine}
          onChange={handleCuisineType}
          className="px-6 py-3 rounded w-full bg-gray-200 outline-none"
        >
          <option value="All">All</option>
          <option value="Italian">Italian</option>
          <option value="Mexican">Mexican</option>
          <option value="Indian">Indian</option>
          <option value="Chinese">Chinese</option>
          <option value="Others">Others</option>
        </select>
      </div>

      {filteredRecipe.length === 0 && <Filter cuisine={cuisine}/>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredRecipe.map((recipe) => (
          <Recipe key={recipe._id}  recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default AllRecipes;