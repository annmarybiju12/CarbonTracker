import React from "react";
import Header from "../components/Header";
import carbon from "../assets/carbon.png";
import carbon2 from "../assets/carbon2.png";
import climate from "../assets/climate.png";
import air from "../assets/air.png";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const items = [
    "Transportation: Vehicles, airplanes, and ships rely on fossil fuels, contributing significantly to CO₂ emissions.",
    " Energy Production: Power plants burning fossil fuels for electricity and heat are major sources of carbon emissions.",
    "Industry: Manufacturing and chemical processes emit large amounts of CO₂ and other greenhouse gases.",
    "Agriculture: Livestock and rice production release methane, a potent greenhouse gas.",
    "Deforestation: Trees absorb CO₂, and cutting them down reduces the Earth's ability to regulate atmospheric carbon levels.",
  ];
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-[70vh] relative">
        <img src={carbon} />
        <h1 className="w-[600px] font-bold font-serif text-[70px]  absolute right-[50px] mt-[100px] text-green-800">
          Calculate your carbon emission by just few clicks
        </h1>
      </div>
      <div className="mt-[100px] h-[500px] flex  justify-center items-center gap-[50px]">
        <div className=" flex justify-center items-center flex-col">
          <h1 className="font-serif mt-[50px] font-bold text-[50px]">
            What is Carbon Emission?
          </h1>
          <p className="font-serif mt-[20px] text-[28px] w-[600px]">
            Carbon emissions refer to the release of carbon dioxide (CO₂) and
            other greenhouse gases into the atmosphere, primarily from human
            activities like burning fossil fuels (coal, oil, and natural gas),
            deforestation, and industrial processes. These emissions are the
            leading contributors to global warming and climate change.
          </p>
        </div>
        <img className="h-[460px]" src={carbon2} />
      </div>

      <div className="mt-[100px] flex flex-col justify-center items-center">
        <h1 className="font-serif text-[60px] font-bold">
          Sources of Carbon Emissions
        </h1>
        <div className="flex flex-col justify-center items-center gap-[40px] mt-[50px]">
          {items?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center font-serif"
              >
                <div className="bg-green-200 rounded-xl p-4 w-[900px] text-[24px] relative">
                  <p>{item}</p>
                  <div className="bg-black absolute rounded-[50%] h-[50px] w-[50px] text-center flex justify-center items-center text-white right-0 -mt-28 -mr-[10px]">
                    <p>{index + 1}</p>
                  </div>
                </div>

                {/* Add arrow between the divs, but not after the last one */}
                {index < items.length - 1 && (
                  <div className="flex justify-center mt-[30px]">
                    <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-black mt-4 mb-4"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-[100px] flex flex-col justify-center items-center">
        <h1 className="font-serif text-[50px] font-bold">
          Impact of Carbon Emissions
        </h1>
        <div className="flex  justify-center items-center gap-[100px] mt-[50px]">
          <div className="shadow-2xl bg-slate-50 h-[450px] rounded-lg  w-[300px] p-4 font-serif text-[20px]">
            <img src={climate} />
            Rising carbon emissions lead to global warming, causing more
            frequent and severe natural disasters like floods, hurricanes, and
            droughts.
          </div>
          <div className="shadow-2xl bg-slate-50 rounded-lg  w-[300px] p-4 font-serif text-[20px]">
            <img src={air} />
            Air Quality: Increased levels of CO₂ and other pollutants degrade
            air quality, posing health risks.
          </div>
          <div className="shadow-2xl bg-slate-50 rounded-lg h-[450px]  w-[300px] p-4 font-serif text-[20px]">
            <img src={climate} />
            Ocean Acidification: CO₂ absorbed by the oceans causes their pH
            levels to drop, harming marine ecosystems.
          </div>
        </div>
      </div>

      <div className="mt-[100px] flex flex-col justify-center items-center">
        <h1 className="font-serif text-[50px] font-bold">
          Ways to Reduce Carbon Emissions
        </h1>

        <div className="flex justify-center items-center gap-[30px] font-serif text-[20px] mt-[50px]">
          <div className="h-[270px] bg-green-500 text-white w-[270px] p-4 rounded-[50%] flex justify-center items-center">
            <p className="text-center">
              Switch to Renewable Energy: Solar, wind, and hydroelectric power
              sources produce electricity without emitting CO₂.
            </p>
          </div>
          <div className="h-[270px] bg-green-500 text-white w-[270px] p-4 rounded-[50%] flex justify-center items-center">
            <p className="text-center">
              Energy Efficiency: Using energy-efficient appliances and improving
              insulation in buildings reduces energy consumption.
            </p>
          </div>
          <div className="h-[270px] bg-green-500 text-white w-[270px] p-4 rounded-[50%] flex justify-center items-center">
            <p className="text-center">
              Sustainable Transportation: Using electric vehicles, public
              transport, cycling, or walking helps cut down on fuel consumption.
            </p>
          </div>
          <div className="h-[270px] bg-green-500 text-white w-[270px] p-4 rounded-[50%] flex justify-center items-center">
            <p className="text-center">
              Reforestation: Planting trees and protecting forests can absorb
              CO₂ and restore natural carbon sinks.
            </p>
          </div>
          <div className="h-[270px] bg-green-500 text-white w-[270px] p-4 rounded-[50%] flex justify-center items-center">
            <p className="text-center">
              Low-Carbon Diet: Reducing meat and dairy consumption can lower
              methane emissions from agriculture.
            </p>
          </div>
        </div>
      </div>

      <div className="form mt-[100px] flex justify-center items-center flex-col">
        <h1 className="font-serif text-[50px] font-bold">Fill Out The Form</h1>

        <div className="bg-green-500 text-white  p-4 rounded-xl flex flex-col font-serif mb-10">
          <h1 className="text-center text-[30px] font-bold">
            Calculate yor carbon emission
          </h1>
          <button className="bg-white p-4 rounded-lg text-black hover:opacity-70 cursor-pointer w-[200px] place-self-center mt-[20px] font-bold flex justify-center items-center gap-5">
            <FaPen size={20} />
            <Link to="/electricity">Fill Out</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
