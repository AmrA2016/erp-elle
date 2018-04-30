import React from 'react';
import Paragraph from './Content/Paragraph/Paragraph';
import Title from './Content/Title/Title'
import './SideContent.css';

const sideContent = (props) => {
  return (
<<<<<<< HEAD
    <div className="col-md-6 content-container">
        <Title
            ownerImagePath={props.ownerImagePath}
            ownerName={props.ownerName}
            titleBody={props.titleBody}
        />
        <Paragraph content={props.content}/>
=======
    <div className="col-md-6 content-container" title={props.side_title}>
        <Paragraph content={props.content}>{props.children}</Paragraph>
>>>>>>> 85a717f6fd3455dc6caa76d9fbe3f0531ea37e30
    </div>
  );
};

export default sideContent;