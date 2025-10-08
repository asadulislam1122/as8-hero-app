import React from "react";

const SurchButton = () => {
  return (
    <div className="flex flex-col justify-center text-center md:w-[1200px] mt-6 mx-auto">
      <h2 className="font-bold text-3xl">Our All Applications</h2>
      <p className="text-[#627382] mt-3">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between items-center text-center mt-4 p-2">
        <p className="font-bold text-xl ">
          <span>(113)</span> Apps Found
        </p>

        <input
          className="btn"
          type="search"
          name=""
          id=""
          placeholder=" serch"
        />
      </div>
    </div>
  );
};

export default SurchButton;
