import React from "react";

const Hero = () => {
  return (
    <main>
      <section id="hero">
        <aside style={{ width: "60%" }}>
          <div style={{ width: "90%", color: "white" }}>
            <h6 style={{ fontSize: 40, fontWeight: 400 }}>Welcome to </h6>
            <h4 style={{ fontSize: 64, fontWeight: 700 }}>
              Pop Rock Crystal Shop!
            </h4>
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                margin: "2rem 0",
                color: "#31546D",
              }}
            >
              Here you will find unique phone accessories, crystals, jewelry and
              more. Free shipping inside the U.S. and our phone grips come with
              a limited warranty. Enjoy!
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <button id="shop-now">Shop Now</button>
            <span style={{ color: "#31546D" }}>About Us</span>
          </div>
        </aside>
        <aside style={{ width: "40%", height: "100" }}>
          <div id="hero-showcase">
            <span id="new-lot">New Lot</span>
            <img src="./product.png" alt="" />
            <p className="name">
              Crystal Agate Phone Grip - <span className="price">18.99$</span>
            </p>
          </div>
          <div id="carousel-nav">
            <img src="arrow-icon.svg" width={28} />
            <span className="dot highlighted" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <img
              src="arrow-icon.svg"
              width={28}
              style={{ transform: "rotate(180deg)" }}
            />
          </div>
        </aside>
      </section>
      <div id="scroll-cont">
        <img src="./mouse-icon.svg" alt="" />
        <span style={{ color: "#317189" }}>Scroll Down</span>
      </div>
    </main>
  );
};

export default Hero;
