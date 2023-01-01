import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <Row>
                            <Col size={12} className="px-1">
                                <div className="contact-bx">
                                    <br/>
                                    <h5>Gmail : ilhamalfatich@gmail.com</h5>
                                    <br/>
                                    <h5>HandPhone Number : 085694087537</h5>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
