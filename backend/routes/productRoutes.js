const express = require('express');
const { getAllProducts, createProduct } = require('../controllers/productController');
const router = express.Router();

// Route to get all products
router.get('/getProducts', getAllProducts);

// Route to create a new product
router.post('/products', createProduct);

module.exports = router;
