import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import SideImage from '../../Global-Components/Side-Image/SideImage';
import SideContent from '../../Global-Components/Side-Content/SideContent';
import Slider from "../../Global-Components/Side-Content/Slider/slider";
import Navbar from '../../Global-Components/Navbar/Navbar';
import SideMenu from '../../Global-Components/SideMenu/SideMenu';
import Footer from '../../Global-Components/Footer/Footer';
import './News.css';

class News extends Component {
    state = {
        id: 'news',
        hasTitle:true,
        hasContent:true,
        side_title:'News',
        left_image: 'https://i.imgur.com/ECx83q5.png',
        ownerImagePath:'https://i.imgur.com/9MckoMH.png',
        ownerName:'MATTHEW KANE',
        titleBody:'Lorem Ipsum is simply dummy text',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesettin Lorem Ipsum is simply dummy text of the printing and typesettin Lorem Ipsum is simply dummy text of the printing and typesettin',
        showMore:'KNOW MORE',
        line_image_link:'https://i.imgur.com/h2oyuwZ.png',
        images:[
            {
                id:1,
                image:'https://i.imgur.com/OfpH4fk.png',
                left_image: 'https://i.imgur.com/USjUi0h.jpg',
                ownerImagePath:'https://i.imgur.com/OfpH4fk.png',
                ownerName:'Mohamed Osman',
                titleBody:'News Gdeda kda w 7lwa',
                content: 'dool shwyet kalam 3shan agrb l news lma ados 3laha fe L slider hat8yr l content wla A , f insha2alah t8yr l content w mt7rgna4 odam L nas 3shan shklna myb2a4 w7eesh , zh2t mn kotr om l kalam L habal dh',


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
    onClickHandler = (e) =>{
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

        e.preventDefault();



    };

    showedContent = this.state.content.substring(0,150);

    changeContentHandler=(id)=>{
        const images = [...this.state.images];
        const imageIndex = images.findIndex(function (image) {
            return image['id']===id;
        });
        const image = images[imageIndex];
        this.showedContent = image.content.substring(0,150);
        this.setState({
            left_image: image['left_image'],
            ownerImagePath:image.ownerImagePath,
            ownerName:image.ownerName,
            titleBody:image.titleBody,
            content: image.content

        });


    };

    render() {
        return (
            <div id={this.state.id+"-container"}>
                <div className="container-fluid">
                    <Navbar/>
                    <SideMenu/>
                    <div className='row' id={this.state.id}>
                        <div className='col-md-12'>
                            <SideImage image={this.state.left_image}/>
                            <SideContent content={this.showedContent}
                                         ownerImagePath={this.state.ownerImagePath}
                                         ownerName={this.state.ownerName}
                                         titleBody={this.state.titleBody}
                                         hasTitle={this.state.hasTitle}
                                         hasContent={this.state.hasContent}
                                         side_title={this.state.side_title}
                            >
                                <div className="pull-right know-more-container">
                                    <a className="know-more" href="#" onClick={this.onClickHandler}>{this.state.showMore}</a>
                                    <img src={this.state.line_image_link}/>
                                </div>
                                <div className="clearfix"></div>
                                <Slider
                                    items={this.state.images}
                                    line_image_link={this.state.line_image_link}
                                    change_content = {this.changeContentHandler}
                                />
                            </SideContent>


                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default News;