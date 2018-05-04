import React, { Component } from 'react';
import SideImage from '../../Global-Components/Side-Image/SideImage';
import SideContent from '../../Global-Components/Side-Content/SideContent'
import './offers.css';
import NextItem from '../../Global-Components/Side-Content/Next-Item/Next-Item'
import Footer from '../../Global-Components/Footer/Footer';
import Navbar from '../../Global-Components/Navbar/Navbar';
import SideMenu from '../../Global-Components/SideMenu/SideMenu';
import Title from '../../Global-Components/Side-Content/Content/Title/TitleHeader/TitleHeader';
class Offers extends Component {
  state = {
        id: 'Offers',
        image: 'https://i.imgur.com/USjUi0h.jpg',
        page_title: 'GET 10% OF THIS PRODUCT',
        side_title: 'Offers',
        hasTitle: true,
        titleBody:'Just a testing title',
        nextofferid:2,
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
      changehandler=()=>{
        this.setState({
        id: 'Offers',
        nextofferid:1,
        image: 'https://i.imgur.com/ECx83q5.png',
        page_title: 'GET 5% OF THIS PRODUCT',
         side_title: 'Offers',
        hasTitle: true,
        titleBody:'Don\'t give it a shit part 2',
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
          })
      }

    render() {
        return (
            <div id={this.state.id} className="offers container-fluid">
                <Navbar/>
                <SideMenu/>
                <div className="row">
                    <SideImage image={this.state.image}/>
                    
                  
                    <SideContent  page_title={this.state.page_title}
                                 side_title={this.state.side_title}
                                 content={this.state.content}
                                 header= {this.state.page_title}
                                 hasTitle={this.state.hasTitle}
                                titleBody={this.state.titleBody}
                             
                                 hasContent={this.state.hasContent}>
                                  <h6 class="s col-md-5 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 col-xs-offset-0"><span><a class="linkget" href="#">GET IT NOW</a></span></h6>
                                 <NextItem changethecontent= {this.changehandler}img={this.state.image} /></SideContent>
                             
                    
                </div>
                 <Footer/>
            </div>
        );
    }
}

export default Offers;
