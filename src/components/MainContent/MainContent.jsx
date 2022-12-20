import { UseQuantityContext } from "../../Context/QuantityContext";
import useMediaQuery from "../../Hooks/useMediaQuery";
import ProductDisplay from "../ProductDsiapy/ProductDisplay";
import Carousel from "../Carousel/Carousel";

import { carouselData } from "../../carouselData";

import "./MainContent.css";

import minus from "../../assets/images/minus.svg";
import plus from "../../assets/images/plus.svg";
import cartImg from "../../assets/images/btn-cart.svg";

const MainContent = ({ product }) => {
  const { productName, description, price, discount, oldPrice } = product;

  const { quantity, setQuantity, setItemQuantity } = UseQuantityContext();

  //increases quantity
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  //decreases quantity
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const addToCart = () => {
    setItemQuantity(quantity);
    // setItemQuantity((prevItemQuantity) => prevItemQuantity + );
  };

  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    // Product Information
    <main className="grid-container">
      {isDesktop ? <ProductDisplay /> : <Carousel slides={carouselData} />}

      <article className="product">
        <h3 className="company-name">Sneaker Company</h3>
        <h1 className="product-name">{productName}</h1>
        <p className="product-description">{description}</p>
        <div className="product-price-info">
          <span className="product-price">{price} </span>
          <span className="product-discount">{discount} </span>
          <span className="original-price">{oldPrice}</span>
        </div>
        {/* Button Section */}
        <div>
          <div className="product-btn-section">
            {quantity < 1 ? (
              <button
                onClick={decrementQuantity}
                className="minus-btn count-btn cursor"
                disabled
              >
                <img src={minus} alt="minus button" />
              </button>
            ) : (
              <button
                onClick={decrementQuantity}
                className="minus-btn count-btn cursor"
              >
                <img src={minus} alt="minus button" />
              </button>
            )}
            <span className="product-count">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="plus-btn count-btn cursor"
            >
              <img src={plus} alt="plus button" />
            </button>
          </div>
          <div className="add-btn-container">
            <button
              className="add-to-cart-btn cursor main-btn"
              onClick={addToCart}
            >
              <img src={cartImg} alt="cart image" />
              Add to cart
            </button>
          </div>
        </div>
      </article>
    </main>
  );
};

export default MainContent;
