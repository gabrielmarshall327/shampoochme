import React from "react";
import AboutDog from "../assets/Dog1.webp";

function About() {
  const today = new Date().getDay();

  return (
    <div id="about" className=" bg-white ">
      <div className=" flex flex-wrap-reverse max-lg:flex-col-reverse">
        <div className="basis-1/2 flex-grow pt-12">
          <div className=" max-w-[75%] text-center mx-auto">
            <h1 className=" text-center pb-4 font">About Us</h1>
            <hr className=" pb-6 w-20 mx-auto" />
            <h3 className=" pb-4 text-center">Hours of Operation</h3>
            <div className="grid grid-cols-2 gap-2 text-center">
              <p className={today >= 1 && today <= 5 ? "font-bold" : ""}>
                Monday - Friday
              </p>{" "}
              <p className={today >= 1 && today <= 5 ? "font-bold" : ""}>
                8am - 6pm
              </p>
              <p className={today == 6 ? "font-bold" : ""}>Saturday</p>{" "}
              <p className={today == 6 ? "font-bold" : ""}>9am - 11am</p>
              <p className={today == 0 ? "font-bold" : ""}>Sunday</p>{" "}
              <p className={today == 0 ? "font-bold" : ""}>Closed</p>
            </div>
            <h3 className="py-8 pt-16 text-center">Forms of Payment</h3>
            <p className="text-center">
              We accept cash, checks or credit cards
            </p>
            <h3 className="py-8 pt-16 text-center">Cancellations</h3>
            <p className="text-center pb-8">
              We understand that emergencies come up and ask that you give us a
              24 hour cancellation notice{" "}
            </p>
          </div>
        </div>
        <div className="basis-1/2 flex-grow bg-aboutdog bg-cover bg-center max-lg:min-h-[450px] max-sm:min-h-[300px]"></div>
      </div>
    </div>
  );
}

export default About;
