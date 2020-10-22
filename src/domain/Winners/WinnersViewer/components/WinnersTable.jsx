import React from 'react';
import PropTypes from 'prop-types';
import { Col, ListGroup, Row } from 'react-bootstrap';
import Loading from '../../../../components/Loading';
import WinnerRow from './WinnerRow';
import winnerType from '../../../../types/winner';

const WinnersTable = ({ winners }) => (
  <div className="card card-body layer-2">
    {winners.length > 0
      ? (
        <>
          <Row className="no-gutters d-none d-md-flex bg-white py-3">
            <Col md={4}>
              <span className="h6 mb-0 text-muted">Title</span>
            </Col>
            <Col md className="ml-auto text-right">
              <span className="h6 mb-0 text-muted">Filmmaker(s)</span>
            </Col>
          </Row>
          <ListGroup
            variant="flush"
          >
            {winners
              .sort((a, b) => a.place - b.place)
              .map((winner, index) => (
                <WinnerRow
                  winner={winner}
                  delay={index * 50}
                  key={winner.title}
                />
              ))}
          </ListGroup>
        </>
      )
      : (
        <div className="min-vh-70 h-100 w-100 p-0 m-0 border-0 card card-body justify-content-center">
          <Loading className="ml-auto mr-auto" />
        </div>
      )}
  </div>
);

WinnersTable.propTypes = {
  winners: PropTypes.arrayOf(winnerType),
};

export default WinnersTable;
