
import { Button, Col, Container, Row } from 'react-bootstrap'

function Pricing() {
    return (
       <section>
         <Container className='section-title my-5'>
                <h1>Pricing</h1>
                <span></span>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </Container>
         <Container>
            <Row>
                <Col >
                    <div className='p-3 text-center' style={{
                        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
                        borderRadius: '5px',
                    }}>
                        <h3 className='' style={{
                            margin: '-16px -16px 19px ',
                            padding: ' 20px 15px',
                            fontSize: '16px',
                            background: '#f5f5f5',
                        }}>Free</h3>
                        <h4><sup>$</sup>0<span> / month</span></h4>
                        <ul className='text-center' style={{
                            padding: ' 20px 0',
                            listStyle: 'none',
                            lineHeight: '20px',
                            fontSize: '14px',
                        }}>
                            <li>Aida dere</li>
                            <li>Nec feugiat nisl</li>
                            <li>Nulla at volutpat dola</li>
                            <li>Pharetra massa</li>
                            <li>Massa ultricies mi</li>
                        </ul>
                        <div style={{
                            background: '#f5f5f5',
                            margin: '0px -16px -16px',
                            padding: '20px 15px',
                            textAlign: 'center',
                        }}>
                            <Button style={{
                                background: '#3fbbc0',
                                color: 'white',
                                padding: '8px 35px 10px 35px',
                                borderRadius: '4px',
                                fontSize: '14px',
                                border: "none",
                            }}>Buy Now</Button>
                        </div>
                    </div>
                </Col>
                <Col >
                    <div className='p-3 text-center' style={{
                        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
                        borderRadius: '5px',
                    }}>
                        <h3 className='' style={{
                            margin: '-16px -16px 19px ',
                            padding: ' 20px 15px',
                            fontSize: '16px',
                            background: '#3fbbc0',
                        }}>Business</h3>
                        <h4><sup>$</sup>19<span> / month</span></h4>
                        <ul className='text-center' style={{
                            padding: ' 20px 0',
                            listStyle: 'none',
                            lineHeight: '20px',
                            fontSize: '14px',
                        }}>
                            <li>Aida dere</li>
                            <li>Nec feugiat nisl</li>
                            <li>Nulla at volutpat dola</li>
                            <li>Pharetra massa</li>
                            <li>Massa ultricies mi</li>
                        </ul>
                        <div style={{
                            background: '#f5f5f5',
                            margin: '0px -16px -16px',
                            padding: '20px 15px',
                            textAlign: 'center',
                        }}>
                            <Button style={{
                                background: '#3fbbc0',
                                color: 'white',
                                padding: '8px 35px 10px 35px',
                                borderRadius: '4px',
                                fontSize: '14px',
                                border: "none",
                            }}>Buy Now</Button>
                        </div>
                    </div>
                </Col>
                <Col >
                    <div className='p-3 text-center' style={{
                        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
                        borderRadius: '5px',
                    }}>
                        <h3 className='' style={{
                            margin: '-16px -16px 19px ',
                            padding: ' 20px 15px',
                            fontSize: '16px',
                            background: '#f5f5f5',
                        }}>Developer</h3>
                        <h4><sup>$</sup>29<span> / month</span></h4>
                        <ul className='text-center' style={{
                            padding: ' 20px 0',
                            listStyle: 'none',
                            lineHeight: '20px',
                            fontSize: '14px',
                        }}>
                            <li>Aida dere</li>
                            <li>Nec feugiat nisl</li>
                            <li>Nulla at volutpat dola</li>
                            <li>Pharetra massa</li>
                            <li>Massa ultricies mi</li>
                        </ul>
                        <div style={{
                            background: '#f5f5f5',
                            margin: '0px -16px -16px ',
                            padding: '20px 15px',
                            textAlign: 'center',
                        }}>
                            <Button style={{
                                background: '#3fbbc0',
                                color: 'white',
                                padding: '8px 35px 10px 35px',
                                borderRadius: '4px',
                                fontSize: '14px',
                                border: "none",
                            }}>Buy Now</Button>
                        </div>
                    </div>
                </Col>
                <Col >
                    <div className='p-3 text-center' style={{
                        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
                        borderRadius: '5px',
                        overflow: 'hidden',
                        position: 'relative',
                    }}>
                        <span style={{
                            background: '#3fbbc0',
                            color: 'white',
                            width: '200px',
                            position: 'absolute',
                            top: '18px',
                            right: ' -68px',
                            transform: ' rotate(45deg)',
                            zIndex: '1',
                            fontSize: '14px',
                            padding: '1px 0 3px 0'
                        }}>Advanced</span>
                        <h3 className='' style={{
                            margin: '-16px -16px 19px ',
                            padding: ' 20px 15px',
                            fontSize: '16px',
                            background: '#f5f5f5',
                        }}>Ultimate</h3>
                        <h4><sup>$</sup>49<span> / month</span></h4>
                        <ul className='text-center' style={{
                            padding: ' 20px 0',
                            listStyle: 'none',
                            lineHeight: '20px',
                            fontSize: '14px',
                        }}>
                            <li>Aida dere</li>
                            <li>Nec feugiat nisl</li>
                            <li>Nulla at volutpat dola</li>
                            <li>Pharetra massa</li>
                            <li>Massa ultricies mi</li>
                        </ul>
                        <div style={{
                            background: '#f5f5f5',
                            margin: '0px -16px -16px',
                            padding: '20px 15px',
                            textAlign: 'center',
                        }}>
                            <Button style={{
                                background: '#3fbbc0',
                                color: 'white',
                                padding: '8px 35px 10px 35px',
                                borderRadius: '4px',
                                fontSize: '14px',
                                border: "none",
                            }}>Buy Now</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
       </section>
    )
}

export default Pricing