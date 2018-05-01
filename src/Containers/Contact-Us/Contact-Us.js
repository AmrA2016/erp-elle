import React, { Component } from 'react';
import SideImage from '../../Global-Components/Side-Image/SideImage';
import SideContent from '../../Global-Components/Side-Content/SideContent'
import Header from '../../Global-Components/Side-Content/Header/Header'

import './Contact-Us.css'
import '../About-Terms/about-terms.css'
import '../../Global-Components/Side-Content/SideContent.css';


class Contact_Us extends Component {
    state = {
        id: 'contact-us',
        image: 'https://i.imgur.com/USjUi0h.jpg',
        page_title: ['Contact',<br/>, 'US'],
        side_title: 'CONTACT' ,
        
    };
    render() {
        return (
            <div id={this.state.id} className="about-terms row">        
                <SideImage image={this.state.image}/>
                <div className="col-md-6 content-container" title={this.side_title}>
                    <Header title={this.state.page_title}/>
                        
                    <div className="content">
                        <form action="#">
                            <div className="contact-us-title">NAME</div>
                            <br/>
                            <div className="col-md-offset-2 col-md-10">
                                <input className="contact-us-input" type="text" name="name" placeholder="WHO ARE YOUR?"/>    
                            </div>
                            
                            <br/><br/><br/>

                            <div className="contact-us-title">YOUR EMAIL</div>
                            <br/>
                            <div className="col-md-offset-2 col-md-10">
                                <input className="contact-us-input" type="email" name="email" placeholder="YOUR EMAIL?"/>    
                            </div>
                            
                            <br/><br/><br/>
                            
                            <div className="contact-us-title">MESSAGE</div>
                            <br/>

                            <div className="col-md-offset-2 col-md-10">
                                <input className="contact-us-input" type="text" name="message" placeholder="INSERT YOUR REQUEST HERE?"/>    
                            </div>
                        
                            <br/><br/><br/><br/>
                        
                            <div className="col-xs-6">
                                ACCEPT PRIVACY
                            </div>            
                            <div className="col-md-offset-2 col-md-4 col-xs-6" >
                                <button className="save-button" type="submit">SEND</button>
                                <span className="save-span"></span>
                            </div>

                            
                        </form>
                    </div>
                </div>
                    
            </div>
        );
    }
}

export default Contact_Us;

