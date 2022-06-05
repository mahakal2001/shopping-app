import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartProduct from "./cartproduct/CartProduct.jsx"
import "./cartproduct/cartproduct.css"


const URL = "http://localhost:5000/cartproducts";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data)
}


const Cart = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setProducts(data.product))
  }, []);


  return (
    <div>
      <div className="heading">
        <h1>Cart </h1>
      </div>
      <div className="callme">


        <div className="bhim">
          {products && products.map((product, i) => (
            <div className="bhimm" key={i}>
              <CartProduct product={product} key={i} />
            </div>
          ))}

          
        </div>
        <div className="cart-card">
            <h1>Total Amaout</h1>
            <h2>$00</h2>
            <button>CASH ON DELIVERU</button>
          </div>
      </div>



    </div>
  )
}


export default Cart;


