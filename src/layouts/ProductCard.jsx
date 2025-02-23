import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ id, img, name, price, discount }) => {
  return (
    <div
      className="h-[410px] 2xl:h-[420px] text-white border-2 border-green-800 rounded-xl shadow-[rgba(62,_166,_36)_0px_0px_10px] mb-2 cursor-pointer p-4"
      key={id}
    >
      <div className="h-56 2xl:h-64 w-full">
        <img
          src={img}
          alt="img"
          className="h-full w-full object-contain rounded-t-xl"
        />
      </div>

      <div className="flex flex-col items-center gap-2 mt-4">
        <h1 className="font-semibold text-xl">{name}</h1>

        <div className="flex items-center gap-4">
          <h2 className="font-medium text-lg">{price}</h2>
          <h2 className="font-medium text-DarkColor">{discount}</h2>
        </div>

        <div className="flex items-center gap-8 pt-4">
          <button className="bg-ExtraDarkColor text-white px-4 py-2 font-medium rounded hover:bg-opacity-90">
            Add to cart
          </button>
          <div className="flex items-center gap-1">
            <h2 className="font-medium">5.0</h2>
            <FaStar className="text-yellow-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
