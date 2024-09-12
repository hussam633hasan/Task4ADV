
import { Card, Container, Row } from 'react-bootstrap'
import { FaDna, FaHeartbeat, FaPills, FaThermometer } from 'react-icons/fa'

function Cards() {
    return (

        <Container className=' d-flex justify-content-center w-100 mt-5'>
            <Row xs={1} md={6} className=" justify-content-evenly w-100">

                <Card role="button" className='hover-card' style={{
                    width: "300px",
                    boxShadow: "0px 0 25px 0 rgba(0, 0, 0, 0.1)",
                    border: "none",
                    borderRadius:"0",
                    margin:"10px 0px"
                }}>
                    <Card.Body>
                        <FaHeartbeat className='fs-1 ' style={{
                            color: 'var(--color)',
                            marginBottom: '20px'
                        }} />
                        <Card.Title className='my-3'>Lorem ipsum</Card.Title>
                        <Card.Text className='my-3'>
                            This is a longer card with supporting text below as a natural
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card role="button" className='hover-card' style={{
                    width: "300px",
                    boxShadow: "0px 0 25px 0 rgba(0, 0, 0, 0.1)",
                    border: "none",
                    borderRadius:"0",
                    margin:"10px 0px"
                }}>

                    <Card.Body>
                        <FaPills className='fs-1 ' style={{
                            color: 'var(--color)',
                            marginBottom: '20px'
                        }} />
                        <Card.Title className='my-3'>Sed ut perspici</Card.Title>
                        <Card.Text className='my-3'>
                            This is a longer card with supporting text below as a natural

                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card role="button" className='hover-card' style={{
                    width: "300px",
                    boxShadow: "0px 0 25px 0 rgba(0, 0, 0, 0.1)",
                    border: "none",
                    borderRadius:"0",
                    margin:"10px 0px"
                }}>

                    <Card.Body>
                        <FaThermometer className='fs-1 ' style={{
                            color: 'var(--color)',
                            marginBottom: '20px'
                        }} />
                        <Card.Title className='my-3'>Magni Dolores</Card.Title>
                        <Card.Text className='my-3'>
                            This is a longer card with supporting text below as a natural

                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card role="button" className='hover-card' style={{
                    width: "300px",
                    boxShadow: "0px 0 25px 0 rgba(0, 0, 0, 0.1)",
                    border: "none",
                    borderRadius:"0",
                    margin:"10px 0px"
                }}>

                    <Card.Body>
                        <FaDna className='fs-1 ' style={{
                            color: 'var(--color)',
                            marginBottom: '20px'
                        }} />
                        <Card.Title className='my-3'>Nemo Enim</Card.Title>
                        <Card.Text className='my-3'>
                            This is a longer card with supporting text below as a natural
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>

    )
}

export default Cards