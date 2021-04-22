import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Aboutme() {
    return (
        <div>
            <div className="ocean">
                <div className="bubble bubble--1"></div>
                <div className="bubble bubble--2"></div>
                <div className="bubble bubble--3"></div>
                <div className="bubble bubble--4"></div>
                <div className="bubble bubble--5"></div>
                <div className="bubble bubble--6"></div>
                <div className="bubble bubble--7"></div>
                <div className="bubble bubble--8"></div>
                <div className="bubble bubble--9"></div>
                <div className="bubble bubble--10"></div>
                <div className="bubble bubble--11"></div>
                <div className="bubble bubble--12"></div>
            </div>


            <Row className="header-img">
                <div className="offset-1 col-9 " id="home"></div>

                <h3 className="fade title">I am Web development student at BCS</h3>
            </Row>
            <Container id="bootstrap-container">
               

                <Row className="first-row">


                    <Col size="col-lg-6" className="fade" id="photo-fadein">


                        <Row id="subrow-image">
                            <Col size="col-12" id="subcol-image">
                                <img src="assets/image/portlait4.jpg" alt="this is me" class="mx-auto img-thumbnail float-left" id="myphoto"></img>
                            </Col>
                        </Row>
                        <Row size="mx-auto ml-lg-0" id="links">
                            <Col size="col-12 pl-lg-0" id="subcol-links">
                                <div className="link" id="email"><a href="mailto:xxxxxxxx@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope-square link"> xxxxxxx@gmail.com</i></a></div>
                                <div className="link" id="phone"><a href="tell:0123456789" target="_blank" rel="noreferrer"><i className="fas fa-phone link"> 0123456789</i></a></div>
                                <div className="link" id="github-link"><a href="https://github.com/Chib1co" target="_blank" rel="noreferrer"><i className="fab fa-github-square link"> Git hub page</i></a></div>
                                <div className="link" id="linkedin-link"><a href="https://www.linkedin.com/in/tomomi-inoue-730ab71ab/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin link"> Linkedin page</i></a></div>
                                <div className="link" id="resume"><a href="assets/image/Resume.pdf" target="_blank" rel="noreferrer"><i className="fas fa-file link"> Resume (pdf file)</i></a></div>

 </Col>
 </Row>
</Col>
</Row>

                    {/* //<!--biography--> */}
                    <Col size="col-12 col-lg-6 fade" id="bio-fadein">
                        <Row id="who-i-am">
                            <Col size="col-12 " id="about-me">
                                <h4>Who I am</h4>
                                <p>Born and raised in Japan. Spent early 20’s as a competition snowboarder. Moved to Canada 2010 for snowboard training and realised the difference in the lifestyle between Japan and Western culture, and decided to travel around the world. 2011-2015, travelled over 10 countries, lived and worked in a few countries including USA, Mexico, Costa Rica as a chef. 2016 moved to Australia, decided to call here home. </p>
                            </Col>
                            <Row>
                                <Row id="bio-purpose">
                                    <Col size="col-12" id="purpose">
                                        <h4>Purpose from this course</h4>
                                        <p>I have no background in computer technology. I was working as a chef for the last 10 years. This is a big career changing. Why was I interested in becoming a web developer? Simply, I
                                        was interested in how all the data works in this digital world. I tried basic html when I was in school, and always remembered that I quite enjoyed it. Also, I am very interested in how physical health and mental health connect each other. I could have studied those subjects, of course. But I would rather choose to become a programmer and help people to build web sites or/and apps to support mental health, physical health. This is my ultimate goal as a web developer. And the experience working as a chef in a busy, multitasking, demanding industry, also studied my second language from my mid 20’s,  I believe it is my strength to keep challenging hard to a goal.
          </p>
                                    </Col>
                                </Row>
        
    
</Row>

                        </Row>
                        </Col>
                        </Container>
</div>

    )
    }
export default Aboutme;