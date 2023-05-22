import Card from "./Card";
import phoneList from "../datas";

const Home = () => {
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
    console.log({ n: phone.name, p: phone.price });
    phoneDivs.push(<Card {...phone} />);
  });

  return <div className="phone-list">{phoneDivs}</div>;
};

export default Home;

//  name={phone.name} image={phone.image} price={phone.price}
