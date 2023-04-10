import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
          title: "Macbook App",
          description: "Design using figma",
          imgUrl: projImg1,
        },
        {
          title: "Neuroprote Website",
          description: "Home Page Design using figma",
          imgUrl: projImg2,
        },
        {
          title: "Neuroprote Website",
          description: "Project Page Design using figma",
          imgUrl: projImg3,
        },
    ];

    const projects2 = [
        {
            title: "Neuroprote Website",
            description: "Home Page",
            imgUrl: projImg4,
        },
        {
            title: "Neuroprote Website",
            description: "How We Work Page",
            imgUrl: projImg5,
        },
        {
            title: "Neuroprote Website",
            description: "Contact Page",
            imgUrl: projImg6,
        },
        {
            title: "Reauton Website",
            description: "Dashboard page",
            imgUrl: projImg7,
        },
        {
            title: "Reauton Website",
            description: "Checkout page",
            imgUrl: projImg8,
        },
        {
            title: "Reauton Website",
            description: "Cart page",
            imgUrl: projImg9,
        },
    ];

    const projects3 = [
        {
            title: "Neuroprote",
            description: "Logo for Neuroprote app",
            imgUrl: projImg10,
        },
        {
            title: "Reauton",
            description: "Logo for Reauton app",
            imgUrl: projImg11,
        },
        {
            title: "Logo",
            description: "Logo for Tech app",
            imgUrl: projImg12,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn"  : ""}>
                            <h2>Projects</h2>
                            <p>List of projects that I made, including personal use and freelance work for clients</p>
                            </div>
                        }
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Mockup Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Website App Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Logo Design</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                    key={index}
                                                    {...project}
                                                    />
                                                    )
                                                })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects2.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                    key={index}
                                                    {...project}
                                                    />
                                                    )
                                                })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projects3.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                    key={index}
                                                    {...project}
                                                    />
                                                    )
                                                })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background"></img>
        </section>
    )
}