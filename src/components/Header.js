import apple from "../images/Logos/apple.png";
import samsung from "../images/Logos/samsung.png";
import google from "../images/Logos/google.png";
import oneplus from "../images/Logos/oneplus.png";
import iqoo from "../images/Logos/iqoo.png";
import menu from "../images/Logos/menu.svg";

const Header = ({ toggleShowMenu }) => {
  const logo = menu;

  return (
    <div className="header">
      <img
        src={logo}
        alt="logo"
        className="selected"
        onClick={toggleShowMenu}
      />
      <div className="main-logo">SmartPhonez</div>
      <div>View Cart</div>
    </div>
  );
};

export default Header;
