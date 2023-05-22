const Card = ({ name, image, price }) => {
  return (
    <div className="card">
      {/* <div>{brand}</div> */}
      <div>{name}</div>
      <img src={image} alt="phone" />
      <div>{price}</div>
    </div>
  );
};

export default Card;
