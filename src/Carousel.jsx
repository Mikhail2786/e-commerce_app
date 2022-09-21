import { carouselData } from "./carouselData";
import previous from "/images/previous.svg";
import next from "/images/next.svg";

const Carousel = ({ slides }) => {
  return (
    <section className="carousel">
      <div>
        <img src={previous} className="carousel-previous" />
      </div>
      <div>
        <img src={next} className="carousel-next" />
      </div>
      {carouselData.map((c) => {
        return <img src={c.image} alt={c.alt} key={c.id} />;
      })}
    </section>
  );
};

export default Carousel;
