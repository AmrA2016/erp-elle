import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutTerms from './Containers/About-Terms/AboutTerms';
import Offers from './Containers/Offers/Offers';
import Videos from './Containers/Videos/videos.js';
import Home from './Containers/Home/Home'
import Photos from "./Containers/Photos/Photos";


class App extends Component {
  render() {
    return (
        <div className="App">
            <Photos/>
        </div>
    );
  }
}

export default App;
