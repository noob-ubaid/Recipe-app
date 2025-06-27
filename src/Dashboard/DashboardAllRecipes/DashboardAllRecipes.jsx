import React, { useEffect, useState } from "react";
import Recipe from "../../Pages/Recipe/recipe";
import Filter from "../../Pages/Filter/Filter";

const DashboardAllRecipes = () => {
  const [cuisine, setCuisine] = useState("All");
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState("desc");
    useEffect(() => {
      setLoading(true);
      fetch(
        `https://recipe-book-server-rho-gilt.vercel.app/addrecipes?sort=${sortOrder}`
      )
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setData(data);
        });
    }, [sortOrder]);
    if (loading) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      );
    }
    const handleSortChange = (e) => {
      setSortOrder(e.target.value);
    };

  const handleCuisineType = (e) => {
    setCuisine(e.target.value.trim());
  };
  const filteredRecipe =
    cuisine === "All"
      ? data
      : data.filter((recipe) => recipe.cuisine === cuisine);

  return (
    <>
      <div className="flex items-center mt-6 md:mt-8 mb-6 gap-4 md:gap-8">
        <div className="w-full ">
          <select
            value={cuisine}
            onChange={handleCuisineType}
            className="px-6 py-3 rounded w-full bg-gray-200 dark:bg-gray-700 dark:text-white outline-none"
          >
            <option value="All">All</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div>
          <div className="">
            <select
              value={sortOrder}
              onChange={handleSortChange}
              className="p-3 bg-gray-200 dark:bg-gray-700 outline-none dark:text-white rounded"
            >
              <option value="asc">Sort by Likes: Ascending</option>
              <option value="desc">Sort by Likes: Descending</option>
            </select>
          </div>
        </div>
      </div>

      {filteredRecipe.length === 0 && <Filter cuisine={cuisine} />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredRecipe.map((recipe) => (
          <Recipe key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default DashboardAllRecipes;
