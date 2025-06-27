import React, { use } from "react";
import Header from "../components/Navbar/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import { AuthContext } from "../components/Context/AuthProvider";

const Root = () => {
  const { loading } = use(AuthContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <section className="dark:bg-gray-900 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-0">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Root;
