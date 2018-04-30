import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutTerms from './Containers/About-Terms/AboutTerms';
import Videos from './Containers/Videos/videos.js';

class App extends Component {
  render() {
    return (
        <div className="App">
            <AboutTerms/>
            <Videos />
        </div>
    );
  }
}

export default App;
