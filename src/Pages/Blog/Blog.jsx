import React, { useEffect, useState } from "react";

const Blog = () => {
  const [installData, setInstallData] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("install"));
    if (savedData) setInstallData(savedData);
  }, []);

  return (
    <div className="md:w-[1100px] mx-auto mt-8 mb-8 p-2 md:m-4 md:p-4">
      <div className="flex flex-col text-center justify-center">
        {" "}
        <h1 className="font-bold md:text-3xl mb-2 text-xl">
          Your Installed Apps
        </h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex justify-between items-center ">
        <h2 className="font-semibold">
          <span>({installData.length})</span>Apps Found
        </h2>
        <button className="btn">sort by</button>
      </div>
      {/* 22 */}
      {installData.map((p) => (
        <div
          key={p.id}
          className="flex justify-between items-center mt-8 bg-gray-300 p-4 md:m-4 rounded-2xl shadow-xl"
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
