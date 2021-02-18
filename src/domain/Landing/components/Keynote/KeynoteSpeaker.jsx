import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import useKeynote from '../../../../hooks/useKeynote';
import Loading from '../../../../components/Loading';

const KeynoteSpeaker = ({ year }) => {
  const { keynote, isLoaded } = useKeynote(year);

  if (!isLoaded || !year) {
    return <Loading className="ml-auto mr-auto" />;
  } if (!keynote) {
    return <KeynoteSpeaker year={year - 1} />;
  }

  return (
    <Row>
      {keynote.image && (
        <Col md={5} xl={6} className="mb-4 mb-md-0">
          <img src={keynote.image} style={{ width: '70%' }} alt="Mission" className="rounded shadow-3d" />
        </Col>
      )}
      <Col md={keynote.image ? 7 : 12} xl={keynote.image ? 6 : 12}>
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <span className="badge badge-primary-2">{year} Keynote Speaker</span>
            <div className="my-3">
              <span className="h1">{keynote.name}</span>
            </div>
            <p className="lead">{keynote.bio}</p>
            <div className="mt-3 text-small">
              {keynote.affiliation ?? keynote.contact}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

KeynoteSpeaker.propTypes = {
  year: PropTypes.number,
};

export default KeynoteSpeaker;
