import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTimes, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {

  return (
    <footer className="position-absolute top-100 start-50 translate-middle" style={{backgroundColor: "black", color: "white", minWidth: "100%", minHeight: "40%"}}>
      <Container className='p-5'>
        <Row>
          <Col md={6}>
            <h1 style={{ fontFamily: 'Arial Narrow, sans-serif',fontSize:60}}>GEEK ROOM JIMS</h1>
            <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif',fontSize:25 }}>&nbsp;Learn.Connect.Grow</h4>
          </Col>
          <Col md={2}>
            <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif',fontSize:25 }}>Links</h4>
            <br></br>
            <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif',fontSize:15,color: "#eaece5" }}>Home</h4>
            <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif',fontSize:15,color: "#eaece5"  }}>About Us</h4>
            <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif',fontSize:15,color: "#eaece5"  }}>Achievements</h4>
            <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif',fontSize:15,color: "#eaece5"  }}>Hackathons</h4>
          </Col>
          <Col md={3}>
            <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif',fontSize:25 }}>Contact</h4>
            <br></br>
            <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif',fontSize:15,color: "#eaece5",textAlign: 'justify'  }}>Jagan Institute of Management Studies Technical Campus- JIMS Rohini 3 Near Rithala Metro Station Rohini Sector 5, Institutional Area, New Delhi, Delhi 110085</h4>
            <div className = "d-flex">
                <a href = "https://www.linkedn.com/" ><FaLinkedin className="footer-icon" style= {{ color: "white", fontsize: "30px"}} /></a> &nbsp; &nbsp; 
                <a href = "https://www.instagram.com/"><FaInstagram className="footer-icon" style= {{ color: "white", fontsize: "30px"}} /></a> &nbsp; &nbsp; 
                <a href = "https://www.twitter.com/"><FaTimes className="footer-icon" style= {{ color: "white", fontsize: "30px"}} /></a> 
            </div>
          </Col>
          <Col md={1}>
          </Col>
        </Row>
      </Container>
    </footer>
  
  );
};

export default Footer;
