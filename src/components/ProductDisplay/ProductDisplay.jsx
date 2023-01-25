import { useState } from "react";
import { carouselData } from "../../carouselData";
import "./ProductDisplay.css";

const ProductDisplay = () => {
  const [products, setProduct] = useState(carouselData);
  const [value, setValue] = useState(0);

  const { mainImage } = products[value];

  return (
    <article className="product-display-container">
      <img src={mainImage} alt="" className="main-img borders cursor" />

      <ul className="thumnail-container">
        {products.map((item, index) => (
          <li
            key={item.id}
            onClick={() => setValue(index)}
            className={`${index === value && `active`}`}
          >
            <img
              src={item.thumbnail}
              alt={item.alt}
              className="thumbnail-img borders cursor"
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProductDisplay;
