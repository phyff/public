import React from 'react';
import saas2 from '../../../../assets/img/saas-2.svg';

const NoWorkshops = () => (
  <div>
    <div className="row d-flex flex-column align-items-center justify-content-center">
      <img src={saas2} alt="No Workshops" style={{ width: '35%' }} className="mb-5" />
      <h3 className="h3">No Workshops Scheduled</h3>
      <p className="lead text-center">
        We currently don&apos;t have any workshops scheduled for this year&apos;s
        event. We&apos;re always planning, so check again soon to see if there
        are any workshops that pique your interest!
      </p>
    </div>
  </div>
);

export default NoWorkshops;
