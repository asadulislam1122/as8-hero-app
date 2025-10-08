import React from "react";
import useHeroData from "../../Hooks/useHeroData";
import HomeData from "../Home/HomeData";
import SurchButton from "../../components/SarchButton/SurchButton";

const About = () => {
  const { heroData } = useHeroData();
  console.log(heroData);
  return (
    <div>
      <SurchButton></SurchButton>
      <div className="md:w-[1200px] mx-auto gap-4 mt-4 mb-4 grid md:grid-cols-4 grid-cols-1">
        {heroData.map((data) => (
          <HomeData key={data.id} data={data}></HomeData>
        ))}
      </div>
    </div>
  );
};

export default About;
