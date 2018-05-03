import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import './css/slider.css'



const slider = (props) => {
  let items = props.items;
  let owl_items = null;
  if(props.hasData)
  {
     owl_items = (
       <OwlCarousel className="owl-carousel" loop={true} margin={20} nav={true}
         items={2} navText={['Previous','Next']} responsiveClass={true}>
         {
           props.items.map(
             item => {
               return <link><div className="item owl-item">
                 <div className="frame">
                   <div className="video-slider-overlay">
                     <img src={item.image}/>
                   </div>
                   <p>
                     {item.description}<span>{item.duration}</span>
                   </p>
                   <span>{item.date}</span>
                 </div>
               </div>
             }
           )
         }
       </OwlCarousel>
     );
  }else{
    owl_items = (
      <OwlCarousel className="owl-carousel"  margin={20} nav={true}
        items={2} navText={['Previous','Next']} responsiveClass={true}>
        {
          props.items.map(
            item => {
              return <div className="item owl-item">
                <div className="frame">
                  <div className="video-slider-overlay">
                    <img src={item.image}/>
                  </div>
                </div>
              </div>
            }
          )
        }
      </OwlCarousel>
    );
  }
  return ([owl_items]);
};
export default slider;
