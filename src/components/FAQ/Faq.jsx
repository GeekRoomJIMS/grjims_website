import { Accordion } from 'react-bootstrap';
import './faqStyle.css'
function Faq() {
  return (
    <>
      <Accordion className="mt-5 p-3 position-absolute top-80 start-50 translate-middle">
        <h2 class="multicolor-underline" style={{ marginLeft: "8px" }}>Have a question?</h2> <br />
        <Accordion.Item eventKey='0' className='item' style={{ backgroundColor: "rgba(0, 0, 0, 0)", color: "#fff" }}>
          <Accordion.Header style={{ fontFamily: 'Bahnschrift Light, sans-serif', color: "HighlightText", fontSize: 20, backgroundColor: "rgba(0, 0, 0, 0.2)", borderRadius: 8}}>How do I become a member?</Accordion.Header>
          <Accordion.Body style={{ fontFamily: 'Bahnschrift Light, sans-serif', color: "HighlightText", strokeWidth: "8px", fontSize: 15 }}>
            helllooo
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1' className='item' style={{ backgroundColor: "rgba(0, 0, 0, 0)", color: "#fff" }}>
          <Accordion.Header style={{ fontFamily: 'Bahnschrift Light, sans-serif', color: "HighlightText", fontSize: 20, backgroundColor: "rgba(0, 0, 0, 0.2)", borderRadius: 8,}}>How do I become a member?</Accordion.Header>
          <Accordion.Body style={{ fontFamily: 'Bahnschrift Light, sans-serif', color: "HighlightText", strokeWidth: "8px", fontSize: 15 }}>
            helllooo
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2' className='item' style={{ backgroundColor: "rgba(0, 0, 0, 0)", color: "#fff" }}>
          <Accordion.Header style={{ fontFamily: 'Bahnschrift Light, sans-serif', color: "HighlightText", fontSize: 20, backgroundColor: "rgba(0, 0, 0, 0.2)", borderRadius: 8,}}>How do I become a member?</Accordion.Header>
          <Accordion.Body style={{ fontFamily: 'Bahnschrift Light, sans-serif', color: "HighlightText", strokeWidth: "8px", fontSize: 15 }}>
            helllooos
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default Faq;
