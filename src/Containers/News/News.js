import React, { Component } from 'react';
import SideImage from '../../Global-Components/Side-Image/SideImage';
import SideContent from '../../Global-Components/Side-Content/SideContent'
import './News.css';

class News extends Component {
    state = {
        id: 'news',
        hasTitle:true,
        hasContent:true,
        side_title:'News',
        image: 'https://i.imgur.com/yxEuZMv.png',
        ownerImagePath:'https://i.imgur.com/9MckoMH.png',
        ownerName:'MATTHEW KANE',
        titleBody:'Lorem Ipsum is simply dummy text',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesettin Lorem Ipsum is simply dummy text of the printing and typesettin Lorem Ipsum is simply dummy text of the printing and typesettin',
        line_image_link:'https://i.imgur.com/h2oyuwZ.png'
    };
    render() {
        return (
            <div id={this.state.id+"-container"}>
                <div className="container-fluid">
                    <div className='row' id={this.state.id}>
                        <div className='col-md-12'>
                            <SideImage image={this.state.image}/>
                            <SideContent content={this.state.content}
                                         ownerImagePath={this.state.ownerImagePath}
                                         ownerName={this.state.ownerName}
                                         titleBody={this.state.titleBody}
                                         hasTitle={this.state.hasTitle}
                                         hasContent={this.state.hasContent}
                                         side_title={this.state.side_title}
                            >
                                <div className="pull-right know-more-container">
                                    <a className="know-more" href="#">KNOW MORE</a>
                                    <img src={this.state.line_image_link}/>
                                </div>
                            </SideContent>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default News;