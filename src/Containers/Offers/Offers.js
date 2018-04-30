import React, { Component } from 'react';
import SideImage from '../../Global-Components/Side-Image/SideImage';
import SideContent from '../../Global-Components/Side-Content/SideContent'
import './offers.css';

class Offers extends Component {
    render() {
        return (
            <div className="offers container-fluid">
                <div className="row">
                    <SideImage/>
                    <SideContent/>
                </div>
            </div>
        );
    }
}

export default Offers;