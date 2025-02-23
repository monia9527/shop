import { Link } from "react-scroll";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const baseClasses =
    "flex flex-col absolute bg-SecondaryColor text-ExtraDarkColor z-50";
  const positionClasses = "left-0 top-16";
  const styleClasses = "font-semibold text-center pt-8 pb-4 gap-8 w-full h-fit";
  const animationClasses = "transition-transform duration-300";

  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className="fixed w-full z-10">
      <section>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-NavberColor shadow-[rgba(62,_166,_36,_0.6)_0px_3px_8px]">
          <div>
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className="text-ExtraDarkColor text-2xl font-semibold cursor-pointer">
                Energy Drink
              </h1>
            </Link>
          </div>
          <nav className=" hidden lg:flex flex-row items-center text-lg font-semibold gap-8 text-ExtraDarkColor">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-white transition duration-300 ease-in-out cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="shop"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-white transition duration-300 ease-in-out cursor-pointer"
            >
              Shop
            </Link>
            <Link
              to="features"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-white transition duration-300 ease-in-out cursor-pointer"
            >
              Features
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-white transition duration-300 ease-in-out cursor-pointer"
            >
              Products
            </Link>
            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-white transition duration-300 ease-in-out cursor-pointer"
            >
              Review
            </Link>
          </nav>

          <div className="flex items-center gap-5">
            <FaUser size={25} className="text-DarkColor" />
            <div className="text-DarkColor relative ">
              <FaShoppingCart size={25} className="cursor-pointer" />
              <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[22px] h-[20px] rounded-full text-white text-sm grid place-items-center">
                0
              </div>
            </div>
          </div>

          <div className="lg:hidden flex items-center text-DarkColor">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <RiMenu2Line size={28} onClick={handleChange} />
            )}
          </div>
        </div>

        {/* mobile */}
        <div
          className={`
            ${menu ? "translate-x-0" : "translate-x-full"}
            lg:hidden
            ${baseClasses}
            ${positionClasses}
            ${styleClasses}
            ${animationClasses}
          `}
        >
          <Link
            to="Home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:text-white transition duration-300 ease-in-out cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="Shop"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:text-white transition duration-300 ease-in-out cursor-pointer"
            onClick={closeMenu}
          >
            Shop
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:text-white transition duration-300 ease-in-out cursor-pointer"
            onClick={closeMenu}
          >
            Features
          </Link>
          <Link
            to="products"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:text-white transition duration-300 ease-in-out cursor-pointer"
            onClick={closeMenu}
          >
            Products
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:text-white transition duration-300 ease-in-out cursor-pointer"
            onClick={closeMenu}
          >
            Review
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
