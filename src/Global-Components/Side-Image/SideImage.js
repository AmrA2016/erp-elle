import React from 'react';
import './SideImage.css';

const sideImage = (props) => {
    let style ={
      backgroundImage : `url(${props.image})`
    };
    return(
        <div className="col-md-6 image-preview image-container" style={style}>
            <div className="overlay">

            </div>
            {props.children}
        </div>
    )
};

export default sideImage;