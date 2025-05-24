import React from "react";

const Modal = ({ setModalOpen , filteredRecipe}) => {
  console.log(filteredRecipe)
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl p-6 mx-4">
          <div className="my-4">
            <h2 className="text-xl border-b border-gray-300 dark:border-gray-600 pb-4 text-center font-bold text-gray-800 dark:text-gray-100">
              Edit Recipe
            </h2>
          </div>

          <form>
            <div className="flex flex-col mt-6 md:gap-6 gap-4 md:mt-10 w-full">
              <input
                className=" px-6 py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
                type="text"
                name="name"
                placeholder="Enter your Recipe Name"
                required
              />

              <div className="flex items-center md:gap-8 gap-4 dark:bg-gray-700 dark:text-white flex-col md:flex-row w-full">
                <select
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
                rows="4"
                required
                placeholder="Ingredients"
                className=" px-6  py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
              ></textarea>
              <textarea
                name="Instructions"
                rows="4"
                required
                placeholder="Instructions"
                className=" px-6  py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
              ></textarea>
              <div className="flex flex-col gap-2">
                <label className="font-medium dark:text-white">
                  Select Categories:
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center  dark:text-white gap-2">
                    <input
                      type="checkbox"
                      name="category"
                      value="Breakfast"
                      className="accent-purple-500"
                    />
                    Breakfast
                  </label>

                  <label className="flex items-center dark:text-white gap-2">
                    <input
                      type="checkbox"
                      name="category"
                      value="Lunch"
                      className="accent-purple-500"
                    />
                    Lunch
                  </label>

                  <label className="flex items-center dark:text-white gap-2">
                    <input
                      type="checkbox"
                      name="category"
                      value="Dinner"
                      className="accent-purple-500"
                    />
                    Dinner
                  </label>

                  <label className="flex items-center dark:text-white gap-2">
                    <input
                      type="checkbox"
                      name="category"
                      value="Dessert"
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
