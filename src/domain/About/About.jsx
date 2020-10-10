import React from 'react';
import withBaseLayout from '../../hocs/withBaseLayout';
import Header from '../../components/Header';
import aboutHeader from '../../data/aboutHeader';
import Team from './components/Team';
import Mission from './components/Mission';
import Description from './components/Description';

const About = () => (
  <>
    <Header data={aboutHeader} />
    <Mission />
    <Description />
    <Team />
  </>
);

export default withBaseLayout(About);
