import React from "react";
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="flex justify-center items-center text-lg h-36">
      <p>ProShop &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
