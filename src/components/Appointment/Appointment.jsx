import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap"


function Appointment() {
    return (
        <section className="my-5 py-5" style={{
            backgroundColor: '#f7fcfc',
        }}>
            <Container className='section-title '>
                <h1>MAKE AN APPOINTMENT</h1>
                <span></span>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </Container>
            <Container>
                <Form className="my-5">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">

                            <Form.Control type="text" placeholder="your Name" className="rounded-0" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">

                            <Form.Control type="email" placeholder="your Email" className="rounded-0" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">

                            <Form.Control type="tel" placeholder="your Phone" className="rounded-0" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <div className="col-md-4 form-group ">
                            <input type="datetime-local" name="date" className="form-control datepicker rounded-0" id="date" placeholder="Appointment Date" required="" />
                        </div>
                        <Form.Group as={Col} controlId="formGridState">

                            <Form.Select defaultValue="Select Department" className="rounded-0">
                                <option>Select Department</option>
                                <option value="Department 1">Department 1</option>
                                <option value="Department 2">Department 2</option>
                                <option value="Department 3">Department 3</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState" className="rounded-0">

                            <Form.Select defaultValue="Select Doctor">
                                <option value="">Select Doctor</option>
                                <option value="Doctor 1">Doctor 1</option>
                                <option value="Doctor 2">Doctor 2</option>
                                <option value="Doctor 3">Doctor 3</option>

                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <InputGroup className="flex-column justify-content-center align-items-center">
                        <Form.Control as="textarea" aria-label="With textarea" className="w-100 mb-5 rounded-0" />
                        <Button variant="primary" className="mx-2 rounded-0" style={{
                            backgroundColor: 'var(--color)',
                            border: 'none'
                        }}>Make an Appointment</Button>
                    </InputGroup>

                </Form>
            </Container>
        </section>
    )
}

export default Appointment