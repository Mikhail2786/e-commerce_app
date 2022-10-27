import { UseQuantityContext } from "../../Context/QuantityContext";
import minus from "../../assets/images/minus.svg";
import plus from "../../assets/images/plus.svg";
import cartImg from "../../assets/images/btn-cart.svg";

const MainContent = ({ product }) => {
  const { productName, description, price, discount, oldPrice } = product;

  const { quantity, setQuantity, itemQuantity, setItemQuantity } =
    UseQuantityContext();

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const addToCart = () => {
    setItemQuantity(quantity);
    // setItemQuantity((prevItemQuantity) => prevItemQuantity + );
    console.log(itemQuantity);
  };

  return (
    // Product Information
    <section className="product">
      <h3 className="company-name">Sneaker Company</h3>
      <h1 className="product-name">{productName}</h1>
      <p className="product-description">{description}.</p>
      <div className="product-price-info">
        <span className="product-price">{price} </span>
        <span className="product-discount">{discount} </span>
        <span className="original-price">{oldPrice}</span>
      </div>
      {/* Button Section */}
      <div className="product-btn-section">
        {quantity < 1 ? (
          <button
            onClick={decrementQuantity}
            className="minus-btn count-btn"
            disabled
          >
            <img src={minus} alt="minus button" />
          </button>
        ) : (
          <button onClick={decrementQuantity} className="minus-btn count-btn">
            <img src={minus} alt="minus button" />
          </button>
        )}
        <span className="product-count">{quantity}</span>
        <button onClick={incrementQuantity} className="plus-btn count-btn">
          <img src={plus} alt="plus button" />
        </button>
      </div>
      <button className="add-to-cart-btn" onClick={addToCart}>
        <img src={cartImg} alt="cart image" />
        Add to cart
      </button>
    </section>
  );
};

export default MainContent;
