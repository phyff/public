import React from 'react';
import withBaseLayout from '../../../hocs/withBaseLayout';
import withAuth from '../../../hocs/withAuth';
import Header from '../../../components/Header';
import screeningRoomHeader from '../../../data/screeningRoomHeader';
import IFrame from '../../../components/IFrame';

const Reels = function Reels() {
  return (
    <>
      <Header data={screeningRoomHeader} />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <h2 className="h1 mb-4">Reels</h2>
              <hr />
              <p className="h2">Narrative Reel</p>
              <IFrame
                title="Narrative Reel"
                src="https://player.vimeo.com/video/680168268?h=7651ebf35e"
                width="640"
                height="360"
                allow="autoplay; fullscreen; picture-in-picture"
                frameBorder="0"
              />
              <p className="h2">Experimental Reel</p>
              <IFrame
                title="Experimental Reel"
                src="https://player.vimeo.com/video/681697121?h=997049ecca&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                width="640"
                height="360"
                allow="autoplay; fullscreen; picture-in-picture"
                frameBorder="0"
              />
              <p className="h2">Documentary Reel</p>
              <IFrame
                title="Documentary Reel"
                src="https://player.vimeo.com/video/680168181?h=18bbd02471&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                width="640"
                height="360"
                allow="autoplay; fullscreen; picture-in-picture"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(withBaseLayout(Reels));
