import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AllRecipes from "../Pages/AllRecipes/AllRecipes";
import AddRecipes from "../Pages/AddRecipes/AddRecipes";
import MyRecipes from "../Pages/MyRecipes/MyRecipes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    children : [
        {
            index : true,
            Component : Home
        },
        {
            path : "/allrecipes",
            Component : AllRecipes
        },
        {
            path : '/addrecipes',
            Component : AddRecipes
        },
        {
            path : '/myrecipes',
            Component : MyRecipes
        }
    ]
  },
  {
    path : '/login',
    Component : Login
  },
  {
    path : '/register',
    Component : Register
  }
]);
