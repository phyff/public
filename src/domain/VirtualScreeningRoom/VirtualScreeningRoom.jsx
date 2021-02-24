import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import withAuth from '../../hocs/withAuth';
import screeningRoomHeader from '../../data/screeningRoomHeader';
import Header from '../../components/Header';
import withBaseLayout from '../../hocs/withBaseLayout';
import Svg from '../../components/Svg';
import screeningRoomItems from '../../data/screeningRoomItems';

const VirtualScreeningRoom = function VirtualScreeningRoom() {
  return (
    <>
      <Header data={screeningRoomHeader} />
      <section>
        <div className="container">
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
