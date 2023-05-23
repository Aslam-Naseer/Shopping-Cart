import CartItem from "./CartItem";

const Cart = ({ phoneList }) => {
  const items = [];
  phoneList.forEach((phone) => items.push(<CartItem {...phone} />));

  return (
    <div>
      <div>Your Shopping Cart</div>
      <div>{items}</div>
      <div>Total</div>
      <button>Checkout</button>
      <button>Close</button>
    </div>
  );
};

export default Cart;
