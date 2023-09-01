import React from "react";

function Price() {
	return (
    <div id="prices" className=" bg-custom-pink">
      <div className=" text-center pb-8 pt-12 max-w-6xl mx-auto text-white">
        <h1 className="pb-8 px-2">Services & Pricing</h1>
        <hr />
        <p className="max-w-lg mx-auto px-4 pb-4">
          Each service also comes with a complimentary bow/bandana and spritz of
          cologne!
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="pricecards">
            <h3>Full Bath</h3>
            <p className="pb-4">Starting at $50</p>
            <hr className="pb-1" />
            <ul className=" max-w-[75%] text-center justify-center mx-auto">
              <li className="pricelist">Complete Bath</li>
              <li className="pricelist">Premium Shampoo & Conditioner</li>
              <li className="pricelist">Blow Out & Brush</li>
              <li className="pricelist">Trim Paw Pads</li>
              <li className="pricelist">Nail Grinding</li>
              <li className="pricelist">Clean Sani Area, Eyes, & Ears</li>
              <li className="pricelist">Spray Conditioner</li>
              <li className="pricelist border-b-0">Teeth Brushed</li>
            </ul>
          </div>
          <div className="pricecards">
            <h3> Full Bath & Groom</h3>
            <p className="pb-4">Starting at $80</p>
            <hr className="pb-1" />
            <ul className=" max-w-[75%] text-center justify-center mx-auto">
              <li className="pricelist">Complete Bath</li>
              <li className="pricelist">Premium Shampoo & Conditioner</li>
              <li className="pricelist">Blow Out & Brush</li>
              <li className="pricelist">Trim Paw Pads</li>
              <li className="pricelist">Nail Grinding</li>
              <li className="pricelist">Clean Sani Area, Eyes, & Ears</li>
              <li className="pricelist">Spray Conditioner</li>
              <li className="pricelist">Teeth Brushed</li>
              <li className="pricelist">Breed Specfic Cut</li>
              <li className="pricelist border-b-0">Spray Conditioner</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
