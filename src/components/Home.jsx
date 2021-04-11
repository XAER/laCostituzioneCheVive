import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import brain from "../assets/images/brain.png";
import opinion from "../assets/images/opinion.png";
import education from "../assets/images/education.png";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - La costituzione che vive</title>
      </Helmet>
      <section id="center-body" className="center-body">
        <h1>Il nostro obiettivo</h1>
        <Row style={{ textAlign: "center", paddingTop: "10vh" }}>
          <Col>
            <img alt="brain" src={brain} style={{ height: "120px" }} />
            <h4 className="image-section">Conoscenza</h4>
          </Col>
          <Col>
            <img alt="opinion" src={opinion} style={{ height: "120px" }} />
            <h4 className="image-section">Opinioni</h4>
          </Col>
          <Col>
            <img alt="education" src={education} style={{ height: "120px" }} />
            <h4 className="image-section">Educazione</h4>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Home;
