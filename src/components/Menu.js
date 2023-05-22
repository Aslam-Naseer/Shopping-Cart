import apple from "../images/Logos/apple.png";
import samsung from "../images/Logos/samsung.png";
import google from "../images/Logos/google.png";
import oneplus from "../images/Logos/oneplus.png";
import iqoo from "../images/Logos/iqoo.png";
import home from "../images/Logos/home.svg";

const Menu = ({ show, toggle }) => {
  return (
    <div className={`menu ${show ? "show-menu" : ""}`}>
      <img src={home} alt="home" className="home-logo" onClick={toggle} />
      <ul className="brands-list">
        <li>
          <img
            src={samsung}
            alt="samsung"
            className="samsung-logo"
            onClick={toggle}
          />
        </li>
        <li>
          <img
            src={apple}
            alt="apple"
            className="apple-logo"
            onClick={toggle}
          />
        </li>
        <li>
          <img
            src={oneplus}
            alt="oneplus"
            className="oneplus-logo"
            onClick={toggle}
          />
        </li>
        <li>
          <img
            src={google}
            alt="google"
            className="google-logo"
            onClick={toggle}
          />
        </li>
        <li>
          <img src={iqoo} alt="iqoo" className="iqoo-logo" onClick={toggle} />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
