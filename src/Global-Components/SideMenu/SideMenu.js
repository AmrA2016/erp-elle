import React from 'react';
import './SideMenu.css';
import {Link} from 'react-router-dom';

const sideMenu = (props) => {
    return(
      <div className="right-menu text-center">
                <div className="menu">
                  <ul className="list-unstyled">
                    <li><Link to="/" exact>Home</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/offers">Offers</Link></li>
                    <li><Link to="/multimedia-videos">Multi Media</Link></li>
                    <li><Link to="/terms-conditions">Terms &amp; Conditions</Link></li>
                    <li><Link to="/about-us">About us</Link></li>
                    <li><Link to="/contact-us">Contact us</Link></li>
                  </ul>
                </div>
      </div>
    )
};

export default sideMenu;
