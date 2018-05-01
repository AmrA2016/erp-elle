import React from 'react';
import classes from './TitleHeader.css';

const titleHeader = (props) => {
    return(
        <div>
            <img style={{marginRight:'5px'}} src={props.ownerImagePath}/>
            <strong>{props.ownerName}</strong>
        </div>
    );
};

export default titleHeader;