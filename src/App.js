import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutTerms from './Containers/About-Terms/AboutTerms';
import Offers from './Containers/Offers/Offers';
import Videos from './Containers/Videos/videos.js';
import Home from './Containers/Home/Home.js'
import Photos from "./Containers/Photos/Photos";
import Contact_Us from './Containers/Contact-Us/Contact-Us'
import News from "./Containers/News/News";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (

            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/news' component={News}/>
                        <Route path='/offers' component={Offers}/>
                        <Route path='/multimedia-videos/:id' component={Videos}/>
                        <Route path='/multimedia-videos/' component={Videos}/>
                        <Route path='/multimedia-photos' component={Photos}/>
                        <Route path='/terms-conditions' component={AboutTerms}/>
                        <Route path='/about-us' component={AboutTerms}/>
                        <Route path='/contact-us' component={Contact_Us}/>
                    </Switch>
                </div>
            </BrowserRouter>

    );
  }
}

export default App;
