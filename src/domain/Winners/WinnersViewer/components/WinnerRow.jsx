import React from 'react';
import {
  Col, ListGroup, Row, Button, Tooltip, OverlayTrigger,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import winnerType from '../../../../types/winner';

const WinnerRow = ({ winner, delay }) => {
  const {
    title, director, local, place, url, specialAward, gfs,
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
        <Col md={1} sm={3} className="text-center mb-1">
          {local && (
          <OverlayTrigger
            placement="right"
            delay={{ show: 400, hide: 250 }}
            overlay={(props) => (
              <Tooltip {...props}>
                <strong>{title}</strong> was created by a filmmaker from the Philadelphia area.
              </Tooltip>
            )}
          >
            <span className="badge badge-pill badge-primary-2 m-1">Local</span>
          </OverlayTrigger>
          )}
          {gfs && (
          <OverlayTrigger
            placement="right"
            delay={{ show: 400, hide: 250 }}
            overlay={(props) => (
              <Tooltip {...props}>
                {/* eslint-disable-next-line max-len */}
                <strong>{title}</strong> was created by a filmmaker attending Germantown Friends School.
              </Tooltip>
            )}
          >
            <span className="badge badge-pill badge-warning m-1">gfs</span>
          </OverlayTrigger>
          )}
          {specialAward && (
          <OverlayTrigger
            placement="right"
            delay={{ show: 400, hide: 250 }}
            overlay={(props) => (
              <Tooltip {...props}>
                <strong>{title}</strong> won the "{specialAward}" award.
              </Tooltip>
            )}
          >
            <span className="badge badge-pill badge-warning m-1">Special</span>
          </OverlayTrigger>
          )}
        </Col>
        <Col md={5} sm={10} className="text-center text-md-right ml-md-auto">
          <span className="w-100">{director}</span>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

WinnerRow.propTypes = {
  winner: winnerType,
  delay: PropTypes.number,
};

export default WinnerRow;
