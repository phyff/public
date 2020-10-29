import React from 'react';
import { Col, Card } from 'react-bootstrap';
import teamMember from '../../../types/teamMember';

const TeamMember = ({ member }) => (
  <>
    <Col md={6} lg={4} className="d-none d-md-block mb-2">
      <Card className="no-gutters h-100">
        <div
          className="card-img-top"
          style={{
            backgroundImage: `url(${member.photoURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: '300px',
          }}
        />
        <Card.Body className="d-flex flex-column">
          <h4>{member.name}</h4>
          <p className="flex-grow-1">
            <strong>{member.name}</strong> {member.biography}
          </p>
        </Card.Body>
      </Card>
    </Col>
    <Col sm={6} xs={10} className="d-md-none">
      <div className="card card-sm card-body flex-row align-items-center">
        <div
          className="avatar d-none d-sm-block avatar-lg rounded-circle"
          style={{
            backgroundImage: `url(${member.photoURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />
        <div
          className="avatar d-sm-none d-xs-block avatar-xlg rounded-circle"
          style={{
            backgroundImage: `url(${member.photoURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />
        <div className="ml-3">
          <h5 className="mb-0">{member.name}</h5>
          <span>{member.title}</span>
        </div>
      </div>
    </Col>
  </>
);

TeamMember.propTypes = {
  member: teamMember,
};

export default TeamMember;
