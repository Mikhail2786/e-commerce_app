import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { productData } from "./productData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent product={productData} />
    </div>
  );
}

export default App;
