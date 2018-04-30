import React, { Component } from 'react';
import Slider from '../../Global-Components/Side-Content/Slider/slider.js';
import 'bootstrap/dist/css/bootstrap.min.css'

class Videos extends Component {
  render() {
    return (
      <div className="col-md-4">
          <Slider />
      </div>
    );
  }
}

export default Videos;
