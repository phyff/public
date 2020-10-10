import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';

const Svg = ({ src, className, externalClassnames }) => (
  <ReactSVG
    src={src}
    beforeInjection={(svg) => {
      if (className) {
        className.split(' ').forEach((name) => {
          svg.classList.add(name);
        });
      }
    }}
    className={externalClassnames}
  />
);

Svg.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  externalClassnames: PropTypes.string,
};

export default Svg;
