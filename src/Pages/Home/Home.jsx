import React from "react";
import Slider from "../../components/slider/Slider";
import { AuthContext } from "../../components/Context/AuthProvider";
import Faq from "../../components/Faq/Faq";
import TopRecipes from "../../components/TopRecipes/TopRecipes";
import { useLoaderData } from "react-router";
import ExploreByCategory from "../../components/Category/ExploreByCategory";
import FeatureSection from "../../components/Special/Special";

const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <Slider></Slider>
      <TopRecipes data={data}></TopRecipes>
      <ExploreByCategory></ExploreByCategory>
      <FeatureSection/>
      <Faq></Faq>
    </>
  );
};

export default Home;
