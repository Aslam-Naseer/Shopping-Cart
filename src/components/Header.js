import apple from "../images/Logos/apple.png";
import samsung from "../images/Logos/samsung.png";
import google from "../images/Logos/google.png";
import oneplus from "../images/Logos/oneplus.png";
import iqoo from "../images/Logos/iqoo.png";
import menu from "../images/Logos/menu.svg";

const Header = () => {
  const logo = menu;

  return (
    <div className="header">
      <img src={logo} alt="logo" className="selected" />
      <div className="main-logo">SmartPhonez</div>
      <div>View Cart</div>
    </div>
  );
};

export default Header;

/* <ul className="brands-list">
<li>
  <img src={samsung} alt="samsung" className="samsung-logo" />
</li>
<li>
  <img src={apple} alt="apple" className="apple-logo" />
</li>
<li>
  <img src={oneplus} alt="oneplus" className="oneplus-logo" />
</li>
<li>
  <img src={google} alt="google" className="google-logo" />
</li>
<li>
  <img src={iqoo} alt="iqoo" className="iqoo-logo" />
</li>
</ul> */
