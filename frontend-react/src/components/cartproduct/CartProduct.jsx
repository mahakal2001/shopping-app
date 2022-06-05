import React from 'react';
import {Button} from "@mui/material";
import './cartproduct.css';
import {Link} from 'react-router-dom';


const CartProduct = (props) => {
    const { name, category,brand,price,image,desc } = props.product;
    return (
      <div className="card-product">
        
        <table>
          <tr>
            <th><img src={image} /></th>
            <th>Product Name : {name}</th>
            <th>Price : Rs.{price}</th>
            <th>
            <button type="reset" value="Reset">Cancel</button>  
            </th>
                      
            </tr>
        </table>
          
          
          
          
          
      </div>
    )
}

export default CartProduct;