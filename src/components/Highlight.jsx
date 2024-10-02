import React from "react";

const Highlight = () => {
  return (
    <section id="highlight-section">
      <aside className="highlight-content">
        <h2>
          BEST PRICE
          <span>Agate Phone Grip</span>
        </h2>
        <h6>
          <span>44.50$</span> 19.50$
        </h6>
        <p>
          These Pop Rock Crystal grip tops can be swapped with other tops
          depending on your mood, outfit, nails, phone case, holiday, etc.! Just
          gently squeeze the sides to remove and swap out with another color or
          design!
        </p>

        <button>Buy Now</button>
      </aside>
      <aside id="circles-cont">
        <div className="circle shadow-circle"></div>
        <div className="circle outer-circle"></div>
        <div className="circle inner-circle">
          <img src="./product.png" />
        </div>
      </aside>
    </section>
  );
};

export default Highlight;
