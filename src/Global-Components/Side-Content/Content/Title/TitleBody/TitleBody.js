import React from 'react';
import classes from './TitleBody.css';
const titleBody = (props) => {
    return(
        <div>
            <h1 className='page-title-body'>{props.titleBody}</h1>
        </div>
    );
};

export default titleBody;