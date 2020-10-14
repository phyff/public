import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import seq from '../../../assets/img/team/sequoyahsudler.png';
import robert from '../../../assets/img/team/robertmay.png';
import divider from '../../../assets/img/dividers/divider-3.svg';
import TeamMember from './TeamMember';
import Svg from '../../../components/Svg';
import team from '../../../data/team';

const Team = () => (
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
      <Row className="row">
        {team.map((member) => (
          <TeamMember member={member} key={member.name} />
        ))}
      </Row>
    </Container>
  </section>
);

export default Team;
