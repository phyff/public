import {
  Card, Col, Container, Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import Svg from '../../../../../components/Svg';
import videoCamera from '../../../../../assets/img/icons/theme/devices/video-camera.svg';
import movieLane from '../../../../../assets/img/icons/theme/media/movie-lane-1.svg';
import clipboardCheck from '../../../../../assets/img/icons/theme/communication/clipboard-check.svg';

const SubmissionDetails = () => (
  <Container>
    <Row className="justify-content-center text-center mb-4">
      <Col xl={8} lg={9}>
        <h2 className="h1">Submission Details</h2>
        <p className="lead">Visit our <Link to="https://filmfreeway.com/phyff">FilmFreeway</Link> page for more details.
        </p>
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col lg={4} md={6} sm={12} className="mb-2">
        <Card className="h-100" data-aos="fade-up" data-aos-delay="100">
          <Card.Body>
            <div className="icon-round mb-3 mb-md-4 bg-primary">
              <Svg
                className="icon icon-lg bg-primary"
                src={videoCamera}
                alt="videoCamera"
              />
            </div>
            <h4>Who Can Submit?</h4>
            <p>
              Submissions are open to high schoolers, 14 to 19 years of age.
              Only secondary roles (such as talent) may be outside this range.
              Adults may provide assistance and advise in the production of submissions,
              but their help must be minimal.
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} md={6} sm={12} className="mb-2">
        <Card className="h-100" data-aos="fade-up" data-aos-delay="200">
          <Card.Body>
            <div className="icon-round mb-3 mb-md-4 bg-primary">
              <Svg
                className="icon icon-lg bg-primary"
                src={movieLane}
                alt="outgoingMail"
              />
            </div>
            <h4>What Can I Submit?</h4>
            <p>
              Accurate and complete credits are required on-screen and on-file.
              Films should be at/under 12 minutes, and screenplays should be at
              most 15-20 pages long.
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} md={6} sm={12} className="mb-2">
        <Card className="h-100" data-aos="fade-up" data-aos-delay="200">
          <Card.Body>
            <div className="icon-round mb-3 mb-md-4 bg-primary">
              <Svg
                className="icon icon-lg bg-primary"
                src={clipboardCheck}
                alt="clipboardCheck"
              />
            </div>
            <h4>Necessary Additional Information?</h4>
            <p>
              All music copyright, talent, and location releases must be submitted
              with each entry. A valid high school ID of the most recent/current
              ear you attended high school must be attached with your submission.
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default SubmissionDetails;
