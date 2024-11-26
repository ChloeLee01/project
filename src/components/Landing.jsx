import React from "react";
import landingImg from "../assets/landing.avif";
import { Link } from "react-router-dom";
import LandingSubBox from "./LandingSubBox";

const Landing = () => {
  return (
    <div className="w-full relative">
      <div className="w-full overflow-hidden h-[65vh] flex items-center justify-center relative">
        <div className="overlay w-full h-full bg-black z-10 left-0 top-0 absolute opacity-20"></div>
        <div className="slogan-box absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col justify-center items-center gap-4">
          <h2 className="text-3xl text-white font-semibold">
            Welcome To The Met
          </h2>
          <Link
            to="/"
            className="font-semibold text-white border border-solid border-white px-4 py-2 rounded-sm transition-all transition-duration-300 hover:bg-white hover:text-black"
          >
            Plan your visit
          </Link>
        </div>
        <img src={landingImg} alt="" className="w-full" />
       
      </div>
      <div className="bottom-box absolute bottom-[-20%] z-50 w-[60%] left-1/2 transform -translate-x-1/2 border rounded-md">
          <LandingSubBox />
        </div>
    </div>
  );
};

export default Landing;
