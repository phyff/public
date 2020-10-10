import React from 'react';
import seq from '../../../assets/img/team/sequoyahsudler.png';
import robert from '../../../assets/img/team/robertmay.png';

const Team = () => (
  <section>
    <div className="container">
      <div className="row mb-4">
        <div className="col">
          <h2 className="h1">The Team</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 d-flex align-items-center mb-5">
          <img src={seq} alt="Sequoyah Sudler" className="avatar avatar-xlg mr-3" />
          <div>
            <h5 className="mb-0">Sequoyah Sudler</h5>
            <p>Lead Full Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Team;
