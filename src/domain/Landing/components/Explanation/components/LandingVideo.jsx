import React from 'react';
import PropTypes from 'prop-types';
import useEventInfo from '../../../../../hooks/useEventInfo';

const LandingVideo = () => {
  const { promoVideo } = useEventInfo();

  return (
    <div className="rounded o-hidden mb-5">
      <div className="embed-container">
        <iframe
          title="Promo video"
          src={promoVideo}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default LandingVideo;
