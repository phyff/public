import React from 'react';
import propTypes from 'prop-types';
import Link from 'shared/components/Link';

const SubmitPage = ({ title, description, href }) => {
  return (
    <div>
      {href ? <Link to={href}>{title}</Link> : <p>{title}</p>}
    </div>
  );
};

SubmitPage.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string,
  href: propTypes.string,
};

export default SubmitPage;
