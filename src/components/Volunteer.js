import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import '../css/volunteer.css'

export default function volunteer() {
    return (
        <Row className="volunteer-row">
            <div className="volunteer-section">
            <Col sm={12}>
                <h1>Please raise your hand & Save world</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Quis ipsum suspendisse ultrices
                    gravida.
                </p>
                <button>BECOME A VOLUNTEER</button>
            </Col>
            </div>
        </Row>     
    );
} 