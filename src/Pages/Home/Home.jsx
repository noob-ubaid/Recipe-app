import React from "react";
import Slider from "../../components/slider/Slider";
import { AuthContext } from "../../components/Context/AuthProvider";
import Faq from "../../components/Faq/Faq";
import TopRecipes from "../../components/TopRecipes/TopRecipes";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData()
  return (
    <>
      <Slider></Slider>
      <TopRecipes data={data}></TopRecipes>
      <Faq></Faq>
    </>
  );
};

export default Home;
