import React from 'react';
import withBaseLayout from '../../hocs/withBaseLayout';
import Header from '../../components/Header';
import winnersHeader from '../../data/winnersHeader';

const Winners = () => (
  <>
    <Header data={winnersHeader} />
  </>
);

export default withBaseLayout(Winners);
