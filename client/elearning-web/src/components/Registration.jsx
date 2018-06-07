import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    Jumbotron, Grid, Row, Col, Image, Button,
    Modal, HelpBlock, Form, FormGroup,
    ControlLabel, FormControl, Checkbox
} from 'react-bootstrap';
import { withAlert } from "react-alert";
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import ApiConfig from './model/ApiConfig';

class Registraion extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            user: {
                name: '',
                email: '',
                password: '',
                address: ''
            }
        };
    }

    getValidationState(type) {
        switch (type) {
            case 'email':
                if (this.state.user.email === '') return 'warning';
                else return 'success';
                break;
            case 'name':
                if (this.state.user.name === '') return 'warning';
                else return 'success';
                break;
            case 'password':
                if (this.state.user.password === '') return 'warning';
                else return 'success';
                break;
            case 'address':
                if (this.state.user.address === '') return 'warning';
                else return 'success';
                break;

        }
       
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    componentDidMount() {

    }
    addUser = _ => {
        // console.log(this.state);
        const { user } = this.state;
        fetch(ApiConfig.api.url + ApiConfig.api.method.addUser + `?name=${user.name}&email=${user.email}&password=${user.password}&address=${user.address}`)
            .then(response => this.props.alert.success("Congratulations! You have been registered successfully."))
            .catch(err => this.props.alert.error("Error" + err))
    }
    render() {
        const { user } = this.state;
        return (
            <Grid>
                <Jumbotron>
                    <h2>Register to the e-learning</h2>
                    <p> Improve your japanese.Learn yourself using videos,tutorials & online exam; </p>
                    <p> you can take oneline exam by paid service.We have three level.The cerficate will be handed over after passing the exmination</p>
                </Jumbotron>
                <Row className="show-grid text-left">
                    {/* <Image src="assets/registration.jpg" className="header-image" style={{ height: '510px' }} /> */}
                    <Col smOffset={2} sm={6}>
                        <h2>New user registration</h2>
                    </Col>
                    <Col xs={12} sm={12}>
                        <Form horizontal>
                            <FormGroup controlId="name"
                                validationState={this.getValidationState('name')}>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Name
                                     </Col>
                                <Col sm={6}>
                                    <FormControl type="text" placeholder="Name"
                                        value={user.name}
                                        onChange={e => this.setState({ user: { ...user, name: e.target.value } })} />
                                    <FormControl.Feedback />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="email"
                                validationState={this.getValidationState('email')}>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                     </Col>
                                <Col sm={6}>
                                    <FormControl type="email" placeholder="Email"
                                        value={user.email}
                                        onChange={e => this.setState({ user: { ...user, email: e.target.value } })} />
                                    <FormControl.Feedback />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword"
                                       validationState={this.getValidationState('password')}>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Password
                                    </Col>
                                <Col sm={6}>
                                    <FormControl type="password" placeholder="Password"
                                        value={user.password}
                                        onChange={e => this.setState({ user: { ...user, password: e.target.value } })} />
                                    <FormControl.Feedback />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="address"
                                validationState={this.getValidationState('address')}>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Address
                                     </Col>
                                <Col sm={6}>
                                    <FormControl type="text" placeholder="Address"
                                        value={user.address}
                                        onChange={e => this.setState({ user: { ...user, address: e.target.value } })} />
                                    <FormControl.Feedback />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={1}>
                                    <Button bsStyle="info" type="button" onClick={this.addUser}>Register</Button>
                                </Col>

                            </FormGroup>

                        </Form>


                    </Col>
                </Row>
            </Grid>
        )
    }
}
export default withAlert(Registraion);