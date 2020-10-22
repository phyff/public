import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col, Container, Row,
} from 'react-bootstrap';
import logo from '../assets/img/logo-mobile.png';
import blob3 from '../assets/img/decorations/deco-blob-3.svg';
import lines3 from '../assets/img/decorations/deco-lines-3.svg';
import blob9 from '../assets/img/decorations/deco-blob-9.svg';
import dots2 from '../assets/img/decorations/deco-dots-2.svg';
import Svg from './Svg';
import Loading from './Loading';

const PageLoading = () => (
  <section className="min-vh-100 bg-primary-3 text-light py-5 o-hidden">
    <Container>
      <Row className="justify-content-center mb-md-6">
        <Col className="col-auto">
          <Link to="/">
            <img alt="Phyff" style={{ height: '5em' }} src={logo} />
          </Link>
        </Col>
      </Row>
      <Row className="text-center py-6">
        <Col className="layer-2 justify-content-center">
          <Loading className="mr-auto ml-auto" />
        </Col>
      </Row>
    </Container>
    <div className="decoration-wrapper d-none d-md-block">
      <div className="decoration right middle-y scale-2" data-jarallax-element="200">
        <Svg src={blob3} className="bg-primary-2" />
      </div>
      <div className="decoration right middle-y" data-jarallax-element="100">
        <Svg src={lines3} className="bg-primary" />
      </div>
      <div className="decoration top left scale-3" data-jarallax-element="50">
        <Svg src={blob9} className="bg-white" />
      </div>
      <div className="decoration top left scale-2 scale-3 blend-mode-multiply" data-jarallax-element="150 50">
        <Svg src={dots2} className="bg-primary-2" />
      </div>
    </div>
  </section>
);

export default PageLoading;
