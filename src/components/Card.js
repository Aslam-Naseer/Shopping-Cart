const Card = ({ brand, name, image, price }) => {
  return (
    <div className="card">
      <img src={image} alt="phone" />
      <div className="details">
        <div>{brand}</div>
        <div>{name}</div>
        <div>Rs {price}</div>
      </div>
      <button className="add-to-cart">Add to cart</button>
    </div>
  );
};

export default Card;
