import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../css/events_cards.css';
import street_children_1 from '../images/street_children_1.jpg';
import street_children_2 from '../images/street_children_2.jpg';
import street_children_3 from '../images/street_children_3.jpg';



var dateArr = ["Dec 31, 2022 15:37:25", "Sep 21, 2022 17:47:25", "July 11, 2022 21:50:25", "August 23, 2022 16:10:25"];
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  for(var i = 0; i < dateArr.length; i ++){
      // Set the date we're counting down to
      var countDownDate = new Date(dateArr[i]).getTime();
      var distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        
      // Output the result in an element with id="demo"
      document.getElementsByClassName("digits-days")[i].innerHTML = days;
      document.getElementsByClassName("digits-hours")[i].innerHTML = hours;
      document.getElementsByClassName("digits-mins")[i].innerHTML = minutes;
        
      // If the count down is over, write some text 
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }
}, 1000);

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
                            <Row className="events-card">
                                <Col lg={6}>
                                    <img src={street_children_1} />
                                </Col>
                                <Col lg={6} className="card-right-section">
                                    <div className="events-card-info">
                                        <h4>volunteer Idea 2022</h4>
                                        <p>Seed the life upon you are creat.</p>
                                        <div className="timer">
                                            <div className="days">
                                                <span className="digits-days"></span>
                                                <span className="units"><br/>Days</span>
                                            </div>
                                            <div className="hours">
                                                <span className="digits-hours"></span>
                                                <span className="units"><br/>Hours</span>
                                            </div>
                                            <div className="minutes">
                                                <span className="digits-mins"></span>
                                                <span className="units"><br/>Mins</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Row className="events-card">
                                <Col lg={6}>
                                    <img src={street_children_2} />
                                </Col>
                                <Col lg={6} className="card-right-section">
                                    <div className="events-card-info">
                                        <h4>volunteer Idea 2022</h4>
                                        <p>Seed the life upon you are creat.</p>
                                        <div className="timer">
                                            <div className="days">
                                                <span className="digits-days"></span>
                                                <span className="units"><br/>Days</span>
                                            </div>
                                            <div className="hours">
                                                <span className="digits-hours"></span>
                                                <span className="units"><br/>Hours</span>
                                            </div>
                                            <div className="minutes">
                                                <span className="digits-mins"></span>
                                                <span className="units"><br/>Mins</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col md={6}>
                            <Row className="events-card">
                                <Col lg={6}>
                                    <img src={street_children_3} />
                                </Col>
                                <Col lg={6} className="card-right-section">
                                    <div className="events-card-info">
                                        <h4>volunteer Idea 2022</h4>
                                        <p>Seed the life upon you are creat.</p>
                                        <div className="timer">
                                            <div className="days">
                                                <span className="digits-days"></span>
                                                <span className="units"><br/>Days</span>
                                            </div>
                                            <div className="hours">
                                                <span className="digits-hours"></span>
                                                <span className="units"><br/>Hours</span>
                                            </div>
                                            <div className="minutes">
                                                <span className="digits-mins"></span>
                                                <span className="units"><br/>Mins</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Row className="events-card">
                                <Col lg={6}>
                                    <img src={street_children_1} />
                                </Col>
                                <Col lg={6} className="card-right-section">
                                    <div className="events-card-info">
                                        <h4>volunteer Idea 2022</h4>
                                        <p>Seed the life upon you are creat.</p>
                                        <div className="timer">
                                            <div className="days">
                                                <span className="digits-days"></span>
                                                <span className="units"><br/>Days</span>
                                            </div>
                                            <div className="hours">
                                                <span className="digits-hours"></span>
                                                <span className="units"><br/>Hours</span>
                                            </div>
                                            <div className="minutes">
                                                <span className="digits-mins"></span>
                                                <span className="units"><br/>Mins</span>
                                            </div>
                                        </div>
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