import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import SideImage from '../../Global-Components/Side-Image/SideImage';
import SideContent from '../../Global-Components/Side-Content/SideContent';
import Slider from "../../Global-Components/Side-Content/Slider/slider";
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
        showMore:'KNOW MORE',
        line_image_link:'https://i.imgur.com/h2oyuwZ.png',
        images:[
            {
                id:1,
                image:'https://i.imgur.com/OfpH4fk.png'
            },
            {
                id:2,
                image:'https://i.imgur.com/OfpH4fk.png'
            },
            {
                id:3,
                image:'https://i.imgur.com/OfpH4fk.png'
            },
            {
                id:4,
                image:'https://i.imgur.com/OfpH4fk.png'
            }
        ]
    };

    showOrNot = true;
    onClickHandler = () =>{
        if(this.showOrNot){
            this.showedContent = this.state.content;
            this.showOrNot=false;
            this.setState({showMore:'KNOW LESS'});
        }

        else{
            this.showedContent = this.state.content.substring(0,150);
            this.showOrNot=true;
            this.setState({showMore:'KNOW MORE'});
        }



    };

    showedContent = this.state.content.substring(0,150);

    render() {
        return (
            <div id={this.state.id+"-container"}>
                <div className="container-fluid">
                    <div className='row' id={this.state.id}>
                        <div className='col-md-12'>
                            <SideImage image={this.state.image}/>
                            <SideContent content={this.showedContent}
                                         ownerImagePath={this.state.ownerImagePath}
                                         ownerName={this.state.ownerName}
                                         titleBody={this.state.titleBody}
                                         hasTitle={this.state.hasTitle}
                                         hasContent={this.state.hasContent}
                                         side_title={this.state.side_title}
                            >
                                <div className="pull-right know-more-container">
                                    <a className="know-more" href="#" onClick={()=>this.onClickHandler()}>{this.state.showMore}</a>
                                    <img src={this.state.line_image_link}/>
                                </div>
                                <div className="clearfix"></div>
                                <Slider items={this.state.images} line_image_link={this.state.line_image_link}/>
                            </SideContent>


                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default News;