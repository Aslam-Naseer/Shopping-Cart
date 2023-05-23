import { useEffect, useState } from "react";

const CartItem = ({
  image,
  brand,
  name,
  price,
  changeTotal,
  removeFromCart,
}) => {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
    changeTotal(price);
  };
  const decrement = () => {
    if (count === 1) {
      removeFromCart();
      return;
    }
    setCount(count - 1);
    changeTotal(price * -1);
  };

  useEffect(() => {
    changeTotal(price);
    return () => {
      changeTotal(price * -1);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="cart-item">
      <img src={image} alt="phone" />
      <div>
        <div>{brand + " " + name}</div>
        <div>Rs: {price * count}</div>
        <div className="cart-item-buttons">
          <button onClick={decrement} className="cart-item-btn">
            -
          </button>
          {count}
          <button onClick={increment} className="cart-item-btn">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
