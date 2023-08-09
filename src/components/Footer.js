import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src="https://st2.depositphotos.com/16030310/43190/v/600/depositphotos_431905608-stock-illustration-initial-letter-logotype-company-name.jpg" alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/durgansh-gupta-b77b48204/"  target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/durgansh.gupta.7/" target="_blank" ><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/durgansh007/" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
