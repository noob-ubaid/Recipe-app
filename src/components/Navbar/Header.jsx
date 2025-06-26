import React, { use } from "react";
import { MdDarkMode } from "react-icons/md";
import { Link, NavLink } from "react-router";
import { FaUtensils } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { useDarkMode } from "../Context/ThemeContext";

const Header = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const handleTheme = () => setDarkMode(!darkMode);

  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => toast.warning("Successfully Logged out!"))
      .catch((error) => console.error(error));
  };

  return (

     <div className="sticky top-3 z-50 max-w-[1600px] rounded-full mx-auto py-3 bg-[#AD49E1]">
      <div className=" px-3 rounded-full bg-[#AD49E1] flex items-center justify-between">
        {/* Navbar Start */}
        <div className="navbar-start w-full md:w-[770px]">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content gap-4 text-center bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <NavLink className="font-medium text-lg text-[#393E46]" to="/">Home</NavLink>
              <NavLink className="font-medium text-lg text-[#393E46]" to="/allrecipes">All Recipes</NavLink>
              <NavLink className="font-medium text-lg text-[#393E46]" to="/addrecipes">Add Recipes</NavLink>
              <NavLink className="font-medium text-lg text-[#393E46]" to="/myrecipes">My Recipes</NavLink>
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="bg-[#AD49E1] text-white font-medium px-4 py-2 rounded"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/login" className="bg-[#AD49E1] text-white font-medium px-4 py-2 rounded">Login</Link>
                  <Link to="/register" className="border border-[#AD49E1] text-[#393E46] font-medium px-4 py-2 rounded">Register</Link>
                </>
              )}
            </ul>
          </div>
          <h1 className="font-bold text-lg md:text-2xl ml-2 md:ml-0 flex items-center gap-2 md:gap-3 text-white">
            <FaUtensils /> Recipe Book
          </h1>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex items-center gap-8 px-1">
            <NavLink className="font-medium text-white text-lg hover:text-gray-200" to="/">Home</NavLink>
            <NavLink className="font-medium text-white text-lg hover:text-gray-200" to="/allrecipes">All Recipes</NavLink>
            <NavLink className="font-medium text-white text-lg hover:text-gray-200" to="/addrecipes">Add Recipes</NavLink>
            <NavLink className="font-medium text-white text-lg hover:text-gray-200" to="/myrecipes">My Recipes</NavLink>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-2 md:gap-4">
          <Tooltip title={user && user.displayName} arrow>
            <Button>
              {user && (
                <img
                  className="md:size-12 size-10 rounded-full"
                  src={user.photoURL}
                  alt="User"
                />
              )}
            </Button>
          </Tooltip>
          <div className="md:flex items-center gap-4 hidden">
            {user ? (
              <button
                onClick={handleLogOut}
                className="bg-white text-[#AD49E1] font-medium px-4 py-2 rounded"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-white text-[#AD49E1] font-medium px-4 py-2 rounded"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="border border-white text-white font-medium px-4 py-2 rounded"
                >
                  Register
                </Link>
              </>
            )}
          </div>
          <button onClick={handleTheme}>
            {darkMode ? (
              <CiLight className="text-white" size={30} />
            ) : (
              <MdDarkMode className="text-white" size={30} />
            )}
          </button>
        </div>
      </div>
    </div>

  );
};

export default Header;

