const express = require('express');
const router = express.Router();
const controllers = require('../controllers/products');

router.route('/')
    .get(controllers.getProducts)
    .post(controllers.addProduct);

router.route('/:id')
    .put(controllers.updateProduct)
    .delete(controllers.deleteProduct);

module.exports = router;