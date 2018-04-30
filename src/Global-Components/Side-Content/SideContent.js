import React from 'react';
import Paragraph from './Content/Paragraph/Paragraph';
import Title from './Content/Title/Title'
import './SideContent.css';

const sideContent = (props) => {
  return (
    <div className="col-md-6 content-container">
        <Title
            ownerImagePath={props.ownerImagePath}
            ownerName={props.ownerName}
            titleBody={props.titleBody}
        />
        <Paragraph content={props.content}/>
    </div>
  );
};

export default sideContent;