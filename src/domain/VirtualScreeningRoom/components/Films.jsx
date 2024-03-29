import React from 'react';
import withBaseLayout from '../../../hocs/withBaseLayout';
import withAuth from '../../../hocs/withAuth';
import Header from '../../../components/Header';
import screeningRoomHeader from '../../../data/screeningRoomHeader';
import IFrame from '../../../components/IFrame';

const Films = function Films() {
  return (
    <>
      <Header data={screeningRoomHeader} />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <h2 className="h1 mb-4">Films</h2>
              <hr />
              <p className="h3">Official Selections - Narrative Shorts</p>
              <IFrame title="Narrative Shorts" src="https://vimeo.com/showcase/8172488/embed" />
              <p className="h3">Official Selections - Experimental Films</p>
              <IFrame title="Experimental Films" src="https://vimeo.com/showcase/8172476/embed" />
              <p className="h3">Official Selections - Documentary Films</p>
              <IFrame title="Documentary Films" src="https://vimeo.com/showcase/8172471/embed" />
              <p className="h3">Official Selections - Special Awards</p>
              <IFrame title="Special Awards" src="https://vimeo.com/showcase/8172466/embed" />
              <p className="h3">Local Selections</p>
              <IFrame title="Local Selections" src="https://vimeo.com/showcase/8172456/embed" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(withBaseLayout(Films));
