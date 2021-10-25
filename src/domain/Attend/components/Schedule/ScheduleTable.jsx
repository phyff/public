import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ScheduleEntry from './ScheduleEntry';
import scheduleEntryType from '../../../../types/scheduleEntry';

const ScheduleTable = ({ entries, displayTime }) => (
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
      {entries
        .sort((a, b) => (a.time ?? Number.MAX_VALUE) - (b.time ?? Number.MAX_VALUE))
        .map((entry) => (
          <ScheduleEntry
            entry={entry}
            key={entry.title}
            displayTime={displayTime}
          />
        ))}
    </ListGroup>
  </>
);

ScheduleTable.propTypes = {
  entries: PropTypes.arrayOf(scheduleEntryType),
  displayTime: PropTypes.bool,
};

export default ScheduleTable;
