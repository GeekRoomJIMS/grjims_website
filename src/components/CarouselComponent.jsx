import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import img1 from "../assets/carousel-images/img1.jpg";
import img2 from "../assets/carousel-images/img2.jpg";
import img3 from "../assets/carousel-images/img3.jpg";

function CarouselComponent() {
  return (
    <Carousel fade className="mt-5 h-81">
      <Carousel.Item>
        <img className="d-block w-full" src={img1} alt="Geek Room Event" />
        <Carousel.Caption>
          <h5>Introduction Event</h5>
          <p>A Geek Room Introduction event hosted in JIMS, Rohini</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full"
          src={img2}
          alt="Geek Room Hackathon Event"
        />
        <Carousel.Caption>
          <h5>Hackathon</h5>
          <p>
            Students coding in a hackathon, which was hosted by Geek Room JIMS
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-full" src={img3} alt="Hackathon Trophies" />
        <Carousel.Caption>
          <h5>Hackathon Awards</h5>
          <p>
            Awards given out to deserving students and judges during Geek Room
            JIMS' events
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
