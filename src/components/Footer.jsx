import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MailChimpForm from "./MailChimpForm";
import logo from "../assets/images/logo.svg";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailChimpForm />
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="icon" />
              </a>
            </div>
            <p>Copyright 2024. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
