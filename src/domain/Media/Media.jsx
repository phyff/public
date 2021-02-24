import React from 'react';
import withAuth from '../../hocs/withAuth';
import IFrame from '../../components/IFrame';

const Media = function Media() {
  return (
    <section>
      {/*<IFrame title="Reels" src="https://vimeo.com/showcase/8172488/embed" />*/}
      <IFrame title="Narrative Shorts" src="https://vimeo.com/showcase/8172488/embed" />
      <IFrame title="Experimental Films" src="https://vimeo.com/showcase/8172476/embed" />
      <IFrame title="Documentary Films" src="https://vimeo.com/showcase/8172471/embed" />
      <IFrame title="Special Awards" src="https://vimeo.com/showcase/8172466/embed" />
      <IFrame title="Local Selections" src="https://vimeo.com/showcase/8172456/embed" />
    </section>
  );
};

export default withAuth(Media);
