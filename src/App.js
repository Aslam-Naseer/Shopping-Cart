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

  const toggleShowMenu = () => setShowMenu(!showMenu);
  const addToCart = (obj) => setInCart([...inCart, obj]);

  return (
    <div className="App">
      <Header toggleShowMenu={toggleShowMenu} />
      <Home />
      <Shop addToCart={addToCart} />
      <Menu show={showMenu} toggle={toggleShowMenu} />
      <Cart phoneList={inCart} />
    </div>
  );
}

export default App;
