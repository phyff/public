import React from 'react';
import Splash from './components/Splash';
import withBaseLayout from '../../hocs/withBaseLayout';
import Explanation from './components/Explanation';
import WorkshopsPreview from './components/WorkshopsPreview/WorkshopsPreview';
import Participate from './components/Participate';

const Landing = () => (
  <>
    <Splash />
    <Explanation />
    <WorkshopsPreview />
    <Participate />
  </>
);

export default withBaseLayout(Landing);
