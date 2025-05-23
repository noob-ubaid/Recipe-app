import React, { useState } from "react";
import { toast } from "react-toastify";

const AddRecipes = () => {
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [category, setCategory] = useState("");
  const handleAddRecipes = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const time = form.preparation.value;
    const photo = form.image.value;
    const email = form.email.value;
    const data = {
      name: name,
      time: time,
      email: email,
      photo: photo,
      like: 0,
      ingredients: ingredients,
      instructions: instructions,
      cuisine: cuisine,
      category: category,
    };
    // post method
    fetch("https://recipe-server-liard.vercel.app/addrecipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully added food items");
      });
  };
  const handleIngredients = (e) => {
    setIngredients(e.target.value);
  };
  const handleInstructions = (e) => {
    setInstructions(e.target.value);
  };
  const handleCuisine = (e) => {
    setCuisine(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  return (
    <>
      <h1 className="text-center text-2xl md:text-3xl dark:text-white lg:text-4xl font-semibold mt-8 md:mt-12">
        Add Recipe
      </h1>
      <form onSubmit={handleAddRecipes}>
        <div className="flex flex-col mt-6 md:gap-6 gap-4 md:mt-10 w-full">
          <input
            className=" px-6 py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
            type="text"
            name="name"
            placeholder="Enter your Recipe Name"
            required
          />
          <input
            className=" px-6 py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <div className="flex items-center md:gap-8 gap-4 dark:bg-gray-700 dark:text-white flex-col md:flex-row w-full">
            <select
              value={cuisine}
              required
              onChange={handleCuisine}
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
              placeholder="Preparation Time"
              required
            />
          </div>
          <input
            className=" px-6 py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
            type="text"
            name="image"
            placeholder="Enter your Image URL"
            required
          />
          <textarea
            name="Ingredients"
            value={ingredients}
            onChange={handleIngredients}
            rows="5"
            required
            placeholder="Ingredients"
            className=" px-6  py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
          ></textarea>
          <textarea
            name="Instructions"
            rows="5"
            onChange={handleInstructions}
            value={instructions}
            required
            placeholder="Instructions"
            className=" px-6  py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
          ></textarea>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Select Categories:</label>
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
                  value="Vegan"
                  className="accent-purple-500"
                />
                Vegan
              </label>
            </div>
          </div>
          <button
            type="submit"
            className=" bg-[#AD49E1] w-full  text-white font-medium md:px-8 md:py-2.5 px-4 py-2  rounded"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </>
  );
};

export default AddRecipes;
