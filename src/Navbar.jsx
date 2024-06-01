import React, { useState } from "react";
import "./Navbar.css";


const Navbar = () => {
  return (
    <>
      <div className=" pt-10 relative" id="nav-section">
        <img
          className=" absolute right-0 top-0 w-[50%] max-h-[90vh] dark:opacity-60"
          src="./images/bannerimg.png"
          alt=""
        />
        <img className=" absolute top-0 -z-10" src="./images/ColorBlur1.png" alt="" />
        <div className="container">
          <div className="flex justify-between  sticky">
            <div className="logo flex items-center">
              <img className="w-[40px]" src="./images/logo.png" alt="" />
              <h3 className="ml-2 text-2xl text-[#1B1C57] font-lexend font-bold dark:text-[#e79d14]">Haunter</h3>
            </div>
            <div className="flex item gap-14">
              <ul className="flex items-center gap-6">
                <li className="navlink ">
                  <a href="#">About Us</a>
                </li>
                <li className="navlink ">
                  <a href="#">Article</a>
                </li>
                <li className="navlink ">
                  <a href="#">Property</a>
                </li>
              </ul>
              <button
                className="py-3 px-6 bg-[#D1FAE5] rounded-[32px] text-[#047857] font-semibold 
              hover:border-[#047857] hover:border-[1px] h-[51px] w-[118px]"
              >
                Sign Up!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
