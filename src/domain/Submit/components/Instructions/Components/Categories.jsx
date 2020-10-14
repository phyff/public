import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import categories from '../../../../../data/categories';
import Svg from '../../../../../components/Svg';

const Categories = () => (
  <Container>
    <Row className="justify-content-center text-center mb-4">
      <Col xl={8} lg={9}>
        <h2 className="h1">Categories</h2>
        Filmmaking experts will judge and rank submitted films in four categories.
        Submit your film for a chance to win!
        <p className="lead" />
      </Col>
    </Row>
    <Row>
      {categories.map(({ title, description, icon }, index) => (
        <Col md={6} className="d-flex" data-aos="fade-up" data-aos-delay={index * 100} key={title}>
          <div className={`card card-icon-3 card-body justify-content-between text-light ${
            ['bg-primary', 'bg-primary-2', 'bg-primary-3'][index % 3]
          }`}
          >
            <div className="icon-round mb-3 mb-md-4 bg-white">
              <Svg
                className="icon bg-white"
                src={icon}
                alt={title}
              />
            </div>
            <div className="flex-grow-1">
              <div>
                <h3>{title}</h3>
                <p className="lead">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Categories;
