import closeMenu from "../../assets/images/close.svg";

const MobileMenu = () => {
  return (
    <nav className="mobile-nav-container">
      <div>
        <button className="close-menu-btn">
          <img src={closeMenu} alt="Close menu icon" />
        </button>
      </div>

      <ul className="nav-lists">
        <li className="nav-list-item">
          <a>Collection</a>
        </li>
        <li className="nav-list-item">
          <a>Men</a>
        </li>
        <li className="nav-list-item">
          <a>Women</a>
        </li>
        <li className="nav-list-item">
          <a>About</a>
        </li>
        <li className="nav-list-item">
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
