import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutTerms from './Containers/About-Terms/AboutTerms';
import Offers from './Containers/Offers/Offers';
import Videos from './Containers/Videos/videos.js';
import News from './Containers/News/News'


class App extends Component {
  render() {
    return (
        <div className="App">
            <News/>
        </div>
    );
  }
}

export default App;
