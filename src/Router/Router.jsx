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
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Support from "../components/Support/Support";
import Dashboard from "../Root/Dashboard";
import DashboardAllRecipes from "../Dashboard/DashboardAllRecipes/DashboardAllRecipes";
import DashboardRecipeDetails from "../Dashboard/DashboardrecipeDetails/DashboardrecipeDetails";
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
          fetch("https://recipe-book-server-rho-gilt.vercel.app/filterrecipe"),
      },
      {
        path: "/allrecipes",
        Component: AllRecipes,
      },
      {
        path: "/recipes/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://recipe-book-server-rho-gilt.vercel.app/addrecipes/${params.id}`),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/support",
        Component: Support,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path : 'dashboard',
        Component: DashboardAllRecipes,
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
        path: "/dashboarddetails/:id",
        element: (
          <PrivateRoute>
            <DashboardRecipeDetails></DashboardRecipeDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://recipe-book-server-rho-gilt.vercel.app/addrecipes/${params.id}`),
      },
      {
        path: "/myrecipes",
        element: (
          <PrivateRoute>
            <MyRecipes></MyRecipes>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://recipe-book-server-rho-gilt.vercel.app/addrecipes"),
      },
    ],
  },
]);
