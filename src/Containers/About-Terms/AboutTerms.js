import React, { Component } from 'react';
import SideImage from '../../Global-Components/Side-Image/SideImage';
import SideContent from '../../Global-Components/Side-Content/SideContent'
import './about-terms.css';

class AboutTerms extends Component {
    render() {
        return (
            <div className="about-terms container-fluid">
                <div className="row">
                    <SideImage/>
                    <SideContent/>
                </div>
            </div>
        );
    }
}

export default AboutTerms;