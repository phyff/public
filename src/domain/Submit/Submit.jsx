import React from 'react';
import withBaseLayout from '../../hocs/withBaseLayout';
import Header from '../../components/Header';
import submitHeader from '../../data/submitHeader';
import Instructions from './components/Instructions/Instructions';
import FilmFreeway from './components/FIlmFreeway';

const Submit = () => {
  const submissionDeadline = new Date(2020, 10, 5);
  const submissionDeadlineTime = submissionDeadline.getTime();

  return (
    <>
      <Header data={submitHeader(submissionDeadlineTime)} />
      <FilmFreeway submissionDeadline={submissionDeadlineTime} />
      <Instructions submissionDeadline={submissionDeadlineTime} />
    </>
  );
};

export default withBaseLayout(Submit);
