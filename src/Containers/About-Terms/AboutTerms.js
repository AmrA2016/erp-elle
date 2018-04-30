import React, { Component } from 'react';
import SideImage from '../../Global-Components/Side-Image/SideImage';
import SideContent from '../../Global-Components/Side-Content/SideContent'
import './about-terms.css';

class AboutTerms extends Component {
    state = {
        id: 'terms-conditions',
        image: 'https://i.imgur.com/USjUi0h.jpg',
        page_title: 'Terms & Conditions',
        side_title: 'Terms',
        hasTitle: false,
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
    render() {
        return (
            <div id={this.state.id} className="about-terms container-fluid">
                <div className="row">
                    <SideImage image={this.state.image}/>
                    <SideContent page_title={this.state.page_title}
                                 side_title={this.state.side_title}
                                 content={this.state.content}
                                 hasTitle={this.state.hasTitle}
                    />
                </div>
            </div>
        );
    }
}

export default AboutTerms;