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
      <aside style={{ position: "absolute", right: "25%" }}>
        <div
          style={{
            boxShadow: "0px 4px 50px 0px #788F9C40",
            background: "white",
            width: 640,
            height: 320,
            borderRadius: "0 0 320px 320px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,0%)",
            opacity: 0.5,
          }}
        ></div>
        <div
          style={{
            boxShadow: "0px 4px 50px 0px #788F9C40",
            background: "white",
            width: 480,
            height: 480,
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <div
            style={{
              boxShadow: "0px 4px 50px 0px #788F9C40",
              background: "white",
              width: 320,
              height: 320,
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <img
              src="./product.png"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            />
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Highlight;
