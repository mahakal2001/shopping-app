import React from 'react';
import { Button } from "@mui/material";
import './product.css';
import { Link } from 'react-router-dom';


const Doctor = (props) => {
  const { _id, name, price, image } = props.product;
  return (
    <div className="cardss ">
      <img src={image} />
      <h2 className='name'>Product Name : {name}</h2>
      <h2 className='name'>Price : <b>Rs.{price}</b></h2>
      <div className="btnnn">
        <Button className='btn' product={props} variant="contained" sx={{ mt: 0, height: "30px" }} LinkComponent={Link} to={`./${_id}`} >Views</Button> <br /> <br />
        <Button className='btn2' product={props} variant="contained" sx={{ mt: 0, height: "30px" }} LinkComponent={Link} to={`./${_id}`} >Cart</Button> <br /> <br />

      </div>

    </div>
  )
}

export default Doctor;