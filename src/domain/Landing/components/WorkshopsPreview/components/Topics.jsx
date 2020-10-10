import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import attend from '../../../../../assets/img/attend.jpg';
import submit from '../../../../../assets/img/submit.jpg';
import learn from '../../../../../assets/img/learn.jpg';
import more from '../../../../../assets/img/more.jpg';
import profile from '../../../../../assets/img/icons/theme/general/user.svg';
import Svg from '../../../../../components/Svg';

const Topics = ({ workshops, count }) => {
  const getBackgroundImage = (index) => {
    const images = [attend, submit, learn, more];
    return images[index !== undefined
      ? (index % images.length)
      : Math.floor(index ? index % images.length : Math.random() * images.length)
    ];
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2 className="h1">Covering topics like</h2>
        </Col>
      </Row>
      <Row>
        {workshops.slice(0, count ?? 4).map((workshop, index) => (
          <Col md={6} lg={3} className="d-flex" data-aos="fade-up" data-aos-delay={index * 100}>
            <Link
              to="#"
              className={`card card-icon-2 card-body justify-content-between hover-shadow-3d text-light ${
                ['bg-primary', 'bg-primary-2', 'bg-primary-3'][index % 3]
              }`}
            >
              {workshop.speaker.image && (
                <img
                  className="icon-round mb-3 mb-md-4 icon bg-primary layer-2"
                  src={workshop.speaker.image}
                  alt={workshop.speaker.name}
                />
              )}
              <h5 className="mb-0 layer-2">{workshop.title}</h5>
              <img className="bg-image opacity-50" src={workshop.image ?? getBackgroundImage(index)} alt={workshop.title} />
            </Link>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <Link to="/attend#workshop" className="hover-arrow">View all workshops</Link>
        </Col>
      </Row>
    </Container>
  );
};

Topics.propTypes = {
  workshops: PropTypes.array,
  count: PropTypes.number,
};

export default Topics;
