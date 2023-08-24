import React from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <div>
      <h1 className="max-w-2xl m-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
        Our Products
      </h1>

      <div class="grid grid-cols-3 md:grid-cols-4 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Product;
