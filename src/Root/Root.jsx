import React from "react";
import Header from "../components/Navbar/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <section className="dark:bg-gray-900 bg-white">
      <Header></Header>
      <div className="max-w-[1600px] mx-auto px-4 md:px-0">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Root;
