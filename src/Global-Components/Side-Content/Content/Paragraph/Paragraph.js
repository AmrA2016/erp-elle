import React from 'react';
import './paragraph.css';

const paragraph = (props) => {
    return(
        <div className="content scroll">
            <p>
                {props.content}
            </p>

        </div>
    )
};

export default paragraph;