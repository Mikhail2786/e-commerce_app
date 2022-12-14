import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import ProductDisplay from "./components/ProductDsiapy/ProductDisplay";
import Carousel from "./components/Carousel/Carousel";
import { carouselData } from "./carouselData";
import { productData } from "./productData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ProductDisplay /> */}
      {/* <Carousel slides={carouselData} /> */}
      <MainContent product={productData} />
    </div>
  );
}

export default App;
