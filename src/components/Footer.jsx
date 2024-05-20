import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="position-absolute top-100 start-50 translate-middle" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", color: "#fff", width: "100%", padding: "20px 0" }}>
      <Container>
        <Row className="justify-content-between">
          <Col md={6} xs={12} className="text-center text-md-start">
            <h1 style={{ fontFamily: 'Arial Narrow, sans-serif', fontSize: '3rem', fontWeight: 'bold' }}>GEEK ROOM JIMS</h1>
            <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: '1.5rem', marginTop: "10px" }}>
              <span style={{ marginRight: 10 }}>Learn</span>
              <span style={{ marginRight: 10 }}>Connect</span>
              <span>Grow</span>
            </h4>
          </Col>
          <Col md={2} xs={12} className="text-center text-md-start mt-4 mt-md-0">
            <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: '1.5rem' }}>Links</h4>
            <ul className="list-unstyled">
              <li><a href='/' style={{ color: "#eaece5", textDecoration: 'none' }}>Home</a></li>
              <li><a href='/' style={{ color: "#eaece5", textDecoration: 'none' }}>About Us</a></li>
              <li><a href='/' style={{ color: "#eaece5", textDecoration: 'none' }}>Contact Us</a></li>
              <li><a href='/' style={{ color: "#eaece5", textDecoration: 'none' }}>Achievements</a></li>
              <li><a href='/' style={{ color: "#eaece5", textDecoration: 'none' }}>Hackathons</a></li>
            </ul>
          </Col>
          <Col md={3} xs={12} className="text-center text-md-start mt-4 mt-md-0">
            <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: '1.5rem' }}>Contact With Us</h4>
            <p style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: '1rem', color: "#eaece5", textAlign: 'justify' }}>
              Jagan Institute of Management Studies Technical Campus- JIMS Rohini 3 Near Rithala Metro Station, Rohini Sector 5, Institutional Area, New Delhi, Delhi 110085
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="https://www.linkedin.com/" className="me-3">
                <FaLinkedin style={{ color: "HighlightText", strokeWidth: "2px", width: "20px", height: "20px" }} />
              </a>
              <a href="https://www.instagram.com/" className="me-3">
                <FaInstagram style={{ color: "HighlightText", strokeWidth: "2px", width: "20px", height: "20px" }} />
              </a>
              <a href="https://www.twitter.com/">
                <FaTwitter style={{ color: "HighlightText", strokeWidth: "2px", width: "20px", height: "20px" }} />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: '1rem', color: "#eaece5" }}>
              &copy; 2024 Copyright: GeekRoomJims.in
            </h4>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="position-absolute top-100 start-50 translate-middle" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", color: "#fff", width: "100%", minHeight: "30%" }}>
//       <Container className="p-5">
//         <Row>
//           <Col md={7}>
//             <h1 style={{ fontFamily: 'Arial Narrow, sans-serif', fontSize: 60, fontWeight: 'bold' }}>GEEK ROOM JIMS</h1>
//             <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: 25, marginTop: "10px" }}>
//               <span style={{ marginRight: 10 }}>Learn</span>
//               <span style={{ marginRight: 10 }}>Connect</span>
//               <span>Grow</span>
//             </h4>
//           </Col>
//           <Col md={2}>
//             <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: 25 }}>Links</h4>
//             <ul className="list-unstyled">
//               <li style={{ marginTop: "10px" }}>
//                 <a href='/' style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: 15, color: "#eaece5" }}>Home</a>
//               </li>
//               <li style={{ marginTop: "8px" }}>
//                 <a href='/' style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: 15, color: "#eaece5" }}>About Us</a>
//               </li>
//               <li style={{ marginTop: "8px" }}>
//                 <a href='/' style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: 15, color: "#eaece5" }}>Contact Us</a>
//               </li>
//               <li style={{ marginTop: "8px" }}>
//                 <a href='/' style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: 15, color: "#eaece5" }}>Achievements</a>
//               </li>
//               <li style={{ marginTop: "8px" }}>
//                 <a href='/' style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: 15, color: "#eaece5" }}>Hackathons</a>
//               </li>
//             </ul>
//           </Col>
//           <Col md={3}>
//             <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: 25 }}>Contact With Us</h4>
//             <p style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: 15, color: "#eaece5", textAlign: 'justify' }}>
//               Jagan Institute of Management Studies Technical Campus- JIMS Rohini 3 Near Rithala Metro Station, Rohini Sector 5, Institutional Area, New Delhi, Delhi 110085
//             </p>
//             <div className="d-flex" style={{ marginTop: "5px" }}>
//               <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
//                 <FaLinkedin className="footer-icon" style={{ color: "HighlightText", width: "20px", height: "20px" }} />
//               </a> &nbsp; &nbsp;
//               <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram className="footer-icon" style={{ color: "HighlightText", width: "20px", height: "20px" }} />
//               </a> &nbsp; &nbsp;
//               <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
//                 <FaTwitter className="footer-icon" style={{ color: "HighlightText", width: "20px", height: "20px" }} />
//               </a>
//             </div>
//           </Col>
//           <Col md={12}>
//             <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif', fontSize: 18, color: "#eaece5", textAlign: 'center', marginTop: "20px" }}>
//               &copy; 2024 Copyright: GeekRoomJims.in
//             </h4>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

///export default Footer;

// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FaTimes, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { FaX } from 'react-icons/fa6';

// const Footer = () => {

//   return (
//     <footer className="position-absolute top-100 start-50 translate-middle" style={{backgroundColor: "rgba(0, 0, 0, 0.4)", color: "#fff", minWidth: "100%", minHeight: "30%" }}>
//       <Container className='p-5'>
//         <Row>
//           <Col md={7}>
//             <h1 style={{ fontFamily: 'Arial Narrow, sans-serif',fontSize:60, fontWeight: 'bold'}}>GEEK ROOM JIMS</h1>
//             <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif',fontSize:25, marginTop: "10px" }}>&nbsp;<span style={{ marginRight: 10 }}>Learn</span><span style={{ marginRight: 10 }}>Connect</span><span>Grow</span></h4>
//           </Col>
//           <Col md={2}>
//             <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif',fontSize:25 }}>Links</h4>
//             <br></br>
//             <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif',fontSize:15,color: "#eaece5", marginTop: "10px" }}><a href='/'>Home</a></h4>
//             <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif',fontSize:15,color: "#eaece5", marginTop: "8px"}}><a href='/'>About Us</a></h4>
//             <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif',fontSize:15,color: "#eaece5", marginTop: "8px"  }}><a href='/'>Contact Us</a></h4>
//             <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif',fontSize:15,color: "#eaece5", marginTop: "8px"  }}><a href='/'>Achievements</a></h4>
//             <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif',fontSize:15,color: "#eaece5", marginTop: "8px"  }}><a href='/'>Hackathons</a></h4>
//           </Col>
//           <Col md={3}>
//             <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif',fontSize:25 }}>Contact With Us</h4>
//             <br></br>
//             <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif',fontSize:15,color: "#eaece5",textAlign: 'justify'}}>Jagan Institute of Management Studies Technical Campus- JIMS Rohini 3 Near Rithala Metro Station, Rohini Sector 5, Institutional Area, New Delhi, Delhi 110085</h4>
//             <div className = "d-flex" style={{ marginTop: "5px"}}>
//                 <a href = "https://www.linkedn.com/" ><FaLinkedin className="footer-icon" style= {{ color: "HighlightText", strokeWidth: "2px",  width: "20px", height: "20px"}} /></a> &nbsp; &nbsp; 
//                 <a href = "https://www.instagram.com/"><FaInstagram className="footer-icon" style= {{ color: "HighlightText",  strokeWidth: "2px",  width: "20px", height: "20px"}} /></a> &nbsp; &nbsp; 
//                 <a href = "https://www.twitter.com/"><FaTwitter className="footer-icon" style= {{ color: "HighlightText",  strokeWidth: "2px",  width: "20px", height: "20px"}} /></a> 
//             </div>
//           </Col>
//           <Col md={1}>
//           </Col>
//         </Row>
//         <br></br>
//         <h4 style={{ fontFamily: 'Bahnschrift Light, sans-serif',fontSize:18,color: "#eaece5",textAlign: 'justify', marginLeft: "40%",}}>&copy; 2024 Copyright: GeekRoomJims.in</h4>
//       </Container>
//     </footer>
  
//   );
// };

// export default Footer;
