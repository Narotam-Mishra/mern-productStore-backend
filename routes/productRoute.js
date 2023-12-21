
const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productAPIs');

router.route('/').get(getAllProducts).post(createProduct)
router.route('/:id').get(getProductById).patch(updateProduct).delete(deleteProduct)

module.exports = router;