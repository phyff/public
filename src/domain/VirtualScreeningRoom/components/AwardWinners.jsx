import React from 'react';
import withAuth from '../../../hocs/withAuth';
import screeningRoomHeader from '../../../data/screeningRoomHeader';
import Header from '../../../components/Header';
import withBaseLayout from '../../../hocs/withBaseLayout';
import IFrame from '../../../components/IFrame';

const AwardWinners = function AwardWinners() {
  return (
    <>
      <Header data={screeningRoomHeader} />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <h2 className="h1 mb-4">Award Winners</h2>
              <hr />
              <iframe src='https://vimeo.com/showcase/10167149/embed' allowfullscreen frameborder='0' style='position:absolute;top:0;left:0;width:100%;height:100%;'></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(withBaseLayout(AwardWinners));
