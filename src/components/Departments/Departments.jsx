import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import Cardiology from "./Cardiology"
import Neurology from "./Neurology"
import Hepatology from "./Hepatology"
import Pediatrics from "./Pediatrics"
import Ophthalmologists from "./Ophthalmologists"


function Departments() {
    return (
        <section>
            <Container className='section-title mb-5'>
                <h1>Departments</h1>
                <span></span>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </Container>
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column border border-end-1 border-top-0 border-bottom-0 border-start-0">
                                <Nav.Item className="border-hover">
                                    <Nav.Link eventKey="first" style={{
                                        backgroundColor: '#ffff',
                                        color: 'black'
                                    }}>Cardiology</Nav.Link>
                                </Nav.Item  >
                                <Nav.Item className="border-hover">
                                    <Nav.Link eventKey="second" style={{
                                        backgroundColor: '#ffff',
                                        color: 'black'
                                    }}>Neurology</Nav.Link>
                                </Nav.Item >
                                <Nav.Item className="border-hover">
                                    <Nav.Link eventKey="therd" style={{
                                        backgroundColor: '#ffff',
                                        color: 'black'
                                    }}>Hepatology</Nav.Link>
                                </Nav.Item >
                                <Nav.Item className="border-hover">
                                    <Nav.Link eventKey="Fourth" style={{
                                        backgroundColor: '#ffff',
                                        color: 'black'
                                    }}>Pediatrics</Nav.Link>
                                </Nav.Item >
                                <Nav.Item className="border-hover">
                                    <Nav.Link eventKey="Fifth" style={{
                                        backgroundColor: '#ffff',
                                        color: 'black'
                                    }}>Ophthalmologists</Nav.Link>
                                </Nav.Item >
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first"><Cardiology /></Tab.Pane>
                                <Tab.Pane eventKey="second"><Neurology /></Tab.Pane>
                                <Tab.Pane eventKey="therd"><Hepatology /></Tab.Pane>
                                <Tab.Pane eventKey="Fourth"><Pediatrics /></Tab.Pane>
                                <Tab.Pane eventKey="Fifth"><Ophthalmologists /></Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </section>
    )
}

export default Departments