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
    <div className="border border-[#0F0F0F26] p-4 md:p-6 rounded-md">
      <div>
        <img
          className="w-full h-[280px] object-cover bg-center rounded-md"
          src={card.photo}
          alt=""
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold">{card.name}</h3>
      <p className="text-[#0F0F0F99] font-medium mt-2">
        Ingredients : {card.ingredients}{" "}
      </p>
      <p className="text-[#0F0F0F99] font-medium mt-2">
        Instructions : {card.instructions}{" "}
      </p>
      <p className="text-[#0F0F0F99] font-medium mt-2">
        Preparation Time : {card.time} Minutes
      </p>
      <p className="text-[#0F0F0F99] font-medium mt-2">
        Cuisine Type : {card.cuisine}{" "}
      </p>
      <p className="text-[#0F0F0F99] font-medium mt-2">
        Category : {card.category}{" "}
      </p>

      <div className="mt-4 w-full flex items-center gap-8 justify-center ">
        <button className="rounded-md md:px-6 w-full md:py-3 px-4 py-2 text-[#09982F] bg-[#09982F1A] ">
          Edit
        </button>
        <button
          onClick={() => handleDelete(card._id)}
          className="rounded-md md:px-6 w-full md:py-3 px-4 py-2 text-[#FF0000] bg-[#FF000010] "
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyRecipe;
