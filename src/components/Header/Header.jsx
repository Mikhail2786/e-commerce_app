import React, { useState } from "react";
import { UseQuantityContext } from "../../Context/QuantityContext";
import MobileMenu from "../MobileMenu/MobileMenu";
import Cart from "../Cart/Cart";
import Backdrop from "../Backdrop/Backdrop";
import menu from "../../assets/images/menu.svg";
import logo from "../../assets/images/logo.svg";
import menuCart from "../../assets/images/menu-cart.svg";
import avatar from "../../assets/images/avatar.png";

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
      <div onClick={openMobileMenu}>
        <img src={menu} alt="menu icon" className="header-menu-icon" />
      </div>
      {mobileMenIsOpen && <MobileMenu handleClose={CloseMobileMenu} />}
      {mobileMenIsOpen && <Backdrop onClick={CloseMobileMenu} />}
      <img src={logo} alt="company logo" className="header-company-logo" />
      {itemQuantity > 0 ? (
        <span className="header-cart-quantity">{itemQuantity}</span>
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
