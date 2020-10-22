import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import desc1 from '../../../assets/img/content/workshop.jpg';
import desc2 from '../../../assets/img/content/presentation-2.jpg';
import desc3 from '../../../assets/img/content/awards-1.jpg';

const Description = () => (
  <section>
    <Container>
      <Row className="align-items-center justify-content-around">
        <Col md={6} xl={5} className="mb-3 mb-md-0">
          <Row className="justify-content-center">
            <Col xl={10} lg={11}>
              <h3 className="display-4">Learn, Share, Achieve.</h3>
              <p className="lead">This festival is a great opportunity to show off work and get critiques,
                as well as to network with peers from the area and make connections.
                Filmmaking experts will judge and rank submitted films in four categories:
                narrative, documentary, experimental, and screenplay. At each festival,
                we offer several workshops on a variety of common and niche filmmaking focuses.
              </p>
              <Link to="/winners" className="lead hover-arrow">See Last Year&apos;s Winners</Link>
            </Col>
          </Row>
        </Col>
        <Col md={5} lg={6} className="mb-3 mb-md-0">
          <div className="image-collage">
            { /* Theme depends on anchors, but these images should not redirect on click */
              /* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              data-fancybox="Collage Gallery"
              className="d-none d-lg-block"
            >
              <div data-jarallax-element="0 12">
                <img
                  src={desc1}
                  alt="Description"
                  className="rounded"
                  data-aos="fade-right"
                />
              </div>
            </a>
            { /* Theme depends on anchors, but these images should not redirect on click */
              /* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              data-fancybox="Collage Gallery"
            >
              <div data-jarallax-element="0 6">
                <img
                  src={desc2}
                  alt="Description"
                  className="rounded"
                  data-aos="fade-up"
                />
              </div>
            </a>
            { /* Theme depends on anchors, but these images should not redirect on click */
              /* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              data-fancybox="Collage Gallery"
              className="d-none d-lg-block"
            >
              <div data-jarallax-element="0 -12">
                <img
                  src={desc3}
                  alt="Description"
                  className="rounded"
                  data-aos="fade-left"
                />
              </div>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Description;
