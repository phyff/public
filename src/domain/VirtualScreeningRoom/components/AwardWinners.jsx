import React from 'react';
import withAuth from '../../../hocs/withAuth';
import screeningRoomHeader from '../../../data/screeningRoomHeader';
import Header from '../../../components/Header';
import withBaseLayout from '../../../hocs/withBaseLayout';

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
              {/*<IFrame title="Award Winners" src="https://vimeo.com/showcase/8172488/embed" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(withBaseLayout(AwardWinners));
