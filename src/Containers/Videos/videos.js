import React, {Component} from 'react';
import Slider from '../../Global-Components/Side-Content/Slider/slider.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/videos.css'
import Video_details from './Content/video-details.js'
import Tabs from './Tabs/tabs.js'

class Videos extends Component {
  state = {
    id: 1,
    image: "https://i.imgur.com/d0zthmZ.jpg",
    duration: "03:00",
    date: "21/03/18",
    description: "Lorem Ipsum is simply dummy",
    videos:[
      {
        id: 1,
        image: "https://i.imgur.com/d0zthmZ.jpg",
        duration: "03:00",
        date: "21/03/18",
        description: "Lorem Ipsum is simply dummy"
      },
      {
        id: 2,
        image: "https://i.imgur.com/d0zthmZ.jpg",
        duration: "03:00",
        date: "21/03/18",
        description: "Lorem Ipsum is simply dummy"
      },
      {
        id: 3,
        image: "https://i.imgur.com/d0zthmZ.jpg",
        duration: "03:00",
        date: "21/03/18",
        description: "Lorem Ipsum is simply dummy"
      },
      {
        id: 4,
        image: "https://i.imgur.com/d0zthmZ.jpg",
        duration: "03:00",
        date: "21/03/18",
        description: "Lorem Ipsum is simply dummy"
      }
    ]
  }
 //  componentDidMount() {
 //    $('.owl-prev').on('click', function(event) {
 //          $('.owl-carousel').trigger('to.owl.carousel', [0, 0, true])
 //          var currentItem = $(".video-slider .active").index();
 //          if (currentItem == 0) {
 //            $('.owl-prev').css('display', 'none');
 //          }
 //        });
 //        $('.owl-next').on('click', function(event) {
 //          var currentItem = $(".video-slider .active").index();
 //          var items = $(".video-slider .owl-item").length;
 //          items = (items / 2) - 2;
 //          if (currentItem != items) {
 //            $('.owl-prev').css('display', 'none');
 //          } else {
 //            $('.owl-prev').css('display', 'block');
 //          }
 //        });
 // }
  render() {
    return (<div className="container-fluid">
      <div id="multimedia-videos" className="row videos-page">
        <div className="page-content col-md-12 col-sm-12 col-xs-12" title="Multimedia">
          <Tabs/>
          <div class="video-preview col-md-6 col-sm-12 col-xs-12 col-md-push-6 no-padding-right">
           <Video_details duration={this.state.duration} date={this.state.date} description={this.state.description}/>
          <div className="col-md-9">
            <Slider items={this.state.videos} hasData={true}/>
          </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Videos;
