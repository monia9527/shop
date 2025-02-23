import React from "react";
import ProductCard from "../layouts/ProductCard";

const images = import.meta.glob("/src/assets/img/*.png", { eager: true });

const data = [
  {
    id: 18,
    img: "3D Energy Drink1.png",
    name: "G Fuel Energy Formula",
    price: "3.69",
    discount: "20% off",
  },
  {
    id: 19,
    img: "Raze Energy.png",
    name: "Raze Energy",
    price: "3.29",
    discount: "15% off",
  },
  {
    id: 20,
    img: "3D Energy Drink.png",
    name: "3D Energy Drink",
    price: "3.49",
    discount: "25% off",
  },
  {
    id: 21,
    img: "Adrenaline Shoc.png",
    name: "Adrenaline Shoc",
    price: "3.19",
    discount: "18% off",
  },
];

const productData = data.map((item) => ({
  ...item,
  img: images[`/src/assets/img/${item.img}`]?.default || "",
}));

const Products = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center px-5 pt-24 lg:pt-16">
      <div>
        <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor">
          New Arrivals
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5 pt-8">
        {productData.map((item) => (
          <div className="md:w-1/2 lg:w-1/2" key={item.id}>
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

export default Products;