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
              <p className="h3">Marathon</p>
              <IFrame title = "Marathon" src="https://e.issuu.com/embed.html?d=2marathon_script&hideIssuuLogo=true&u=germantownfds"/>
              <p className="h3">A Little Bit of Trouble Making</p>
              <IFrame title = "A Little Bit of Trouble Making" src="https://e.issuu.com/embed.html?d=1alittlebitoftroublemakingscript&hideIssuuLogo=true&u=germantownfds"/>
              <p className="h3">Solicitude</p>
              <IFrame title = "Solicitude" src="https://e.issuu.com/embed.html?d=3scriptsolicitude2&hideIssuuLogo=true&u=germantownfds"/>
              <p className="h3">The Death of a Moth</p>
              <IFrame title = "The Death of a Moth" src="https://e.issuu.com/embed.html?d=4scriptthedeathofamoth21&hideIssuuLogo=true&u=germantownfds"/>
              <p className="h3">Sole Searching</p>
              <IFrame title = "Sole Searching" src="https://e.issuu.com/embed.html?d=6solesearching_script&hideIssuuLogo=true&u=germantownfds"/>
              <p className="h3">Silent Night</p>
              <IFrame title="Silent Night" src="https://e.issuu.com/embed.html?d=5silentnight_script&hideIssuuLogo=true&u=germantownfds" />
              <p className="h3">Sunflowers</p>
              <IFrame title="Sunflowers" src="https://e.issuu.com/embed.html?d=7sunflowers_script&hideIssuuLogo=true&u=germantownfds" />
 
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(withBaseLayout(Screenplays));
