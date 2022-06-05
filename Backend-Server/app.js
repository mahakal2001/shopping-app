const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./Routes/Product-Routes');
const router1 = require('./Routes/AddProduct-route')
var bodyParser = require('body-parser');



const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// mongodb+srv://bhimcharan:bhimbhakta@cluster0.229gv.mongodb.net/bhimcharan?retryWrites=true&w=majority

// mongoose.connect("mongodb+srv://swaraj1920:swaraj1920@cluster0.6yd9l.mongodb.net/ProductListing?retryWrites=true&w=majority")
mongoose.connect("mongodb+srv://bhimcharan:bhimbhakta@cluster0.229gv.mongodb.net/gofood?retryWrites=true&w=majority")
.then(()=>console.log("Connected to Database"))
.then(()=> {app.listen(5000)})
.catch((err)=> console.log(err))


app.use("/products", router);
app.use("/cartproducts", router1)