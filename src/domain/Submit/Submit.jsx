import React from 'react';
import withBaseLayout from '../../hocs/withBaseLayout';
import Header from '../../components/Header';
import submitHeader from '../../data/submitHeader';
import Instructions from './components/Instructions/Instructions';
import FilmFreeway from './components/FIlmFreeway';
import useEventInfo from '../../hooks/useEventInfo';

const Submit = () => {
  const { submissionDeadline } = useEventInfo();
  const submissionDeadlineTime = submissionDeadline?.toDate().getTime();

  return (
    <>
      <Header data={submitHeader(submissionDeadlineTime)} />
      <FilmFreeway submissionDeadline={submissionDeadlineTime} />
      <Instructions />
    </>
  );
};

export default withBaseLayout(Submit);
