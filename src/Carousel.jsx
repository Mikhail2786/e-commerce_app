import { useState } from "react";
import { carouselData } from "./carouselData";
import previous from "/images/previous.svg";
import next from "/images/next.svg";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlides = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlides = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  return (
    <section className="carousel">
      <div
        className="carousel-arrow-container carousel-previous"
        onClick={prevSlides}
      >
        <img src={previous} className="carousel-arrow" />
      </div>
      <div
        className="carousel-arrow-container carousel-next"
        onClick={nextSlides}
      >
        <img src={next} className="carousel-arrow" />
      </div>
      {/* mapping over the carouselData array in carouselData.js */}
      {carouselData.map((c, index) => {
        return (
          <div
            key={c.id}
            className={`carousel-image-container ${
              index === current ? "slide active" : "slide hidden"
            }`}
          >
            {index === current && (
              <img src={c.image} alt={c.alt} className="carousel-image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;

// const Banner = ({ active, children }) => (
//   4  <div className={`banner ${active ? "active" : ""}`}>{children}</div>
//   5);
