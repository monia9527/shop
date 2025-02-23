import React from "react";
import img from "../assets/img/Energy.png";

const Collections = () => {
    return (
      <div className="h-screen w-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5">
        <div className="flex justify-center w-full lg:w-1/2 pt-6">
          <img src={img} alt="img" className="w-full h-auto" />
        </div>
  
        <div className="w-full lg:w-1/2 space-y-4 pt-5 text-center lg:text-start">
          <h1 className="text-4xl font-semibold text-ExtraDarkColor">
            Best Energy Drink Collection
          </h1>
  
          <h3 className="text-lg font-semibold text-DarkColor">
            Get up to 60% off
          </h3>
  
          <p className="text-white">
            Energy Drink / Energy Shot Caffeine Content Sugar-Free / Zero Sugar
            Vitamins & Supplements Carbonated Beverage Dietary Supplement
          </p>
  
          <button className="bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800">
            Shop now
          </button>
        </div>
      </div>
    );
  };
  
  export default Collections;