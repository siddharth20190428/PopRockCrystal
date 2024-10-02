import "./App.css";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="app">
      <div className="hero-bg-cont">
        <img src="./hero-bg.jpeg" className="hero-bg" />
        <img src="./hero-curve.png" className="hero-curve" />
      </div>
      <div className="content">
        <Navbar />
        <Hero />
        <Products />
        <Highlight />
      </div>
      <div className="highlight-bg-cont">
        <img src="./highlight-bg.jpeg" className="highlight-bg" />
        <img src="./highlight-curve.png" className="highlight-curve" />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
