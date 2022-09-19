import { useState } from "react";
// import { minus } from "./assets/images/minus.svg";

const MainContent = () => {
  return (
    <div>
      <h3>Sneaker Company</h3>
      <h2>Fall Limited Edition Sneakers</h2>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outter sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div>
        <span>£125</span>
        <span> 50%</span>
        <span> £250</span>
      </div>
      <button>-</button>
      <span>0</span>
      <button>+</button>
      <button>Add to cart</button>
    </div>
  );
};

export default MainContent;
