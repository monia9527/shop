import React from "react";
import ReviewCard from "../layouts/ReviewCard";

const Review = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center lg:px-32 px-5">
      <h1 className="font-semibold text-center text-ExtraDarkColor text-4xl lg:mt-14 mt-24">
        Feedback Corner
      </h1>
      <div className="flex flex-col items-center xl:flex-row gap-5 justify-center py-4 my-8 text-white">
        <ReviewCard name="Sallu Frank" />
        <ReviewCard name="Jack Math" />
        <ReviewCard name="Emilia Carter" />
      </div>
    </div>
  );
};

export default Review;
