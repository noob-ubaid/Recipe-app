import React, { useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyRecipe = ({ card, recipe, setRecipe }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://recipe-server-liard.vercel.app/addrecipes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your recipe has been deleted.",
                icon: "success",
              });
              const remainingRecipe = recipe.filter(
                (remain) => remain._id !== id
              );
              setRecipe(remainingRecipe);
            }
          });
      }
    });
  };
  return (
    <div className="border flex flex-col md:flex-row gap-6 md:gap-8 border-[#0F0F0F26] dark:border-gray-700 p-4 md:p-6 rounded-md">
      <div className="md:w-[40%]">
        <img
          className="w-full h-[280px] md:h-[500px] object-cover bg-center rounded-md"
          src={card.photo}
          alt=""
        />
      </div>
      <div className="w-full md:w-[60%]">
        <h3 className=" text-xl dark:text-white font-semibold">Recipe Name : {card.name}</h3>
        <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
          Ingredients : {card.ingredients}{" "}
        </p>
        <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
          Instructions : {card.instructions}{" "}
        </p>
        <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
          Preparation Time : {card.time} Minutes
        </p>
        <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
          Cuisine Type : {card.cuisine}{" "}
        </p>
        <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
          Category : {card.category}{" "}
        </p>

        <div className="mt-4 w-full flex items-center gap-8 justify-center ">
          <button className="rounded-md md:px-6 w-full md:py-3 px-4 py-2 text-[#09982F] bg-[#09982F1A] ">
            Edit
          </button>
          <button
            onClick={() => handleDelete(card._id)}
            className="rounded-md md:px-6 w-full md:py-3 px-4 py-2 text-[#FF0000] bg-[#FF000020] "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyRecipe;
