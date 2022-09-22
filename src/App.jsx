import MainContent from "./MainContent";
import { carouselData } from "./carouselData";
import Carousel from "./Carousel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Carousel slides={carouselData} />
      <MainContent />
    </div>
  );
}

export default App;
