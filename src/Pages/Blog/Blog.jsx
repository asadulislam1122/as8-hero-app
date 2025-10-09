import React, { useEffect, useState } from "react";

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
          className="flex justify-between items-center mt-6 bg-gray-300 p-4 md:m-4 rounded-2xl shadow-xl"
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
              <div className="flex gap-6 p-2">
                <p>{p.downloads}</p>
                <p>{p.ratingAvg}</p>
                <p>{p.size}MB</p>
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-primary">Uninstall</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
