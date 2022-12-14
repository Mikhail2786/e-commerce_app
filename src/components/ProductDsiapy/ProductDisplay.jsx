import { useState } from "react";
import { carouselData } from "../../carouselData";
import "./ProductDisplay.css";

const ProductDisplay = () => {
  const [products, setProduct] = useState(carouselData);
  const [value, setValue] = useState(0);

  const { mainImage } = products[value];

  return (
    <article className="product-display-container">
      <img src={mainImage} alt="" className="main-img borders" />

      <ul className="thumnail-container">
        {products.map((item, index) => (
          <li key={item.id} onClick={() => setValue(index)}>
            <img
              src={item.thumbnail}
              alt={item.alt}
              className="thumbnail-img borders"
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProductDisplay;
