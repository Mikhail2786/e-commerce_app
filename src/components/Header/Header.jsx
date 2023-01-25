import React, { useState } from "react";
import { UseQuantityContext } from "../../Context/QuantityContext";
import MobileMenu from "../MobileMenu/MobileMenu";
import Cart from "../Cart/Cart";
import Backdrop from "../Backdrop/Backdrop";
import menu from "../../assets/images/menu.svg";
import logo from "../../assets/images/logo.svg";
import menuCart from "../../assets/images/menu-cart.svg";
import avatar from "../../assets/images/avatar.png";

import "./Header.css";

const Header = () => {
  const { itemQuantity } = UseQuantityContext();
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [mobileMenIsOpen, setMobileMenIsOpen] = useState(false);

  const openCart = () => {
    setCartIsOpen((prevState) => !prevState);
  };

  const CloseCart = () => {
    setCartIsOpen((prevState) => !prevState);
  };

  const openMobileMenu = () => {
    setMobileMenIsOpen((prevState) => !prevState);
  };

  const CloseMobileMenu = () => {
    setMobileMenIsOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <nav className="header-nav-container flex">
        {mobileMenIsOpen && <MobileMenu handleClose={CloseMobileMenu} />}
        {mobileMenIsOpen && <Backdrop onClick={CloseMobileMenu} />}
        <div className="inner-nav-container flex">
          <div className="nav-content">
            <div onClick={openMobileMenu} className="cursor menu-btn">
              <img src={menu} alt="menu icon" className="header-menu-icon" />
            </div>
            <div className="flex logo-img-container">
              <img
                src={logo}
                alt="company logo"
                className="header-company-logo"
              />
            </div>
            <ul className="desktop-nav-list">
              <li className="desktop-nav-list-item">
                <a href="#">Collections</a>
              </li>
              <li className="desktop-nav-list-item">
                <a href="#">Men</a>
              </li>
              <li className="desktop-nav-list-item">
                <a href="#">Women</a>
              </li>
              <li className="desktop-nav-list-item">
                <a href="#">About</a>
              </li>
              <li className="desktop-nav-list-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex avatar-header-container">
          <div className="cart-img-container cursor" onClick={openCart}>
            {itemQuantity > 0 ? (
              <div className="header-cart-quantity">{itemQuantity}</div>
            ) : null}
            <img src={menuCart} alt="cart icon" className="header-menu-cart" />
          </div>
          <img src={avatar} alt="avatar" className="header-avatar cursor" />
        </div>
        {cartIsOpen && <Cart />}
        {cartIsOpen && <Backdrop onClick={CloseCart} />}
      </nav>
    </header>
  );
};

export default Header;
