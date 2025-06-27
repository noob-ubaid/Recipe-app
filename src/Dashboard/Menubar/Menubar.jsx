import React, { use } from "react";
import { AuthContext } from "../../components/Context/AuthProvider";
import { Link, NavLink } from "react-router";
import { FaUtensils } from "react-icons/fa";

const Menubar = () => {
  const { user } = use(AuthContext);
  if (!user) {
    return (
      <div className="flex absolute items-center justify-center min-h-screen w-full">
        {" "}
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div className="md:py-20 py-12 px-4">
      <div className="flex items-center justify-center border-b border-gray-300 pb-6">
        <Link
          to={`/`}
          className="font-bold text-lg md:text-2xl ml-2 md:ml-0 flex items-center gap-2 md:gap-3 text-white"
        >
          <FaUtensils /> Recipe Book
        </Link>
      </div>
      <div className="flex items-center flex-col border-b border-gray-300 pb-6 justify-center my-6">
        <img className="rounded-full size-20" src={user?.photoURL} alt="" />
        <h2 className="text-2xl text-white mt-4 font-medium">
          {user?.displayName}
        </h2>
      </div>
      <div className="my-6 flex items-center gap-4 flex-col">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-[#AD49E1] py-2 rounded-md bg-white w-full text-center font-semibold" : "text-white"
          }
        >
          All Recipes
        </NavLink>
        
        <NavLink
          to="/addrecipes"
          className={({ isActive }) =>
            isActive ? "text-[#AD49E1] py-2 rounded-md bg-white w-full text-center font-semibold" : "text-white"
          }
        >
          Add Recipes
        </NavLink>
        <NavLink
          to="/myrecipes"
          className={({ isActive }) =>
            isActive ? "text-[#AD49E1] py-2 rounded-md bg-white w-full text-center font-semibold" : "text-white"
          }
        >
          My Recipes
        </NavLink>
      </div>
    </div>
  );
};

export default Menubar;
