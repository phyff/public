import React from 'react';
import SubmissionDetails from './Components/SubmissionDetails';
import Categories from './Components/Categories';

const Instructions = () => (
  <section className="bg-primary-alt has-divider">
    <SubmissionDetails />
    <Categories />
  </section>
);

export default Instructions;
