
const CartProducts = require('../Model/CartProducts');

const getAllProduct = async (req,res,next) => {
    let product ;
    try {
        product = await CartProducts.find();
    } catch(err){
        console.error(err);
    }
    if(!product){
        return res.status(404).json({message:"Prodcuts Not Found"});
    }
    return res.status(200).json({product});
}

const addcartProduct = async (req, res, next) => {
    const{name, brand, category, price, image} = req.body;
    let product;
    try{
        product = new CartProducts({
            name, brand, category, price, image
        })
        await product.save();
    } catch(err){
        console.log(err);
    }
    if(!product){
        return res.status(500).json({message:"Product Not Added"});
    }
    return res.status(201).json({product});
}


exports.addcartProduct = addcartProduct;
exports.getAllProduct= getAllProduct;