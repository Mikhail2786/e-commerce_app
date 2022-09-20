import { useState } from "react";
import minus from "./assets/images/minus.svg";
import plus from "./assets/images/plus.svg";
import cartImg from "./assets/images/cart.svg";

const MainContent = ({
  productName,
  description,
  price,
  discount,
  oldPrice,
}) => {
  return (
    // Product Information
    <section className="product">
      <h3 className="company-name">Sneaker Company</h3>
      <h1 className="product-name">{productName}</h1>
      <p className="product-desctiption">{description}.</p>
      <div className="product-price-info">
        <span className="product-price">{price} </span>
        <span className="product-discount">{discount} </span>
        <span className="original-price">{oldPrice}</span>
      </div>
      {/* Button Section */}
      <div className="product-btn-section">
        <button className="minus-btn count-btn">
          <img src={minus} alt="minus buttom" />
        </button>
        <span className="product-count">0</span>
        <button className="plus-btn count-btn">
          <img src={plus} alt="plus buttom" />
        </button>
      </div>
      <button className="add-to-cart-btn">
        <img src={cartImg} alt="cart image" />
        Add to cart
      </button>
    </section>
  );
};

//Default props
MainContent.defaultProps = {
  productName: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outter sole, they’ll withstand everything the weather can offer.",
  price: "£125.00",
  discount: "50%",
  oldPrice: "£250",
};

export default MainContent;
