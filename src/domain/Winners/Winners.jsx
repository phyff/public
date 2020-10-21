import React from 'react';
import withBaseLayout from '../../hocs/withBaseLayout';
import Header from '../../components/Header';
import winnersHeader from '../../data/winnersHeader';
import WinnersViewer from './WinnersViewer/WinnersViewer';

const Winners = () => (
  <>
    <Header data={winnersHeader} />
    <WinnersViewer />
  </>
);

export default withBaseLayout(Winners);
