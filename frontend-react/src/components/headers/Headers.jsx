import React from 'react';
import {NavLink} from "react-router-dom";
import {AppBar, Toolbar,Tabs, Tab} from '@mui/material';
import "./headers.css"

const Headers = () => {
    // const [value, setValue]= useState({});
  return (
    <div>
        <AppBar className='navbar'>
            <Toolbar className='navbar'>
                <NavLink to="/" >
                <a><Tab sx={{ml:"auto"}} textColor="white" label="Home"/></a>  
                </NavLink>
                <Tabs sx={{ml:"auto"}} textColor="white"  indicatorColor="secondary"  >
                    <Tab className='lol' LinkComponent={NavLink} to="/products" label="Products"/>
                    <Tab className='lol' LinkComponent={NavLink} to="/cart" label="Cart"/>
                    {/* <Button variant="contained" >Logout</Button> */}
                 </Tabs>
            </Toolbar> 
        </AppBar>
    </div>
  )
}

export default Headers;