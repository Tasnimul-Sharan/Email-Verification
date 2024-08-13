const Product = require('../models/Product');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch products', error });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  const { name, description, price, category, imageUrl } = req.body;

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      imageUrl,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create product', error });
  }
};
