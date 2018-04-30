import React from 'react';
import classes from './Next-Item.css';
import { Container, Row, Col } from 'reactstrap';
const NextItem = (props) => {
    let imgurl = props.img
    console.log(imgurl)
    return <Row>
        <div class="col-md-4 col-sm-4 col-xs-7">
            <a href="#" class="linkhome">
                <p class="back-btn">BACK TO HOME </p>
            </a>
        </div>
        <Col md={{ size: 2, offset: 1 }} sm={{ size: 3, offset: 2 }} xs={{ size: 3, offset: 1 }}>
            <a href="#" className="linkhome">
                <p className="back-btn">Next </p>
            </a>

        </Col>
        <Col md={{ size: 2, offset: 2 }} sm={{ size: 2, offset: 1 }} xs={{ size: 3, offset: 2 }}>
            <div className="next-img">
                <a href="#" className="linkhome">
                    <img 
                        src={props.img}
                        alt="Smiley Face"
                    />
                    {/*<img src={require('../../../imgs/nxtimg.jpg')} alt="Smiley face" height="88" width="150"/>*/}
                    {/*<img src={props.img} alt="Smiley face" height="88" width="150"/>*/}
                </a>
            </div>
        </Col>
    </Row>
};

export default NextItem;