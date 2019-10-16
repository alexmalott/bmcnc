import React, {Component} from "react";
import {Container, Card, CardHeader, Form, Button, FormGroup, Label, Input, Row, Col} from "reactstrap";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.user.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <FormGroup bsSize="large">
                                    <Label for="user">User</Label>
                                    <Input
                                        autoFocus
                                        id="user"
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup bsSize="large">
                                    <Label for="password">Password</Label>
                                    <Input
                                        id="password"
                                        onChange={this.handleChange}
                                        type="password"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col>
                            <Button
                                block
                                bsSize="large"
                                disabled={!this.validateForm()}
                                type="submit"
                            >
                                Login
                            </Button>
                        </Col>
                    </Row>
                    </Form>
                </Container>
            </div>
        );
    }
}
