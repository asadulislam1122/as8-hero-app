import React from "react";
import Navbar from "../Navbar/Navbar";

import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

const Root2 = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root2;
