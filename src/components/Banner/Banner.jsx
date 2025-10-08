import React from "react";
import playStoreImg from "../../assets/Group.png";
import appStoreImg from "../../assets/fi_5977575.png";
import heroPng from "../../assets/hero.png";
const Banner = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="md:text-[60px] text-[40px] font-bold">
          We Build <br /> <span className="text-[#632ee3]">Productive</span>{" "}
          Apps
        </h1>
        <p className="mt-4 text-gray-600 text-[18px]">
          At <span className="font-semibold">HERO.IO</span>, we craft innovative
          apps designed to make everyday life simpler, smarter, and more
          exciting. <br /> Our goal is to turn your ideas into digital
          experiences <br /> that truly make an impact.
        </p>
        <div className="mt-4 ">
          <a href="https://play.google.com/store/games?device=windows&hl=en">
            <button className="btn mr-8 font-bold">
              {" "}
              <img src={playStoreImg} alt="" /> Google Play
            </button>
          </a>
          <a href="https://www.apple.com/app-store/">
            <button className="btn font-bold">
              {" "}
              <img src={appStoreImg} alt="" /> App Store
            </button>
          </a>
        </div>
        <img className="mt-8" src={heroPng} alt="" />
      </div>
      {/* end */}
      <div className=" flex h-[400px] md:h-[200px] flex-col text-white btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-4">
        <h1 className="font-bold md:text-3xl mt-6 text-2xl">
          Trusted by Millions, Built for You
        </h1>
        <div className="mt-4">
          <div className=" grid md:grid-cols-3 grid-cols-1 gap-12">
            <div>
              <p className="font-normal">Total Downloads</p>
              <p className="md:font-extrabold font-bold  md:text-4xl text-white  text-2xl">
                29.6M
              </p>
              <p className="font-normal">21% more than last month</p>
            </div>
            <div>
              <p className="font-normal">Total Reviews</p>
              <p className="md:font-extrabold font-bold md:text-4xl text-white text-2xl">
                906K
              </p>
              <p className="font-normal">46% more than last month</p>
            </div>
            <div>
              <p className="font-normal">Active Apps</p>
              <p className="md:font-extrabold font-bold md:text-4xl text-white text-2xl">
                132+
              </p>
              <p className="font-normal mb-6">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
