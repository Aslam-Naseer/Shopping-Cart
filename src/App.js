import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Shop from "./components/Shop";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => setShowMenu(!showMenu);

  return (
    <div className="App">
      <Header toggleShowMenu={toggleShowMenu} />
      <Home />
      <Shop />
      <Menu show={showMenu} toggle={toggleShowMenu} />
    </div>
  );
}

export default App;
