import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import attend from '../../../../../assets/img/content/attend.jpg';
import submit from '../../../../../assets/img/content/submit.jpg';
import learn from '../../../../../assets/img/content/learn.jpg';
import more from '../../../../../assets/img/content/more.jpg';

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
          <Col
            md={6}
            lg={3}
            className="d-flex"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            key={`wp-t-${workshop.title}`}
          >
            <Link
              to="/attend#schedule"
              className={`card card-icon-2 card-body border-0 justify-content-between hover-shadow-3d text-light ${
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
          <Link to="/attend#schedule" className="hover-arrow">View all workshops</Link>
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
