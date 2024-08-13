import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <a href="/" className="hover:text-gray-400">MyBrand</a>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
          <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
          <a href="https://instagram.com" className="hover:text-gray-400">Instagram</a>
        </div>
        <div className="text-sm">
          &copy; 2024 MyBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
