import React from 'react';
import {
  Col, ListGroup, Row, Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import winner from '../../../../types/winner';

const WinnerRow = ({ winner, delay }) => {
  const {
    title, director, local, place, url,
  } = winner || {};
  const placeColors = ['gold', 'silver', 'darkgoldenrod'];

  return (
    <ListGroup.Item
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <Row className="no-gutters align-items-center justify-content-center py-3 text-dark">
        <Col md={4} sm={10} className="text-center text-md-left">
          <h5>
            <FontAwesomeIcon
              icon={faAward}
              size="lg"
              color={placeColors[place - 1]}
            /> {title}
          </h5>
        </Col>
        <Col md={2} sm={3} className="text-center mb-1">
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              <Button>
                View <FontAwesomeIcon icon={faExternalLinkAlt} />
              </Button>
            </a>
          )}
        </Col>
        {local && (
          <Col md={1} sm={3} className="text-center mb-1">
            <span className="badge badge-pill badge-primary-2 m-1">Local</span>
          </Col>
        )}
        <Col md={5} sm={10} className="text-center text-md-right ml-md-auto">
          <span className="w-100">{director}</span>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

WinnerRow.propTypes = {
  winner,
  delay: PropTypes.number,
};

export default WinnerRow;
