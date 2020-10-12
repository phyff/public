import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import seq from '../../../assets/img/team/sequoyahsudler.png';
import robert from '../../../assets/img/team/robertmay.png';
import divider from '../../../assets/img/dividers/divider-3.svg';
import TeamMember from './TeamMember';
import Svg from '../../../components/Svg';

const Team = () => {
  const team = [
    {
      name: 'Sequoyah Sudler',
      image: seq,
      biography: 'is a senior and co-leads the web development team for the Philadelphia Youth Film Festival. When he isn\'t coding, you can find him boxing, listening to music, or writing the Weekly Gazette, his take on what a school newspaper should be.',
    },
    {
      name: 'Robert May',
      image: robert,
      biography: 'is a senior and a web developer for the Philadelphia Youth Film Festival. He enjoys web development and acting, although the only role he\'s ever played was the role of Darren Johnson in Darren Johnson: Full-Time Highschooler, Part-Time Ninja.',
    },
  ];

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
        <Row className="row">
          {team.map((member) => (
            <TeamMember member={member} key={member.name} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
