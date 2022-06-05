import React from 'react';
import { NavLink } from "react-router-dom";
import { Button } from '@mui/material';
import "./welcome.css";

const Welcome = () => {
  return (
    <div>
      <NavLink to="/products">
      <div className="imageSlider"></div>
      </NavLink>
      <div className="wc">
        <h1>Welcome to Trademo Store 🎊</h1>
        <h1>Here you can Buy Products </h1><br /><br />
        <NavLink to="/products" style={{ color: "white" }} >
          <Button variant="outlined">Click here to Buy Products here</Button>
        </NavLink><br /> <br />
        <NavLink to="/cart" style={{ mt: 2, color: "white" }} >
          <Button variant="outlined">Click here to Check Cart History</Button>
        </NavLink>
      </div>
    </div>
  )
}

export default Welcome;