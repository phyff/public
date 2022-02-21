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
              <p className="h3">Narrative Shorts</p>
              <IFrame title="Narrative Shorts" src="https://vimeo.com/showcase/9223449/embed" />
              <p className="h3">Experimental Films</p>
              <IFrame title="Experimental Films" src="https://vimeo.com/showcase/9223500/embed" />
              <p className="h3">Documentary Films</p>
              <IFrame title="Documentary Films" src="https://vimeo.com/showcase/9223496/embed" />
              <p className="h3">Special Awards</p>
              <IFrame title="Special Awards" src="https://vimeo.com/showcase/9298763/embed" />
              <p className="h3">Local Selections</p>
              <IFrame title="Local Selections" src="https://vimeo.com/showcase/9298767/embed" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(withBaseLayout(Films));
