import React from 'react';
import {
  Col, Container, Row,
} from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Svg from '../../../../components/Svg';
import poster1 from '../../../../assets/img/content/phyff-poster-1-flip-x.jpeg';
import decoLines5 from '../../../../assets/img/decorations/deco-lines-5.svg';
import decoBlob4 from '../../../../assets/img/decorations/deco-blob-4.svg';
import decoDots1 from '../../../../assets/img/decorations/deco-dots-1.svg';
import divider from '../../../../assets/img/dividers/divider-3.svg';

const Splash = () => {
  const date = new Date(2021, 1, 27);

  return (
    <section className="bg-primary-2 text-light p-0 o-hidden">
      <img src={poster1} className="bg-image blend-mode-multiply" alt="Splash" />
      <Container className="layer-2">
        <Row className="py-6 min-vh-80 align-items-center" data-aos="fade-up">
          <Col lg={9} xl={9}>
            <h5>{moment(date).format('dddd, MMMM Do YYYY')}</h5>
            <h1 className="display-3">Philadelphia Youth Film Festival</h1>
            <p className="lead mb-4">Germantown Friends School, PA</p>
            <Link to="/attend" className="btn btn-primary btn-lg">
              Attend
            </Link>
          </Col>
        </Row>
      </Container>
      <div className="decoration-wrapper">
        <div className="decoration middle-y left scale-4" data-aos="fade-right">
          <Svg
            className="bg-primary-2"
            src={decoLines5}
            alt="deco-lines-5 decoration"
          />
        </div>
        <div className="decoration bottom right scale-2" data-jarallax-element="20">
          <Svg
            className="bg-primary"
            src={decoBlob4}
            alt="deco-blob-4 decoration"
          />
        </div>
        <div className="decoration bottom right" data-jarallax-element="-50">
          <Svg
            className="bg-white"
            src={decoDots1}
            alt="deco-dots-1 decoration"
          />
        </div>
      </div>
      <div className="divider flip-x">
        <Svg className="bg-primary-3" src={divider} alt="divider graphic" />
      </div>
    </section>
  );
};

export default Splash;
