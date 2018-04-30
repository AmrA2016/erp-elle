import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutTerms from './Containers/About-Terms/AboutTerms'

class App extends Component {
  render() {
    return (
        <div className="App">
            <AboutTerms/>
        </div>
    );
  }
}

export default App;
