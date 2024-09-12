import { Card, Container } from "react-bootstrap"


function Doctors() {
    return (
        <section>
            <Container className='section-title mb-5'>
                <h1>Doctors</h1>
                <span></span>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </Container>
            <Container className="d-flex justify-content-around">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/assets/img/doctors/doctors-1.jpg" />
                    <Card.Body>
                        <Card.Title>Walter White</Card.Title>
                        <Card.Text>
                            Chief Medical Officer
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/assets/img/doctors/doctors-2.jpg" />
                    <Card.Body>
                        <Card.Title>Sarah Jhonson</Card.Title>
                        <Card.Text>
                        Anesthesiologist
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/assets/img/doctors/doctors-3.jpg" />
                    <Card.Body>
                        <Card.Title>William Anderson</Card.Title>
                        <Card.Text>
                        Cardiology
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/assets/img/doctors/doctors-4.jpg" />
                    <Card.Body>
                        <Card.Title>Amanda Jepson</Card.Title>
                        <Card.Text>
                        Neurosurgeon
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    )
}

export default Doctors