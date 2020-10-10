import React from 'react';
import { Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TeamMember = ({ member }) => (
  <Col md={3} lg={4}>
    <Card className="no-gutters hover-shadow-3d">
      <Card.Img variant="top" src={member.image} alt={member.name} />
      <Card.Body className="d-flex flex-column">
        <h4>{member.name}</h4>
        <p className="flex-grow-1">
          <strong>{member.name}</strong> {member.biography}
        </p>
      </Card.Body>
    </Card>
  </Col>
);

TeamMember.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    biography: PropTypes.string,
  }),
};

export default TeamMember;
