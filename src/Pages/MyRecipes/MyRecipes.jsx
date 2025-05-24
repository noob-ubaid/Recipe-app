import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../components/Context/AuthProvider";
import MyRecipe from "./MyRecipe";
import NoRecipe from "../NoRecipe/NoRecipe";

const MyRecipes = () => {
  const { user } = use(AuthContext);
  const data = useLoaderData();
  const [recipe, setRecipe] = useState(data);
  const filteredRecipe = recipe.filter((item) => item.email == user.email);
  if (filteredRecipe.length < 1) {
    return <NoRecipe></NoRecipe>
  }
  return (
    <div className="flex flex-col gap-8 mt-6 md:mt-10">
      {filteredRecipe.map((card) => (
          <MyRecipe
            key={card._id}
            recipe={recipe}
            setRecipe={setRecipe}
            card={card}
          ></MyRecipe>
        ))}
    </div>
  );
};

export default MyRecipes;