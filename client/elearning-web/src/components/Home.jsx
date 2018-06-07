import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Modal,bsStyle } from 'react-bootstrap';
import { Player } from 'video-react';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCircle as fasCircle, faPhone, faPhoneSquare, faNewspaper, faPlayCircle } from '@fortawesome/fontawesome-free-solid'
import { faCircle as farCircle, faHandPointRight } from '@fortawesome/fontawesome-free-regular'
import { faFacebook, faGooglePlus, faTwitter, } from '@fortawesome/fontawesome-free-brands'
import './css/video-react.css';
import './css/Home.css';

export default class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false           
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        const videoStyle = {
            width: '70px',
            height: '70px',
            position: 'absolute',
            color: '#fff'
        }
        
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome to e-learning</h2>
                    <p> Improve your japanese.Learn yourself using videos,tutorials & online exam; </p>
                    <Link to="/about">
                        <Button bsStyle="primary"> About </Button>
                    </Link>
                </Jumbotron> 
                <Row className="show-grid text-center">
                    <h2>Video tutorials</h2>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <div className="VideoContainer">
                            <FontAwesomeIcon icon={faPlayCircle} style={videoStyle} onClick={this.handleShow} />
                            <Image src="assets/poster-lesson1.jpg" className="profile-pic" onClick={this.handleShow} />

                            <h4>Lesson 01</h4>
                            <Modal bsSize="large" aria-labelledby="contained-modal-title-lg" show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Lesson 01</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Player autoPlay={true}
                                        playsInline
                                        poster="assets/poster-lesson1.jpg"
                                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                    />

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.handleClose}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>

                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <div className="VideoContainer">
                            <FontAwesomeIcon icon={faPlayCircle} style={videoStyle} onClick={this.handleShow} />
                            <Image src="assets/poster-lesson2.jpg" className="profile-pic" onClick={this.handleShow} />

                            <h4>Lesson 02</h4>
                            <Modal bsSize="large" aria-labelledby="contained-modal-title-lg" show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Lesson 02</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Player autoPlay={true}
                                        playsInline
                                        poster="assets/poster-lesson2.jpg"
                                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                    />

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.handleClose}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>

                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <div className="VideoContainer">
                            <FontAwesomeIcon icon={faPlayCircle} style={videoStyle} onClick={this.handleShow} />
                            <Image src="assets/poster-lesson3.jpg" className="profile-pic" onClick={this.handleShow} />

                            <h4>Lesson 03</h4>
                            <Modal bsSize="large" aria-labelledby="contained-modal-title-lg" show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title> Lesson 03</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Player autoPlay={true}
                                        playsInline
                                        poster="assets/poster-lesson3.jpg"
                                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                    />

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.handleClose}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>

                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <div className="VideoContainer">
                            <FontAwesomeIcon icon={faPlayCircle} style={videoStyle} onClick={this.handleShow} />
                            <Image src="assets/poster-lesson1.jpg" className="profile-pic" onClick={this.handleShow} />

                            <h4>Lesson 04</h4>
                            <Modal bsSize="large" aria-labelledby="contained-modal-title-lg" show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Lesson 04</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Player autoPlay={true}
                                        playsInline
                                        poster="assets/poster-lesson1.jpg"
                                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                    />

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.handleClose}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>

                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <div className="VideoContainer">
                            <FontAwesomeIcon icon={faPlayCircle} style={videoStyle} onClick={this.handleShow} />
                            <Image src="assets/poster-lesson2.jpg" className="profile-pic" onClick={this.handleShow} />

                            <h4>Lesson 05</h4>
                            <Modal bsSize="large" aria-labelledby="contained-modal-title-lg" show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Lesson 05</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Player autoPlay={true}
                                        playsInline
                                        poster="assets/poster-lesson2.jpg"
                                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                    />

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.handleClose}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>

                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <div className="VideoContainer">
                            <FontAwesomeIcon icon={faPlayCircle} style={videoStyle} onClick={this.handleShow} />
                            <Image src="assets/poster-lesson3.jpg" className="profile-pic" onClick={this.handleShow} />

                            <h4>Lesson 06</h4>
                            <Modal bsSize="large" aria-labelledby="contained-modal-title-lg" show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title> Lesson 06</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Player autoPlay={true}
                                        playsInline
                                        poster="assets/poster-lesson3.jpg"
                                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                    />

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.handleClose}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>

                    </Col>

                </Row>

                <Row className="show-grid text-center">
                    <h2>Students comments</h2>

                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person2.jpg" circle className="profile-pic" />
                        <h3>Lucy</h3>
                        <p>Do an almighty painting with us. We'll put all the little clouds in and let them dance around and have fun.
                        It looks so good, I might as well not stop. A fan brush is a fantastic piece of equipment. Use it. Make friends with it.
                            In this world, everything can be happy. You can't make a mistake. Anything that happens you can learn to use - and make something beautiful out of it.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person3.jpg" circle className="profile-pic" />
                        <h3>Natalia</h3>
                        <p>Do an almighty painting with us. We'll put all the little clouds in and let them dance around and have fun.
                        It looks so good, I might as well not stop. A fan brush is a fantastic piece of equipment. Use it. Make friends with it.
                            In this world, everything can be happy. You can't make a mistake. Anything that happens you can learn to use - and make something beautiful out of it.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person1.jpg" circle className="profile-pic" />
                        <h3>Jimmy</h3>
                        <p>Do an almighty painting with us. We'll put all the little clouds in and let them dance around and have fun.
                        It looks so good, I might as well not stop. A fan brush is a fantastic piece of equipment. Use it. Make friends with it.
                            In this world, everything can be happy. You can't make a mistake. Anything that happens you can learn to use - and make something beautiful out of it.</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}