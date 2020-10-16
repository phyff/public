import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Svg from '../../../components/Svg';
import blob13 from '../../../assets/img/decorations/deco-blob-13.svg';
import dots3 from '../../../assets/img/decorations/deco-dots-2.svg';
import blob1 from '../../../assets/img/decorations/deco-blob-1.svg';

const Participate = () => (
  <section className="bg-primary text-light has-divider">
    <Container>
      <Row className="mb-4 justify-content-center text-center">
        <Col xl={8} lg={9}>
          <h2 className="display-4">Participate in the Festival</h2>
          <p className="lead">The Fest is open to all high-school students.
            Both submission and attendance are free.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={8} xl={7}>
          <div
            className="card card-lg card-body flex-sm-row align-items-center film-primary bg-white text-primary layer-2"
            data-aos="fade-right"
            data-aos-delay={100}
          >
            <div className="mx-2 text-center text-sm-left mb-3 mb-sm-0">
              <span className="h1 d-block text-primary">Submit</span>
              <p className="lead pr-xl-3">
                Submit your film to the Fest. Submissions are open to high schoolers
                in the greater Philadelphia area and beyond, 14 to 19 years of age.
              </p>
              <Link to="/submit" className="btn btn-lg mt-2 btn-primary">Submit</Link>
            </div>
          </div>
          <div
            className="card card-lg card-body flex-sm-row align-items-center pricing-ticket-primary bg-primary-2 layer-2"
            data-aos="fade-left"
            data-aos-delay={200}
          >
            <div className="mx-2 text-center text-sm-left mb-3 mb-sm-0">
              <span className="h1 d-block">Attend</span>
              <p className="lead pr-xl-3">
                Attend any workshop and event throughout the Fest. Whether you make films or
                just like watching them, we&apos;d love to see you there.
              </p>
              <Link to="/attend" className="btn btn-lg mt-2 btn-white">Sign Up</Link>
            </div>
            <div className="mx-2 text-center">
              <div className="d-flex align-items-center">
                <span className="h3 mb-0">$</span>
                <span className="display-3">0</span>
              </div>
            </div>
          </div>
          <div className="decoration top left scale-2 d-none d-md-block">
            <Svg
              className="bg-primary-3"
              src={dots3}
              alt="deco-dots-3 decoration"
            />
          </div>
          <div className="decoration bottom right scale-2 d-none d-md-block">
            <Svg
              className="bg-white"
              src={blob13}
              alt="deco-blob-13 decoration"
            />
          </div>
          <div className="text-center">
            <span>Want to sponsor the event? <a href="#" className="hover-arrow">Get in touch</a>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Participate;
