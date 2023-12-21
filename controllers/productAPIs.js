const Product  = require('../models/ProductModel');

// product APIs ---> Endpoints

// (create) post - to create new product in DB
const createProduct = async(req,res) => {
    try {
        if(!req.body.productName || !req.body.price){
            return res.status(400).send({
                message: 'Send required fields: product name and product price',
            });
        }
        let newProduct = {
            productName: req.body.productName,
            price: req.body.price,
            quantity: req.body.quantity,
        };
        // console.log(newProduct);
        const product = await Product.create(newProduct);
        // console.log('product details:',product);
        return res.status(201).send(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
}

// get - get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    // console.log(products);
    return res.status(200).json({
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

// get - get a product by id
const getProductById = async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        // console.log(product);
        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: error.message})
    }
}

// update - update a product
const updateProduct = async (req,res) => {
    try {
        if(!req.body.productName || !req.body.price){
            return res.status(400).send({
                message: 'Send required fields: product name and product price',
            });
        }
        const { id } = req.params;
        const productUpdateStatus = await Product.findByIdAndUpdate(id, req.body);

        if(!productUpdateStatus){
            return res.status(404).json({ message : 'Product not found'});
        }
        return res.status(200).send({message: 'Product updated successfully!!'})
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
}

// delete - delete a product by id
const deleteProduct = async (req,res) => {
    try {
        const { id } = req.params;
        const dProduct = await Product.findByIdAndDelete(id);
        
        if(!dProduct){
            return res.status(404).json({message: 'Product not found'})
        }
        // console.log(dProduct);
        return res.status(200).send({message: 'Product deleted successfully!!'})
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: err.message });
    }
}

// export all product's APIs
module.exports = {
    getAllProducts, createProduct, getProductById, updateProduct, deleteProduct
}