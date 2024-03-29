import closeMenu from "../../assets/images/close.svg";
import "./MobileMenu.css";

const MobileMenu = ({ handleClose }) => {
  return (
    <div className="mobile-nav-container">
      <div>
        <button className="close-menu-btn cursor" onClick={handleClose}>
          <img src={closeMenu} alt="Close menu icon" />
        </button>
      </div>
      <ul className="nav-list">
        <li className="nav-list-item">
          <a href="#">Collections</a>
        </li>
        <li className="nav-list-item">
          <a href="#">Men</a>
        </li>
        <li className="nav-list-item">
          <a href="#">Women</a>
        </li>
        <li className="nav-list-item">
          <a href="#">About</a>
        </li>
        <li className="nav-list-item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
