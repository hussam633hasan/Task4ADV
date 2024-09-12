import { Button, Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap"
import { BsPhone } from "react-icons/bs"
import { FiClock } from "react-icons/fi"


function NavBar() {
    return (
        <section style={{
            position: "fixed",
            width: "100%",
            zIndex: "999",
        }}>
            <Container fluid className="top-nav">
                <Row style={{
                    backgroundColor: 'var(--color)',
                    color: "black",
                }}>
                    <Col className="d-flex align-items-center justify-content-center"><FiClock /><p className="m-0">Monday - Saturday, 8AM to 10PM</p></Col>
                    <Col className="d-flex align-items-center justify-content-center"><BsPhone /><p className="m-0">Call us now +1 5589 55488 55</p></Col>
                </Row>
            </Container>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#"><img src="/assets/img/logo.png" alt="" className="w-50" /></Navbar.Brand>
                    <div>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1" className="mx-2">HOME</Nav.Link>
                                <Nav.Link href="#action2" className="mx-2">ABOUT</Nav.Link>
                                <Nav.Link href="#action2" className="mx-2">SERVICES</Nav.Link>
                                <Nav.Link href="#action2" className="mx-2">DEPARTMENTS</Nav.Link>
                                <Nav.Link href="#action2" className="mx-2">DOCTORS</Nav.Link>
                                <NavDropdown title="DROPDOWN" id="navbarScrollingDropdown" className="mx-2">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#action2" className="mx-2">CONTACT</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    <Button variant="primary" className="mx-2 " style={{
                        backgroundColor: 'var(--color)',
                        border: 'none'
                    }}>Make an Appointment</Button>
                </Container>
            </Navbar>
        </section>
    )
}

export default NavBar