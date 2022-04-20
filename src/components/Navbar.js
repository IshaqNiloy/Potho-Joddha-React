import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/navbar.css';

function Navigationbar(props) {
    return (
        <div className="navbar-heroimg-overlay-combined">
            <div className="navbar-heroimg-overlay-combined-container">
                <Navbar expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand href="#" className="brand" style={{color: "#fff"}}>Potho Joddha</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <div className="hero-section-text">
                <h2>Help The<br/>Children In Need</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing
                   elit,<br/> sed do eiusmod tempor incididunt ut
                </p>
                <button className="donation-btn">START DONATION</button>
            </div>
            </div>
        </div>
    );
}

export default Navigationbar;