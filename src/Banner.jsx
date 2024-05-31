import React from "react";
import "./Banner.css";
import { FaLocationDot, FaAngleRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="flex gap-x-5 sticky">
            <div className="w-[50%]">
              <h1 className=" font-semibold text-[50px] max-w-[430px] mt-[96px]">
                find the place to live
                <span className="span"> your dreams</span> easily here
              </h1>
              <p className=" text-4 max-w-[455px] mt-6 leading-7 text-[#626687]">
                Everything you need about finding your place to live will be
                here, where it will be easier for you
              </p>
              <div className=" relative mt-8 max-w-[496px] h-[56px] rounded-[32px] border-[1px]">
                <FaLocationDot className=" absolute top[50%] translate-y-[50%] left-6 text-[26px] text-yellow-500" />
                <p className="absolute left-[14%] font-medium leading-[22px] text-[14px] text-[#888B97] top-[50%] translate-y-[-50%] ">
                  Search for the location you want!
                </p>
                <button className=" absolute flex items-center text-white bg-[#10B981] px-4 py-3 rounded-[32px] right-[3px] top-[50%] translate-y-[-50%] ">
                  Search <FaAngleRight />
                </button>
              </div>
              <div className="brands ">
                <p className="mt-8 text-4 leading-8 text-[#888B97] ">
                  Our Partnership
                </p>
                <div className="logos flex gap-8">
                  <img src="./images/traveloka_logo1.png" alt="" />
                  <img src="./images/traveloka_logo2.png" alt="" />
                  <img src="./images/traveloka_logo3.png" alt="" />
                  <img src="./images/traveloka_logo4.png" alt="" />
                </div>
              </div>
            </div>
            <div className="w-[50%]">
                <div className="flex cards gap-4">
                    <div className="flex mt-[480px] ml-[10%] w-[328px] h-[104px] bg-white rounded-[32px] relative">
                        <img className="absolute left-[-15px]" src="./images/Group7.png" alt="" />
                        <div className="absolute right-[15%] top-[50%] translate-y-[-50%]">
                            <p>1K+ People</p>
                            <p className="text-[12px] text-[#68799F] w-[120px]">Successfully Getting Home</p>
                        </div>
                    </div>
                    <div className="mt-[480px]  w-[250px] h-[104px] bg-white rounded-[32px] relative">
                        <img className="absolute top-[50%] translate-y-[-50%] ml-5" src="./images/Group8.png" alt="" />
                        <div className="absolute right-[5%] top-[50%] translate-y-[-50%]">
                            <p>56 Houses</p>
                            <p className="text-[12px] text-[#68799F] w-[120px]">Sold Monthly</p>
                        </div>
                    </div>
                    
                </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
