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
              <p className="h3"><a href="https://issuu.com/phillyfilmfest/docs/_don_t_let_sleeping_dogs_lie.pdfscript">(Don't) Let Sleeping Dogs Lie by Laura Atanasov </a></p>
              {/*<IFrame*/}
              {/*  title="A Day with Payne"*/}
              {/*  src="//e.issuu.com/embed.html?backgroundColor=%23bbd6d8&backgroundColorFullscreen=%23bbd6d8&d=adaywithpaynedraft3&hideIssuuLogo=true&u=germantownfds"*/}
              {/*/>*/}
              <p className="h3"><a href="https://issuu.com/phillyfilmfest/docs/kofichroniclespilot">Kofi Chronicles by Kashvi Ramani </a></p>
              <p className="h3"><a href="https://issuu.com/phillyfilmfest/docs/bottledup">Bottled Up by Lex Jimenez </a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(withBaseLayout(Screenplays));
