import React from "react";
import { Link } from "react-router-dom";
import flatBed from "../images/flat-bed.jpg";

const Haul = () => {
  return (
    <>
      <div className="my-4 py-4" id="portfolio">
        <div className="px-4 mt-5" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex justify-center logistic transition-all ease-in-out duration-400 items-center h-[350px] overflow-hidden text-[#fff] hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max bg">
              <div className="text-justify text-sm flex gap-7 flex-col justify-center items-center">
                <h4 className="font-normal uppercase  text-[20px] text-center">
                  logistic service
                </h4>
                <h4 className=" uppercase  text-[45px]/[45px] font-bold text-center">
                  count on us
                </h4>
                <Link to="/contact">
                  <button className="bg-[#fff] text-black p-2 px-5 w-[fit-content] font-semibold uppercase  text-lg text-center hover:bg-black hover:text-white">
                    find your solution
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center carriers transition-all ease-in-out duration-400 items-center h-[350px] overflow-hidden text-[#fff] hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max bg">
              <div className="text-justify text-sm flex gap-7 flex-col justify-center items-center">
                <h4 className="font-normal uppercase  text-[20px] text-center">
                  carriers
                </h4>
                <h4 className=" uppercase text-[45px]/[45px] font-bold text-center">
                  haul with us
                </h4>
                <Link to="/contact">
                  <button className="bg-[#fff] text-black p-2 px-5 w-[fit-content] font-semibold uppercase  text-lg text-center hover:bg-black hover:text-white">
                    find your load
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center jobs transition-all ease-in-out duration-400 items-center h-[350px] overflow-hidden text-[#fff] hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max bg">
              <div className="text-justify text-sm flex gap-7 flex-col justify-center items-center">
                <h4 className="font-normal uppercase  text-[20px] text-center">
                  jobs
                </h4>
                <h4 className=" uppercase text-[45px]/[45px] font-bold text-center">
                  work with us
                </h4>
                <Link to="/contact">
                  <button className="bg-[#fff] text-black p-2 px-5 w-[fit-content] font-semibold uppercase  text-lg text-center hover:bg-black hover:text-white">
                    find your job
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Haul;
