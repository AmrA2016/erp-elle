import React from 'react';
import Paragraph from './Content/Paragraph/Paragraph';
import Title from './Content/Title/Title'
import './SideContent.css';

const sideContent = (props) => {
    let title = null;
    if(props.hasTitle)
    {
        title = (
            <Title
                ownerImagePath={props.ownerImagePath}
                ownerName={props.ownerName}
                titleBody={props.titleBody}
            />
        );
    }
  return (
    <div className="col-md-6 content-container" title={props.side_title}>
        {title}
        <Paragraph content={props.content} />
        {props.children}
    </div>
  );
};

export default sideContent;