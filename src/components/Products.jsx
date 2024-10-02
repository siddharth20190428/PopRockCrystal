import React from "react";

const Product = () => {
  return (
    <div className="product">
      <img src="./product.png" alt="" />
      <span className="name">Crystal Agate Phone Grip</span>
      <span className="price">18.99$</span>
      <button>Buy Now</button>
    </div>
  );
};

const Products = () => {
  return (
    <section id="products-section">
      <h2>All Products</h2>
      <div id="products-cont">
        {new Array(8).fill(0).map((_) => (
          <Product />
        ))}
      </div>
    </section>
  );
};

export default Products;
