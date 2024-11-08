import React from 'react';
import './Products.css';

const ProductCard = ({ title, price, image }) => (
  <div className="product-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{price}</p>
  </div>
);

export default ProductCard;