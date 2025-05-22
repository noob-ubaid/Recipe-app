import React, { use, useState } from "react";
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-10">
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





// import React, { use, useState } from "react";
// import { useLoaderData } from "react-router";
// import { AuthContext } from "../../components/Context/AuthProvider";
// import MyRecipe from "./MyRecipe";

// const MyRecipes = () => {
//   const { user } = use(AuthContext);
//   const data = useLoaderData();
//   const [recipe, setRecipe] = useState(data);
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-10">
//       {recipe
//         .filter((recipe) => recipe.email == user.email)
//         .map((card) => (
//           <MyRecipe
//             key={card._id}
//             recipe={recipe}
//             setRecipe={setRecipe}
//             card={card}
//           ></MyRecipe>
//         ))}
//     </div>
//   );
// };

// export default MyRecipes;