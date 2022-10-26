import React, { useState } from "react";
import { UseQuantityContext } from "../../Context/QuantityContext";
import Cart from "../Cart/Cart";
import Backdrop from "../Backdrop/Backdrop";
import menu from "../../assets/images/menu.svg";
import logo from "../../assets/images/logo.svg";
import menuCart from "../../assets/images/menu-cart.svg";
import avatar from "../../assets/images/avatar.png";

const Header = () => {
  const { quantity } = UseQuantityContext();
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCart = () => {
    setCartIsOpen((prevState) => !prevState);
  };

  const CloseCart = () => {
    setCartIsOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <img src={menu} alt="menu icon" className="header-menu-icon" />
      <img src={logo} alt="company logo" className="header-company-logo" />
      {quantity > 0 ? (
        <span className="header-cart-quantity">{quantity}</span>
      ) : null}
      <div onClick={openCart}>
        <img src={menuCart} alt="cart icon" className="header-menu-cart" />
      </div>
      {cartIsOpen && <Cart />}
      {cartIsOpen && <Backdrop onClick={CloseCart} />}
      <img src={avatar} alt="avatar" className="header-avatar" />
    </header>
  );
};

export default Header;
