import React from 'react';
import Footer from '../components/Footer';
import BasicNavbar from '../components/BasicNavbar';

const withBaseLayout = (WrappedComponent) => {
  const WithBaseLayout = (props) => (
    <>
      <BasicNavbar />
      <WrappedComponent {...props} />
      <Footer />
    </>
  );

  return WithBaseLayout;
};

export default withBaseLayout;
