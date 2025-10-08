import React from "react";
import HomeData from "./HomeData";
import ShowButton from "../../components/ShowButton/ShowButton";
import useHeroData from "../../Hooks/useHeroData";
import Lodding from "../../Lodding/Lodding";

const Home = () => {
  const { heroData, loading, error } = useHeroData();
  const fetureHeroData = heroData.slice(0, 8);
  // console.log(heroData);
  if (loading) {
    return <Lodding></Lodding>;
  }
  return (
    <div className="md:w-[1200px] mx-auto gap-4 mt-4 mb-4 grid md:grid-cols-4 grid-cols-1">
      {fetureHeroData.map((data) => (
        <HomeData key={data.id} data={data}></HomeData>
      ))}
      <ShowButton></ShowButton>
    </div>
  );
};

export default Home;
