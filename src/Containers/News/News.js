import React, { Component } from 'react';
import SideImage from '../../Global-Components/Side-Image/SideImage';
import SideContent from '../../Global-Components/Side-Content/SideContent'
import './News.css';

class News extends Component {
    state = {
        id: 'news',
        image: 'https://i.imgur.com/yxEuZMv.png',
        ownerImagePath:'https://i.imgur.com/9MckoMH.png',
        ownerName:'MATTHEW KANE',
        titleBody:'Lorem Ipsum is simply dummy text',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesettin Lorem Ipsum is simply dummy text of the printing and typesettin Lorem Ipsum is simply dummy text of the printing and typesettin'
    };
    render() {
        return (
            <div id={this.state.id+"-container"} className="about-terms container-fluid">
                <div className="container-fluid">
                    <div className='row' id={this.state.id}>
                        <div className='col-md-12'>
                            <SideImage image={this.state.image}/>
                            <SideContent content={this.state.content}
                                         ownerImagePath={this.state.ownerImagePath}
                                         ownerName={this.state.ownerName}
                                         titleBody={this.state.titleBody}
                            />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default News;