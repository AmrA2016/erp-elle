import React, { Component } from 'react';
import SideImage from '../../Global-Components/Side-Image/SideImage';
import SideContent from '../../Global-Components/Side-Content/SideContent';
import Navbar from '../../Global-Components/Navbar/Navbar';
import SideMenu from '../../Global-Components/SideMenu/SideMenu';
import Footer from '../../Global-Components/Footer/Footer';
import './about-terms.css';
import $ from 'jquery';

class AboutTerms extends Component {
    last_url = this.props.match.url;
    state = {
        id: 'terms-conditions',
        image: 'https://i.imgur.com/USjUi0h.jpg',
        page_title: ['Terms',<br/>,<span>Conditions</span>],
        side_title: 'Terms',
        hasTitle: false,
        hasContent: true,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui natus quas eaque culpa quod ipsa' +
        ' dolorum minima dignissimos quasi deleniti. Reprehenderit ab, commodi vel iste, modi a. Odio, dolores, qui?' +
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui natus quas eaque culpa quod ipsa dolorum minima ' +
        'dignissimos quasi deleniti. Reprehenderit ab, commodi vel iste, modi a. Odio, dolores, qui? Lorem ipsum dolor ' +
        'sit amet, consectetur adipisicing elit. Qui natus quas eaque culpa quod ipsa dolorum minima dignissimos quasi ' +
        'deleniti. Reprehenderit ab, commodi vel iste, modi a. Odio, dolores, qui? Lorem ipsum dolor sit amet,' +
        ' consectetur adipisicing elit. Qui natus quas eaque culpa quod ipsa dolorum minima dignissimos quasi deleniti.' +
        ' Reprehenderit ab, commodi vel iste, modi a. Odio, dolores, qui? Lorem ipsum dolor sit amet, consectetur ' +
        'adipisicing elit. Qui natus quas eaque culpa quod ipsa dolorum minima dignissimos quasi deleniti. ' +
        'Reprehenderit ab, commodi vel iste, modi a. Odio, dolores, qui? '
    };

     setAboutUsState = () => {
        this.setState({
            id: 'about-us',
            image: 'https://i.imgur.com/USjUi0h.jpg',
            page_title: 'About Us',
            side_title: 'About',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui natus quas eaque culpa quod ipsa' +
            ' dolorum minima dignissimos quasi deleniti. Reprehenderit ab, commodi vel iste, modi a. Odio, dolores, qui?' +
            ' Lorem ipsum dolor sit amet,  Odio, dolores, qui? Lorem ipsum dolor sit amet,' +
            ' consectetur adipisicing elit. Qui natus quas eaque culpa quod ipsa dolorum minima dignissimos quasi deleniti.' +
            ' Reprehenderit ab, commodi vel iste, modi a. Odio, dolores, qui? Lorem ipsum dolor sit amet, consectetur ' +
            'adipisicing elit. Qui natus quas eaque culpa quod ipsa dolorum minima dignissimos quasi deleniti. ' +
            'Reprehenderit ab, commodi vel iste, modi a. Odio, dolores, qui? '
        })
    };

    setTermsConditionsState = () => {
        this.setState({
            id: 'terms-conditions',
            image: 'https://i.imgur.com/USjUi0h.jpg',
            page_title: ['Terms',<br/>,<span>Conditions</span>],
            side_title: 'Terms',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui natus quas eaque culpa quod ipsa' +
            ' dolorum minima dignissimos quasi deleniti. Reprehenderit ab, commodi vel iste, modi a. Odio, dolores, qui?' +
            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui natus quas eaque culpa quod ipsa dolorum minima ' +
            'dignissimos quasi deleniti. Reprehenderit ab, commodi vel iste, modi a. Odio, dolores, qui? Lorem ipsum dolor ' +
            'sit amet, consectetur adipisicing elit. Qui natus quas eaque culpa quod ipsa dolorum minima dignissimos quasi ' +
            'deleniti. Reprehenderit ab, commodi vel iste, modi a. Odio, dolores, qui? Lorem ipsum dolor sit amet,' +
            ' consectetur adipisicing elit. Qui natus quas eaque culpa quod ipsa dolorum minima dignissimos quasi deleniti.' +
            ' Reprehenderit ab, commodi vel iste, modi a. Odio, dolores, qui? Lorem ipsum dolor sit amet, consectetur ' +
            'adipisicing elit. Qui natus quas eaque culpa quod ipsa dolorum minima dignissimos quasi deleniti. ' +
            'Reprehenderit ab, commodi vel iste, modi a. Odio, dolores, qui? '
        })

    };
    componentDidMount(){
        if(this.props.match.url == '/about-us')
        {
            this.setAboutUsState();
        }
    }

    componentDidUpdate(){
        console.log(this.last_url);
        if(this.props.match.url != this.last_url) {
            if (this.props.match.url == '/about-us') {
                this.setAboutUsState();
            }
            else {
                this.setTermsConditionsState();
            }
            this.last_url = this.props.match.url;
            $('.triggreMenu').click();
        }
    }



    render() {
        return (
            <div id={this.state.id} className="about-terms container-fluid">
                <Navbar/>
                <SideMenu/>
                <div className="row">
                    <SideImage image={this.state.image}/>
                    <SideContent header={this.state.page_title}
                                 side_title={this.state.side_title}
                                 content={this.state.content}
                                 hasTitle={this.state.hasTitle}
                                 hasContent={this.state.hasContent}
                    />
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AboutTerms;