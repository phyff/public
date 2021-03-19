import React from 'react';
import {
  Col, Container, Row,
} from 'react-bootstrap';
import moment from 'moment';
import Svg from '../../../components/Svg';
import clock from '../../../assets/img/icons/theme/home/clock.svg';
import earth from '../../../assets/img/icons/theme/home/earth.svg';
import user from '../../../assets/img/icons/theme/general/user.svg';
import question from '../../../assets/img/icons/theme/code/question-circle.svg';
import warning from '../../../assets/img/icons/theme/code/warning-2.svg';
import dots3 from '../../../assets/img/decorations/deco-dots-2.svg';
import blob13 from '../../../assets/img/decorations/deco-blob-13.svg';
import blob2 from '../../../assets/img/decorations/deco-blob-2.svg';
import divider from '../../../assets/img/dividers/divider-3.svg';
import useEventInfo from '../../../hooks/useEventInfo';

const EventDetails = () => {
  const { date, address } = useEventInfo();
  const covid = true;

  return (
    <section className="bg-primary has-divider">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Row className="justify-content-center layer-2">
              <Col md={5} sm={8} xs={10} className="mb-3">
                <div
                  className="card card-icon-3 card-body h-100 justify-content-between"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon-round mb-3 mb-md-4 bg-primary-2">
                    <Svg
                      className="icon icon-lg bg-primary-2"
                      src={user}
                      alt="user"
                    />
                  </div>
                  <h4>Who?</h4>
                  <p>
                    You! The Fest is free and open to all high-school students.
                    Whether you make films or just like watching them we'd love
                    to see you at the Fest. Submissions are open to high schoolers,
                    14 to 19 years of age.
                  </p>
                </div>
              </Col>
              <Col md={5} sm={8} xs={10} className="mb-3">
                <div
                  className="card card-icon-3 card-body h-100 justify-content-between"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon-round mb-3 mb-md-4 bg-primary-2">
                    <Svg
                      className="icon icon-lg bg-primary-2"
                      src={question}
                      alt="question"
                    />
                  </div>
                  <h4>What?</h4>
                  <p>
                    The Fest features a keynote speaker, workshops with industry professionals,
                    and screenings/awards for the best submissions! The Fest is a great
                    opportunity to make connections or just chat with local filmmakers and
                    similarly passionate students.
                  </p>
                </div>
              </Col>
              <Col md={5} sm={8} xs={10} className="mb-3">
                <div
                  className="card card-icon-3 card-body h-100 justify-content-between"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon-round mb-3 mb-md-4 bg-primary-2">
                    <Svg
                      className="icon icon-lg bg-primary-2"
                      src={clock}
                      alt="clock"
                    />
                  </div>
                  <h4>When?</h4>
                  <p>
                    The Fest will take place on&nbsp;
                    <strong>{moment(date?.toDate()).format('dddd, MMMM Do YYYY')}</strong>&nbsp;
                    from&nbsp;
                    <strong>11:00 am to 5:00 pm EST</strong>&nbsp;
                     (Philadelphia). You can arrive and leave at any time. We
                    recommend staying for the entire event; there are workshops and screenings
                    scheduled throughout the day!
                  </p>
                </div>
              </Col>
              <Col md={5} sm={8} xs={10} className="mb-3">
                <div
                  className="card card-icon-3 card-body h-100 justify-content-between"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon-round mb-3 mb-md-4 bg-primary-2">
                    <Svg
                      className="icon icon-lg bg-primary-2"
                      src={earth}
                      alt="earth"
                    />
                  </div>
                  <h4>{covid && (
                  <Svg
                    className="icon icon-md bg-primary"
                    externalClassnames="d-inline-block"
                    src={warning}
                    alt="earth"
                  />
                  )}
                    Where?
                  </h4>
                  {
                    covid ? (
                      <p>
                        The Fest is hosted by&nbsp;
                        <a href={`https://www.google.com/maps/search/?api=1&query=${address}`} target="_blank">
                          Germantown Friends School, located in Philadelphia, Pennsylvania
                        </a>.
                        Due to COVID restrictions, this year's event will be all virtual.
                      </p>
                    ) : (
                      <p>
                        The Fest is hosted on the campus of&nbsp;
                        <a href={`https://www.google.com/maps/search/?api=1&query=${address}`} target="_blank">Germantown Friends School</a>,
                        in the Sharpless building. There will be signs
                        guiding you around campus on the day of the event.
                      </p>
                    )
                  }
                </div>
              </Col>
            </Row>
            <div>
              <div className="decoration top left scale-2 d-none d-md-block">
                <Svg
                  className="bg-primary-3"
                  src={blob13}
                  alt="deco-blob-13 decoration"
                />
              </div>
              <div className="decoration bottom right scale-2 d-none d-md-block">
                <Svg
                  className="bg-primary-alt"
                  src={blob2}
                  alt="deco-blob-13 decoration"
                />
              </div>
              <div className="decoration bottom right scale-2 d-none d-md-block">
                <Svg
                  className="bg-primary-2"
                  src={dots3}
                  alt="deco-dots-3 decoration"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="divider">
        <Svg className="bg-white flip-x" src={divider} alt="divider graphic" />
      </div>
    </section>
  );
};

export default EventDetails;
