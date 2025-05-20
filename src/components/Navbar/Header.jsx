import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { FaUtensils } from "react-icons/fa";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";

const Header = () => {
  const {user , logOut} = use(AuthContext)
  console.log(user)
  const handleLogOut = () => {
    logOut()
    .then(result => {
       toast.warning("Successfully Logged out!")
    })
    .then(error => {})
  }
  return (
    <div className="navbar flex items-center justify-between">
      <div className="navbar-start w-full md:w-[770px]">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content gap-4 text-center bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink className="font-medium text-lg text-[#393E46]" to="/">
              Home
            </NavLink>
            <NavLink
              className="font-medium text-lg text-[#393E46]"
              to="/allrecipes"
            >
              All Recipes
            </NavLink>
            <NavLink
              className="font-medium text-lg text-[#393E46]"
              to="/addrecipes"
            >
              Add Recipes
            </NavLink>
            <NavLink
              className="font-medium text-lg text-[#393E46]"
              to="/myrecipes"
            >
              My Recipes
            </NavLink>
          </ul>
        </div>
        <h1 className="font-bold md:text-2xl text-xl ml-2 md:ml-0 flex items-center gap-2 text-[#AD49E1]">
          <FaUtensils /> Recipe Book
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex items-center gap-8 px-1">
          <NavLink className="font-medium text-lg text-[#393E46]" to="/">
            Home
          </NavLink>
          <NavLink
            className="font-medium text-lg text-[#393E46]"
            to="/allrecipes"
          >
            All Recipes
          </NavLink>
          <NavLink
            className="font-medium text-lg text-[#393E46]"
            to="/addrecipes"
          >
            Add Recipes
          </NavLink>
          <NavLink
            className="font-medium text-lg text-[#393E46]"
            to="/myrecipes"
          >
            My Recipes
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-4">
         <button>
            {user && (
              <img
                className="md:size-12 size-10 rounded-full"
                src={user.photoURL}
                alt=""
              />
            )}
          </button>
       {
        user ?  <button onClick={handleLogOut} className=" bg-[#AD49E1] text-white font-medium md:px-8 md:py-2.5 px-4 py-2  rounded">
          logout
        </button> : <Link to='/login' className=" bg-[#AD49E1] text-white font-medium md:px-8 md:py-2.5 px-4 py-2  rounded">
          Login
        </Link>
       }
      </div>
    </div>
  );
};

export default Header;
