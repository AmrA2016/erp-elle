import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import './css/owl.theme.default.min.css'
import './css/slider.css';
import {Link} from 'react-router-dom';




const slider = (props) => {
  let items = props.items;
  let owl_items = null;
  const line_image_link = `<img src=${props.line_image_link}/>`;
  if(props.hasData)
  {
     owl_items = (
       <OwlCarousel className="owl-carousel" loop={true} margin={20} nav={true}
         items={2} navText={['Previous','Next']} responsiveClass={true}>
         {
           props.items.map(
             item => {
<<<<<<< HEAD
               return <link to={"/multimedia/"+item.id}><div className="item owl-item">
=======
               return <Link to={"/videos/" + item.id}><div className="item owl-item">
>>>>>>> 5cf7f09bd5f7ca20e3bfbf1002f7091ca09ee91c
                 <div className="frame">
                   <div className="video-slider-overlay">
                     <img src={item.image}/>
                   </div>
                   <p>
                     {item.description}<span>{item.duration}</span>
                   </p>
                   <span>{item.date}</span>
                 </div>
<<<<<<< HEAD
               </div></link>
=======
               </div>
               </Link>
>>>>>>> 5cf7f09bd5f7ca20e3bfbf1002f7091ca09ee91c
             }
           )
         };
       </OwlCarousel>
     );
  }else{
    owl_items = (
<<<<<<< HEAD
=======

>>>>>>> 5cf7f09bd5f7ca20e3bfbf1002f7091ca09ee91c
      <OwlCarousel className="owl-carousel" loop={false} margin={20} nav={true}
        items={2} navText={[`Previous`,`${line_image_link} &nbsp; &nbsp;&nbsp; Next`]} responsiveClass={true}>
        {
          props.items.map(
            item => {
              return <a onClick={()=>props.change_content(item.id)}>
              <div className="item owl-item">
                <div className="frame">
                  <div className="video-slider-overlay">
                    <img src={item.image}/>
                  </div>
                </div>
                </div>
              </a>
            }
          )
        }
      </OwlCarousel>
    );
  }
  return ([owl_items]);
};
export default slider;
