import Card from "./Card";
import phoneList from "../datas";

const Shop = () => {
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
    phoneDivs.push(<Card {...phone} />);
  });

  return <div className="phone-list">{phoneDivs}</div>;
};

export default Shop;
