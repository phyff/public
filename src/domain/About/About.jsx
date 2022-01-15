import React from 'react';
import withBaseLayout from '../../hocs/withBaseLayout';
import Header from '../../components/Header';
import aboutHeader from '../../data/aboutHeader';
import Team from './components/Team';
import Mission from './components/Mission';
import Description from './components/Description';
import FoundersNote from './components/FoundersNote';

const About = () => (
  <>
    <Header data={aboutHeader} />
    <Mission />
    <Description />
    <FoundersNote />
    <Team />
  </>
);

export default withBaseLayout(About);
