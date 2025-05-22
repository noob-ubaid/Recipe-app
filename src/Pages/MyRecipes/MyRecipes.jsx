import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../components/Context/AuthProvider";
import MyRecipe from "./MyRecipe";

const MyRecipes = () => {
  const { user } = use(AuthContext);
  const data = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-10">
      {data
        .filter((recipe) => recipe.email == user.email)
        .map((card) => (
          <MyRecipe key={card._id} card={card}></MyRecipe>
        ))}
    </div>
  );
};

export default MyRecipes;
