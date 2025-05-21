import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AllRecipes from "../Pages/AllRecipes/AllRecipes";
import AddRecipes from "../Pages/AddRecipes/AddRecipes";
import MyRecipes from "../Pages/MyRecipes/MyRecipes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../components/Context/PrivatRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allrecipes",
        element: <AllRecipes></AllRecipes>,
      },
      {
        path: "/addrecipes",
        element: (
          <PrivateRoute>
            <AddRecipes></AddRecipes>
          </PrivateRoute>
        ),
      },
      {
        path: "/myrecipes",
         element : <PrivateRoute><MyRecipes></MyRecipes></PrivateRoute>
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);
