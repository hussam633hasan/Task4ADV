import { Col, Container, Row } from "react-bootstrap";
import { FaHeartbeat, FaPills, FaThermometer } from "react-icons/fa";
import { FaHospitalUser, FaNotesMedical, FaWheelchair } from "react-icons/fa6";


function Services() {
    const data = [
        {
            img: <FaHeartbeat />,
            title: "Nesciunt Mete",
            desc1: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
        },
        {
            img: <FaThermometer />,
            title: "Eosle Commodi",
            desc1: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
        },
        {
            img: <FaPills />,
            title: "Ledo Markt",
            desc1: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
        },
        {
            img: <FaHospitalUser />,
            title: "Asperiores Commodit",
            desc1: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
        },
        {
            img: <FaWheelchair />,
            title: "Velit Doloremque",
            desc1: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
        },
        {
            img: <FaNotesMedical />,
            title: "Dolori Architecto",
            desc1: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
        },
    ];

    return (
        <section className="my-5">
            <Container className='section-title '>
                <h1>Services</h1>
                <span></span>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </Container>
        <Container>
            <Row className="my-5">
                <div className=" w-100 d-flex flex-wrap align-items-center justify-content-center text-center">
                    {data.map((item) => {
                        return (
                            <div key={item.id} className="w-25 m-5">
                                <Col>
                                    <Col >
                                        <div className="HH-icon">{item.img}</div>
                                        <h3>{item.title}</h3>
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                        <span className='HH-span'></span>
                                        <p>{item.desc1}</p>
                                        </div>
                                    </Col>
                                </Col>
                            </div>
                        );
                    })}
                </div>
            </Row>
        </Container>
        </section>
    )
}
export default Services