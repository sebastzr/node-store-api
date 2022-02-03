require('dotenv').config();

const connectDB = require('./db/connect');
const Product = require('./models/product');

const jsonProducts = require('./products.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Connected to database...');
    await Product.deleteMany();
    console.log('Cleaned up products...');
    await Product.create(jsonProducts);
    console.log('Success: Products created.');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
