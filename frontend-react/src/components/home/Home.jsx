import React from 'react';
import {Routes,Route} from "react-router-dom";
import Products from '../products/Products'
import Headers from '../headers/Headers'
import Cart from "../Cart";
import Welcome from "../welcome/Welcome";
import ProductBook from '../productboox/ProductBook';
import Footer from '../footer/Footer';
import Order from '../order/Order';

const Home = () => {
  return (
    <div>
        <header>
            <Headers />
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Welcome />} ></Route>
                <Route path="/products" element={<Products />} ></Route>
                <Route path="/cart" element={<Cart />} ></Route>
                <Route path="/products/:id" element={<ProductBook/>} ></Route>
                <Route path="/order/:id" element={<Order/>} ></Route>
                </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default Home