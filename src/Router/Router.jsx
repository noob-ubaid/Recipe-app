import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AllRecipes from "../Pages/AllRecipes/AllRecipes";
import AddRecipes from "../Pages/AddRecipes/AddRecipes";
import MyRecipes from "../Pages/MyRecipes/MyRecipes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../components/Context/PrivatRoute";
import Details from "../Pages/Details/Details";
import Error from "../Pages/Error/Error";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://recipe-server-liard.vercel.app/filterrecipe"),
      },
      {
        path: "/allrecipes",
        Component: AllRecipes,
        loader: () =>
          fetch("https://recipe-server-liard.vercel.app/addrecipes"),
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
        path: "/recipes/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://recipe-server-liard.vercel.app/addrecipes/${params.id}`
          ),
      },
      {
        path: "/myrecipes",
        element: (
          <PrivateRoute>
            <MyRecipes></MyRecipes>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://recipe-server-liard.vercel.app/addrecipes"),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
