import React from 'react';
import useSponsors from '../../../../../hooks/useSponsors';

const SponsorList = () => {
  const sponsors = useSponsors();

  return (
    <>
      <small className="text-uppercase mb-4">Sponsored By</small>
      <ul className="d-flex flex-wrap list-unstyled">
        {sponsors.map(({ name, photoURL }) => (
          <li className="mr-4 mb-5" data-aos="fade-up" data-aos-delay="100" key={name}>
            <img
              className="icon icon-logo icon-md"
              src={photoURL}
              alt={name}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SponsorList;
