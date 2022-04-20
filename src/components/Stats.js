import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/stats.css';
import street_child from '../images/street_children_about_section.jpg';

export default function Stats() {
    return (
        <Container>
            <Row>
                <Col lg={6}>
                    <img src={street_child} />
                </Col>
                <Col lg={6} id="about-section-right">
                    <p><span className="date">2000</span><br/>Since</p>
                    <div className="about-section">
                        <h2>About Believe</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="stats-section">
                        <Row>
                            <Col sm={3}>
                                <span class="stats-number">50k</span>
                                <p>Total Volunteer</p>
                            </Col>
                            <Col sm={3}>
                                <span class="stats-number">25k</span>
                                <p>Successed Mission</p>
                            </Col>
                            <Col sm={3}>
                                <span class="stats-number">100k</span>
                                <p>Total Collection</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <button id="stats-btn">LEARN MORE</button>
            </Row>
        </Container>
    );
}