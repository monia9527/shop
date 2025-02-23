import React from "react";
import img from "../assets/img/drink.png";

const Home = () => {
  return (
    <div className="min-h-screen w-screen flex items-center lg:px-32 px-5">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:gap-20">
        <div className="space-y-4 lg:w-1/2">
          <h1 className="text-7xl font-bold leading-tight bg-gradient-to-r from-green-400 to-yellow-400 animate-gradient-x bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,100,0,0.3)] py-8">
            Energy Drink
          </h1>
          
          <div className="space-y-3">
            <p className="text-DarkColor font-bold text-2xl tracking-wide animate-pulse">
              Energy Shot Caffeine Content
            </p>
            <p className="text-DarkColor font-bold text-2xl tracking-wide animate-pulse">
              Sugar-Free Zero Sugar
            </p>
            <p className="text-DarkColor font-bold text-2xl tracking-wide animate-pulse">
              Vitamins & Supplements
            </p>
            <p className="text-DarkColor font-bold text-2xl tracking-wide animate-pulse">
              Carbonated Beverage
            </p>
            <p className="text-DarkColor font-bold text-2xl tracking-wide mb-6 animate-pulse">
              Dietary Supplement
            </p>
          </div>

          <p className="text-gray-300 font-medium text-lg leading-relaxed">
            A carbonated energy drink containing caffeine, taurine, B-vitamins,
            and sugar. Known for its distinctive silver and blue can design.
            Contains 80mg of caffeine per 8.4 fl oz can. Popular among students,
            athletes, and professionals.
          </p>
        
          <button className="bg-gradient-to-r from-green-400 to-green-950 text-white px-8 py-4 text-lg font-bold rounded-lg hover:from-green-700 hover:to-green-900 transition-all duration-300 mt-8 shadow-[0_0_20px_rgba(0,100,0,0.3)] hover:shadow-[0_0_120px_rgba(0,100,0,0.5)] animate-gradient-xy">
            SHOP NOW
          </button>
        </div>

        <div className="w-[400px] relative mt-10 lg:mt-0">
          <div className="rounded-tr-[290px] rounded-tl-3xl rounded-br-3xl p-5 m-8 w-[400px] border-2 border-green-400 shadow-[rgba(20,83,18)_0px_0px_30px] hover:shadow-[rgba(20,83,18)_0px_0px_50px] transition-shadow duration-300">
            <img
              className="-ml-5 -mb-5 object-contain w-[650px] hover:scale-105 transition-transform duration-300"
              src={img}
              alt="Energy Drink"
              width="600px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;