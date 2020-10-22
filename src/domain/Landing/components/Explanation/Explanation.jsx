import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import divider from '../../../../assets/img/dividers/divider-3.svg';
import Svg from '../../../../components/Svg';
import SponsorList from './components/SponsorList';
import LandingVideo from './components/LandingVideo';

const Explanation = () => (
  <section className="bg-primary-3 text-light has-divider">
    <Container>
      <Row className="justify-content-between">
        <Col xl={4} md={5} className="mb-3 mb-md-0">
          <h2 className="h1">Join the rapidly expanding community of young filmmakers.</h2>
          <p className="lead">We seek to create an environment where our peers could have their
            work recognized without massive budgets or extensive training.
          </p>
          <Link to="/about" className="btn btn-white btn-lg mb-3">Learn More</Link>
        </Col>
        <Col xl={8} md={6}>
          <LandingVideo />
          <SponsorList />
        </Col>
      </Row>
    </Container>
    <div className="divider">
      <Svg className="bg-white" src={divider} alt="divider graphic" />
    </div>
  </section>
);

export default Explanation;
