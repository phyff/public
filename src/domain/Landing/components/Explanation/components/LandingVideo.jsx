import React from 'react';
import useEventInfo from '../../../../../hooks/useEventInfo';
import Loading from '../../../../../components/Loading';

const LandingVideo = () => {
  const { promoVideo } = useEventInfo();

  return (
    <div className="rounded o-hidden mb-5">
      <div className="embed-container">
        {promoVideo ? (
          <iframe
            title="Promo video"
            src={promoVideo}
            frameBorder="0"
            allowFullScreen
          />
        ) : (
          <div className="min-vh-70 h-100 w-100 p-0 m-0 border-0 card card-body justify-content-center">
            <Loading className="ml-auto mr-auto" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingVideo;
