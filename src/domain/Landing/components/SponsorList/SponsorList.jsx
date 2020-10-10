import React from 'react';
import { Col } from 'react-bootstrap';
import trolleycar from '../../../../assets/img/sponsor_logos/trolleycar_sm.png';
import creativeoutfit from '../../../../assets/img/sponsor_logos/creativeoutfit_sm.png';
import garces from '../../../../assets/img/sponsor_logos/garces_sm.png';
import gfs from '../../../../assets/img/sponsor_logos/gfs_sm.png';
import rp from '../../../../assets/img/sponsor_logos/rpmanagement_sm.png';
import cheese from '../../../../assets/img/sponsor_logos/cheese_sm.png';

const SponsorList = () => {
  const sponsors = [
    {
      name: 'Trolley Car Café',
      image: trolleycar,
    },
    {
      name: 'Creative Outfit',
      image: creativeoutfit,
    },
    {
      name: 'Garces',
      image: garces,
    },
    {
      name: 'Germantown Friends School',
      image: gfs,
    },
    {
      name: 'RP Management',
      image: rp,
    },
    {
      name: 'Cheese',
      image: cheese,
    },
  ];

  return (
    <>
      <small className="text-uppercase mb-4">Sponsored By</small>
      <ul className="d-flex flex-wrap list-unstyled">
        {sponsors.map(({ name, image }) => (
          <li className="mr-4 mb-5" data-aos="fade-up" data-aos-delay="100">
            <img
              className="icon icon-logo icon-md"
              src={image}
              alt={name}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SponsorList;
