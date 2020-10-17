import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import divider from '../../../assets/img/dividers/divider-3.svg';
import TeamMember from './TeamMember';
import Svg from '../../../components/Svg';
import useTeam from '../../../hooks/useTeam';

const Team = () => {
  const team = useTeam();

  return (
    <section className="has-divider bg-primary-alt">
      <div className="divider flip-y">
        <Svg src={divider} alt="graphical divider" />
      </div>
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="h1">The PHYFF Team</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {team.map((member) => (
            <TeamMember member={member} key={member.name} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
