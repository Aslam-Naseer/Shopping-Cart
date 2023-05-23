import { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ phoneList, removeFromCart, toggle, show }) => {
  const [total, setTotal] = useState(0);

  const changeTotal = (price) => setTotal((t) => t + price);
  const items = [];
  phoneList.forEach((phone) => {
    const remove = () => removeFromCart(phone);
    items.push(
      <CartItem
        {...phone}
        changeTotal={changeTotal}
        removeFromCart={remove}
        key={phone.name + phone.price}
      />
    );
  });

  return (
    <>
      <div className={`overlay ${show ? "show-overlay" : ""}`}></div>
      <div className={`cart ${show ? "show-cart" : ""}`}>
        <div>Your Shopping Cart</div>
        <ul>{items}</ul>
        <div>Total: Rs {total}</div>
        <button className="checkout">Checkout</button>
        <button className="close" onClick={toggle}>
          Close
        </button>
      </div>
    </>
  );
};

export default Cart;
