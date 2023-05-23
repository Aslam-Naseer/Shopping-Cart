import { useEffect, useState } from "react";

const CartItem = ({ brand, name, price, changeTotal, removeFromCart }) => {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
    changeTotal(price);
  };
  const decrement = () => {
    // if (count < 1) return;
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
      <div>{brand + " " + name}</div>
      <div>Rs: {price * count}</div>
      <div>
        <button onClick={decrement} className="cart-item-btn">
          -
        </button>
        {count}
        <button onClick={increment} className="cart-item-btn">
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
