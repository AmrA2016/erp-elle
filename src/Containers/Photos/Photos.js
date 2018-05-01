import React, { Component } from 'react';
import SideImage from '../../Global-Components/Side-Image/SideImage';
import SideContent from '../../Global-Components/Side-Content/SideContent';
import Navbar from '../../Global-Components/Navbar/Navbar';
import SideMenu from '../../Global-Components/SideMenu/SideMenu';
import Footer from '../../Global-Components/Footer/Footer';
import Tabs from '../Videos/Tabs/tabs';

import './Photos.css';

class Photos extends Component {
    state = {
        id: 'photos',
        image: 'https://i.imgur.com/USjUi0h.jpg',
        side_title: 'Photos',
        hasTitle: true,
        ownerImagePath:'https://i.imgur.com/9MckoMH.png',
        ownerName:'MATTHEW KANE',
        titleBody:'Lorem Ipsum is simply dummy text',
        content: 'Dummy data'
    };

    render() {
        return (
            <div id={this.state.id} className="photos container-fluid">
                <div className="row">
                    <SideImage image={this.state.image}>
                        <Tabs/>
                    </SideImage>
                    <SideContent side_title={this.state.side_title}
                                 content={this.state.content}
                                 hasTitle={this.state.hasTitle}
                                 ownerImagePath={this.state.ownerImagePath}
                                 ownerName={this.state.ownerName}
                                 titleBody={this.state.titleBody}
                    />
                </div>
            </div>
        );
    }
}

export default Photos;