import React, { useState } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import menu from '../assets/img/icons/interface/menu.svg';
import logoMobile from '../assets/img/logo-mobile.png';
import navItems from '../data/navItems';
import Svg from './Svg';
import useScrollPosition from '../hooks/useScrollPosition';

const BasicNavbar = () => {
  const scrollPosition = useScrollPosition({ delay: 50 });
  const location = useLocation();

  const navSettings = {
    '/': {
      classNames: 'navbar-transparent',
      overlay: true,
      isDark: true,
    },
  }[location.pathname] ?? {
    classNames: 'navbar-transparent',
    overlay: true,
    isDark: true,
  };

  const generateNavItem = ({ to, name }) => (
    <Nav.Link as={Link} to={to} key={name}>
      {name}
    </Nav.Link>
  );

  const generateNavButton = ({ to, name }, index) => (
    <Nav.Link as={Link} to={to} key={name}>
      <Button className={`btn-${['primary', 'primary-2'][index % 2]}`}>
        {name}
      </Button>
    </Nav.Link>
  );

  return (
    <Navbar
      variant={navSettings.isDark ? 'dark' : 'light'}
      fixed="top"
      expand="lg"
      className={`px-5 ${scrollPosition > 0 ? 'navbar-background' : 'navbar-transparent'}`}
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
        <Nav>
          {navItems[0].map(generateNavButton)}
        </Nav>
        <Nav className="ml-auto">
          {navItems[1].map(generateNavItem)}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BasicNavbar;
