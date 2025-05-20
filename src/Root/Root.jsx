import React from "react";
import Header from "../components/Navbar/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <>
      <div className="max-w-[1600px] mx-auto px-4 md:px-0">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
