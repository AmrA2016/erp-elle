import React from 'react';
import classes from './TitleHeader.css';

const titleHeader = (props) => {
    <div>
        <img className={classes["owner-image"]} src={props.ownerImagePath}/>
        <strong>{props.ownerName}</strong>
    </div>
};

export default titleHeader;