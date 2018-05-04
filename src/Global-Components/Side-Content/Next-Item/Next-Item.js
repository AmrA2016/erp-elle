import React from 'react';
import classes from './Next-Item.css';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
const NextItem = (props) => {
    let imgurl = props.img
    console.log(imgurl)
    return <Row>
        <Col  md={{ size: 7}} sm={{ size: 4 }} xs={{ size: 1,offset:4 }}>
            <Link exact to="/"  class="linkhome">
                <p class="back-btn">BACK TO HOME </p>
            </Link>
        </Col>
        <Col md={{ size: 2, offset: 2 }} sm={{ size: 3, offset: 2 }} xs={{ size: 3, offset: 1 }}>
            <a onClick={()=>props.changethecontent()} href="#" className="linkhome">
                <p  className="back-btn nexlink">Next </p>
            </a>

        </Col>
        <Col md={{ size: 2, offset: 2 }} sm={{ size: 2, offset: 1 }} xs={{ size: 3, offset: 2 }}>
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
        </Col>
    </Row>
};

export default NextItem;