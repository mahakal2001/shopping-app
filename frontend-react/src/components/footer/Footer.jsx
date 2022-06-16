import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="container">
      <div className="item">
        <img src="./images/bg.png" alt="" />
      </div>
      <div className="item">
        <div className="card">
          <h2 className="motto">
            OH YES, WE DID.THE GoShopping , WELL NEW BANDS OF SOPPING ITEMS.
          </h2>
        </div>
        <div className="card">
          <h1 className="title">FIND OUR GOSHOPPING SHOPS</h1>
          <p className="text">
            1654 Sold Leck Road #304.
            <br /> Kolkata, 70001
            <br /> (602) 867-1010
          </p>
          <p className="text">
            2356 K. New Toun Rd #235.
            <br /> Delhi, 90002
            <br /> (602) 867-1011
          </p>
          <p className="text">
            1614 E. Mahakal St #104.
            <br /> Mumbai, 85022
            <br /> (602) 867-1012
          </p>
          <p className="text">
            1614 W. Sold Tech St #125.
            <br /> Chennai, 78002
            <br /> (602) 867-1013
          </p>
        </div>
        <div className="card">
          <h1 className="title">WORKING HOURS</h1>
          <p className="text">
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className="text">
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer