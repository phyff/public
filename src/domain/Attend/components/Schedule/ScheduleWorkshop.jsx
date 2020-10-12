import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import moment from 'moment';
import PropTypes from 'prop-types';
import workshopType from '../../../../types/workshop';

const ScheduleWorkshop = ({ workshop, delay }) => (
  <ListGroup.Item
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <Row className="no-gutters align-items-center py-3 text-dark">
      <Col xl={7} md={6}>
        <h5 className="mb-0">{workshop.title}</h5>
      </Col>
      <Col md>
        <span>{moment(new Date(workshop.time)).format('h:mm A')}</span>
      </Col>
      <Col md>
        <div className="d-flex align-items-center mt-2 mt-md-0">
          <img
            src={workshop.speaker.image}
            alt={workshop.speaker.name}
            className="avatar avatar-sm mr-2"
          />
          <span className="h6 mb-0">{workshop.speaker.name}</span>
        </div>
      </Col>
    </Row>
  </ListGroup.Item>
);

ScheduleWorkshop.propTypes = {
  workshop: workshopType,
  delay: PropTypes.number,
};

export default ScheduleWorkshop;
