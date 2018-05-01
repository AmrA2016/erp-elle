import React, {Component} from 'react';
import './css/video-details.css'

const Video_details = (props) =>{
  return (<div className="col-md-9">
    <span className="glyphicon glyphicon-play play-icon"></span>
          <span id="video-duration">{props.duration}</span>
          <p className="video-name">
            {props.description}
          </p>
          <span id="video-date">{props.date}</span>
  </div>);
}

export default Video_details;
