import React from "react";
import { NavLink } from "react-router";

const ShowButton = () => {
  return (
    <div className="flex flex-col justify-center text-center md:w-[1200px] mt-6 mx-auto">
      <h2 className="font-bold text-3xl">Trending Apps</h2>
      <p className="text-[#627382] mt-3">
        Explore All Trending Apps on the Market developed by us
      </p>
      <NavLink to={"/about"}>
        {" "}
        <button className="p-2 mt-4 mb-6 text-white font-semibold text[18px] w-[100px] mx-auto rounded-[10px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          Show All
        </button>
      </NavLink>
    </div>
  );
};

export default ShowButton;
