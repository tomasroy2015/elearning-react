import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './css/Footer.css';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCircle as fasCircle,faPhone,faPhoneSquare, faNewspaper } from '@fortawesome/fontawesome-free-solid'
import { faCircle as farCircle,faHandPointRight } from '@fortawesome/fontawesome-free-regular'
import {faFacebook,faGooglePlus,faTwitter,} from '@fortawesome/fontawesome-free-brands'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
					<div className="col-md-3 colorlib-widget">
						<h4>Quick Links</h4>
							<ul className="footer-links">
								<li><a href="#"><i className="icon-check"></i> About Us</a></li>
								<li><a href="#"><i className="icon-check"></i> Testimonials</a></li>
								<li><a href="#"><i className="icon-check"></i> Courses</a></li>
								<li><a href="#"><i className="icon-check"></i> Event</a></li>
								<li><a href="#"><i className="icon-check"></i> News</a></li>
								<li><a href="#"><i className="icon-check"></i> Contact</a></li>
							</ul>
					</div>
					<div className="col-md-3 colorlib-widget">
						<h4>All menus</h4>
							<ul className="footer-links">
							    <li><FontAwesomeIcon icon={faHandPointRight}/> <Link to="/about"> About Us</Link></li>
								<li><FontAwesomeIcon icon={faNewspaper}/><Link to="/news"> News</Link></li>
								<li><FontAwesomeIcon icon={faPhone}/><Link to="/contact"> Contact</Link></li>	
							</ul>
					</div>
					<div className="col-md-6 colorlib-widget">
						<h4>Find us on</h4>
							<Row>
                              <Col xs={1} sm={1}>
							    <FontAwesomeIcon icon={faFacebook} />
							  </Col>
							  <Col xs={1} sm={1}>
							    <FontAwesomeIcon icon={faGooglePlus}/>
							  </Col>
							  <Col xs={1} sm={1}>
							    <FontAwesomeIcon icon={faTwitter}/>
							  </Col> 
							</Row>
					</div>
                </div>
            </footer>
        )
    }
}