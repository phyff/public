import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import divider from '../assets/img/dividers/divider-3.svg';
import dots from '../assets/img/decorations/deco-dots-2.svg';
import dots3 from '../assets/img/decorations/deco-dots-3.svg';
import blob from '../assets/img/decorations/deco-blob-1.svg';
import lines from '../assets/img/decorations/deco-lines-3.svg';
import Svg from './Svg';
import event1 from '../assets/img/event-1.jpg';
import headerData from '../types/headerData';

const DecorationStyleOne = ({ data }) => (
  <>
    <div className="decoration middle-y right d-none d-xl-block" data-jarallax-element="50 50">
      <Svg src={blob} className={data.decoColors?.primary ?? 'bg-primary-3'} />
    </div>
    <div className="decoration middle-y right scale-2 d-none d-xl-block" data-jarallax-element="100">
      <Svg src={dots} className={data.decoColors?.secondary ?? 'bg-primary-2'} />
    </div>
  </>
);

DecorationStyleOne.propTypes = {
  data: headerData,
};

const DecorationStyleTwo = ({ data }) => (
  <>
    <div className="decoration middle-y right scale-2 d-none d-xl-block" data-jarallax-element="50 50">
      <Svg src={lines} className={data.decoColors?.primary ?? 'bg-primary-3'} />
    </div>
    <div className="decoration middle-y left scale-3 d-none d-xl-block" data-jarallax-element="100">
      <Svg src={dots3} className={data.decoColors?.secondary ?? 'bg-primary-2'} />
    </div>
  </>
);

DecorationStyleTwo.propTypes = {
  data: headerData,
};

const Header = ({ data }) => (
  <section className={`${data.color ?? 'bg-primary-2'} header-inner o-hidden has-divider`}>
    <img src={data.image ?? event1} alt={data.title} className="bg-image blend-mode-multiply" />
    <Container className="layer-2">
      <Row className="py-6 text-center justify-content-center align-items-center layer-2 text-light">
        <Col lg={10} xl={8}>
          <h1 className="display-4">{data.title}</h1>
          <p className="lead mb-0">{data.caption}</p>
        </Col>
      </Row>
    </Container>
    <div className="decoration-wrapper">
      {[
        (<DecorationStyleOne data={data} />),
        (<DecorationStyleTwo data={data} />),
      ][(data.decorationStyle ?? 0) % 2]}
    </div>
    <div className="divider layer-1">
      <Svg src={divider} className={data.dividerColor ?? 'bg-white'} />
    </div>
  </section>
);

Header.propTypes = {
  data: headerData,
};

export default Header;
