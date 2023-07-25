import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState("md:hidden");
  const showMenuHandler = () => {
    if (showMenu === "md:hidden") {
      setShowMenu("");
    } else setShowMenu("md:hidden");
  };
  return (
    <div>
      <header className="h-16 flex justify-between fixed top-0 left-0 right-0 z-50 bg-gray-700 px-12 md:px-0 w-full ">
        <Link to="/">
          <div className="flex items-center px-6 md:px-0">
            <img className="h-10 my-2 ml-4" src={logo} alt="" />
            <p className="text-3xl ">ProShop</p>
          </div>
        </Link>
        <div className=" flex items-center text-xl mx-16">
          <Link to="/cart">
            <div className="md:hidden flex mx-4 ">
              <FaShoppingCart className="m-1" />
              <p>Cart</p>
            </div>
          </Link>
          <Link to="/user">
            <div className="flex md:hidden ml-4">
              <FaUser className="m-1" />
              <p>sing in</p>
            </div>
          </Link>
          <div>
            <FaBars
              onClick={showMenuHandler}
              className="lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer text-xl mt-1 -mx-2 "
            />
          </div>
        </div>
      </header>
      <div
        className={`mt-14 w-full bg-gray-700 text-lg h-20 lg:hidden xl:hidden 2xl:hidden md:flex md:flex-col ${showMenu} `}
      >
        <Link to="/cart">
          <div className="flex mt-3 mx-5">
            <FaShoppingCart className="m-1" />
            <p>Cart</p>
          </div>
        </Link>
        <Link to="/user">
          <div className="flex m-2 mx-5 ">
            <FaUser className="m-1" />
            <p>sing in</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
