import { Col, Container, Row } from "react-bootstrap";
import { FaAward, FaFlask, FaRegHospital, FaUserMd } from "react-icons/fa";

function AboutUsCard() {
    const data = [
        {
            img: <FaUserMd />,
            num: "25",
            desc1: "Doctors",
        },
        {
            img: <FaRegHospital />,
            num: "15",
            desc1: "Departments",
        },
        {
            img: <FaFlask />,
            num: "8",
            desc1: "Research Labs",
        },
        {
            img: <FaAward />,
            num: "150",
            desc1: "Awards",
        },
    ];

    return (

        <Container>
            <Row className="my-5">
                <div className=" w-100 d-flex align-items-center justify-content-center flex-wrap AboutUsCards">
                    {data.map((item) => {
                        return (
                            <Col   key={item.id} className=" mx-1 my-2 AboutUsCard">
                                <Col  className="d-flex align-items-center justify-content-evenly text-bg-light p-5 shadow-lg ">
                                    <div className="icon-card">{item.img}</div>
                                    <div>
                                        <span className="fs-4 fw-bold">{item.num}</span>
                                        <p>{item.desc1}</p>
                                    </div>
                                </Col>
                            </Col>
                        );
                    })}
                </div>
            </Row>
        </Container>
    )
}

export default AboutUsCard