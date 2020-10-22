import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import profile from '../../../../../assets/img/icons/theme/general/user.svg';
import workshopType from '../../../../../types/workshop';

const Speakers = ({ workshops }) => (
  <Container>
    <Row className="mb-4">
      <Col>
        <h2 className="h1">Featuring workshops with</h2>
      </Col>
    </Row>
    <Row>
      {workshops.map((workshop, index) => (
        <Col
          sm={6}
          lg={4}
          className="d-flex align-items-center mb-5"
          data-aos="fade-up"
          data-aos-delay={index * 100}
          key={`wp-s-${workshop.title}`}
        >
          <img src={workshop.speaker.image ?? profile} alt={workshop.speaker.name} className="avatar avatar-xlg mr-3" />
          <div>
            <h5 className="mb-0">{workshop.speaker.name}</h5>
            {workshop.speaker.contact && (
              <small>{workshop.speaker.contact}</small>
            )}
          </div>
        </Col>
      ))}
    </Row>
  </Container>
);

Speakers.propTypes = {
  workshops: PropTypes.arrayOf(workshopType),
};

export default Speakers;
