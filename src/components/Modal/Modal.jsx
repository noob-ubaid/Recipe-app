
import React, { useState } from "react";
import { toast } from "react-toastify";

const Modal = ({ setModalOpen, card, onUpdate }) => {
  const [ingredients, setIngredients] = useState(card.ingredients);
  const [instructions, setInstructions] = useState(card.instructions);
  const [cuisine, setCuisine] = useState(card.cuisine);
  const [category, setCategory] = useState(card.category);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const time = form.preparation.value;
    const photo = form.image.value;
    const updatedData = {
      name,
      time,
      email: card.email,
      photo,
      like: card.like,
      ingredients,
      instructions,
      cuisine,
      category,
    };

    fetch(`https://recipe-book-server-rho-gilt.vercel.app/addrecipes/${card._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Your recipe has been updated");
          onUpdate({ ...card, ...updatedData }); // ✅ call update function
          setModalOpen(false);
        }
      });
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
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
              required
            />
            <select
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              required
              className=" px-6 py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
            >
              <option value="Italian">Italian</option>
              <option value="Mexican">Mexican</option>
              <option value="Indian">Indian</option>
              <option value="Chinese">Chinese</option>
              <option value="Others">Others</option>
            </select>

            <input
              className=" px-6 py-3 w-full rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
              type="number"
              name="preparation"
              defaultValue={card.time}
              required
            />
            <input
              className=" px-6 py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
              type="text"
              name="image"
              defaultValue={card.photo}
              required
            />
            <textarea
              name="Ingredients"
              rows="4"
              required
              onChange={(e) => setIngredients(e.target.value)}
              defaultValue={card.ingredients}
              className=" px-6 py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
            />
            <textarea
              name="Instructions"
              rows="4"
              required
              onChange={(e) => setInstructions(e.target.value)}
              defaultValue={card.instructions}
              className=" px-6 py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
            />
            <div className="flex flex-wrap gap-4">
              {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map((type) => (
                <label key={type} className="flex items-center dark:text-white gap-2">
                  <input
                    type="radio"
                    name="category"
                    value={type}
                    checked={category === type}
                    onChange={handleCategory}
                    className="accent-purple-500"
                  />
                  {type}
                </label>
              ))}
            </div>

            <div className="mt-4 w-full flex items-center gap-8 justify-center ">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="rounded-md md:px-6 w-full md:py-3 px-4 py-2 text-[#FF0000] bg-[#FF000020] "
              >
                Close
              </button>
              <button
                type="submit"
                className="rounded-md md:px-6 w-full md:py-3 px-4 py-2 text-[#09982F] bg-[#09982F1A] "
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;