import { Col, Container, Row } from "react-bootstrap";
import Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/img/webfund-icon.png";
import img2 from "../assets/img/nodejs-icon.png";
import img3 from "../assets/img/react-icon.png";
import img4 from "../assets/img/vscode-icon.png";
import img5 from "../assets/img/eclipse-icon.png";
import img6 from "../assets/img/php-icon.png";
import img7 from "../assets/img/git-icon.png";
import img8 from "../assets/img/sql-icon.png";
import img9 from "../assets/img/mongodb-icon.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>This is a whole list of programming languages, framework, database, IDE and tools that I use as a web developer</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={img1} alt="html,css,js"/>
                                    <h5>Web Fundamental</h5>
                                </div>
                                <div className="item">
                                    <img src={img2} alt="NodeJS"/>
                                    <h5>Node JS</h5>
                                </div>
                                <div className="item">
                                    <img src={img3} alt="reactJS"/>
                                    <h5>React JS</h5>
                                </div>
                                <div className="item">
                                    <img src={img4} alt="vscode"/>
                                    <h5>VS Code IDE</h5>
                                </div>
                                <div className="item">
                                    <img src={img5} alt="eclipse"/>
                                    <h5>Eclipse IDE</h5>
                                </div>
                                <div className="item">
                                    <img src={img6} alt="php"/>
                                    <h5>PHP</h5>
                                </div>
                                <div className="item">
                                    <img src={img7} alt="git"/>
                                    <h5>Git Tools</h5>
                                </div>
                                <div className="item">
                                    <img src={img8} alt="sql"/>
                                    <h5>SQL Database</h5>
                                </div>
                                <div className="item">
                                    <img src={img9} alt="mongodb"/>
                                    <h5>Mongodb Database</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" alt="gradient-background" src={colorSharp}/>
        </section>
      )
}