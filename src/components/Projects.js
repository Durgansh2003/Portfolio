import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.avif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "D Selling shop",
      description: "It's a goods selling website which is made with React, Strapi(CMS) and Stripe",
      imgUrl: projImg1,
    },
    {
      title: "Image Generator",
      description: "It is an AI based web app which let  user to download and share high quality images of their choice b y just typing the prompt.This is a Full-Stack MERN web app and OPEN-AI APIs is also used in making the site.",
      imgUrl: projImg2,
    },
    {
      title: "Dujoku",
      description: "A traditional game of Sudoku with some cool features is What describes Dujoku. It is made with React,Node and Express.",
      imgUrl: projImg3,
    },
    
  
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects,Achievements and PORs.</h2>
                <p>I've mentioned some of my recent projects {'('}a lot more are under development phase{')'}, Achievements and PORs.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Achievements</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">PORs</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                      <p>1. I secured a global rank of 99 in one of the short-coding contest of Codechef.</p>
                      <p>2. I secured a rank of 18 in a coding competion organsied by IIT Bhubaneswar in collaboration with NITR.</p>
                      <p>3. Reached till pre-elimination round of Snackdow {"(A long coding contest of Codechef)."}</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>1. I was the Vice-President {"(2022-23)"} of the official coding club of NITR, "Codehub", which Later on, megred with Codered to form Algorothmic and programming society {'('}APS{')'}.</p>
                      <p>2. I was the Director of "Pantomime", {"The official acting club of NITR"} {"(2022-23)"} </p>
                    <p>3. I've managed a couple of Events of NITRUTSAV {"(A cultural fest of NITR)."}</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
