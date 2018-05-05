import React, {Component} from 'react';
import './tabs.css'
import {Link} from 'react-router-dom';

const tabs = ()=>{
  return(<div class="tabs col-md-6 col-md-push-2 col-sm-push-3 col-sm-8 col-xs-push-1  col-xs-10 no-padding-left">
          <div class="col-md-2 col-xs-5 col-sm-3">
            <Link to="/multimedia-videos" class="videos active"><h6>VIDEOS</h6></Link>
          </div>
          <div class="col-md-2 col-xs-5 col-sm-3 col-sm-push-3 col-xs-push-3 col-md-push-1">
            <Link to="/multimedia-photos" class="photos"><h6>PHOTOS</h6></Link>
          </div>
        </div>);
}
export default tabs;
