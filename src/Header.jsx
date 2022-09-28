import React, { useState } from "react";
import Cart from "./Cart";
import Backdrop from "./Backdrop";
import menu from "/images/menu.svg";
import logo from "/images/logo.svg";
import menuCart from "/images/menu-cart.svg";
import avatar from "/images/avatar.png";

const Header = () => {
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
