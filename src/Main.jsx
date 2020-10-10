import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import injectStylesheet from './helpers/injectStylesheet';

const Main = ({ children }) => {
  const [isStylesheetLoaded, setIsStylesheetLoaded] = useState(false);

  useEffect(() => {
    injectStylesheet(() => setIsStylesheetLoaded(true));
  }, []);

  if (!isStylesheetLoaded) {
    return <></>;
  }

  return (
    <>
      {children}
    </>
  );
};

Main.propTypes = { children: PropTypes.node };

export default Main;
