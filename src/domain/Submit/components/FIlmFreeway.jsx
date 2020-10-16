import React from 'react';
import {
  Button, Card, Col, Container, Row,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import filmfreeway from '../../../assets/img/content/filmfreeway.png';
import filmfreewayLogoWhite from '../../../assets/img/content/filmfreeway-logo-white.png';
import Svg from '../../../components/Svg';
import divider from '../../../assets/img/dividers/divider-3.svg';

const FilmFreeway = ({ submissionDeadline }) => {
  const submissionsOpen = Date.now() < (submissionDeadline ?? Number.MAX_SAFE_INTEGER);

  return (
    <section className="bg-white has-divider">
      <Container>
        <Row className="justify-content-around o-hidden o-lg-visible mb-5">
          <Col xl={5} md={6} className="mb-4 mb-md-0" data-aos="fade">
            <h3 className="h1">{submissionsOpen ? 'Submissions Are Open!' : 'Submissions Are Closed'}</h3>
            <p className="lead">The Philadelphia Youth Film Festival accepts entries on
              FilmFreeway, the world&apos;s #1 way to enter film festivals and creative contests.
              Visit our FilmFreeway page to submit and see more submission details.
            </p>
            <a href="https://filmfreeway.com/phyff" className="lead hover-arrow">Visit our FilmFreeway
              page
            </a>
          </Col>
          <Col xl={4} lg={5} md={6} className="mb-lg-n7 layer-2" data-aos="fade-left">
            <Card className="rotate-right hover-shadow-3d mb-lg-4">
              <Card.Img variant="top" src={filmfreeway} alt="Film Freeeway page" />
              <Card.Body>
                <a
                  href="https://filmfreeway.com/phyff"
                >
                  <Button className="bg-gradient-primary">
                    <img src={filmfreewayLogoWhite} alt="Submit" />
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="divider">
        <Svg className="bg-primary-alt flip-x" src={divider} alt="divider graphic" />
      </div>
    </section>
  );
};

FilmFreeway.propTypes = {
  submissionDeadline: PropTypes.number,
};

export default FilmFreeway;
