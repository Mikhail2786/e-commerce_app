import React from "react";
import menu from "/images/menu.svg";
import logo from "/images/logo.svg";
import menuCart from "/images/menu-cart.svg";
import avatar from "/images/avatar.png";

const Header = () => {
  return (
    <header className="header">
      <img src={menu} alt="menu icon" className="header-menu-icon" />
      <img src={logo} alt="company logo" className="header-company-logo" />
      <img src={menuCart} alt="cart icon" className="header-menu-cart" />
      <img src={avatar} alt="avatar" className="header-avatar" />
    </header>
  );
};

export default Header;
