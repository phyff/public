import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Svg from '../../../../../components/Svg';
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
      {workshops
        .sort((a, b) => (b.speaker.image ? 1 : 0) - (a.speaker.image ? 1 : 0))
        .filter((workshop) => workshops.find(
          ({ speaker }) => speaker.name === workshop.speaker.name,
        ) === workshop)
        .map((workshop, index) => (
          <Col
            sm={6}
            lg={4}
            className="d-flex align-items-center mb-5"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            key={`wp-s-${workshop.title}`}
          >
            {workshop.speaker.image
              ? (
                <div
                  style={{
                    backgroundImage: `url(${workshop.speaker.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                  }}
                  className="avatar avatar-xlg mr-3"
                />
              )
              : <Svg src={profile} alt={workshop.speaker.name} className="avatar avatar-xlg icon bg-primary mr-3" />}
            <div>
              <h5 className="mb-0">{workshop.speaker.name}</h5>
              <small>{workshop.speaker.contact ?? workshop.speaker.affiliation}</small>
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
