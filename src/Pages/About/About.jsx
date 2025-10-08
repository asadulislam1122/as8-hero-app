import { useState } from "react";
import useHeroData from "../../Hooks/useHeroData";
import HomeData from "../Home/HomeData";

const About = () => {
  const { heroData } = useHeroData();

  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();

  const filteredData = term
    ? heroData.filter((hero) => hero.title.toLowerCase().includes(term))
    : heroData;

  const noDataFound = filteredData.length === 0;

  return (
    <div>
      <div className="flex flex-col justify-center text-center md:w-[1200px] mt-6 mx-auto">
        <h2 className="font-bold text-3xl">Our All Applications</h2>
        <p className="text-[#627382] mt-3">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className=" md:flex  justify-between items-center text-center mt-4 p-2">
          <p className="font-bold  md:text-xl mb-2 ">
            <span>({filteredData.length})</span> Apps Found
          </p>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="btn md:w-[200px] w-[400px]"
            type="search"
            placeholder="search"
          />
        </div>
      </div>

      <div className="md:w-[1200px] mx-auto gap-4 mt-4 mb-4 grid md:grid-cols-4 grid-cols-1">
        {noDataFound ? (
          <div className="md:col-span-4 text-center py-10">
            <h3 className="text-3xl font-semibold text-red-500">
              No data found!
            </h3>
            <p className="text-gray-600 mt-2">
              Try searching with a different term.
            </p>
          </div>
        ) : (
          filteredData.map((data) => (
            <HomeData key={data.id} data={data}></HomeData>
          ))
        )}
      </div>
    </div>
  );
};

export default About;
