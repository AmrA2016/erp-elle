import React from 'react';
import classes from './TitleBody.css';
const titleBody = (props) => {
    <div>
        <h1 className={classes["page-title-body"]}>{props.titleBody}</h1>
    </div>
};

export default titleBody;