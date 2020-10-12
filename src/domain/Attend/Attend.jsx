import React from 'react';
import attendHeader from '../../data/attendHeader';
import Header from '../../components/Header';
import withBaseLayout from '../../hocs/withBaseLayout';
import EventDetails from './components/EventDetails';
import SignUp from './components/SignUp';
import Schedule from './components/Schedule/Schedule';

const Attend = () => (
  <>
    <Header data={attendHeader} />
    <SignUp />
    <EventDetails />
    <Schedule />
  </>
);

export default withBaseLayout(Attend);
