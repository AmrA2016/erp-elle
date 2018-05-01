import React from 'react';

import './Header.css'
const header = (props) => {    
    return (
        <div className="title">
            {props.header}
        </div>          
    );
  };
  
  export default header;