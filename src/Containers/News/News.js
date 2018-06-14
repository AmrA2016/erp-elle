import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import SideImage from '../../Global-Components/Side-Image/SideImage';
import SideContent from '../../Global-Components/Side-Content/SideContent';
import Slider from "../../Global-Components/Side-Content/Slider/slider";
import Navbar from '../../Global-Components/Navbar/Navbar';
import SideMenu from '../../Global-Components/SideMenu/SideMenu';
import Footer from '../../Global-Components/Footer/Footer';
import './News.css';
import axios from 'axios';

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
        news:[]
    };

    componentDidMount(){
        axios.get('http://localhost:8000/api/news').then(
            res => {
                this.setState({news:res.data});
            }
        )
    }

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
        axios.get('http://localhost:8000/api/news/' + id).then(
            res => {
               this.setState({
                   left_image: res.data.image,
                   ownerImagePath: res.data.author_picture,
                   ownerName: res.data.author_name,
                   titleBody: res.data.title,
                   content: res.data.content
               });

                this.showedContent = res.data.content.substring(0,150);
            }
        );

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
                                    items={this.state.news}
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