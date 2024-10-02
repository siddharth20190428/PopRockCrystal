import "./App.css";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          height: "100vh",
          position: "absolute",
          inset: "-1rem 0 0 0 ",
        }}
      >
        <img
          src="./hero-bg.jpeg"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            inset: 0,
            zIndex: -10,
          }}
        />
        <img
          src="./hero-curve.png"
          style={{
            position: "absolute",
            width: "100%",
            height: "60%",
            inset: "auto 0 0 0",
            zIndex: -9,
          }}
        />
      </div>
      <div style={{ margin: "1rem 2rem" }}>
        <Navbar />
        <Hero />
        <Products />
        <Highlight />
      </div>
      <div
        style={{
          height: "100vh",
          position: "absolute",
          bottom: 200,
          left: 0,
          width: "100%",
        }}
      >
        <img
          src="./highlight-bg.jpeg"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            inset: 0,
            zIndex: -10,
            opacity: 0.5,
          }}
        />
        <img
          src="./highlight-curve.png"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: -9,
          }}
        />
      </div>
      <div style={{ background: "#0A294DCC", height: 200 }}></div>
    </div>
  );
}

export default App;
