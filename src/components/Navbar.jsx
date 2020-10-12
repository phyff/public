import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import logoWhite from '../assets/img/logo-white.png';
import logoDark from '../assets/img/logo.svg';
import navItems from '../data/navItems';

const Navbar = () => {
  const location = useLocation();
  const navSettings = {
    '/': {
      classNames: 'navbar navbar-expand-lg navbar-dark',
      overlay: true,
      isDark: true,
    },
    '/about': {
      classNames: 'navbar navbar-expand-lg navbar-dark',
      overlay: true,
      isDark: true,
    },
    '/submit': {
      classNames: 'navbar navbar-expand-lg navbar-dark',
      overlay: true,
      isDark: true,
    },
  }[location.pathname] ?? {
    classNames: 'navbar navbar-expand-lg navbar-dark',
    overlay: true,
    isDark: true,
  };

  return (
    <div className="navbar-container">
      <nav
        className={navSettings.classNames}
        data-overlay={navSettings.overlay}
        data-sticky="top"
      >
        <Container>
          <Link to="/" className="navbar-brand fade-page">
            <img alt="Phyff" style={{ height: '2em' }} src={navSettings.isDark ? logoWhite : logoDark} />
          </Link>
          <div className="collapse navbar-collapse justify-content-end">
            <div className="py-2 py-lg-0">
              <ul className="navbar-nav">
                {navItems.map((navItem) => (
                  <li className="nav-item" key={navItem.name}>
                    <Link to={navItem.to} className="nav-link">
                      {navItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;
