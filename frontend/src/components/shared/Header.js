import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-400">MyBrand</a>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="/products" className="hover:text-gray-400">Products</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </nav>
        <div>
            <Link to="/login">
          <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">Login</button>
            </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
