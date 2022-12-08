import { UseQuantityContext } from "../../Context/QuantityContext";
import productImage from "../../assets/images/image-product-1-thumbnail.jpg";
import deleteIcon from "../../assets/images/delete.svg";
import "./CartItem.css";

const CartItem = ({ product }) => {
  const { productTitle, price } = product;
  const { quantity, setQuantity, itemQuantity, setItemQuantity } =
    UseQuantityContext();

  const deleteItem = () => {
    setItemQuantity(0);
    setQuantity(0);
  };

  return (
    <div className="cart-item-container">
      <div className="cart-item-information">
        <img className="cart-item-image" src={productImage} />
        <div className="cart-item-text">
          {productTitle} {price} x
          <span className="item-quantity">{quantity}</span>
          <span className="total">{`£${quantity * 125}.00`}</span>
        </div>
        <button className="delete-btn cursor" onClick={deleteItem}>
          <img src={deleteIcon} alt="delete icon" />
        </button>
      </div>
      <button className="checkout-btn cursor main-btn">Checkout</button>
    </div>
  );
};

export default CartItem;
