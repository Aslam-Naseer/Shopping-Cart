import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [inCart, setInCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const toggleShowMenu = () => setShowMenu(!showMenu);
  const toggleShowCart = () => setShowCart(!showCart);

  const addToCart = (obj) => {
    if (inCart.includes(obj)) return;
    setInCart([...inCart, obj]);
  };

  const removeFromCart = (obj) => {
    setInCart(inCart.filter((phone) => phone !== obj));
  };

  return (
    <div className="App">
      <Header
        toggleShowMenu={toggleShowMenu}
        toggleShowCart={toggleShowCart}
        count={inCart.length}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop addToCart={addToCart} inCart={inCart} />}
        />
      </Routes>
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
