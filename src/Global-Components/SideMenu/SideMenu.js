import React from 'react';
import './SideMenu.css';

const sideMenu = (props) => {
    return(
      <div className="right-menu text-center">
                <div className="menu">
                  <ul className="list-unstyled">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Offers</a></li>
                    <li><a href="#">How to use</a></li>
                    <li><a href="#">Terms &amp; Coniditions</a></li>
                    <li><a href="#">Multi Media</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                </div>
      </div>
    )
};

export default sideMenu;
