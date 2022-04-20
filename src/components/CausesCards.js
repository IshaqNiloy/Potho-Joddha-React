import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../css/causes_cards.css';
import street_children_1 from '../images/street_children_1.jpg';
import street_children_2 from '../images/street_children_2.jpg';
import street_children_3 from '../images/street_children_3.jpg';
import goal from '../images/goal.png';
import raise from '../images/raise.png';

function progressBar() {
    var progressBarElements = document.getElementsByClassName("progress-bar");
    var progressPercentageElements = document.getElementsByClassName("progress-percentage");
    var progressArr = ['50%', '70%', '90%'];

    for(var i = 0; i < 3; i++) {
        progressBarElements[i].style.width = progressArr[i];
        progressPercentageElements[i].style.left = progressArr[i];
        progressPercentageElements[i].innerHTML = progressArr[i];
    }
}

setInterval(progressBar);

export default function Card(props) {
    return (
        <Container>
            <div className="causes-section">
                <Row>
                    <Row>
                        <Col sm={5}>
                            <h1>Our Causes</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </Col>
                        <Col sm={7}></Col>
                    </Row>
                    <Col md={4}>
                        <img src={street_children_1} />
                        <div className="causes-card-body">
                            <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                            <p><img src={goal} />GOAL: 1,00,000 BDT</p>
                            <p><img src={raise} />RAISED: 50,000 BDT</p>
                            <span className="progress-percentage"></span>
                            <div className="progress-section">
                                <div className="progress-bar"></div>
                            </div>
                            <div className="btn-div">
                                <button className="causes-btn">Read More</button>    
                            </div>
                            <button className="causes-btn">Read More</button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <img src={street_children_2} />
                        <div className="causes-card-body">
                            <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                            <p><img src={goal} />GOAL:  1,00,000 BDT</p>
                            <p><img src={raise} />RAISED: 50,000 BDT</p>
                            <span className="progress-percentage"></span>
                            <div className="progress-section">
                                <div className="progress-bar"></div>
                            </div>
                            <div className="btn-div">
                                <button className="causes-btn">Read More</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <img src={street_children_3} />
                        <div className="causes-card-body">
                            <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                            <p><img src={goal} />GOAL:  1,00,000 BDT</p>
                            <p><img src={raise} />RAISED: 50,000 BDT</p>
                            <span className="progress-percentage"></span>
                            <div className="progress-section">
                                <div className="progress-bar"></div>
                            </div>
                            <div className="btn-div">
                                <button className="causes-btn">Read More</button>
                            </div>                          
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}