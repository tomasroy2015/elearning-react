import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Navbar,Nav,NavItem, NavbarBrand } from 'react-bootstrap';
import './css/CustomNavbar.css'
export default class Customnavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">e-learning</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                       <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                           Home
                       </NavItem>
                       <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                           About
                       </NavItem>
                       <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
                           News
                       </NavItem>
                       <NavItem eventKey={3} componentClass={Link} href="/login" to="/login">
                           Register/Login
                       </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}