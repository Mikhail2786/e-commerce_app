import MainContent from "./MainContent";
import product1 from "./assets/images/product-1.jpg";
import "./App.css";

const Carousel = () => {
  return (
    <div>
      <img src={product1} />
      <button>prev</button>
      <button>next</button>
    </div>
  );
};

function App() {
  return (
    <div className="">
      {/* <Carousel /> */}
      <MainContent />
    </div>
  );
}

export default App;
