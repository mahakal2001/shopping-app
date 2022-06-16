import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../product/Product'
import './products.css';
import Slider from '@mui/material/Slider';

import { AppBar, Typography, Toolbar, Tabs} from '@mui/material';


const URL = `http://localhost:5000/products`;

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data)
}

const Products = () => {

  const [trail, setTrail] = useState();
  const [products, setProducts] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    fetchHandler().then((data) => {
      setTrail(data.product)
      setProducts(data.product)
    })
  }, []);

  const filterItem = (cateItem, price) => {
    const updateMenu = trail.filter((curele) => {
      return (curele.category === cateItem && curele.price <= price);
    })
    setProducts(updateMenu);
  }

  const valuetext = (value) => {
    setPrice(value);
  }

  return (
    <div>
      
      <div className='appbar'>
        <AppBar className="bar" style={{ backgroundColor: 'white'}}>
          <Toolbar>
            <Tabs className="tb" textColor="inherit"  >
              {/* <Tab LinkComponent={NavLink} to="/products" label="Products"/>
                    <Tab LinkComponent={NavLink} to="/cart" label="Cart"/> */}

              <div className="butt">
                {/* onClick={() => setProducts(products) } */}
                <button variant="contained" onClick={() => setProducts(trail)} >All</button>
                <button variant="contained" onClick={() => filterItem('headphones', price)} >headphone</button>
                <button variant="contained" onClick={() => filterItem('mobiles', price)}  >mobile</button>
                <button variant="contained" onClick={() => filterItem('fashion', price)}  >fashion</button>
                <button variant="contained" onClick={() => filterItem('electronic', price)}  >electronic</button>
                <button variant="contained" onClick={() => filterItem('gift', price)}  >gift</button>
              </div>
            </Tabs>
          </Toolbar>
        </AppBar>
      </div>
      <div className='heading2'>
        <h1>Choose Prodcuts here</h1>
        <div className="mt2">
          <Typography variant="border" sx={{ fontSize: "24px", fontWeight: "bold" }} >Filter with Price </Typography>
          <Slider aria-label="Temperature"
            defaultValue={30000}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            marks
            min={10}
            max={30000} />

        </div>

      </div>
      <div className="cards">
        {products && products.map((product, i) => (
          <div className="li" key={i}>
            <Product product={product} key={i} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products;