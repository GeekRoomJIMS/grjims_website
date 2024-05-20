import React from 'react';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import './faqstyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Faq() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <Accordion className="p-3">
            <h2 className="mb-4" style={{ marginLeft: "8px" }}>
              <u style={{ color: "rgb(169, 201, 190)" }}>Have a question?</u>
            </h2>
            <Accordion.Item eventKey='0' className='item' style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", color: "#fff" }}>
              <Accordion.Header style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: '1.5rem', backgroundColor: "rgba(0, 0, 0, 0.4)", color: "#fff" }}>
                Head1
              </Accordion.Header>
              <Accordion.Body style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: '1rem' }}>
                helllooo
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1' className='item' style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", color: "#fff" }}>
              <Accordion.Header style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: '1.5rem', backgroundColor: "rgba(0, 0, 0, 0.4)", color: "#fff" }}>
                Head2
              </Accordion.Header>
              <Accordion.Body style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: '1rem' }}>
                helllooo
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2' className='item' style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", color: "#fff" }}>
              <Accordion.Header style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: '1.5rem', backgroundColor: "rgba(0, 0, 0, 0.4)", color: "#fff" }}>
                Head3
              </Accordion.Header>
              <Accordion.Body style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: '1rem' }}>
                helllooo
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default Faq;

 