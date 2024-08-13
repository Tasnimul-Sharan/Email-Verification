// src/components/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/getProducts');
        console.log(response.data, "data")
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Products</h1>
      <div>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
      </div>
    </div>
  );
};

export default Products;
