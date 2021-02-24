import React from 'react';
import withAuth from '../../../hocs/withAuth';
import IFrame from '../../../components/IFrame';
import screeningRoomHeader from '../../../data/screeningRoomHeader';
import Header from '../../../components/Header';
import withBaseLayout from '../../../hocs/withBaseLayout';

const Screenplays = function Screenplays() {
  return (
    <>
      <Header data={screeningRoomHeader} />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <h2 className="h1 mb-4">Screenplays</h2>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(withBaseLayout(Screenplays));
