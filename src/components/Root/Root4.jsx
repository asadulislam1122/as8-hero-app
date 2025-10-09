import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

const Root4 = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:w-[1200px] mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root4;
