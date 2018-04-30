import React from 'react';
import Paragraph from './Content/Paragraph/Paragraph';
import './SideContent.css';

const sideContent = (props) => {
  return (
    <div className="col-md-6 content-container" title={props.side_title}>
        <Paragraph content={props.content}/>
    </div>
  );
};

export default sideContent;