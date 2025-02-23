import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const ReviewCard = ({ name }) => {
  return (
    <div className="flex flex-col w-full border-2 lg:w-2/6 border-DarkColor p-3 gap-5 cursor-pointer hover:bg-PrimaryColor transition duration-300 ease-in-out">
      <div className="text-ExtraDarkColor">
        <ImQuotesLeft size={25} />
        <h1 className=" text-xl font-semibold text-ExtraDarkColor pt-4 ">
          {name}
        </h1>
      </div>
      <p>
        Energy Drink / Energy Shot Caffeine Content Sugar-Free / Zero Sugar
        Vitamins & Supplements Carbonated Beverage Dietary Supplement
      </p>
    </div>
  );
};

export default ReviewCard;
