import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsCheck2All } from 'react-icons/bs'
import {  FaHandHoldingMedical, FaPlay,} from 'react-icons/fa'
import AboutUsCard from '../AboutUsCard/AboutUsCard'
import { FaLungs, FaStaffSnake, FaSuitcaseMedical } from 'react-icons/fa6'

function AboutUs() {

    const data = [
        {
            img: <FaHandHoldingMedical />,
            title: "Lorem Ipsum",
            desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
        },
        {
            img: <FaSuitcaseMedical />,
            title: "Nemo Enim",
            desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
        },
        {
            img: <FaStaffSnake />,
            title: "Dine Pad",
            desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
        },
        {
            img: <FaLungs />,
            title: "Tride clov",
            desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
        },
    ];
    return (
        <section>
            <Container className='section-title'>
                <h1>About Us</h1>
                <span></span>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </Container>
            <Container>
                <Row gy={4}>
                    <Col lg={6} className="position-relative align-self-start" >
                        <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                        <a href="#">
                            <span className='position-absolute end-50 start-50 top-50 text-lg-center ' style={{
                                width: "65px",
                                height: "65px",
                                background: "#3fbbc0",
                                borderRadius: "50%",
                                color: "#ffff"
                            }}><FaPlay className='my-4 mx-3' /></span>
                        </a>
                    </Col>
                    <Col lg={6} >
                        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <ul className="list-unstyled">
                            <li><BsCheck2All style={{ color: 'var(--color)', fontSize: "x-large" }} /><span className='mx-2'>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                            <li><BsCheck2All style={{ color: 'var(--color)', fontSize: "x-large" }} /><span className='mx-2'>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                            <li><BsCheck2All style={{ color: 'var(--color)', fontSize: "x-large" }} /><span className='mx-2'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                        </ul>
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                        </p>
                    </Col>
                </Row>
            </Container>
            <AboutUsCard />
            <Container>
                <Row gy={6}>
                    <Col lg={6} className="position-relative align-self-start " >
                        <img fluid src="assets/img/features.jpg" className="w-100 vh-100" alt="" />
                    </Col>
                    <Col lg-5 className='d-flex flex-column justify-content-center'>
                        <div className='w-75'>
                            <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                            <span className='HH-span'></span>
                            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>
                        </div>
                        <div className=" position-relative">
                            {data.map((item) => {
                                return (
                                    <div key={item.id} className="d-flex align-items-center w-50">
                                        <div className="icon-card2">{item.img}</div>
                                        <div>
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutUs