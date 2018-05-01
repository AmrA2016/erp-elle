import React from 'react';
import './paragraph.css';

const paragraph = (props) => {
    return(
        <div className="content scroll">
            <p className='news-content'>
                {props.content}
            </p>
            {props.children}
        </div>
    )
};

export default paragraph;