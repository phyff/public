import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import lines5 from '../assets/img/decorations/deco-lines-5.svg';
import lines6 from '../assets/img/decorations/deco-lines-6.svg';
import contacts from '../data/contacts';
import Svg from './Svg';
import navItems from '../data/navItems';
import useEventInfo from '../hooks/useEventInfo';

const Footer = () => {
  const { address, submissionDeadline } = useEventInfo();
  const submissionsOpen = Date.now() < submissionDeadline?.toDate().getTime();

  return (
    <footer className="pb-4 bg-primary-3 text-light layer-4" id="footer">
      <Container>
        <Row className="mb-5">
          <Col>
            <div className="card card-body border-0 o-hidden mb-0 bg-primary text-light">
              <div
                className="position-relative d-flex flex-column flex-md-row justify-content-between align-items-center"
              >
                <div className="h3 text-center mb-md-0">{submissionsOpen ? 'Submit to PHYFF Today!' : 'Attend the Festival!'}</div>
                <LinkContainer to={submissionsOpen ? '/submit' : '/attend'}>
                  <Button variant="white" size="lg">
                    {submissionsOpen ? 'Submit' : 'Attend'}
                  </Button>
                </LinkContainer>
              </div>
              <div className="decoration middle-y right scale-2 layer-0">
                <Svg src={lines5} className="bg-primary-2" />
              </div>
              <div className="decoration bottom right layer-0">
                <Svg src={lines6} className="bg-primary-2-alt" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col className="col-6 col-lg-3 col-xl-2">
            <h5>Navigate</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              {navItems.map((item) => (
                <div key={item[0].name}>
                  <span className="footer-divider" />
                  {item.map((navItem) => (
                    <li className="nav-item" key={navItem.name}>
                      <Link to={navItem.to} className="nav-link">
                        {navItem.name}
                      </Link>
                    </li>
                  ))}
                </div>
              ))}
            </ul>
          </Col>
          <Col className="col-6 col-lg">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              {contacts(address).slice(0, 3).map(({ icon, text, href }) => (
                <li className="mb-2 d-flex" key={href}>
                  <Svg src={icon} className="icon" />
                  <div className="ml-3 w-100">
                    <a href={href} className="w-100" style={{ wordWrap: 'break-word', wordBreak: 'break-all' }}>{text}</a>
                  </div>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
