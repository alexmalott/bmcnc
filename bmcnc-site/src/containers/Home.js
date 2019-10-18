import React, {Component} from "react";
import {
    Container,
    Col,
    Row,
    Card,
    CardBody,
    CardText,
    CardHeader,
    CardTitle,
    CardImg
} from 'reactstrap';
import {ParallaxBanner} from "react-scroll-parallax";
import {Link} from "react-router-dom";

const childStyle = {
    position: 'relative',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    textShadow: '2px 2px black'
};

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <ParallaxBanner
                    layers={[{image: "banner.jpg", amount: -.2}]}
                    style={{height: '500px'}}
                >
                    test
                    <img style={childStyle} src="Logo.png" alt="BMCNC Logo"/>
                    <h3 className="text-light" style={childStyle}>Welcome to the</h3>
                    <h1 className="text-light" style={childStyle}>British Motoring Club of Northern Colorado</h1>
                </ParallaxBanner>
                <br/>
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <Card>
                                <CardHeader>
                                    The Club
                                </CardHeader>
                                <CardBody>
                                    <CardText>
                                        The BMCNC is Northern Colorado's premiere group for British motoring
                                        enthusiasts,
                                        from the classic and collectible to more everyday models. Anyone with an
                                        interest
                                        in British cars or motorcycles is welcome to join - you need not own one (though
                                        your fellow members will often happily suggest a suitable purchase).
                                        <br/>
                                        <br/>
                                        Most of our events take place around Loveland and Fort Collins, but we make
                                        frequent
                                        excursions into the Denver metro area.
                                        <br/>
                                        <br/>
                                        Interested in joining? Check out our <Link
                                        to="/membership">membership</Link> page.
                                    </CardText>
                                    <CardImg src="club.jpg"/>
                                </CardBody>

                            </Card>
                        </Col>
                        <Col sm={12} md={6}>
                            <Card>
                                <CardHeader>
                                    Upcoming Events
                                </CardHeader>
                                <CardBody>
                                    <iframe
                                        src="https://calendar.google.com/calendar/embed?height=400&amp;wkst=1&amp;
                                        bgcolor=%23ffffff&amp;ctz=America%2FDenver&amp;src=dGhlYm1jbmNAZ21haWwuY29t&amp;
                                        color=%237CB342&amp;showTabs=0&amp;mode=AGENDA&amp;showTitle=0&amp;
                                        showNav=0&amp;showDate=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0"
                                        style={{borderWidth: 0, width: '100%'}} width="340" height="400" frameBorder="0"
                                        scrolling="no"/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
