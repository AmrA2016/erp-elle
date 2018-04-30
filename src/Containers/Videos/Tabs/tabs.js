import React, {Component} from 'react';

const tabs = ()=>{
  return(<div class="tabs col-md-6 col-md-push-5 col-sm-push-4 col-xs-push-4 col-sm-6 col-xs-6 no-padding-left">
          <div class="col-md-2 col-xs-3 col-sm-3">
            <a class="videos active"><h6>VIDEOS</h6></a>
          </div>
          <div class="col-md-3 col-xs-3 col-sm-3 col-sm-push-3 col-xs-push-3 col-md-push-1">
            <a class="photos"><h6>PHOTOS</h6></a>
          </div>
        </div>);
}
export default tabs;
