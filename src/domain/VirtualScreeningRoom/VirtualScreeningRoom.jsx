import React from 'react';
import withAuth from '../../hocs/withAuth';
import IFrame from '../../components/IFrame';
import mediaHeader from '../../data/mediaHeader';
import Header from '../../components/Header';
import withBaseLayout from '../../hocs/withBaseLayout';

const VirtualScreeningRoom = function VirtualScreeningRoom() {
  return (
    <>
      <Header data={mediaHeader} />
      <section className="p-5">
        {/*<IFrame title="Reels" src="https://vimeo.com/showcase/8172488/embed" />*/}
        <p className="h3">Narrative Shorts</p>
        <IFrame title="Narrative Shorts" src="https://vimeo.com/showcase/8172488/embed" />
        <p className="h3">Experimental Films</p>
        <IFrame title="Experimental Films" src="https://vimeo.com/showcase/8172476/embed" />
        <p className="h3">Documentary Films</p>
        <IFrame title="Documentary Films" src="https://vimeo.com/showcase/8172471/embed" />
        <p className="h3">Special Awards</p>
        <IFrame title="Special Awards" src="https://vimeo.com/showcase/8172466/embed" />
        <p className="h3">Local Selections</p>
        <IFrame title="Local Selections" src="https://vimeo.com/showcase/8172456/embed" />
      </section>
    </>
  );
};

export default withAuth(withBaseLayout(VirtualScreeningRoom));
