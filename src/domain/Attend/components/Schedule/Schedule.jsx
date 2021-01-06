import React from 'react';
import {
  Container, Row, Col, ListGroup,
} from 'react-bootstrap';
import ScheduleWorkshop from './ScheduleWorkshop';
import Svg from '../../../../components/Svg';
import dots3 from '../../../../assets/img/decorations/deco-dots-1.svg';
import NoWorkshops from './NoWorkshops';
import useWorkshops from '../../../../hooks/useWorkshops';
import Loading from '../../../../components/Loading';

const Schedule = () => {
  const { workshops, isLoaded } = useWorkshops();

  const displayIfEmpty = isLoaded
    ? <NoWorkshops />
    : (
      <div className="min-vh-70 h-100 w-100 p-0 m-0 border-0 card card-body justify-content-center">
        <Loading className="ml-auto mr-auto" />
      </div>
    );

  return (
    <section id="schedule">
      <Container>
        <Row className="align-items-center mb-4 layer-2">
          <Col>
            <h2 className="h1 mb-sm-0">Schedule</h2>
            <p className="lead">
              Workshops with film industry professionals are scheduled throughout
              the day, covering a wide variety of common and niche filmmaking
              topics. Whether you want to learn about how films are made or are
              interested in making your own, we'd love to see you at our workshops.
            </p>
          </Col>
        </Row>
        <div className={`card card-body layer-2 ${workshops.length === 0 && 'rotate-right shadow-3d'}`}>
          {workshops.length > 0
            ? (
              <>
                <Row className="no-gutters d-none d-md-flex bg-white py-3">
                  <Col xl={7} md={6}>
                    <span className="h6 mb-0 text-muted">Workshop</span>
                  </Col>
                  <Col>
                    <span className="h6 mb-0 text-muted">Time</span>
                  </Col>
                  <Col>
                    <span className="h6 mb-0 text-muted">Presenter</span>
                  </Col>
                </Row>
                <ListGroup
                  variant="flush"
                >
                  {workshops
                    .sort((a, b) => a.time - b.time)
                    .map((workshop, index) => (
                      <ScheduleWorkshop
                        workshop={workshop}
                        delay={index * 50}
                        key={workshop.title}
                      />
                    ))}
                </ListGroup>
              </>
            )
            : displayIfEmpty}
        </div>
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
};

export default Schedule;
