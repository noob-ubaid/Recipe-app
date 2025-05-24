import React from "react";
import Slider from "../../components/slider/Slider";
import { AuthContext } from "../../components/Context/AuthProvider";
import Faq from "../../components/Faq/Faq";
import TopRecipes from "../../components/TopRecipes/TopRecipes";
import { useLoaderData } from "react-router";
import ExploreByCategory from "../../components/Category/ExploreByCategory";


const Home = () => {
  const data = useLoaderData()
  return (
    <>
      <Slider></Slider>
      <TopRecipes data={data}></TopRecipes>
      <ExploreByCategory></ExploreByCategory>
      <Faq></Faq>
      
    </>
  );
};

export default Home;
