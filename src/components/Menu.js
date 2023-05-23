import apple from "../images/Logos/apple.png";
import samsung from "../images/Logos/samsung.png";
import google from "../images/Logos/google.png";
import oneplus from "../images/Logos/oneplus.png";
import iqoo from "../images/Logos/iqoo.png";
import home from "../images/Logos/home.svg";
import { Link } from "react-router-dom";

const Menu = ({ show, toggle }) => {
  return (
    <div className={`menu ${show ? "show-menu" : ""}`}>
      <Link to="/">
        <img src={home} alt="home" className="home-logo" onClick={toggle} />
      </Link>
      <ul className="brands-list">
        <li>
          <Link to="/shop/Samsung">
            <img
              src={samsung}
              alt="samsung"
              className="samsung-logo"
              onClick={toggle}
            />
          </Link>
        </li>
        <li>
          <Link to="/shop/Apple">
            {" "}
            <img
              src={apple}
              alt="apple"
              className="apple-logo"
              onClick={toggle}
            />
          </Link>
        </li>
        <li>
          <Link to="/shop/OnePlus">
            <img
              src={oneplus}
              alt="oneplus"
              className="oneplus-logo"
              onClick={toggle}
            />
          </Link>
        </li>
        <li>
          <Link to="/shop/Google">
            <img
              src={google}
              alt="google"
              className="google-logo"
              onClick={toggle}
            />
          </Link>
        </li>
        <li>
          <Link to="/shop/Iqoo">
            {" "}
            <img src={iqoo} alt="iqoo" className="iqoo-logo" onClick={toggle} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
