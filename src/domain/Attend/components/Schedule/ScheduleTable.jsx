import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ScheduleWorkshop from './ScheduleWorkshop';
import workshopType from '../../../../types/workshop';

const ScheduleTable = ({ workshops, displayTime }) => (
  <>
    <Row className="no-gutters d-none d-md-flex bg-white py-3">
      <Col xl={6} md={5}>
        <span className="h6 mb-0 text-muted">Workshop</span>
      </Col>
      { displayTime && (
      <Col>
        <span className="h6 mb-0 text-muted">Time</span>
      </Col>
      )}
      <Col>
        <span className="h6 mb-0 text-muted">Presenter</span>
      </Col>
      <Col className="d-none d-md-block" />
    </Row>
    <ListGroup
      variant="flush"
    >
      {workshops
        .sort((a, b) => (a.time ?? Number.MAX_VALUE) - (b.time ?? Number.MAX_VALUE))
        .map((workshop, index) => (
          <ScheduleWorkshop
            workshop={workshop}
            delay={index * 50}
            key={workshop.title}
            displayTime={displayTime}
          />
        ))}
    </ListGroup>
  </>
);

ScheduleTable.propTypes = {
  workshops: PropTypes.arrayOf(workshopType),
  displayTime: PropTypes.bool,
};

export default ScheduleTable;
