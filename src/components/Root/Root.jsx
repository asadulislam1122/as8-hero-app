import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="">
      <Navbar></Navbar>
      {isLoading && (
        <div className="text-center py-4 bg-gray-100 text-3xl font-semibold">
          ⏳ Loading...
        </div>
      )}
      <Banner></Banner>
      {!isLoading && <Outlet />}
      <Footer></Footer>
    </div>
  );
};

export default Root;
