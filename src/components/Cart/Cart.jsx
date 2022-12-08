import { UseQuantityContext } from "../../Context/QuantityContext";
import CartItem from "../CartItems/CartItems";
import { productData } from "../../productData";
import "./Cart.css";

const Cart = () => {
  const { itemQuantity } = UseQuantityContext();

  return (
    <div className="cart-container">
      <h4 className="cart-title">Cart</h4>
      <div className="cart-product">
        {itemQuantity > 0 ? (
          <CartItem product={productData} />
        ) : (
          <p className="cart-text">Your Cart is Empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
