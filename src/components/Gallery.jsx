import React, { useState } from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import { BsChevronCompactLeft } from "react-icons/bs";
import Dog1 from "../assets/dog1.webp";
import Dog2 from "../assets/dog2.webp";
import Dog3 from "../assets/dog3.webp";

function Pictures() {
  const slides = [Dog1, Dog2, Dog3];

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
        <h1 className=" text-center pb-8">Here is some of the dogs</h1>
        <hr />
        <div className="relative max-w-lg flex mx-auto justify-center p-4">
          <div className=" duration-500">
            <img
              src={slides[currIndex]}
              alt="Dogs"
              className=" rounded-2xl duration-500"
            />
          </div>
          <div className=" absolute inset-0 flex items-center justify-between max-w-md mx-auto p-4">
            <div className=" cursor-pointer rounded-full bg-black/25 text-white p-1">
              <BsChevronCompactLeft size={30} onClick={prevSlide} />
            </div>
            <div className=" cursor-pointer rounded-full bg-black/25 text-white p-1">
              <BsChevronCompactRight size={30} onClick={nextSlide} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pictures;
