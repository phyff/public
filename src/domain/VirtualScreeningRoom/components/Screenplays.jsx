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
              <p className="h3">A Day With Payne by Alex Colocousis</p>
              <IFrame
                title="A Day with Payne"
                src="//e.issuu.com/embed.html?backgroundColor=%23bbd6d8&backgroundColorFullscreen=%23bbd6d8&d=adaywithpaynedraft3&hideIssuuLogo=true&u=germantownfds"
              />
              <p className="h3">A La Mode by Kaya Trefz</p>
              <IFrame
                title="A Day with Payne"
                src="//e.issuu.com/embed.html?backgroundColor=%23bbd6d8&backgroundColorFullscreen=%23bbd6d8&d=alamodesixthdraft&hideIssuuLogo=true&u=germantownfds"
              />
              <p className="h3">Boy on the Moon by Jake Lubin</p>
              <IFrame
                title="A Day with Payne"
                src="//e.issuu.com/embed.html?backgroundColor=%23bbd6d8&backgroundColorFullscreen=%23bbd6d8&d=boyonthemoon&hideIssuuLogo=true&u=germantownfds"
              />
              <p className="h3">Don’t Come Near Me by Christian Lee</p>
              <IFrame
                title="Don’t Come Near Me"
                src="//e.issuu.com/embed.html?backgroundColor=%23bbd6d8&backgroundColorFullscreen=%23bbd6d8&d=dontcomenearme&hideIssuuLogo=true&u=germantownfds"
              />
              <p className="h3">Driving Test by Graham Kohn</p>
              <IFrame
                title="Driving Test"
                src="//e.issuu.com/embed.html?backgroundColor=%23bbd6d8&backgroundColorFullscreen=%23bbd6d8&d=drivingtest&hideIssuuLogo=true&u=germantownfds"
              />
              <p className="h3">Outgrowing My Shoes by Kaya Trefz</p>
              <IFrame
                title="Outgrowing My Shoes"
                src="//e.issuu.com/embed.html?backgroundColor=%23bbd6d8&backgroundColorFullscreen=%23bbd6d8&d=outgrowingmyshoes&hideIssuuLogo=true&u=germantownfds"
              />
              <p className="h3">Ready, Set, Go! by Grace Raufer</p>
              <IFrame
                title="Ready, Set, Go!"
                src="//e.issuu.com/embed.html?backgroundColor=%23bbd6d8&backgroundColorFullscreen=%23bbd6d8&d=readysetgofinal&hideIssuuLogo=true&u=germantownfds"
              />
              <p className="h3">Sandwich Heist by Brody Bundis</p>
              <IFrame
                title="Sandwich Heist"
                src="//e.issuu.com/embed.html?backgroundColor=%23bbd6d8&backgroundColorFullscreen=%23bbd6d8&d=sandwichheist2&hideIssuuLogo=true&u=germantownfds"
              />
              <p className="h3">School Of Theft by Robert Madden</p>
              <IFrame
                title="School Of Theft"
                src="//e.issuu.com/embed.html?backgroundColor=%23bbd6d8&backgroundColorFullscreen=%23bbd6d8&d=schooloftheftofficialscreenplay&hideIssuuLogo=true&u=germantownfds"
              />
              <p className="h3">The Interview by Sean Park</p>
              <IFrame
                title="The Interview"
                src="//e.issuu.com/embed.html?backgroundColor=%23bbd6d8&backgroundColorFullscreen=%23bbd6d8&d=scripttheinterview3&hideIssuuLogo=true&u=germantownfds"
              />
              <p className="h3">The Bonus Baby by Feeney Lan</p>
              <IFrame
                title="The Bonus Baby"
                src="//e.issuu.com/embed.html?backgroundColor=%23bbd6d8&backgroundColorFullscreen=%23bbd6d8&d=thebonusbaby&hideIssuuLogo=true&u=germantownfds"
              />
              <p className="h3">The Roommate by Jake Lubin</p>
              <IFrame
                title="The Roommate"
                src="//e.issuu.com/embed.html?backgroundColor=%23bbd6d8&backgroundColorFullscreen=%23bbd6d8&d=theroommatev2&hideIssuuLogo=true&u=germantownfds"
              />
              <p className="h3">We All Make The Little Flowers Grow by Kaya L. Trefz</p>
              <IFrame
                title="We All Make The Little Flowers Grow"
                src="//e.issuu.com/embed.html?backgroundColor=%23bbd6d8&backgroundColorFullscreen=%23bbd6d8&d=weallmakethelittleflowersgrow&hideIssuuLogo=true&u=germantownfds"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(withBaseLayout(Screenplays));
