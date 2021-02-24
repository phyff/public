import React from 'react';
import {
  Container, Row, Col, ListGroup,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Schedule from './Schedule';
import Svg from '../../../../components/Svg';
import dots3 from '../../../../assets/img/decorations/deco-dots-1.svg';

const ScheduleContainer = () => (
  <section id="schedule">
    <Container>
      <Row className="align-items-center mb-4 layer-2">
        <Col>
          <h2 className="h1 mb-sm-0">Schedule</h2>
          <p className="lead">
            Workshops and panels with film industry professionals are scheduled throughout
            the day, covering a wide variety of general and niche filmmaking
            topics. Whether you want to learn about how films are made or are
            interested in making your own, we'd love to see you at our workshops.
          </p>
        </Col>
      </Row>
      <Schedule
        displayTime
        showNoWorkshops
      />
      <div className="decoration bottom left scale-2 d-none d-md-block">
        <Svg
          className="bg-primary-2"
          src={dots3}
          alt="deco-dots-3 decoration"
        />
      </div>
    </Container>
  </section>
);

export default ScheduleContainer;
