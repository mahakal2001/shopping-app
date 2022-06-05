const express = require('express');
const router1 = express.Router();
const productsController = require('../Controller/Prodcuts-Controller')


router1.get("/", productsController.getAllProduct);
router1.post("/", productsController.addProduct);
router1.get("/:id", productsController.getById)
router1.patch("/:id", productsController.addValue)

module.exports = router1; 