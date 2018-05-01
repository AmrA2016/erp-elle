import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './home.css';

import Navbar from '../../Global-Components/Navbar/Navbar'
import SideMenu from '../../Global-Components/SideMenu/SideMenu'
import Footer from '../../Global-Components/Footer/Footer'

class Home extends Component {

  state = {
      id: 'home',
      word1: 'The Best ',
      word2:'Makeup',
      word3:' Beauty'
  };

  render() {
    return (
      <div className="container-fluid">
              <div className="row" id="home-page">
                  <div className="overLay">  </div>
                  <div className="content-container" >

                    <Navbar/>

                    <div className="body">
                      <div className="row">
                        <div className="col-md-11">
                          <div className="caption pull-right">
                            <h3>{this.state.word1}</h3>
                            <h3>{this.state.word2}</h3>
                            <h3> {this.state.word3}</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Footer/>
                    <SideMenu/>

                  </div>
              </div>
          </div>

    );
  }
}

    export default Home;
