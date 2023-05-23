import Card from "./Card";
import phoneList from "../datas";

const Shop = ({ addToCart, inCart }) => {
  const phoneArray = [
    ...phoneList.Samsung,
    ...phoneList.Apple,
    ...phoneList.Google,
    ...phoneList.OnePlus,
    ...phoneList.Iqoo,
  ];

  phoneArray.sort((a, b) => a.price - b.price);

  const phoneDivs = [];
  phoneArray.forEach((phone) => {
    const addPhone = () => addToCart(phone);
    phoneDivs.push(<Card {...phone} addToCart={addPhone} inCart={inCart} />);
  });

  return <div className="phone-list">{phoneDivs}</div>;
};

export default Shop;
