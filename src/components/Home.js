import { Link } from "react-router-dom";
import mobiles from "../images/Logos/mobiles_bg.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-main">
        <div>ITS A CRAZY SEASON </div>
        <div>The right place for the right Smartphone!!</div>
        <Link to="/shop">
          <button className="shop-now">Shop Now</button>
        </Link>
      </div>
      <img src={mobiles} alt="background" className="home-sec" />
    </div>
  );
};

export default Home;
