import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="mt-auto"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        color: "#fff",
        width: "100%",
        padding: "20px 0",
      }}
    >
      <Container>
        <Row className="justify-content-between">
          <Col md={6} xs={12} className="text-center text-md-start">
            <h1
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "3rem",
                fontWeight: "700",
              }}
            >
              GEEK ROOM JIMS
            </h1>
            <h4
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "1.5rem",
                marginTop: "10px",
              }}
            >
              <span style={{ marginRight: 10 }}>Learn</span>
              <span style={{ marginRight: 10 }}>Connect</span>
              <span>Grow</span>
            </h4>
          </Col>
          <Col
            md={2}
            xs={12}
            className="text-center text-md-start mt-4 mt-md-0"
          >
            <h4
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "1.5rem",
              }}
            >
              Links
            </h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/"
                  style={{ color: "#eaece5", textDecoration: "none" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  style={{ color: "#eaece5", textDecoration: "none" }}
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/achievements"
                  style={{ color: "#eaece5", textDecoration: "none" }}
                >
                  Achievements
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  style={{ color: "#eaece5", textDecoration: "none" }}
                >
                  Blogs
                </a>
              </li>
            </ul>
          </Col>
          <Col
            md={3}
            xs={12}
            className="text-center text-md-start mt-4 mt-md-0"
          >
            <h4
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "1.5rem",
              }}
            >
              Contact Us
            </h4>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1rem",
                color: "#eaece5",
                textAlign: "justify",
              }}
            >
              <b>Email</b> : <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=geekroomjimsrohini@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
                style={{color:"#64B5F6"}}
              >geekroomjimsrohini@gmail.com</a>
              <br />
              <b>Institution</b> : Jagan Institute of Management Studies, Sector-5, Rohini, Delhi


            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a
                href="https://www.linkedin.com/company/geekroom-jims/"
                className="me-3"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin
                  style={{
                    color: "HighlightText",
                    strokeWidth: "2px",
                    width: "30px",
                    height: "30px",
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com/geekroom_jims/"
                className="me-3"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaInstagram
                  style={{
                    color: "HighlightText",
                    strokeWidth: "2px",
                    width: "30px",
                    height: "30px",
                  }}
                />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=geekroomjimsrohini@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaEnvelope
                  style={{
                    color: "HighlightText",
                    strokeWidth: "2px",
                    width: "30px",
                    height: "30px",
                  }}
                />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <h4
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "1rem",
                color: "#eaece5",
              }}
            >
              {/* &copy; 2024 Copyright: GeekRoomJims.in */}
            </h4>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
