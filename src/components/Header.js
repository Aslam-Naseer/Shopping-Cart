import menu from "../images/Logos/menu.svg";
import cart from "../images/Logos/cart.svg";

const Header = ({ toggleShowMenu, toggleShowCart }) => {
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
      <img
        onClick={toggleShowCart}
        src={cart}
        alt="Veiw Cart"
        className="cart-logo"
      />
    </div>
  );
};

export default Header;
