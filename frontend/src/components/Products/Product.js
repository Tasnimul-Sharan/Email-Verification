// src/components/product/Product.js
import React from 'react';

const Product = ({ product }) => {
  return (
    <li className="border p-4">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-green-500">${product.price}</p>
    </li>
  );
};

export default Product;
