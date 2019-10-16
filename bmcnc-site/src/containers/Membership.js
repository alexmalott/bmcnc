import React, {Component} from "react";
import {
    Container,
    Col,
    Row,
    FormGroup,
    Form,
    Label,
    Input,
    ButtonGroup,
    Button,
    Card,
    CardBody,
    CardHeader
} from 'reactstrap';

export default class Membership extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }

    render() {
        return (
            <div className="Membership">
                <Container>
                    <Card>
                        <CardHeader>
                            Membership
                        </CardHeader>
                        <CardBody>
                            <div className="d-flex flex-column">
                                <ButtonGroup>
                                    <Button active={!this.state.toggle} color="primary"
                                            onClick={() => this.setState({toggle: false})}>New</Button>
                                    <Button active={this.state.toggle} color="primary"
                                            onClick={() => this.setState({toggle: true})}>Renew</Button>
                                </ButtonGroup>
                            </div>
                            <br/>
                            <Form>
                                <Card>
                                    <CardHeader>
                                        First Member
                                    </CardHeader>
                                    <CardBody>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="memberOneFirst">First Name</Label>
                                                    <Input name="memberOneFirst" id="memberOneFirst"/>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="memberOneLast">Last Name</Label>
                                                    <Input name="memberOneLast" id="memberOneLast"/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <fieldset hidden={this.state.toggle}>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="emailOne">Email</Label>
                                                        <Input type="email" name="emailOne" id="emailOne"
                                                               placeholder="example@example.com"/>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="phoneOne">Telephone</Label>
                                                        <Input type="tel" name="phoneOne" id="phoneOne"
                                                               placeholder="555-555-5555"/>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </fieldset>
                                    </CardBody>
                                </Card>
                                <br/>
                                <Card>
                                    <CardHeader>
                                        Second Member
                                    </CardHeader>
                                    <CardBody>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="memberTwoFirst">First Name</Label>
                                                    <Input name="memberTwoFirst" id="memberTwoFirst"/>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="memberTwoLast">Last Name</Label>
                                                    <Input name="memberTwoLast" id="memberTwoLast"/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <fieldset hidden={this.state.toggle}>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="emailTwo">Email</Label>
                                                        <Input type="email" name="emailTwo" id="emailTwo"
                                                               placeholder="example@example.com"/>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="phoneTwo">Telephone</Label>
                                                        <Input type="tel" name="phoneTwo" id="phoneTwo"
                                                               placeholder="555-555-5555"/>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </fieldset>
                                    </CardBody>
                                </Card>
                                <br/>
                                <fieldset hidden={this.state.toggle}>
                                    <FormGroup>
                                        <Label for="address">Address</Label>
                                        <Input type="text" name="address" id="address"
                                               placeholder="1234 Main St"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="address2">Address 2</Label>
                                        <Input type="text" name="address2" id="address2"
                                               placeholder="Apartment, studio, or floor"/>
                                    </FormGroup>
                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="city">City</Label>
                                                <Input type="text" name="city" id="city"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="state">State</Label>
                                                <Input type="text" name="state" id="state"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={2}>
                                            <FormGroup>
                                                <Label for="zip">Zip</Label>
                                                <Input type="text" name="zip" id="zip"/>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </fieldset>
                            </Form>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        );
    }
}
