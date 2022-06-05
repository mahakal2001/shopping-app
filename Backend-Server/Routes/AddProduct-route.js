const express = require('express');
const router = express.Router();

const addproductController = require('../Controller/AddProduct-Cont.js')

router.get("/", addproductController.getAllProduct);
router.post("/", addproductController.addcartProduct);



module.exports = router; 