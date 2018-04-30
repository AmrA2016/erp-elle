import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import './css/slider.css'


const slider = () => {
  return (<OwlCarousel className="owl-carousel" loop={false} margin={10} nav={true} items={2} navText={['Next','Previous']}>
    <div className="item owl-item">
      <div className="frame">
        <div className="video-slider-overlay">
          <img src={require('./img/photo-1512053495053-20f2b036d1d4.jpg')}/>
        </div>
        <p>
          Lorem Ipsum is simply
          <span>03:00</span>
          dummy
        </p>
        <span>
          20/03/18</span>
      </div>
    </div>
    <div className="item owl-item">
      <div className="frame">
        <div className="video-slider-overlay">
          <img src={require('./img/photo-1512053495053-20f2b036d1d4.jpg')}/>
        </div>
        <p>
          Lorem Ipsum is simply
          <span>03:00</span>
          dummy
        </p>
        <span>
          20/03/18</span>
      </div>
    </div>
    <div className="item owl-item">
      <div className="frame">
        <div className="video-slider-overlay">
          <img src={require('./img/photo-1512053495053-20f2b036d1d4.jpg')}/>
        </div>
        <p>
          Lorem Ipsum is simply
          <span>03:00</span>
          dummy
        </p>
        <span>
          20/03/18</span>
      </div>
    </div>
    <div className="item owl-item">
      <div className="frame">
        <div className="video-slider-overlay">
          <img src={require('./img/photo-1512053495053-20f2b036d1d4.jpg')}/>
        </div>
        <p>
          Lorem Ipsum is simply
          <span>03:00</span>
          dummy
        </p>
        <span>
          20/03/18</span>
      </div>
    </div>
    <div className="item owl-item">
      <div className="frame">
        <div className="video-slider-overlay">
          <img src={require('./img/photo-1512053495053-20f2b036d1d4.jpg')}/>
        </div>
        <p>
          Lorem Ipsum is simply
          <span>03:00</span>
          dummy
        </p>
        <span>
          20/03/18</span>
      </div>
    </div>
    <div className="item owl-item">
      <div className="frame">
        <div className="video-slider-overlay">
          <img src={require('./img/photo-1512053495053-20f2b036d1d4.jpg')}/>
        </div>
        <p>
          Lorem Ipsum is simply
          <span>03:00</span>
          dummy
        </p>
        <span>
          20/03/18</span>
      </div>
    </div>
    <div className="item owl-item">
      <div className="frame">
        <div className="video-slider-overlay">
          <img src={require('./img/photo-1512053495053-20f2b036d1d4.jpg')}/>
        </div>
        <p>
          Lorem Ipsum is simply
          <span>03:00</span>
          dummy
        </p>
        <span>
          20/03/18</span>
      </div>
    </div>
  </OwlCarousel>);
};
export default slider;
