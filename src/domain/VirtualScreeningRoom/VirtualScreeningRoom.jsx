import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import withAuth from '../../hocs/withAuth';
import screeningRoomHeader from '../../data/screeningRoomHeader';
import Header from '../../components/Header';
import withBaseLayout from '../../hocs/withBaseLayout';
import Svg from '../../components/Svg';
import screeningRoomItems from '../../data/screeningRoomItems';
import IFrame from '../../components/IFrame';

const VirtualScreeningRoom = function VirtualScreeningRoom() {
  return (
    <>
      <Header data={screeningRoomHeader} />
      <section>
        <div className="container">
          <p className="h2">Reels</p>
          <div className="row">
            <div className="col-3 align-items-center">
              <IFrame
                title="Narrative Reel"
                src="https://player.vimeo.com/video/516743263?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                width="640"
                height="360"
                allow="autoplay; fullscreen; picture-in-picture"
                frameBorder="0"
              />
            </div>
            <div className="col-3">
              <IFrame
                title="Narrative Reel"
                src="https://player.vimeo.com/video/516741852"
                width="640"
                height="360"
                allow="autoplay; fullscreen; picture-in-picture"
                frameBorder="0"
              />
            </div>
            <div className="col-3">
              <IFrame
                title="Narrative Reel"
                src="https://player.vimeo.com/video/516740705"
                width="640"
                height="360"
                allow="autoplay; fullscreen; picture-in-picture"
                frameBorder="0"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              {screeningRoomItems.map((item) => (
                <LinkContainer to={item.href} style={{ cursor: 'pointer' }}>
                  <div className="card card-body flex-row align-items-center hover-shadow-sm">
                    <div className="icon-round icon-round-lg bg-primary mx-md-4">
                      <Svg src={item.svg} className="icon icon-lg bg-primary" alt="icon" />
                    </div>
                    <div className="pl-4">
                      <h3 className="mb-1">{item.title}</h3>
                      <span>{item.subtitle}</span>
                    </div>
                  </div>
                </LinkContainer>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(withBaseLayout(VirtualScreeningRoom));
