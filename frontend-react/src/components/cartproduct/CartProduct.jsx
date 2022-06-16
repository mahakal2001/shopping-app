import React from 'react';
import './cartproduct.css';



const CartProduct = (props) => {
    const { name,price,image } = props.product;
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