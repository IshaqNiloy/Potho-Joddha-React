import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../css/events_cards.css';
import street_children_1 from '../images/street_children_1.jpg';
import street_children_2 from '../images/street_children_2.jpg';
import street_children_3 from '../images/street_children_3.jpg';
import goal from '../images/goal.png';
import raise from '../images/raise.png';

function progressBar() {
    
}

setInterval(progressBar);

export default function Card(props) {
    return (
        <Container>
            <div className="events-section">
                <Row>
                    <Row>
                        <Col sm={5}>
                            <h1>Upcoming Event</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </Col>
                        <Col sm={7}></Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col md={6}>
                                    <img src={street_children_1} />
                                </Col>
                                <Col md={6} className="col-right-section">
                                    <div className="events-card-body">
                                        <h4>volunteer Idea 2022</h4>
                                        <p>Seed the life upon you are creat.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col md={6}>
                                    <img src={street_children_2} />
                                </Col>
                                <Col md={6} className="col-right-section">
                                    <div className="events-card-body">
                                        <h4>volunteer Idea 2022</h4>
                                        <p>Seed the life upon you are creat.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col md={6}>
                                    <img src={street_children_3} />
                                </Col>
                                <Col md={6} className="col-right-section">
                                    <div className="events-card-body">
                                        <h4>volunteer Idea 2022</h4>
                                        <p>Seed the life upon you are creat.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col md={6}>
                                    <img src={street_children_1} />
                                </Col>
                                <Col md={6} className="col-right-section">
                                    <div className="events-card-body">
                                        <h4>volunteer Idea 2022</h4>
                                        <p>Seed the life upon you are creat.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </div>
        </Container>
    );
}