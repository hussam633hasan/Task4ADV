import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap"
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"
import { FiMapPin } from "react-icons/fi"


function Contact() {
    return (
        <section>
            <Container className='section-title my-5'>
                <h1>Contact</h1>
                <span></span>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </Container>
            <div className="w-100" style={{
                height: "300px"
            }}>
                <iframe className="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameborder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Container>
                <Row>
                    <Col className="m-5">
                        <Row style={{
                            boxShadow: '0px 1px 20px 0px #e1e1e1',
                            padding: '20px 13px 20px 13px',
                        }}>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="contact-icon"><FiMapPin /></div>
                                <h3>Address</h3>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </Row>
                        <Row className="my-3">
                            <Col style={{
                              boxShadow: '0px 1px 20px 0px #e1e1e1',
                              padding: '20px 13px 20px 13px',
                            }}>
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <div className="contact-icon"><FaPhoneAlt /></div>
                                    <h3>Call Us</h3>
                                    <p>+1 5589 55488 55</p>
                                </div>
                            </Col>
                            <Col style={{
                              boxShadow: '0px 1px 20px 0px #e1e1e1',
                              padding: '20px 13px 20px 13px',
                              marginLeft:'20px',
                            }}>
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <div className="contact-icon"><FaEnvelope /></div>
                                    <h3>Email Us</h3>
                                    <p>info@example.com</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="my-5" style={{
                        boxShadow: '0px 1px 20px 0px #e1e1e1',
                        padding: '46px 13px 24px 13px',
                    }}>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="text" placeholder="Enter your Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        placeholder="Subject"
                                    />
                                </InputGroup>
                            </Row>
                            <InputGroup className="flex-column justify-content-center align-items-center">
                                <Form.Control as="textarea" aria-label="With textarea" className="w-100 mb-5 rounded-0" />
                                <Button variant="primary" className="mx-2 rounded-0" style={{
                                    backgroundColor: 'var(--color)',
                                    border: 'none'
                                }}>Make an Appointment</Button>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact