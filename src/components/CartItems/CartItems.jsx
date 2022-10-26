import { UseQuantityContext } from "../../Context/QuantityContext";
import productImage from "../../assets/images/image-product-1-thumbnail.jpg";
import deleteItem from "../../assets/images/delete.svg";

const CartItem = ({ product }) => {
  const { productTitle, price } = product;
  const { quantity } = UseQuantityContext();
  return (
    <div className="cart-item-container">
      <div className="cart-item-information">
        <img className="cart-item-image" src={productImage} />
        <div className="cart-item-text">
          {productTitle} {price} x
          <span className="item-quantity">{quantity}</span>
          <span className="total">{`£${quantity * 125}.00`}</span>
        </div>
        <img className="delete-btn" src={deleteItem} alt="delete icon" />
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default CartItem;
