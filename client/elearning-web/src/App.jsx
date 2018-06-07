import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer'
import Login from './components/Login'
import Registration from './components/Registration'
import { withAlert } from "react-alert";
class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar />
					<Route exact path="/" component={Home}/>
					<Route exact path="/about" component={About}/>
					<Route exact path="/news" component={News}/>
					<Route exact path="/login" component={Login}/>
					<Route exact path="/register" component={Registration}/>
                    <Footer/>
				</div>
			</Router>
		);
	}
}

export default withAlert(App);
