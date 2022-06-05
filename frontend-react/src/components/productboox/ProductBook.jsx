import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import './productboox.css';
import { Button } from '@mui/material';


const ProductBook = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:5000/products/${id}`)
                .then((res) => res.data).then(data => setInputs(data.product))
        }
        fetchHandler()
    }, [id]);

    const { name, category, brand, price, image } = inputs;


    const sendRequest = async () => {
        await axios.post(`http://localhost:5000/cartproducts`, {
            name: String(name),
            category: String(category),
            brand: String(brand),
            price: Number(price),
            image: String(image),
        }).then(res => res.data);
    }
    const handleSend = () => {
        alert("Product Successfully Booked")
        sendRequest().then(() => history("/cart"))
    }

    return (
        <div className="topp">
            <div>
                <div className="cardd">
                    <img alt="img" src={image} />
                </div>
            </div>
            <div className="card2">
                <div>
                    <h1><b>Product Name :</b>  {name} </h1>
                    
                    <h2>Category : <b>{category}</b> </h2>
                    <h2>Brand : <b>{brand}</b> </h2>
                    <h3>Price : <b>Rs.{price}</b></h3>
                    <div className='btn-product'>
                        <Button onClick={() => handleSend()} variant="outlined" >Conform here to Cart..</Button>
                        <Button className='orderBtn' onClick={() => handleSend()} variant="outlined" >Conform here to Order..</Button>

                    </div>
                </div>


            </div>
        </div>
    )
}



export default ProductBook;