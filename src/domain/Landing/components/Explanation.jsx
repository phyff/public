import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import divider from '../../../assets/img/dividers/divider-3.svg';
import Svg from '../../../components/Svg';
import SponsorList from './SponsorList/SponsorList';

const Explanation = () => (
  <section className="bg-primary-3 text-light has-divider">
    <Container>
      <Row className="justify-content-between">
        <Col md={6} className="mb-3 mb-md-0">
          <h2 className="h1">Join the rapidly expanding community of young filmmakers.</h2>
          <p className="lead">We seek to create an environment where our peers could have their
            work recognized without massive budgets or extensive training.
          </p>
        </Col>
        <Col md={5}>
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
