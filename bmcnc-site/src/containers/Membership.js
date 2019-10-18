import React, {Component} from "react";
import {
    Container,
    Col,
    Row,
    FormGroup,
    Form,
    Label,
    Input,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Card,
    CardBody,
    CardHeader
} from 'reactstrap';

export default class Membership extends Component {
    render() {
        return (
            <div className="Membership">
                <br/>
                <Container>
                    <Card>
                        <CardHeader>
                            Membership
                        </CardHeader>
                        <CardBody>
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
                                    </CardBody>
                                </Card>
                                <br/>
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
                                <Row form>
                                    <Col>
                                        <FormGroup>
                                            <Label for="renewal">If you are a member of the North American MGB Register,
                                            please provide your last renewal date below.</Label>
                                            <Input type="date" name="renewal" id="renewal"/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                You can elect to provide all, some, or none of this information for club directory
                                purposes.
                                <br/>
                                The club directory is provided only to club members.
                                <br/>
                                <br/>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <Input addon type="checkbox" name="nameConsent" id="nameConsent"
                                                   aria-label="Publish my Name"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input disabled value="Publish my Name"/>
                                </InputGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <Input addon type="checkbox" name="emailConsent" id="emailConsent"
                                                   aria-label="Publish my Email Address"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input disabled value="Publish my Email Address"/>
                                </InputGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <Input addon type="checkbox" name="phoneConsent" id="phoneConsent"
                                                   aria-label="Publish my Phone Number"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input disabled value="Publish my Phone Number"/>
                                </InputGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <Input addon type="checkbox" name="addressConsent" id="addressConsent"
                                                   aria-label="Publish my Physical Address"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input disabled value="Publish my Physical Address"/>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        );
    }
}
