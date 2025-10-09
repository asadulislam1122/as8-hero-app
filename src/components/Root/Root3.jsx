import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import Lodding from "../../Lodding/Lodding";

const Root3 = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar></Navbar>
      {isLoading ? <Lodding></Lodding> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default Root3;
