import Header from "./Header";
import MainContent from "./MainContent";
import Carousel from "./Carousel";
import { CountProvider } from "./CountContext";
import { carouselData } from "./carouselData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CountProvider>
        <Header />
        <Carousel slides={carouselData} />
        <MainContent />
      </CountProvider>
    </div>
  );
}

export default App;
