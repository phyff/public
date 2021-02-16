import React from 'react';
import attendHeader from '../../data/attendHeader';
import Header from '../../components/Header';
import withBaseLayout from '../../hocs/withBaseLayout';
import EventDetails from './components/EventDetails';
import SignUp from './components/SignUp/SignUp';
import ScheduleContainer from './components/Schedule/ScheduleContainer';

const Attend = () => (
  <>
    <Header data={attendHeader} />
    <SignUp />
    <EventDetails />
    <ScheduleContainer />
  </>
);

export default withBaseLayout(Attend);
