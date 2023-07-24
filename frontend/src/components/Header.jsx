import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState("md:hidden");
  const showMenuHandler = () => {
    if (showMenu === "md:hidden") {
      setShowMenu("");
    } else setShowMenu("md:hidden");
  };
  return (
    <div>
      <header className="flex justify-between fixed top-0 left-0 right-0 z-50 bg-gray-500 ">
        <div className="flex items-center">
          <img className="h-10 my-2 ml-4" src={logo} alt="" />
          <p className="text-3xl ">ProShop</p>
        </div>
        <div className="flex items-center text-xl mr-8">
          <div className="flex m-3 md:hidden">
            <FaShoppingCart className="m-1" />
            <p>Cart</p>
          </div>
          <div className="flex m-3 md:hidden">
            <FaUser className="m-1" />
            <p>sing in</p>
          </div>
          <div>
            <FaBars
              onClick={showMenuHandler}
              className="lg:hidden xl:hidden 2xl:hidden md:flex m-1 cursor-pointer text-xl mt-1 "
            />
          </div>
        </div>
      </header>
      <div
        className={`mt-14 w-full bg-gray-500 text-lg h-20 lg:hidden xl:hidden 2xl:hidden md:flex md:flex-col ${showMenu} `}
      >
        <div className="flex mt-3 mx-5">
          <FaShoppingCart className="m-1" />
          <p>Cart</p>
        </div>
        <div className="flex m-2 mx-5 ">
          <FaUser className="m-1" />
          <p>sing in</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
