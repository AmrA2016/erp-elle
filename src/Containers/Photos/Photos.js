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
        hasContent: false,
        ownerImagePath:'https://i.imgur.com/9MckoMH.png',
        ownerName:'MATTHEW KANE',
        titleBody:'Lorem Ipsum is simply dummy text'
    };

    render() {
        return (
            <div id={this.state.id} className="photos container-fluid">
              {/* <Navbar/>
              <SideMenu/> */}
                <div className="row">
                    <SideImage image={this.state.image}>
                        <Tabs/>
                    </SideImage>
                    <SideContent side_title={this.state.side_title}
                                 hasTitle={this.state.hasTitle}
                                 hasContent={this.state.hasContent}
                                 ownerImagePath={this.state.ownerImagePath}
                                 ownerName={this.state.ownerName}
                                 titleBody={this.state.titleBody}
                    >
                      <div class="page-content col-s-12 col-sm-12 col-xs-12 col-md-2 no-padding-left no-padding-right">
                        <div className="white-overlay">

                        </div>
                      </div>
                    </SideContent>
                </div>
                    <Footer/>
            </div>
        );
    }
}

export default Photos;
