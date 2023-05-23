import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [inCart, setInCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const toggleShowMenu = () => setShowMenu(!showMenu);
  const toggleShowCart = () => setShowCart(!showCart);

  const addToCart = (obj) => setInCart([...inCart, obj]);
  const removeFromCart = (obj) => {
    setInCart(inCart.filter((phone) => phone !== obj));
    const elem = document.querySelector(
      `[data-phone-id='${obj.brand} ${obj.name}']`
    );
    console.log(elem);
    elem.disabled = false;
  };

  return (
    <div className="App">
      <Header toggleShowMenu={toggleShowMenu} toggleShowCart={toggleShowCart} />
      <Home />
      <Shop addToCart={addToCart} />
      <Menu show={showMenu} toggle={toggleShowMenu} />
      <Cart
        phoneList={inCart}
        removeFromCart={removeFromCart}
        toggle={toggleShowCart}
        show={showCart}
      />
    </div>
  );
}

export default App;
