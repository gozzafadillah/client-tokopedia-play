import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainRoute = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainRoute;
