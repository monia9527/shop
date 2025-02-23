import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../layouts/ProductCard";

const images = import.meta.glob("/src/assets/img/*.png", { eager: true });

const data = [
  {
    id: 0,
    img: "red-bull.png",
    name: "Red Bull Original",
    price: "$2.99",
    discount: "20% off"
  },
  {
    id: 1,
    img: "Monster Energy Classic1.png",
    name: "Monster Energy Classic",
    price: "$3.49", 
    discount: "15% off"
  },
  {
    id: 2,
    img: "Rockstar Pure Zero.png",
    name: "Rockstar Recovery Orange",
    price: "$2.79",
    discount: "25% off"
  },
  {
    id: 3,
    img: "5-Hour Energy Shot.png",
    name: "5-Hour Energy Shot",
    price: "$3.99",
    discount: "10% off"
  },
  {
    id: 4,
    img: "Guayakí Yerba Mate.png",
    name: "Guayakí Yerba Mate",
    price: "$3.29",
    discount: "30% off"
  },
  {
    id: 5,
    img: "Bang Energy Drink.png",
    name: "Bang Energy Drink",
    price: "$3.19",
    discount: "18% off"
  }
];

const productData = data.map((item) => ({
  ...item,
  img: images[`/src/assets/img/${item.img}`]?.default || "",
}));

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
  ],
};

const Shop = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center lg:px-32 px-5 pt-14">
      <div>
        <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor">
          Best sellers
        </h1>
      </div>

      <div className="mt-8">
        <Slider {...settings}>
          {productData.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Shop;