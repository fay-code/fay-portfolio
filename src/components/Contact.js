import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

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
                                    <h5 className="mx-3">Email: ilhamalfatich@gmail.com</h5>
                                    <div className="social-icon">
                                        <a href="https://www.linkedin.com/in/ilham-alfatich-mulia-801898174/"><img src={navIcon1} alt="Icon linkedin" /></a>
                                        <a href="https://github.com/fay-code"><img src={navIcon2} alt="Icon github" /></a>
                                        <a href="https://www.instagram.com/alfatih_mulia/"><img src={navIcon3} alt="Icon ig" /></a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
