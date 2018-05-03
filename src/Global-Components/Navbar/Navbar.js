import React from 'react';

import 'font-awesome/css/font-awesome.min.css'

import './Navbar.css';
import '../../Custom-Scripts/toggleMenu'

const navbar = (props) => {
    return(
      <div className="header">
        <div className="row">
          <div className="col-md-12">
              <div className="col-md-10 col-sm-8 col-xs-8">
                <div className="logo">
                    <span className="logo-left">LE</span><span className="logo-right">LE</span>
                </div>
              </div>
              <div className="col-md-2">
                <div className="menu-icon pull-right">
                  <span className="glyphicon glyphicon-menu-hamburger triggreMenu" aria-hidden="true"></span>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
};

export default navbar;
