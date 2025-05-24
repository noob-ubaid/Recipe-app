import React, { useState } from "react";
import { toast } from "react-toastify";

const Modal = ({ setModalOpen, card }) => {
  const [ingredients, setIngredients] = useState(card.ingredients);
  const [instructions, setInstructions] = useState(card.instructions);
  const [cuisine, setCuisine] = useState(card.cuisine);
  const [category, setCategory] = useState(card.category);
  const handleIngredients = (e) => {
    setIngredients(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleCuisine = (e) => {
    setCuisine(e.target.value);
  };
  const handleInstructions = (e) => {
    setInstructions(e.target.value);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const time = form.preparation.value;
    const photo = form.image.value;
    const data = {
      name: name,
      time: time,
      email: card.email,
      photo: photo,
      like: card.like,
      ingredients: ingredients,
      instructions: instructions,
      cuisine: cuisine,
      category: category,
    };

    fetch(`https://recipe-server-liard.vercel.app/addrecipes/${card._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Your recipe has been updated");
          setModalOpen(false);
        }
      });
  };
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl p-6 mx-4">
          <div className="my-4">
            <h2 className="text-xl border-b border-gray-300 dark:border-gray-600 pb-4 text-center font-bold text-gray-800 dark:text-gray-100">
              Edit Recipe
            </h2>
          </div>

          <form onSubmit={handleUpdate}>
            <div className="flex flex-col mt-6 md:gap-6 gap-4 md:mt-10 w-full">
              <input
                className=" px-6 py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
                type="text"
                name="name"
                defaultValue={card.name}
                placeholder="Enter your Recipe Name"
                required
              />

              <div className="flex items-center md:gap-8 gap-4 dark:bg-gray-700 dark:text-white flex-col md:flex-row w-full">
                <select
                  value={cuisine}
                  onChange={handleCuisine}
                  required
                  className=" px-6 py-3 rounded w-full dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
                >
                  <option value="">-- Choose a Cuisine type --</option>
                  <option value="Italian">Italian</option>
                  <option value="Mexican">Mexican</option>
                  <option value="Indian">Indian</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="flex items-center md:gap-8 gap-4  flex-col md:flex-row w-full">
                <input
                  className=" px-6 py-3  w-full rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
                  type="number"
                  name="preparation"
                  defaultValue={card.time}
                  placeholder="Preparation Time"
                  required
                />
              </div>
              <input
                className=" px-6 py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
                type="text"
                name="image"
                defaultValue={card.photo}
                placeholder="Enter your Image URL"
                required
              />
              <textarea
                name="Ingredients"
                rows="4"
                required
                placeholder="Ingredients"
                onChange={handleIngredients}
                defaultValue={card.ingredients}
                className=" px-6  py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
              ></textarea>
              <textarea
                name="Instructions"
                rows="4"
                onChange={handleInstructions}
                required
                placeholder="Instructions"
                defaultValue={card.instructions}
                className=" px-6  py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
              ></textarea>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center  dark:text-white gap-2">
                    <input
                      type="checkbox"
                      name="category"
                      value="Breakfast"
                      checked={category === "Breakfast"}
                      onChange={handleCategory}
                      className="accent-purple-500"
                    />
                    Breakfast
                  </label>

                  <label className="flex items-center dark:text-white gap-2">
                    <input
                      type="checkbox"
                      name="category"
                      value="Lunch"
                      checked={category === "Lunch"}
                      onChange={handleCategory}
                      className="accent-purple-500"
                    />
                    Lunch
                  </label>

                  <label className="flex items-center dark:text-white gap-2">
                    <input
                      type="checkbox"
                      name="category"
                      value="Dinner"
                      checked={category === "Dinner"}
                      onChange={handleCategory}
                      className="accent-purple-500"
                    />
                    Dinner
                  </label>

                  <label className="flex items-center dark:text-white gap-2">
                    <input
                      type="checkbox"
                      name="category"
                      value="Dessert"
                      checked={category === "Dessert"}
                      onChange={handleCategory}
                      className="accent-purple-500"
                    />
                    Dessert
                  </label>
                  <label className="flex items-center dark:text-white gap-2">
                    <input
                      type="checkbox"
                      name="categories"
                      checked={category === "Vegan"}
                      value="Vegan"
                      onChange={handleCategory}
                      className="accent-purple-500"
                    />
                    Vegan
                  </label>
                </div>
              </div>
              <div className="mt-4 w-full flex items-center gap-8 justify-center ">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="rounded-md md:px-6 w-full md:py-3 px-4 py-2 text-[#FF0000] bg-[#FF000020] "
                >
                  Close
                </button>
                <button className="rounded-md md:px-6 w-full md:py-3 px-4 py-2 text-[#09982F] bg-[#09982F1A] ">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
