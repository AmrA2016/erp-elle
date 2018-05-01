import React from 'react';
import Paragraph from './Content/Paragraph/Paragraph';
import Title from './Content/Title/Title'
import Header from './Header/Header'
import './SideContent.css';

const sideContent = (props) => {
    let title = null;
    let content = null;
    let header = null;
    if(props.header){
        header = <Header header ={props.header} />
    }
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

    if(props.hasContent)
    {
        content = <Paragraph content={props.content} />;
    }
  return (
    <div className="col-md-6 content-container" title={props.side_title}>
        {header}
        {title}
        {content}
        {props.children}
    </div>
  );
};

export default sideContent;