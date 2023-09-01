import React, { useState } from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import { BsChevronCompactLeft } from "react-icons/bs";
import sliderDog1 from "../assets/slider/sliderDog1.jpg";
import sliderDog2 from "../assets/slider/sliderDog2.jpg";
import sliderDog3 from "../assets/slider/sliderDog3.jpg";
import sliderDog4 from "../assets/slider/sliderDog4.jpg";
import sliderDog5 from "../assets/slider/sliderDog5.jpg";
import sliderDog6 from "../assets/slider/sliderDog6.jpg";
import sliderDog7 from "../assets/slider/sliderDog7.jpg";

function Pictures() {
  const slides = [
    sliderDog1,
    sliderDog2,
    sliderDog3,
    sliderDog4,
    sliderDog5,
    sliderDog6,
    sliderDog7
  ];

  const [currIndex, setCurrIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currIndex - 1;
    setCurrIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  };

  return (
    <div className=" bg-white" id="pictures">
      <div className=" py-12">
        <h1 className=" text-center pb-8 px-2">Some of Shampooch Me's Clients</h1>
        <hr />
        <div className="relative max-w-md flex mx-auto justify-center p-4 max-md:max-w-sm">
          <div className="">
            <img src={slides[currIndex]} alt="Dogs" className=" rounded-2xl " />
          </div>
          <div className=" absolute inset-0 flex items-center justify-between max-w-2xl mx-auto p-4">
            <div className=" cursor-pointer rounded-full bg-black/50 text-white p-1">
              <BsChevronCompactLeft size={30} onClick={prevSlide} />
            </div>
            <div className=" cursor-pointer rounded-full bg-black/50 text-white p-1">
              <BsChevronCompactRight size={30} onClick={nextSlide} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pictures;
