import CartItem from "../CartItem";
import { MyCartContext } from "../../management/context";
const Cart = () => {
  const { cart,total,formatNumber } = MyCartContext();
  const empty = <div className="empty-cart">This Cart is Empty!</div>;
  const notEmpty = (
    <>
      <div className="title">All Cart Item</div>
      {cart.map((item, index) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <div className="footer">Total : {formatNumber(total)} Baht</div>
    </>
  );
  
  return (
    <div className="shopping-cart">{cart.length !== 0 ? notEmpty : empty}</div>
  );

};

export default Cart;
