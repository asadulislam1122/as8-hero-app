import React, { useEffect, useState } from "react";
import iR from "../../assets/icon-ratings.png";
import { toast } from "react-toastify";
import dI from "../../assets/icon-downloads.png";
const Blog = () => {
  const [installData, setInstallData] = useState([]);
  const [sortData, setSortData] = useState("none");
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("install"));
    if (savedData) setInstallData(savedData);
  }, []);

  // sort
  const sortItemData = () => {
    if (sortData === "price-asc") {
      return [...installData].sort((a, b) => a.downloads - b.downloads);
    } else if (sortData === "price-dsc") {
      return [...installData].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installData;
    }
  };

  // no found

  if (!installData.length)
    return (
      <p className="text-center text-xl font-semibold text-gray-500 mt-6 mb-4">
        🚫 No App Installed 😢
      </p>
    );

  // App Unstall
  const handleRemove = (id) => {
    const installData = JSON.parse(localStorage.getItem("install"));
    let updateData = installData.filter((p) => p.id !== id);
    setInstallData(updateData);
    toast("App Uninstall Successful! ✅");
    localStorage.setItem("install", JSON.stringify(updateData));
  };
  // end
  return (
    <div className="md:w-[1100px] mx-auto mt-8 mb-8 p-2 md:m-4 md:p-4">
      <div className="flex flex-col text-center justify-center">
        {" "}
        <h1 className="font-bold md:text-3xl mb-2 text-xl">
          Your Installed Apps
        </h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex  justify-between items-center mt-4 mb-4 ">
        <h2 className="font-semibold">
          <span>({installData.length})</span>Apps Found
        </h2>
        {/* sort */}
        <label className="mr-8">
          <select
            className="select select-borderd"
            value={sortData}
            onChange={(e) => setSortData(e.target.value)}
          >
            <option value="none">Sort by Price</option>
            <option value="price-asc">Low__High</option>
            <option value="price-dsc">High__Low</option>
          </select>
        </label>
      </div>
      {/* 22 */}
      {sortItemData().map((p) => (
        <div
          key={p.id}
          className="flex justify-between items-center mt-6 bg-gray-300 p-1 md:m-4 rounded-2xl shadow-xl"
        >
          <div className="flex gap-1 md:gap-8 p-2 items-center">
            <div>
              <img
                className="md:w-[130px] h-[70px] md:h-[100px] object-cover rounded-2xl"
                src={p.image}
                alt="App Img"
              />
            </div>
            <div>
              <h1 className="p-2 font-semibold text-xl">{p.title}</h1>
              {/* 3 */}
              <div className="flex gap-2 md:gap-6 p-2 font-semibold text-[18px]">
                <div className="flex text-[#00D390] gap-2">
                  <img className="w-[20px]" src={dI} alt="" />
                  <p> {p.downloads}</p>
                </div>
                <div className="flex text-[#FF8811] gap-2">
                  <img className="w-[20px]" src={iR} alt="" />
                  <p>{p.ratingAvg}</p>
                </div>
                <p className="text-[#627382]">{p.size}MB</p>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleRemove(p.id)}
              className="btn w-[50px] text-[10px] md:text-[18px] md:w-[100px] bg-[#00D390] text-white"
            >
              Uninstall
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
