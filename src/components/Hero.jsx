import React, { useState } from "react";
import Van from "../assets/van.webp";
function Hero() {
  return (
    <div className=" h-[94vh] bg-custom-pink md:bg-herobg bg-cover">
      <div className=" max-w-5xl mx-auto flex flex-wrap h-full ">
        <div className=" flex justify-center w-1/2 items-center flex-grow p-2">
          <img src={Van} alt="Van" className="" />
        </div>
        <div className=" mx-auto flex justify-center text-center flex-col flex-grow py-12 px-2">
          <h1 className="pb-4">Shampooch Me</h1>
          <h3 className="pb-6">Mobile Pet Grooming</h3>
        </div>
      </div>
    </div>
  );
}

export default Hero;
