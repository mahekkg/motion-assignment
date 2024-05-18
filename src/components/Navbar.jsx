import React from "react";
import logo from "../assets/MotionArtEffect-logo.png";

const Navbar = () => {
  return (
    <nav className=" p-4 mt-20 ">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="lg:pr-[55rem] md:pr-[30rem] pr-5 " />
        <span></span>
        
      </div>
    </nav>
  );
};

export default Navbar;
