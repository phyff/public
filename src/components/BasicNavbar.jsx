import React from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import menu from '../assets/img/icons/interface/menu.svg';
import cross from '../assets/img/icons/interface/cross.svg';
import logoMobile from '../assets/img/logo-mobile.png';
import navItems from '../data/navItems';
import Svg from './Svg';

const BasicNavbar = () => {
  const location = useLocation();
  const navSettings = {
    '/': {
      classNames: 'navbar navbar-transparent',
      overlay: true,
      isDark: true,
    },
  }[location.pathname] ?? {
    classNames: 'navbar navbar-transparent',
    overlay: true,
    isDark: true,
  };

  return (
    <Navbar
      variant={navSettings.isDark ? 'dark' : 'light'}
      expand="lg"
      className="px-5"
      data-overlay
    >
      <Navbar.Brand className="fade-page">
        <Link to="/">
          <img alt="Phyff" style={{ height: '2em' }} src={navSettings.isDark ? logoMobile : logoMobile} />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle>
        <Svg
          className="icon"
          src={menu}
          alt="menu interface icon"
        />
      </Navbar.Toggle>
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-collapse">
        <Nav className="ml-auto">
          {navItems.map(({ to, name }) => (
            <Nav.Link as={Link} to={to} key={name}>
              {name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BasicNavbar;
