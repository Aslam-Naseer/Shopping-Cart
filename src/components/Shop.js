import Card from "./Card";
import phoneList from "../datas";

const phoneListAll = [
  ...phoneList.Samsung,
  ...phoneList.Apple,
  ...phoneList.Google,
  ...phoneList.OnePlus,
  ...phoneList.Iqoo,
];
const Shop = ({ addToCart, selectedBrand }) => {
  const phoneArray =
    selectedBrand === "All" ? phoneListAll : [...phoneList[selectedBrand]];

  phoneArray.sort((a, b) => b.price - a.price);

  const phoneDivs = [];
  phoneArray.forEach((phone) => {
    const addPhone = () => addToCart(phone);
    phoneDivs.push(<Card {...phone} addToCart={addPhone} />);
  });

  return <div className="phone-list">{phoneDivs}</div>;
};

export default Shop;
