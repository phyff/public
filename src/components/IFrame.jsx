import React from 'react';
import PropTypes from 'prop-types';

const IFrame = function IFrame({ title, src }) {
  return (
    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
      <iframe
        title={title}
        src={src}
        allowFullScreen
        frameBorder="0"
        className="pb-5"
        style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        }}
      />
    </div>
  );
};

IFrame.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
};

export default IFrame;