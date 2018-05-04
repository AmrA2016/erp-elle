import React from 'react';
import classes from './Next-Item.css';
import {Link} from 'react-router-dom';
const NextItem = (props) => {
    let imgurl = props.img
    console.log(imgurl)
    return (
        <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-6">
                <Link exact to="/"  class="linkhome">
                    <p class="back-btn backlink">BACK TO HOME </p>
                </Link>
            </div>
            <div className="col-md-2 col-md-offset-1 col-sm-2 col-sm-offset-2 col-xs-4 col-xs-offset-1">
                <a onClick={()=>props.changethecontent()} href="#" className="linknext">
                    <p  className="back-btn nexlink">Next </p>
                </a>
            </div>
            <div className="col-md-3 col-md-offset-1 col-sm-2 col-sm-offset-1 col-xs-8 col-xs-offset-2 next-img-container">
                <div className="next-img">
                    <a href="#" className="linkhome">
                        <img
                            src={props.img}
                            alt="Smiley Face"
                            height="80"
                            width="100"

                        />
                        {/*<img src={require('../../../imgs/nxtimg.jpg')} alt="Smiley face" height="88" width="150"/>*/}
                        {/*<img src={props.img} alt="Smiley face" height="88" width="150"/>*/}
                    </a>
                </div>
            </div>

        </div>
    )
};

export default NextItem;