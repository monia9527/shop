import React from "react";
import ProductCard from "../layouts/ProductCard";

const images = import.meta.glob("/src/assets/img/*.png", { eager: true });

// 处理图片路径映射
const data = [
  {
    id: 6,
    img: "Red Bull Sugar Free.png",
    name: "Red Bull Sugar Free",
    price: "3.29",
    discount: "20% off",
  },
  {
    id: 7,
    img: "Monster-Zero.png",
    name: "Monster Ultra Zero",
    price: "3.49",
    discount: "15% off",
  },
  {
    id: 8,
    img: "Rockstar Pure Zero.png",
    name: "Rockstar Pure Zero",
    price: "2.99",
    discount: "25% off",
  },
  {
    id: 9,
    img: "XS Energy Drink.png",
    name: "XS Energy Drink",
    price: "3.19",
    discount: "18% off",
  },
  {
    id: 10,
    img: "ZOA Tropical Punch.png",
    name: "ZOA Tropical Punch",
    price: "3.59",
    discount: "22% off",
  },
  {
    id: 11,
    img: "Alani Nu Electric.png",
    name: "Alani Nu Electric",
    price: "2.89",
    discount: "12% off",
  },
  {
    id: 12,
    img: "Sneak Energy.png",
    name: "Sneak Energy",
    price: "3.39",
    discount: "28% off",
  },
  {
    id: 13,
    img: "Celsius Original のコピー.png",
    name: "Celsius Original",
    price: "3.69",
    discount: "16% off",
  },
  {
    id: 14,
    img: "Reign Total Body Fuel.png",
    name: "Reign Total Body Fuel",
    price: "3.09",
    discount: "24% off",
  },
  {
    id: 15,
    img: "C4 Smart Energy のコピー.png",
    name: "C4 Smart Energy",
    price: "3.79",
    discount: "19% off",
  },
  {
    id: 16,
    img: "Ghost Energy のコピー.png",
    name: "Ghost Energy",
    price: "3.49",
    discount: "21% off",
  },
  {
    id: 17,
    img: "PRIME Energy.png",
    name: "PRIME Energy",
    price: "3.89",
    discount: "17% off",
  },
];

const productData = data.map((item) => ({
  ...item,
  img: images[`/src/assets/img/${item.img}`]?.default || "",
}));

const Features = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center pt-24">
      <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor">
        Exclusive products
      </h1>

      <div className="flex flex-wrap justify-center gap-5 pt-8">
        {productData.map((item) => (
          <div key={item.id} className="md:w-1/2 lg:w-1/4">
            <ProductCard
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
