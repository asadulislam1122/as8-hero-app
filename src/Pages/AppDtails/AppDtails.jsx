import React, { useState } from "react";
import { useParams } from "react-router";
import useHeroData from "../../Hooks/useHeroData";
import downloadImg from "../../assets/fi_9131795.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import Lodding from "../../Lodding/Lodding";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Description from "../../components/Description/Description";
const AppDtails = () => {
  const { id } = useParams();
  const { heroData, loading, error } = useHeroData();
  const [isInstalled, setIsInstalled] = useState(false);
  const appData = heroData.find((a) => String(a.id) === id);
  //   console.log(appData);
  if (loading) return <Lodding></Lodding>;
  const { image, title, companyName, reviews, ratingAvg, downloads, ratings } =
    appData;
  //   console.log(heroData);
  //   console.log(id);
  const handleInstall = () => {
    setIsInstalled(true);
    toast("🎉 App Installed successfully!");
    // 2222222222222222222222222

    const installData = JSON.parse(localStorage.getItem("install"));
    let updateData = [];
    // console.log(installData);
    if (installData) {
      const isDuplicate = installData.some((p) => p.id === appData.id);
      if (isDuplicate) return toast("Already Install");
      updateData = [...installData, appData];
    } else {
      updateData.push(appData);
    }
    localStorage.setItem("install", JSON.stringify(updateData));
  };
  return (
    <div>
      <div className="md:flex md:text-left text-center  gap-8 md:gap-[120px] items-center mt-4 mb-4 m-4 p-4 md:w-[1000px] mx-auto">
        <div>
          <img
            className="rounded-2xl mb-4 md:mb-0 md:w-[280px] w-[370px] mx-auto"
            src={image}
            alt=""
          />
        </div>
        <div className="">
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="font-semibold text-[18px text-gray-600]">
            Company Name: {companyName}
          </p>
          <p className="border-b text-gray-700 mt-4"></p>
          {/* aaaaaaaaaaa */}
          <div className="flex ml-8 md:ml-0   mt-8 gap-8">
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
          {/* Install button */}
          {/* Install button */}
          {/* Install button */}
          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`btn mt-8 bg-green-500 font-bold text-[18px] text-gray-500 transition-all ${
              isInstalled ? "opacity-200 cursor-not-allowed bg-green-600" : ""
            }`}
          >
            {isInstalled ? "Installed ✅" : "Install Now (291 MB)"}
          </button>
        </div>
      </div>
      {/* bar card */}
      <div className="md:w-[1100px] mx-auto">
        <div className="mt-10 mb-15 w-full md:w-[800px] h-[300px]">
          <h2 className="text-xl font-bold ml-10 mb-4 ">
            User Ratings Breakdown
          </h2>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ratings}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 40, bottom: 0 }}
            >
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Bar dataKey="count" fill="#4f46e5" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Description */}
      <Description></Description>
    </div>
  );
};

export default AppDtails;
