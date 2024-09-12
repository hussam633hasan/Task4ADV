import { Accordion, Container } from "react-bootstrap"


function FAQ() {
    return (
        <section>
            <Container className='section-title my-5'>
                <h1>Frequently Asked Questions</h1>
                <span></span>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </Container>
            <Container>
                <Accordion defaultActiveKey="">
                    <Accordion.Item className="my-3 border" eventKey="0">
                        <Accordion.Header>Non consectetur a erat nam at lectus urna duis?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="my-3 border" eventKey="1">
                        <Accordion.Header>Feugiat scelerisque varius morbi enim nunc faucibus?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="my-3 border" eventKey="2">
                        <Accordion.Header>Dolor sit amet consectetur adipiscing elit pellentesque?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="my-3 border" eventKey="3">
                        <Accordion.Header>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="my-3 border" eventKey="4">
                        <Accordion.Header>Tempus quam pellentesque nec nam aliquam sem et tortor?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="my-3 border" eventKey="5">
                        <Accordion.Header>Perspiciatis quod quo quos nulla quo illum ullam?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    )
}

export default FAQ