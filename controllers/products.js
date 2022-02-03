const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: 'Products testing route' });
};
const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts
};
