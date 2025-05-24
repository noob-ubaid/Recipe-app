import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../components/Context/AuthProvider";

const Details = () => {
  const { user } = use(AuthContext);
  const recipe = useLoaderData();
  const [like, setLike] = useState(recipe.like);

  const handleLike = () => {
    setLike((prevLike) => {
      const updatedLikes = prevLike + 1;

      fetch(`https://recipe-server-liard.vercel.app/addrecipes/${recipe._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ like: updatedLikes }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      return updatedLikes;
    });
  };

  return (
    <div className="max-w-[1600px] mx-auto">
      <h4 className="font-semibold dark:text-white text-lg mt-6">
        {like} people interested in this recipe
      </h4>
      <div className="border flex justify-between mt-6 md:mt-12 dark:border-gray-700 items-start gap-8 flex-col md:flex-row border-[#0F0F0F26] p-6 md:p-8 rounded-md">
        <div className="w-full md:w-[40%]">
          <img
            className="w-full md:h-[500px] h-[300px] object-cover bg-center rounded-md"
            src={recipe.photo}
            alt=""
          />
        </div>
        <div className=" w-full md:w-[60%]">
          <h3 className=" text-xl dark:text-white font-semibold">
            Recipe Name : {recipe.name}
          </h3>
          <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
            Preparation Time : {recipe.time} Minutes
          </p>
          <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
            Cuisine Type : {recipe.cuisine}
          </p>
          <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
            Category : {recipe.category}
          </p>
          <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
            Ingredients : {recipe.ingredients}
          </p>
          <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
            Instructions : {recipe.instructions}
          </p>
          <div>
            <button
              disabled={user.email === recipe.email}
              onClick={handleLike}
              className={`block w-full ${
                user.email === recipe.email && "cursor-not-allowed"
              } mt-6 text-center bg-[#AD49E1] text-white py-3 rounded-lg font-semibold hover:bg-[#9b3cd3] transition`}
            >
              {user.email === recipe.email
                ? "You cannot like your own recipe"
                : "Like"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
