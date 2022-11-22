import plus from "../../image/plus.svg";
import minus from "../../image/minus.svg";
import deleteICN from "../../image/delete-icn.svg";
import { MyCartContext } from "../../management/context"

const CartItem = ({ id, name, image_url, price, quantity }) => {
  const { removeItem, toggleQuantity,formatNumber } = MyCartContext()
  return (
    <div className="cart-item">
      <div className="product-image">
        <img src={image_url} alt={name} />
      </div>
      <div className="description">
        <span>{name}</span>
        <span>price : {formatNumber(price)} Baht</span>
      </div>
      <div className="quantity">
        <button className="plus-btn" onClick={() => toggleQuantity(id,"increment")} >
          <img src={plus} alt="plus-btn" />
        </button>
        <input type="text" value={quantity} />
        <button className="minus-btn" onClick={() => toggleQuantity(id,"decrement")} >
          <img src={minus} alt="minus-btn" />
        </button>
      </div>
      <div className="total-price">
        {formatNumber(price*quantity)}
      </div>
      <div className="remove" onClick={()=>removeItem(id)}>
        <img src={deleteICN} alt="delete-btn" />
      </div>
    </div>
  );
};

export default CartItem;
