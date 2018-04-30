import React from 'react';
import Paragraph from './Content/Paragraph/Paragraph';
import './SideContent.css';

const sideContent = (props) => {
  return (
    <div className="col-md-6 content-container" title="TERMS">
        <Paragraph/>
    </div>
  );
};

export default sideContent;