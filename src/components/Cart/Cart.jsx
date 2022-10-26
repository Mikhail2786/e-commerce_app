import CartItem from "../CartItems/CartItems";
import { productData } from "../../productData";

const Cart = () => {
  return (
    <div className="cart-container">
      <h4 className="cart-title">Cart</h4>
      <div className="cart-product">
        <CartItem product={productData} />
        {/* <p className="cart-text">Your Cart is Empty</p> */}
      </div>
    </div>
  );
};

export default Cart;
