import { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ phoneList }) => {
  const [total, setTotal] = useState(0);

  const changeTotal = (price) => setTotal((t) => t + price);
  const items = [];
  phoneList.forEach((phone) => {
    items.push(
      <CartItem
        {...phone}
        changeTotal={changeTotal}
        key={phone.name + phone.price}
      />
    );
  });

  return (
    <div>
      <div>Your Shopping Cart</div>
      <div>{items}</div>
      <div>Total: {total}</div>
      <button>Checkout</button>
      <button>Close</button>
    </div>
  );
};

export default Cart;
