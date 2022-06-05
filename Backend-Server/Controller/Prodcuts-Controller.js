const Product = require('../Model/Product');

const getAllProduct = async (req,res,next) => {
    let product ;
    try {
        product = await Product.find();
    } catch(err){
        console.error(err);
    }
    if(!product){
        return res.status(404).json({message:"Prodcuts Not Found"});
    }
    return res.status(200).json({product});
}

const getById = async (req,res,next) => {
    const id = req.params.id;
    let product ;
    try{
        product = await Product.findById(id);
    } catch(err){
        console.error(err);
    }
    if(!product){
        return res.status(404).json({message:"Prodcut Not Found"});
    }
    return res.status(200).json({product});
}

const addProduct = async (req, res, next) => {
    const{name, brand, category, price, available, image} = req.body;
    let product;
    try{
        product = new Product({
            name, brand, category, price, available, image
        })
        await product.save();
    } catch(err){
        console.log(err);
    }
    if(!product){
        return res.status(500).json({message:"Prodcut Not Added"});
    }
    return res.status(201).json({product});
}

const addValue = async (req, res, next) => {
    const id = req.params.id;
    const{name, brand, category, price, image, value} = req.body;
    // console.log(id)
    // console.log(date,time)
    let product;
    try{
        product = await Product.findByIdAndUpdate(id, {
            value
        } )
        await product.save();
        // console.log(doctor)
    } catch(err){
        console.log(err);
    }
    if(!product){
        return res.status(500).json({message:"Prodcut Not Updated"});
    }
    return res.status(201).json({product});
}

exports.getAllProduct = getAllProduct;
exports.getById = getById;
exports.addProduct = addProduct;
exports.addValue= addValue;