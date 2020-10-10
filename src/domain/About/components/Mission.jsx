import React from 'react';
import thomasInterview from '../../../assets/img/content/thomas-interview.jpg';

const Mission = () => (
  <section>
    <div className="container">
      <div className="row align-items-center justify-content-around">
        <div className="col-md-5 col-xl-6 mb-4 mb-md-0">
          <img src={thomasInterview} style={{ width: '70%' }} alt="Mission" className="rounded shadow-3d" />
        </div>
        <div className="col-md-7 col-xl-6">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <span className="badge badge-primary">Our Mission</span>
              <div className="my-3">
                <span className="h1">Help teenage creatives find their voice.</span>
              </div>
              <p className="lead">
                PHYFF is a student-run event dedicated to helping teenage
                creatives find their voice in a rapidly expanding community
                of young filmmakers. We seek to create an environment where
                our peers could have their work recognized without massive
                budgets or extensive training. We have received submissions
                from Philadelphia schools and ones across the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Mission;
