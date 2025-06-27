import React from "react";
import Menubar from "../Dashboard/Menubar/Menubar";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:h-screen md:sticky md:left-0 md:z-50 top-0 bg-[#AD49E1] w-full md:w-[20%]">
        <Menubar />
      </div>
      <div className="w-full md:w-[80%] p-4 md:p-10 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
