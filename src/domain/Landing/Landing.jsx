import React from 'react';
import Splash from './components/Splash/Splash';
import withBaseLayout from '../../hocs/withBaseLayout';
import Explanation from './components/Explanation/Explanation';
import WorkshopsPreview from './components/WorkshopsPreview/WorkshopsPreview';
import Participate from './components/Participate';
import LastYearWinners from './components/LastYearWinners/LastYearWinners';

const Landing = () => (
  <>
    <Splash />
    <Explanation />
    <WorkshopsPreview />
    <LastYearWinners />
    <Participate />
  </>
);

export default withBaseLayout(Landing);
