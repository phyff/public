import React, { useState } from 'react';
import {
  Row, Col, ListGroup, Button, Collapse,
} from 'react-bootstrap';
import moment from 'moment';
import PropTypes from 'prop-types';
import workshopType from '../../../../types/workshop';
import profile from '../../../../assets/img/icons/theme/general/user.svg';
import control from '../../../../assets/img/icons/theme/code/control.svg';
import Svg from '../../../../components/Svg';

const ScheduleWorkshop = ({ workshop, delay, displayTime }) => {
  const [open, setOpen] = useState(false);
  const timeContents = workshop.allDay
    ? (<span className="badge badge-pill badge-success">Both Times</span>)
    : (<span>{workshop.time ? `${moment(new Date(workshop.time)).format('h:mm A')} - ${moment(new Date(workshop.endTime)).format('h:mm A')}` : 'TBD'}</span>);

  return (
    <ListGroup.Item
        data-aos="fade-up"
        data-aos-delay={delay ?? 0}
    >
      <Row className="no-gutters align-items-center py-3 text-dark">
        <Col xl={6} md={5}>
          <h5 className="mb-0">{workshop.title}</h5>
        </Col>
        {displayTime && (
        <Col md>
          {timeContents}
        </Col>
        )}
        <Col md>
          <div className="d-flex align-items-center mt-2 mt-md-0">
            {workshop.speaker.image
              ? (
                <div
                  style={{
                    backgroundImage: `url(${workshop.speaker.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                  }}
                  className="avatar avatar-sm mr-3"
                />
              )
              : <Svg src={profile} alt={workshop.speaker.name} className="avatar avatar-sm icon bg-primary mr-3" />}
            <span className="h6 mb-0">{workshop.speaker.name}</span>
          </div>
        </Col>
        <Col className="d-none d-md-block">
          {workshop.description && (
          <Button
            onClick={() => setOpen(!open)}
            className="border-0 bg-transparent btn-light"
            aria-controls="workshop-description"
            aria-expanded={open}
          >
            <Svg className="icon bg-dark" src={control} alt="Control" style={{ transform: `rotate(${open ? 0.5 : 0.25}turn)`, transition: '0.2s' }} />
          </Button>
          )}
        </Col>
      </Row>
      {workshop.description && (
        <Collapse in={open}>
          <div id="workshop-description">
            <Row>
              <Col>
                {workshop.description}
              </Col>
            </Row>
            <Row>
              <Col className="mt-3 text-small">
                {workshop.speaker.affiliation ?? workshop.speaker.contact}
              </Col>
            </Row>
          </div>
        </Collapse>
      )}
    </ListGroup.Item>
  );
};

ScheduleWorkshop.propTypes = {
  workshop: workshopType,
  delay: PropTypes.number,
  displayTime: PropTypes.bool,
};

export default ScheduleWorkshop;
