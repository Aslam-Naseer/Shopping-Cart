import Card from "./Card";
import phoneList from "../datas";
import { useParams } from "react-router-dom";
import { isArray } from "lodash";

const phoneListAll = [
  ...phoneList.Samsung,
  ...phoneList.Apple,
  ...phoneList.Google,
  ...phoneList.OnePlus,
  ...phoneList.Iqoo,
];

const Shop = ({ addToCart, inCart }) => {
  const { brand } = useParams();
  const phoneArray = isArray(phoneList[brand])
    ? [...phoneList[brand]]
    : phoneListAll;
  phoneArray.sort((a, b) => b.price - a.price);

  const phoneDivs = [];
  phoneArray.forEach((phone) => {
    const addPhone = () => addToCart(phone);
    phoneDivs.push(
      <Card
        {...phone}
        addToCart={addPhone}
        inCart={inCart}
        key={phone.name + phone.price}
      />
    );
  });

  return <div className="phone-list">{phoneDivs}</div>;
};

export default Shop;
