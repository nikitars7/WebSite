import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import sharpColor from "../assets/images/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skills-bx">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam quasi voluptas et quod debitis maxime.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skills-slider"
              >
                <article className="item">
                  <img src={meter1} alt="image" />
                  <h3>Web development</h3>
                </article>
                <article className="item">
                  <img src={meter2} alt="image" />
                  <h3>Web development</h3>
                </article>
                <article className="item">
                  <img src={meter3} alt="image" />
                  <h3>Web development</h3>
                </article>
                <article className="item">
                  <img src={meter1} alt="image" />
                  <h3>Web development</h3>
                </article>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={sharpColor}
        alt="background"
        className="skills-background-left"
      />
    </section>
  );
};

export default Skills;
