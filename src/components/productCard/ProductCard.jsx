import React from "react";
import PropTypes from "prop-types";
import "./productCard.styles.scss";

const ProductCard = (props) => {
  const { name, price, imageUrl, stockCount, id } = props.product;
  return (
    <div className="product">
      <img className="product__img" src={imageUrl} width="100px" />
      <h6 className="product__name">{name}</h6>
      <p className="product__price">{price}</p>
      {stockCount ? (
        <button className="product__btn product__btn_active">
          Add To Card
        </button>
      ) : (
        <button className="product__btn product__btn_muted">
          out of stock
        </button>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  // name: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
  // imageUrl: PropTypes.string.isRequired,
  // stockCount: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
};

export default ProductCard;
