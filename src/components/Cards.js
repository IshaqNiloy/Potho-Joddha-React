import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/cards.css';
import donation_icon_orange from '../images/heart.png';
import donation_icon_white from '../images/heart_white.png';

export default function Cards(props) {
    return (
        <div className="cards-section-overlay">
            <Container>
                <Row className="row">
                    <Col lg={4}>
                        <h2>We are CharityPress Funding Network Worldwide.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                            do eiusmod tempor incididunt ut labore et dolore magna Lorem
                            ipsum dolor sit amet consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna</p>
                        <button>LEARN MORE</button>
                    </Col>
                    <Col lg={6}>
                        <Row className="row">
                            <Col sm={6}>
                                <div className="my-card">
                                    <div className="card-icon" id="card-icon-orange"><img src={donation_icon_orange} /></div>
                                    <div className="card-icon" id="card-icon-white"><img src={donation_icon_white} /></div>
                                    <div className="card-heading"><h4>{props.heading}</h4></div>
                                    <div className="card-description"><p>{props.desc}</p></div>
                                    <div className="card-link"><a>{props.link}</a></div>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="my-card">
                                    <div className="card-icon" id="card-icon-orange"><img src={donation_icon_orange} /></div>
                                    <div className="card-icon" id="card-icon-white"><img src={donation_icon_white} /></div>
                                    <div className="card-heading"><h4>{props.heading}</h4></div>
                                    <div className="card-description"><p>{props.desc}</p></div>
                                    <div className="card-link"><a>{props.link}</a></div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="row">
                            <Col sm={6}>
                                <div className="my-card">
                                    <div className="card-icon" id="card-icon-orange"><img src={donation_icon_orange} /></div>
                                    <div className="card-icon" id="card-icon-white"><img src={donation_icon_white} /></div>
                                    <div className="card-heading"><h4>{props.heading}</h4></div>
                                    <div className="card-description"><p>{props.desc}</p></div>
                                    <div className="card-link"><a>{props.link}</a></div>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="my-card">
                                    <div className="card-icon" id="card-icon-orange"><img src={donation_icon_orange} /></div>
                                    <div className="card-icon" id="card-icon-white"><img src={donation_icon_white} /></div>
                                    <div className="card-heading"><h4>{props.heading}</h4></div>
                                    <div className="card-description"><p>{props.desc}</p></div>
                                    <div className="card-link"><a>{props.link}</a></div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}