import React from "react";
import Slider from "../../components/slider/Slider";
import { AuthContext } from "../../components/Context/AuthProvider";
import Faq from "../../components/Faq/Faq";

const Home = () => {
  return (
    <>
      <Slider></Slider>
      <Faq></Faq>
    </>
  );
};

export default Home;
