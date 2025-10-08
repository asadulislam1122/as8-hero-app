import React from "react";
import dImg from "../../assets/fi_9131795.png";
import rImg from "../../assets/fi_1828884.png";
const HomeData = ({ data }) => {
  // console.log(data);
  const { image, title, downloads, ratingAvg } = data;
  return (
    <div className="card p-4 m-2 shadow-sm hover:scale-105 transition ease-in-out">
      <figure>
        <img className="rounded-2xl " src={image} alt="Hero Img" />
      </figure>
      <h2 className="font-medium text-[20px] text-[#001931] text-xl ml-4 mt-4">
        {title}
      </h2>
      <div className="font-semibold flex justify-between items-center mt-4 mb-4">
        <button className="ml-4 text-[#00D390] btn">
          <img src={dImg} alt="" /> {downloads}
        </button>
        <button className="mr-4 text-[#FF8811] btn">
          {" "}
          <img src={rImg} alt="" /> {ratingAvg}
        </button>
      </div>
    </div>
  );
};

export default HomeData;
