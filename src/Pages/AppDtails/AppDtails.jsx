import React from "react";
import { useParams } from "react-router";
import useHeroData from "../../Hooks/useHeroData";
import downloadImg from "../../assets/fi_9131795.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import Lodding from "../../Lodding/Lodding";
const AppDtails = () => {
  const { id } = useParams();
  const { heroData, loading, error } = useHeroData();
  const appData = heroData.find((a) => String(a.id) === id);
  //   console.log(appData);
  if (loading) return <Lodding></Lodding>;
  const { image, title, companyName, reviews, ratingAvg, downloads } = appData;
  //   console.log(heroData);
  //   console.log(id);
  return (
    <div className="flex gap-8 md:gap-[120px] items-center mt-4 mb-4 m-4 p-4 md:w-[1000px] mx-auto">
      <div>
        <img className="rounded-2xl md:w-[280px]" src={image} alt="" />
      </div>
      <div>
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="font-semibold text-[18px text-gray-600]">
          Company Name: {companyName}
        </p>
        <p className="border-b text-gray-700 mt-4"></p>
        {/* aaaaaaaaaaa */}
        <div className="flex mt-8 gap-8">
          <div className="">
            <img className="h-8" src={downloadImg} alt="download img" />
            <p className="font-semibold mt-2">download</p>
            <p className="font-bold text-2xl mt-2">{downloads}</p>
          </div>
          {/* card 2 */}
          <div className="">
            <img className="h-8" src={ratingImg} alt="download img" />
            <p className="font-semibold mt-2"> Avg Rating</p>
            <p className="font-bold text-2xl mt-2">{ratingAvg}</p>
          </div>
          <div className="">
            <img className="h-8" src={reviewImg} alt="download img" />
            <p className="font-semibold mt-2">Reviews</p>
            <p className="font-bold text-2xl mt-2 ">{reviews}</p>
          </div>
        </div>
        <button className="btn mt-8 btn-primary text-white">
          Install Now (291 MB)
        </button>
      </div>
    </div>
  );
};

export default AppDtails;
