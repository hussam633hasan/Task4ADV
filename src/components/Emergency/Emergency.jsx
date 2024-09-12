import { Button, Container } from "react-bootstrap"

function Emergency() {
    return (
        <section className="my-5 w-100" style={{
            backgroundColor: 'var(--color)',
            color: "#ffff",
            padding: "80px 0",
        }}>
            <Container>
                <div>
                    <div className="row justify-content-center aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                        <div className="col-xl-10">
                            <div className="text-center">
                                <h3>In an emergency? Need help now?</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <Button variant="" className="mx-2 " style={{
                                    border: "2px solid #ffff",
                                    padding: '12px 40px',
                                    color: '#ffff',
                                    borderRadius: '0',
                                }}>Make an Appointment</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Emergency