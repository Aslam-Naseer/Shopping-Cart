import { useState } from "react";

const CartItem = ({ name, price }) => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="cart-item">
      <div>{name}</div>
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
