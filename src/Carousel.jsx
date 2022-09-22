import { carouselData } from "./carouselData";
import previous from "/images/previous.svg";
import next from "/images/next.svg";

const Carousel = ({ slides }) => {
  return (
    <section className="carousel">
      <div className="carousel-arrow-container carousel-previous">
        <img src={previous} className="carousel-arrow" />
      </div>
      <div className="carousel-arrow-container carousel-next">
        <img src={next} className="carousel-arrow" />
      </div>
      {/* mapping over the carouselData array in carouselData.js */}
      {carouselData.map((c, i) => {
        return (
          <div
            className={`carousel-image-container ${
              i === 0 ? "active" : "hidden"
            }`}
          >
            <img
              src={c.image}
              alt={c.alt}
              key={c.id}
              className="carousel-image"
            />
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
