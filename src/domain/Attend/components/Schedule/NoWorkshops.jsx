import React from 'react';
import saas2 from '../../../../assets/img/saas-2.svg';

const NoWorkshops = () => (
  <div>
    <div className="row d-flex flex-column align-items-center justify-content-center">
      <img src={saas2} alt="No Workshops" style={{ width: '35%' }} className="mb-5" />
      <h3 className="h3">Workshops To Be Announced</h3>
      <p className="lead text-center">
        We're working hard to schedule and confirm workshops for this year's
        event. We're always planning, so check again soon to see if there
        are any workshops that pique your interest!
      </p>
    </div>
  </div>
);

export default NoWorkshops;
