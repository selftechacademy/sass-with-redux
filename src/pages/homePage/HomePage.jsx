import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/productCard/ProductCard";

import "./homePage.styles.scss";

const HomePage = () => {
  const { allItems } = useSelector((state) => state.cart);

  return (
    <div>
      <div className="product-list">
        {allItems.map((el, index) => (
          <ProductCard key={index} product={el} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
