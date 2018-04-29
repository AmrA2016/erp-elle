import React from 'react';
import classes from './Title.css';
import TitleBody from './TitleBody/TitleBody';
import TitleHeader from './TitleHeader/TitleHeader';

const title = (props) => {
    <div>
        <TitleHeader
            ownerImagePath={props.ownerImagePath}
            ownerName={props.ownerName}
        />

        <TitleBody titleBody={props.titleBody}/>
    </div>
};

export default title;